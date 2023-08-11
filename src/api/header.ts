import request from "@/utils/request";
interface Params {
  keywords: string;
}
export function search(params: Params) {
  return request.get("/search", { params });
}
export function hotSearch() {
  return request.get("/search/hot/detail");
}
