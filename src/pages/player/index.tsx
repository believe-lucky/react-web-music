import React, { useState, useEffect, useRef } from "react";
import { Drawer } from "antd";
import styles from "./style.module.less";
import player from "@/assets/images/player.png";
import plaything from "@/assets/images/player.gif";
import { log } from "console";

interface PlayerDetailProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  playKlyRic: Array<any>;
  isPlay: boolean;
  activeTime: string;
}

const PlayerDetail: React.FC<PlayerDetailProps> = ({
  isOpen,
  toggleDrawer,
  playKlyRic,
  isPlay,
  activeTime,
}) => {
  const HIGHLIGHT_LYRIC_TOP = 160;
  const LYRIC_LINE_HEIGHT = 46;
  const lyricRef = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState(0);
  useEffect(() => {
    window.requestAnimationFrame(() => {
      const lineIndex = playKlyRic.findIndex((v, index) => {
        const prevTime = timeStringToSeconds(playKlyRic[index]?.time);
        const nextTime = timeStringToSeconds(playKlyRic[index + 1]?.time) - 1;
        const currentTime = timeStringToSeconds(activeTime);
        if (prevTime <= currentTime && nextTime >= currentTime) {
          return true;
        }
        return false; // 返回 false 以继续查找下一个元素
      });
      if (lineIndex > -1) {
        const scrollHeight =
          LYRIC_LINE_HEIGHT * lineIndex - HIGHLIGHT_LYRIC_TOP;
        lyricRef.current?.scrollTo({
          top: scrollHeight < 0 ? 0 : scrollHeight,
          behavior: "smooth",
        });
        setLine(lineIndex);
      }
    });
  }, [activeTime, playKlyRic]);

  const timeStringToSeconds = (timeString: string) => {
    const [minutes, seconds] = timeString
      ? timeString.split(":").map(Number)
      : [0, 0];
    const totalSeconds = Math.floor(minutes * 60 + seconds);
    return +totalSeconds;
  };

  // const highlightLyrics = (currentTime, startTime, endTime) => {
  //   const currentSeconds = timeStringToSeconds(currentTime);
  //   const startSeconds = timeStringToSeconds(startTime);
  //   const endSeconds = timeStringToSeconds(endTime);
  //   return currentSeconds >= startSeconds && currentSeconds < endSeconds;
  // };

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
            <div
              className={styles.content}
              ref={(ref) => (lyricRef.current = ref)}
            >
              {Array.isArray(playKlyRic)
                ? playKlyRic.map((v: any, index: number) => {
                    return (
                      <div className={styles.lyc} key={v.time}>
                        <p className={line === index ? styles.highlighted : ""}>
                          {v.lyc}
                        </p>
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
