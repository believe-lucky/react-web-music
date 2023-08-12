import { Layout } from "antd";
import "./layout.less";

const { Header, Sider, Content, Footer } = Layout;

import HeaderContainer from "./Header";
import FooterContainer from "./Footer";
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
  position: "fixed",
  minWidth: "940px",
  width: "100%",
  height: "80px",
  bottom: "0",
  zIndex: "1000",
  background: "#333",
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
      <Footer style={footerStyle}>
        <FooterContainer></FooterContainer>
      </Footer>
    </Layout>
  );
}
