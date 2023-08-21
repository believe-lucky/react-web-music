import React, {
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useState,
  MutableRefObject,
} from "react";
interface TAudioControl {
  // 定义你的 TAudioControl 类型的属性和方法
  // ...
}
const useAudioControl = (
  audioRef: MutableRefObject<HTMLAudioElement>
): TAudioControl => {
  // 音频时长
  const [duration, setDuration] = useState(0);
  // 播放时间
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    const audio = audioRef.current;
    console.log(audio, "audio");

    const getDuration = (originDuration: number) =>
      isNaN(originDuration) ? 0 : Math.floor(originDuration);
    const getCurrentTime = (originCurrentTime: number) =>
      isNaN(originCurrentTime) ? 0 : Math.floor(originCurrentTime);

    // 初始化音量
    const { duration, currentTime, volume, muted, playbackRate } = audio;
    setDuration(getDuration(duration));
    setCurrentTime(getCurrentTime(currentTime));

    // 时间更新
    const onTimeUpdate = () => {
      if (!audioRef.current) {
        setCurrentTime(getCurrentTime(audio.currentTime));
      }
    };
    // 时长改变
    const onDurationChange = () => {
      setDuration(getDuration(audio.duration));
    };
    console.log(duration, currentTime, "时间");

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
    };
  }, [audioRef]);

  // 跳播
  const seek = useCallback(
    (targetTime: number) => {
      if (audioRef.current.fastSeek) {
        audioRef.current.fastSeek(targetTime);
      } else {
        audioRef.current.currentTime = targetTime;
      }
    },
    [audioRef]
  );

  return useMemo(
    () => ({
      state: {
        duration,
        currentTime,
      },
      action: {
        seek,
        updateCurrentTime: setCurrentTime,
      },
    }),
    []
  );
};

export default useAudioControl;
