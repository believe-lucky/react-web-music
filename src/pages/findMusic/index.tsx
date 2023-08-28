import StickyBox from 'react-sticky-box';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import './index.less'
import Recommend from './components/recommend';
import Customization from './components/customization';
const items = [
  {
    key: 'recommend',
    label: '个性推荐',
    children: <Recommend/>
  },
  {
    key: 'customization',
    label: '专属定制',
    children: <Customization/>
  },
  {
    key: 'songList',
    label: '歌单',
    children: '歌单'
  },
  {
    key: 'rankList',
    label: '排行榜',
    children: '排行榜'
  },
  {
    key: 'singer',
    label: '歌手',
    children: '歌手'
  },
  {
    key: 'newMusic',
    label: '最新音乐',
    children: '最新音乐'
  },
]

export default function FindMusic() {
  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} />
    </StickyBox>
  );
  return (
    <div className="findMusic">
      <Tabs
        defaultActiveKey="recommend"
        renderTabBar={renderTabBar}
        items={items}
        size='large'
      />
    </div>
  )
};
