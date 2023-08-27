// 歌单详情
import {} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './listdetail.less'
export default function SongListDetail() {
  console.log('详情页params参数->', useParams());
  console.log('详情页state参数->', useLocation());
  // // 获取歌单对应歌曲列表
    // const {code, privileges, songs} = await playlist({
    //   id: detail.id,
    //   limit: 10,
    //   offset: 0
    // })
    // if(code == 200) {
    //   dispatch(emitDetail(detail))
    // }
  return (
    <div>
      歌单详情
    </div>
  )
}
