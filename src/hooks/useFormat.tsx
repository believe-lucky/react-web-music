// 毫秒数转时间格式
export const formatTime = (time: number) => {
  const t = time / 1000
  const minutes = Math.floor(t / 60)
  const seconds = Math.floor(t % 60)
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// 时间戳转日期:
export const formatTimestamp = (timestamp: number) => {
  const time = new Date(timestamp)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  return `${year}-${month}-${date}`
}