import React from "react";
import { Button, Drawer, Space } from "antd";
import styles from "./style.module.less";
import player from "@/assets/images/player.png";
import plaything from "@/assets/images/player.gif";
interface PlayerDetailProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}
const PlayerDetail: React.FC<PlayerDetailProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  return (
    <>
      <Space>
        <Button type="primary" onClick={toggleDrawer}>
          {!isOpen ? "Open" : "Close"}
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={"bottom"}
        onClose={toggleDrawer}
        style={{ background: "pink" }}
        open={isOpen}
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
