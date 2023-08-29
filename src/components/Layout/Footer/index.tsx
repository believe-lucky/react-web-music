import React, { useState, useRef, useEffect } from "react";
import { useRequest } from "ahooks";
import { getSong, getSongLyric } from "@/api/playList";
import { ConfigProvider, Slider } from "antd";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  HeartOutlined,
  DownloadOutlined,
  MessageOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import "./index.less";
import baseMusicUrl from "/src/assets/images/logo.png";
import useAudioControl from "@/hooks/useAudioControl";
import PlayerDetail from "@/pages/player";
import { useSelector } from "react-redux";
import onVolumeSvg from "@/assets/images/yinliang.png";
import offVolumeSvg from "@/assets/images/guanbiyinliang.png";
// const baseMusicUrl =
//   "https://p1.music.126.net/hsIpIgKpGlUlaHPF-qIKcQ==/109951168735465189.jpg";
interface albumParams {
  id: string;
}
const getList = function (params: albumParams) {
  // const params: albumParams = {
  //   id: "1950343972",
  //   // id: "1877017100",
  // };
  return getSong(params);
};
const getLyricList = function (params: albumParams) {
  // const params: albumParams = {
  //   id: "1950343972",
  // };
  return getSongLyric(params);
};
function Footer({ songDetail: { id = 2031881406 } }) {
  const [audioSrc, setAudioSrc] = useState();
  const { loading, run } = useRequest(getList, {
    onSuccess: (res: any, params) => {
      if (res.code === 200) {
        setAudioSrc(res.data[0].url);
      }
    },
    onError: (error) => message.error(error.message),
    manual: true,
  });
  const [klyRic, setKlyRic] = useState("");
  const { loading1, run: runLyric } = useRequest(getLyricList, {
    onSuccess: (res, params) => {
      if (res.code === 200) {
        const lyric = res.lrc.lyric;
        let lyricList = [];
        lyric
          .split(/[\n]/) // 截取中括号
          .forEach((item) => {
            const temp: Array<string> = item.split(/\[(.+?)\]/);
            lyricList.push({
              time: temp[1], // 时间
              lyc: temp[2], //歌词内容
            });
          });
        lyricList = lyricList.filter((v) => v["lyc"]); // 去除无歌词内容
        setKlyRic(lyricList);
      }
    },
    onError: (error) => message.error(error.message),
    manual: true,
  });
  // 推荐歌单的id
  const getId = useSelector((state) => state.emitSongId.id);

  useEffect(() => {
    if (id) {
      console.log(id, "id");
      run({ id });
      runLyric({ id });
      setTimeout(() => {
        // audioControl.play();
      }, 0);
    }
  }, [id]);
  // audio 相关
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioControl = useAudioControl(audioRef);
  // 访问属性
  const isPlay = audioControl.isPlay;
  const duration = audioControl.formattedDuration;
  const currentTime = audioControl.formattedCurrentTime;
  const isMuted = audioControl.isMuted;

  const handleSliderChange = (value: number) => {
    audioControl.seekTo(value);
  };
  // setAudioVolume
  const setAudioVolume = (v: number) => {
    audioControl.setAudioVolume(v);
  };
  const timeStringToSeconds = (timeString: string) => {
    const [minutes, seconds] = timeString.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;
    return +totalSeconds;
  };
  // 歌词页面
  const [isPlayerDetailOpen, setIsPlayerDetailOpen] = useState(false);
  const togglePlayerDetail = () => {
    setIsPlayerDetailOpen(!isPlayerDetailOpen);
  };
  return (
    <>
      <div className="card">
        <div className="card-list">
          <audio
            ref={audioRef}
            src={audioSrc}
            controls
            style={{ display: "none" }}
          ></audio>
          <img
            className="img"
            onClick={togglePlayerDetail}
            src={baseMusicUrl}
            alt=""
          />
          <div className="card-list-content">
            <div className="card-list-content-title">
              <div> 云音乐 </div>
              <div>
                {currentTime} / {duration}
              </div>
            </div>
            <div className="card-list-content-schedule">
              <ConfigProvider>
                <Slider
                  className="custom-slider"
                  defaultValue={0}
                  value={timeStringToSeconds(currentTime)}
                  max={timeStringToSeconds(duration)}
                  onChange={handleSliderChange}
                  tooltip={{ open: false }}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div className="card-play">
          <StepBackwardOutlined />
          <div>
            {!isPlay ? (
              <PlayCircleOutlined
                onClick={audioControl.play}
                style={{ fontSize: "36px" }}
              />
            ) : (
              <PauseCircleOutlined
                className="card-play-start"
                onClick={audioControl.pause}
                style={{ fontSize: "36px" }}
              />
            )}
          </div>
          <StepForwardOutlined />
        </div>
        <div className="card-setting">
          <HeartOutlined />
          <DownloadOutlined />
          <MessageOutlined />
          <AlignRightOutlined />
          <div style={{ display: "flex", alignItems: "center" }}>
            {isMuted ? (
              <img
                style={{ width: "20px" }}
                src={offVolumeSvg}
                onClick={audioControl.unmute}
                alt=""
              />
            ) : (
              <img
                style={{ width: "26px" }}
                src={onVolumeSvg}
                onClick={audioControl.mute}
                alt=""
              />
            )}
            <Slider
              style={{ width: 60, marginLeft: 12 }}
              defaultValue={30}
              className="custom-slider"
              onChange={setAudioVolume}
            />
          </div>
        </div>
        <PlayerDetail
          isOpen={isPlayerDetailOpen}
          toggleDrawer={togglePlayerDetail}
          playKlyRic={klyRic}
          isPlay={isPlay}
          activeTime={currentTime}
        />
      </div>
    </>
  );
}

export default Footer;
