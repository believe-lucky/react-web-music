import request from "@/utils/request";

export const bannerList = () => {
  return request.get('/banner')
}