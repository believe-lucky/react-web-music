import request from "@/utils/request";

// banner
export const bannerList = () => {
  return request.get('/banner')
}

// 个性推荐-推荐歌单
export const recommendSongList = () => {
  return request.get('/personalized')
}