import React, { useRef } from "react";
import AudioPlayer from "react-audio-player";
import "react-audio-player/dist/ReactAudioPlayer.css";
function useAudioPlayer() {
  const audioPlayerRef = useRef(null);

  const play = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.play();
    }
  };

  const pause = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
  };

  const setVolume = (volume) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.setVolume(volume);
    }
  };

  return [audioPlayerRef, play, pause, setVolume];
}
export default useAudioPlayer;
