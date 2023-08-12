import React from "react";
import { useRequest } from "ahooks";
import { getAlbum } from "@/api/playList";
import {
  StepBackwardOutlined,
  PauseCircleFilled,
  PlayCircleFilled,
  StepForwardOutlined,
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
  const { loading, run } = useRequest(getList, {
    manual: true,
    debounceWait: 500,
    onSuccess: (res, params) => {
      if (res.code == 200) {
        console.log(res.data);
      }
    },
    onError: (error) => message.error(error.message),
  });
  return (
    <>
      <div className="card">
        <div className="card-list">
          <div>
            图片
            <img src="" alt="" />
          </div>
          <div>
            <div>歌名</div>
            <div>进度条</div>
          </div>
        </div>
        <div className="card-play">
          <div>
            <StepBackwardOutlined />
            <PlayCircleFilled />
            <PauseCircleFilled />
            <StepForwardOutlined />
          </div>
        </div>
        <div className="card-setting">设置</div>
      </div>
    </>
  );
}

export default Footer;
