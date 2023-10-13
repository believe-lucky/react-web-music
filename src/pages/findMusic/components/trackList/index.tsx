import { } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd';
import List from './list';
import Comment from './comment';
import Collect from './collect';
import './index.less'

const items = [
  {
    key: 'list',
    label: '歌曲列表',
    children: <List />
  },
  {
    key: 'comment',
    label: '评论',
    children: <Comment />
  },
  {
    key: 'collect',
    label: '收藏者',
    children: <Collect />
  }
]
export default function TrackList() {
  return (
    <Tabs
      defaultActiveKey='list'
      items={items}
      size='large'
    />
  )
}
