import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";
const MusicIcon: React.FC = () => (
  <>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ right: 30, bottom: 380 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
  </>
);

export default MusicIcon;
