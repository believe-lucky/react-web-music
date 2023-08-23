import { } from 'react'
import './recod.less'
import { useRequest } from 'ahooks'
import { recommendSongList } from '@/api/findMusic'
import { useImmer } from 'use-immer'
import { Image } from 'antd'

function getRecodSongList() {
  return recommendSongList()
}
export default function RecommendSongList() {
  const [songList, setSongList] = useImmer([])
  const { data, error } = useRequest(getRecodSongList, {
    onSuccess: res => {
      console.log('推荐歌单', res);
      if (res.code == 200) {
        setSongList(res.result.slice(0, 10))
      } else {
        setSongList([])
      }
    }
  })
  return (
    <>
      <p className='recoTitle'>推荐歌单 &gt;</p>
      <div className='recoList'>
        {/* <div className='recoItem'></div> */}
        {
          songList && songList.map(item => (
            <div className='recoItem' key={item}>
              <div className='playCount'>
                <i className='iconfont icon-play'></i>
                {item.playCount}
              </div>
              <Image width='100%' src={item.picUrl} preview={false} />
              <div className='recoName'>{item.name}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}