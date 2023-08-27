import request from "@/utils/request";

// banner
export const bannerList = () => {
  return request.get('/banner')
}

// 个性推荐-推荐歌单
export const recommendSongList = () => {
  return request.get('/personalized')
}

interface PlayListParams {
  id: Number,
  limit: Number, // 每次多少条
  offset: Number // 从第几条开始
}
// 个性推荐-推荐歌单-歌单对应歌曲列表
export const playlist = (params:PlayListParams) => {
  return request.get('/playlist/track/all', { params })
}