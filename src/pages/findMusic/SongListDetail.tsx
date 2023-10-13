// 歌单详情
import { } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './listdetail.less'
import { playlist } from '@/api/findMusic'
import { Image, Button, } from 'antd'
import {
  CaretRightOutlined,
  FolderAddOutlined,
  ExportOutlined,
  DownloadOutlined,
  PlusOutlined
} from '@ant-design/icons';
import TrackList from './components/trackList'
export default function SongListDetail() {
  const { id } = useParams()
  const { state: { formatPlayCount, name, picUrl, trackCount } } = useLocation()

  return (
    <div className='track-all'>
      <div className='track-all-info'>
        <Image src={picUrl} preview={false} />
        <div className="content">
          <p>{name}</p>
          <div>tom 2023-02-03创建</div>
          <div style={{ marginBottom: '18px' }} className='btns'>
            <div className='playbtn'>
              <div className='playbtn-all'><CaretRightOutlined />播放全部</div>
              <div className='playbtn-add'><PlusOutlined /></div>
            </div>
            <Button shape="round" icon={<FolderAddOutlined />}>收藏(100万)</Button>
            <Button shape="round" icon={<ExportOutlined />}>分享(100万)</Button>
            <Button shape="round" icon={<DownloadOutlined />}>下载全部</Button>
          </div>
          <div className=''>标签：欧美</div>
          <div>歌曲：{trackCount} &nbsp;&nbsp;播放：{formatPlayCount}</div>
          <div>简介： helloworld</div>
        </div>
      </div>
      <div className='track-all-playlist'>
        <TrackList />
      </div>
    </div>
  )
}
