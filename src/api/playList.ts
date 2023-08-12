import request from "@/utils/request";
interface Params {
  id: string;
}
//album?id=169512732
export function getAlbum(params: Params) {
  return request.get("/album?id=169512732", { params });
}
