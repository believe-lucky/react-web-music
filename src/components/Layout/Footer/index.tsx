import React from "react";
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
            src="http://m801.music.126.net/20230814185105/7d83deb4da535100c0fdd7beefc1c6f2/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/16672040292/1f33/8dcd/e4ab/fc3c42b47e36e7b5510921aa32d67a78.mp3"
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
          {/* <PlayCircleOutlined style={{ fontSize: "36px" }} /> */}
          <PauseCircleOutlined style={{ fontSize: "36px" }} />
          <StepForwardOutlined />
        </div>
        <div className="card-setting">
          <HeartOutlined />
          <DownloadOutlined />
          <MessageOutlined />
          <AlignRightOutlined />
          <SoundOutlined />
        </div>
      </div>
    </>
  );
}

export default Footer;
