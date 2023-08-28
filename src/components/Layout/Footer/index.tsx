import React, { useState, useRef } from "react";
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
// const baseMusicUrl =
//   "https://p1.music.126.net/hsIpIgKpGlUlaHPF-qIKcQ==/109951168735465189.jpg";
interface albumParams {
  id: string;
}
const getList = function () {
  const params: albumParams = {
    id: "1950343972",
    // id: "1877017100",
  };
  return getSong(params);
};
const getLyricList = function () {
  const params: albumParams = {
    id: "1950343972",
  };
  return getSongLyric(params);
};
function Footer() {
  const [isPlay, setIsPlay] = useState(false);
  const [audioSrc, setAudioSrc] = useState();
  const { loading } = useRequest(getList, {
    onSuccess: (res: any, params) => {
      console.log(res.data[0], params);
      if (res.code === 200) {
        setAudioSrc(res.data[0].url);
        console.log(audioSrc, "url");
      }
    },
    onError: (error) => message.error(error.message),
  });
  const { loading1 } = useRequest(getLyricList, {
    onSuccess: (res, params) => {
      console.log(res.data[0], params);
      if (res.code === 200) {
        console.log(res.klyric, "url");
      }
    },
    onError: (error) => message.error(error.message),
  });

  // audio 相关
  const audioRef = useRef<HTMLAudioElement>({});
  const audioControl = useAudioControl(audioRef);
  const handleAudioPlayer = (value: string) => {
    if (value === "play") {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  audioControl;
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
                {(Math.floor(audioRef.current?.currentTime / 60) + "").padStart(
                  2,
                  "0"
                ) +
                  ":" +
                  (
                    Math.floor(audioRef.current?.currentTime % 60) + ""
                  ).padStart(2, "0")}
                /
                {(Math.floor(audioRef.current?.duration / 60) + "").padStart(
                  2,
                  "0"
                ) +
                  ":" +
                  (Math.floor(audioRef.current?.duration % 60) + "").padStart(
                    2,
                    "0"
                  )}
                {/* {audioControl.state.duration} / {audioControl.state.currentTime} */}
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
                onClick={() => {
                  setIsPlay(false);
                  handleAudioPlayer("pause");
                }}
                style={{ fontSize: "36px" }}
              />
            ) : (
              <PlayCircleOutlined
                onClick={() => {
                  setIsPlay(true);
                  handleAudioPlayer("play");
                }}
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
            <SoundOutlined />
            <Slider
              style={{ width: 60, marginLeft: 12 }}
              className="custom-slider"
              defaultValue={20}
              tooltip={{ open: false }}
              // trackStyle={{ backgroundColor: "#ec4141" }}
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
