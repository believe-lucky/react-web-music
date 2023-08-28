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
  SoundOutlined,
} from "@ant-design/icons";
import "./index.less";
import baseMusicUrl from "/src/assets/images/logo.png";
import useAudioControl from "@/hooks/useAudioControl";
import PlayerDetail from "@/pages/player";
import { useSelector } from "react-redux";
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
function Footer({ songDetail: { id = "1950343972" } }) {
  console.log({ songDetail: { id } }, 9999);
  const [audioSrc, setAudioSrc] = useState();
  const { loading, run } = useRequest(getList, {
    onSuccess: (res: any, params) => {
      console.log(res.data[0], params);
      if (res.code === 200) {
        setAudioSrc(res.data[0].url);
        console.log(audioSrc, "url");
      }
    },
    onError: (error) => message.error(error.message),
    manual: true,
  });
  const { loading1, run: runLyric } = useRequest(getLyricList, {
    onSuccess: (res, params) => {
      console.log(res.data[0], params);
      if (res.code === 200) {
        console.log(res.klyric, "url");
      }
    },
    onError: (error) => message.error(error.message),
    manual: true,
  });
  // 推荐歌单的id
  const getId = useSelector((state) => state.emitSongId.id);

  useEffect(() => {
    if (id) {
      run({ id });
      runLyric({ id });
      setTimeout(() => {
        // audioControl.play;
      }, 200);
    }
  }, [id]);
  // audio 相关
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioControl = useAudioControl(audioRef);
  // 访问属性
  const isPlay = audioControl.isPlay;
  const duration = audioControl.formattedDuration;
  const currentTime = audioControl.formattedCurrentTime;
  const handleMuted = (value: boolean) => {
    if (audioRef.current) {
      audioRef.current.muted = value;
    }
  };
  // 歌词页面
  const [isPlayerDetailOpen, setIsPlayerDetailOpen] = useState(false);
  const togglePlayerDetail = () => {
    setIsPlayerDetailOpen(!isPlayerDetailOpen);
  };
  // setAudioVolume
  const setAudioVolume = (v) => {
    audioControl.setAudioVolume(v);
  };
  return (
    <>
      <div className="card">
        <div className="card-list">
          <audio
            ref={audioRef}
            src={audioSrc}
            controls
            style={{ display: "block" }}
          ></audio>
          <img
            className="img"
            onClick={togglePlayerDetail}
            src={baseMusicUrl}
            alt=""
          />
          <div className="card-list-content">
            <div className="card-list-content-title">
              <div> 罗刹海市 刀郎</div>
              <div>
                {currentTime} / {duration}
              </div>
            </div>
            <div className="card-list-content-schedule">
              <ConfigProvider>
                <Slider
                  className="custom-slider"
                  defaultValue={30}
                  tooltip={{ open: false }}
                  // trackStyle={{ backgroundColor: "#ec4141" }}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div className="card-play">
          <StepBackwardOutlined />
          <div>
            {isPlay ? (
              <PauseCircleOutlined
                className="card-play-start"
                onClick={audioControl.pause}
                style={{ fontSize: "36px" }}
              />
            ) : (
              <PlayCircleOutlined
                onClick={audioControl.play}
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
          <div style={{ display: "flex" }}>
            <SoundOutlined onClick={() => handleMuted(false)} />
            <div onClick={() => handleMuted(true)}>静音</div>
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
        />
      </div>
    </>
  );
}

export default Footer;
