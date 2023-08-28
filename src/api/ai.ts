import request from '@/utils/request'

export function getAccess_token() {
  const url = `https://wenxin.baidu.com/moduleApi/portal/api/oauth/token?grant_type=client_credentials&client_id=qDdMfgmwIV4X2xQLTeh1BjPaoQvL68dw&client_secret=bXIqSGLdZGGuM9SSRu7zUNbd5kS8d2Ef`
  return request.post(url)
}

export function asyncGuess(token, params) {
  const url = `https://wenxin.baidu.com/moduleApi/portal/api/rest/1.0/ernie/3.0.25/zeus?access_token=${token}`
  return request.post(url, params)
}

export function getAiResult(token, params) {
  const url = `https://wenxin.baidu.com/moduleApi/portal/api/rest/1.0/ernie/v1/getResult?access_token=${token}`
  return request.post(url, params)
}