import { useRef, useEffect } from "react";

const useAudioControl = (
  initialSrc: string
): [boolean, () => void, React.RefObject<HTMLAudioElement>] => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlayingRef = useRef(false);
  console.log(initialSrc, "map3");

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleAudioEnd = () => {
      isPlayingRef.current = false;
    };

    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlayingRef.current) {
      audio.pause();
    } else {
      audio.play();
    }

    isPlayingRef.current = !isPlayingRef.current;
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = initialSrc;

    return () => {
      audio.src = "";
    };
  }, [initialSrc]);

  return [isPlayingRef.current, toggleAudio, audioRef];
};

export default useAudioControl;
