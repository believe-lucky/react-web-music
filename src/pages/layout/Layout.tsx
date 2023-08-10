import { Layout } from "antd";
import "./layout.less";

const { Header, Sider, Content, Footer } = Layout;

import HeaderContainer from "./components/Header";
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
export default function LayoutContainer() {
  return (
    <Layout className="layoutBox">
      <Header id="headerContainer">
        <HeaderContainer />
      </Header>
      <Layout hasSider className="layoutContent">
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}
