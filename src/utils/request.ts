import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// 定义自定义类型
interface MyResponse<T = any> extends AxiosResponse {
  code: number;
  data: T;
}

interface MyError extends AxiosError {
  // 添加你需要的自定义错误属性
  customField: string;
}

// 扩展 AxiosInstance 接口
declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<MyResponse>;
    (url: string, config?: AxiosRequestConfig): Promise<MyResponse>;
  }
}
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://music-node-liart.vercel.app/"
    : "http://localhost:3000";
// 创建自定义实例
const instance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// 云部署 node 地址 ：https://music-node-liart.vercel.app/

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res) => res.data,
  (error: MyError) => Promise.reject(error)
);

export default instance;
