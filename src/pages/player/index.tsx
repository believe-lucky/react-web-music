import React from "react";
import { Button, Drawer, Space } from "antd";
import styles from "./style.module.less";
import player from "@/assets/images/player.png";
import plaything from "@/assets/images/player.gif";
interface PlayerDetailProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  playKlyRic: array;
  isPlay: boolean;
}
const PlayerDetail: React.FC<PlayerDetailProps> = ({
  isOpen,
  toggleDrawer,
  playKlyRic,
  isPlay,
}) => {
  console.log(playKlyRic, "歌词");

  return (
    <>
      <Drawer
        title="歌词"
        placement={"bottom"}
        onClose={toggleDrawer}
        style={{
          background: "rgba(0,0,0,0.8)",
        }}
        open={isOpen}
        width={"100%"}
        height={"100%"}
      >
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.header}></div>
            {isPlay ? (
              <img className={styles.img} src={plaything} alt="" />
            ) : (
              <img className={styles.img} src={player} alt="" />
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              {Array.isArray(playKlyRic)
                ? playKlyRic.map((v: any, index: number) => {
                    return (
                      <div className={styles.lyc} key={v.time}>
                        {v.lyc}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default PlayerDetail;
