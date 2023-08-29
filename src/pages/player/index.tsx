import React, { useState, useEffect, useRef } from "react";
import { Drawer } from "antd";
import styles from "./style.module.less";
import player from "@/assets/images/player.png";
import plaything from "@/assets/images/player.gif";

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
  const [scrollInterval, setScrollInterval] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startScrolling = () => {
      if (scrollInterval) return; // 已经在滚动中，则不再重复启动滚动

      const container = containerRef.current; // 歌词容器元素
      const highlightedLyric = container?.querySelector(".highlighted"); // 高亮歌词元素
      if (!container || !highlightedLyric) return;

      const containerHeight = container.offsetHeight; // 容器高度
      const lyricHeight = highlightedLyric.offsetHeight; // 高亮歌词元素高度
      const lyricOffset = highlightedLyric.offsetTop; // 高亮歌词元素与容器顶部的偏移量

      // 计算需要滚动的距离
      const scrollOffset = lyricOffset - containerHeight / 2 + lyricHeight / 2;

      // 滚动到中心位置
      container.scrollTop = scrollOffset;

      // 启动定时器，每隔一段时间执行一次滚动
      const interval = setInterval(() => {
        container.scrollTop += 1; // 根据需要调整滚动速度
      }, 100); // 根据需要调整滚动间隔时间

      setScrollInterval(interval);
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval); // 清除定时器
        setScrollInterval(null);
      }
    };

    // 监听播放状态，根据播放状态控制滚动开始和停止
    if (isPlay && isOpen) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => {
      stopScrolling(); // 组件卸载时停止滚动
    };
  }, [playKlyRic, isOpen, isPlay]);

  const timeStringToSeconds = (timeString: string) => {
    const [minutes, seconds] = timeString
      ? timeString.split(":").map(Number)
      : [0, 0];
    const totalSeconds = Math.floor(minutes * 60 + seconds);
    return +totalSeconds;
  };

  const highlightLyrics = (currentTime, startTime, endTime) => {
    const currentSeconds = timeStringToSeconds(currentTime);
    const startSeconds = timeStringToSeconds(startTime);
    const endSeconds = timeStringToSeconds(endTime);
    return currentSeconds >= startSeconds && currentSeconds < endSeconds;
  };

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
            <div className={styles.content} ref={containerRef}>
              {Array.isArray(playKlyRic)
                ? playKlyRic.map((v: any, index: number) => {
                    return (
                      <div className={styles.lyc} key={v.time}>
                        <p
                          className={
                            highlightLyrics(
                              activeTime,
                              playKlyRic[index]?.time,
                              playKlyRic[index + 1]?.time
                            )
                              ? styles.highlighted
                              : ""
                          }
                        >
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
