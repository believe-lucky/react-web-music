import React from "react";
import { useRequest } from "ahooks";
import { getAlbum } from "@/api/playList";
import { Progress } from "antd";
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
  return getAlbum(params);
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
              <Progress
                showInfo={false}
                percent={99.9}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
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
