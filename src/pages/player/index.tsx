import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import styles from "./style.module.less";
import player from "@/assets/images/player.png";
import plaything from "@/assets/images/player.gif";
const PlayerDetail: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={toggleDrawer}>
          {!open ? "Open" : "Close"}
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={"bottom"}
        onClose={toggleDrawer}
        style={{ background: "pink" }}
        open={open}
        width={"100%"}
        height={"100%"}
      >
        <div className={styles.card}>
          <div className={styles.left}>
            <img className={styles.img} src={player} alt="" />
            <br />
            <img className={styles.img} src={plaything} alt="" />
          </div>
          <div></div>
        </div>
      </Drawer>
    </>
  );
};

export default PlayerDetail;
