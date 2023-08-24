import { } from 'react'
import './recod.less'
import { useRequest } from 'ahooks'
import { recommendSongList } from '@/api/findMusic'
import { useImmer } from 'use-immer'
import { Image } from 'antd'
import { emitId } from '@/store/emitSongIdSlice'
import { useDispatch } from 'react-redux'

function getRecodSongList() {
  return recommendSongList()
}
export default function RecommendSongList() {
  const [songList, setSongList] = useImmer([])
  const { data, error } = useRequest(getRecodSongList, {
    onSuccess: res => {
      console.log('推荐歌单', res);
      if (res.code == 200) {
        const list = res.result.slice(0, 10)
        list.forEach(item => {
          item.playCount = Math.floor(item.playCount/10000) + '万'
        })
        setSongList(list)
      } else {
        setSongList([])
      }
    }
  })
  const dispatch = useDispatch()
  const clickRecoItem = (id) => {
    dispatch(emitId(id))
  }
  return (
    <>
      <p className='recoTitle'>推荐歌单 &gt;</p>
      <div className='recoList'>
        {/* <div className='recoItem'></div> */}
        {
          songList && songList.map(item => (
            <div
              className='recoItem'
              key={item.id}
              onClick={() => clickRecoItem(item.id)}
            >
              <div className='playCount'>
                <i className='iconfont icon-play'></i>
                {item.playCount}
              </div>
              <div className="play"></div>
              <Image width='100%' src={item.picUrl} preview={false} />
              <div className='recoName'>{item.name}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}