// 毫秒数转时间格式
export const formatTime = (time: number) => {
  const t = time / 1000
  const minutes = Math.floor(t / 60)
  const seconds = Math.floor(t % 60)
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}