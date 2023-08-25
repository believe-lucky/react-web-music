import {
  GithubFilled,
  ZhihuCircleFilled,
  CustomerServiceOutlined,
  CommentOutlined
} from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";
export default function MusicIcon({ isShowAi }) {
  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 30, bottom: 380 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton
          href="https://www.zhihu.com/"
          target="_blank"
          icon={<ZhihuCircleFilled />}
        />
        <FloatButton
          href="https://github.com/believe-lucky/react-web-music"
          target="_blank"
          icon={<GithubFilled />}
        />
        <FloatButton
          tooltip="智能AI助理"
          icon={<CommentOutlined />}
          onClick={() => isShowAi(true)}
        />
      </FloatButton.Group>
    </>
  )
}
