import { Layout } from "antd";
import "./layout.less";

const { Header, Sider, Content, Footer } = Layout;

import HeaderContainer from "./Header";
import FooterContainer from "./Footer";
import { useSelector } from 'react-redux';
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
const contentStyle: React.CSSProperties = {
  // textAlign: "center",
  // minHeight: 120,
  // lineHeight: "120px",
  // color: "#fff",
  backgroundColor: "#fff",
  padding: '20px 0 20px 30px',
  height: 'calc(100vh - 140px)',
  overflowY: 'auto',
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  // textAlign: "center",
  color: "#fff",
  position: "fixed",
  minWidth: "940px",
  width: "100%",
  // height: "80px",
  bottom: 0,
  zIndex: 9999,
  background: "rgba(0,0,0,.45)",
  padding: "10px",
};
export default function LayoutContainer() {
  // 获取主题色
  const theme = useSelector(state => state.themeStoreSlice.theme) || localStorage.getItem('theme')
  return (
    <Layout className="layoutBox">
      <Header id="headerContainer" style={{ background: theme, color: theme == '#fff' ? '#333' : '#fff' }}>
        <HeaderContainer />
      </Header>
      <Layout hasSider className="layoutContent">
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>
          {/* 路由出口 */}
          <Outlet />
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <FooterContainer></FooterContainer>
      </Footer>
    </Layout>
  );
}
