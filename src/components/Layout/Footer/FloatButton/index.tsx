import {
  GithubFilled,
  ZhihuCircleFilled,
  CustomerServiceOutlined,
  SendOutlined,
} from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";
// import juejin from "@/assets/images/juejin.png";
// const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
//   <Icon component={HeartSvg} {...props} />
// );
const MusicIcon: React.FC = () => (
  <>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ right: 30, bottom: 380 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton
        href="https://juejin.cn/"
        icon={<SendOutlined />}
        target="_blank"
      />
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
    </FloatButton.Group>
  </>
);

export default MusicIcon;
