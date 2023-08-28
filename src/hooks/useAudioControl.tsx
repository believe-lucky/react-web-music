import { MutableRefObject, useEffect, useState } from "react";

interface TAudioControl {
  play: () => void;
  pause: () => void;
  formattedCurrentTime: string;
  formattedDuration: string;
  isPlay: boolean;
  volume: number;
  setAudioVolume: (value: number) => void;
  isMuted: boolean;
  mute: () => void;
  unmute: () => void;
  sliderValue: number;
}

const useAudioControl = (
  audioRef: MutableRefObject<HTMLAudioElement>
): TAudioControl => {
  const [formattedCurrentTime, setFormattedCurrentTime] = useState("0:00");
  const [formattedDuration, setFormattedDuration] = useState("0:00");
  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(0.3); // 默认音量为 0.3
  const [isMuted, setIsMuted] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  // 播放
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlay(true);
    }
  };
  // 暂停
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlay(false);
    }
  };

  // 音量
  const setAudioVolume = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
      setVolume(value);
    }
  };
  const mute = () => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const unmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    const audio = audioRef.current;
    audio.volume = 0.3;
    const handleTimeUpdate = () => {
      setFormattedCurrentTime(formatTime(audio.currentTime));
    };

    const handleDurationChange = () => {
      setFormattedDuration(formatTime(audio.duration));
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
    };
  }, [audioRef]);

  useEffect(() => {
    setSliderValue(audioRef.current.currentTime);
  }, [audioRef]);

  return {
    play,
    pause,
    formattedCurrentTime,
    formattedDuration,
    isPlay,
    volume,
    setAudioVolume,
    isMuted,
    mute,
    unmute,
    sliderValue,
  };
};

export default useAudioControl;
