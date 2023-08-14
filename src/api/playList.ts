import request from "@/utils/request";
interface Params {
  id: string;
}
//getSong?id=1950343972
export function getSong(params: Params) {
  return request.get("/song/url?id=1950343972", { params });
}

export function getSongLyric(params: Params) {
  return request.get("/lyric?id=1950343972", { params });
}
