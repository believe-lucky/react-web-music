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
interface albumParams {
  id: string;
}
const getList = function () {
  const params: albumParams = {
    id: "1950343972",
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
  const audioRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [map3Url, setMap3Url] = useState();
  const { loading } = useRequest(getList, {
    onSuccess: (res, params) => {
      console.log(res.data[0], params);
      if (res.code === 200) {
        setMap3Url(res.data[0].url);
        console.log(map3Url, "url");
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
  const handleAudioPlayer = (value: string) => {
    if (value === "play") {
      audioRef.current.play();
      console.log(audioRef.current.currentTime, 889898);
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-list">
          <audio
            ref={audioRef}
            src={map3Url}
            controls
            style={{ display: "none" }}
          ></audio>
          <img className="img" src={baseMusicUrl} alt="" />
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
                /{/* {audioRef?.current?.duration || "0:00"} */}
                {(Math.floor(audioRef.current?.duration / 60) + "").padStart(
                  2,
                  "0"
                ) +
                  ":" +
                  (Math.floor(audioRef.current?.duration % 60) + "").padStart(
                    2,
                    "0"
                  )}
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
          {isPlay ? (
            <PauseCircleOutlined
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
      </div>
    </>
  );
}

export default Footer;
