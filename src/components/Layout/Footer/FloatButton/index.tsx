import React from "react";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const MusicIcon: React.FC = () => (
  <>
    <FloatButton
      shape="circle"
      type="primary"
      style={{ right: 30, bottom: 300 }}
      onClick={() => {}}
      icon={<CustomerServiceOutlined />}
    />
  </>
);

export default MusicIcon;
