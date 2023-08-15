import React, { useState } from "react";
import { useRequest } from "ahooks";
import { getSong } from "@/api/playList";
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
interface albumParams {
  id: string;
  // type: number
}
const getList = function (params: albumParams) {
  return getSong(params);
};
function Footer() {
  const [isPlay, setIsPlay] = useState(false);
  const { loading } = useRequest(getList, {
    debounceWait: 500,
    onSuccess: (res, params) => {
      if (res.code === 200) {
        console.log(res.album);
      }
    },
    onError: (error) => message.error(error.message),
  });
  return (
    <>
      <div className="card">
        <div className="card-list">
          <audio
            // src="http://m701.music.126.net/20230815101852/ad9888d9c6612d2c37df6c93fa7fa779/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/29334102022/31f0/4e90/c3fc/f3e43636a2321eea8254fb8f4a90eac9.m4a"
            src="http://m801.music.126.net/20230815102025/a4d55b372b7ec36bfca81ad8b963589e/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/16672037997/5f9f/9151/5eae/8fb7ee0d4ddb23f524dc890df45f10e3.m4a"
            controls
            style={{ display: "block" }}
          ></audio>
          <img
            className="img"
            src="https://p1.music.126.net/hsIpIgKpGlUlaHPF-qIKcQ==/109951168735465189.jpg"
            alt=""
          />
          <div className="card-list-content">
            <div className="card-list-content-title">
              <div> 罗刹海市 刀郎</div>
              <div>time</div>
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
              }}
              style={{ fontSize: "36px" }}
            />
          ) : (
            <PlayCircleOutlined
              onClick={() => {
                setIsPlay(true);
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
