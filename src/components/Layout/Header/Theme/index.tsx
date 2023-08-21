import { useCallback, useState } from 'react'
import { updateTheme } from '@/store/themeStoreSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import ThemeTab from './components/ThemeTab'
import PureTab from './components/PureTab'
import './index.less'
export default function Theme() {
  
  const curTheme = useSelector(
    (state) => state.themeStoreSlice.theme
  )
  const dispatch = useDispatch()
  const [activeTab, setActiaveTab] = useState('theme')
  const handleChange = useCallback((key: string) => {
    setActiaveTab(key)
  }, [curTheme])
  
  const handleClickThemeItem = (theme) => {
    console.log('click theme', theme);
    dispatch(updateTheme(theme.color))
    localStorage.setItem('theme', theme.color)
  }
  const handleClickPureItem = (theme) => {
    console.log('click pure', theme);
    localStorage.setItem('theme', theme.color)
  }
  const tabList: TabsProps['items'] = [
    {
      key: 'theme',
      label: '主题',
      children: <ThemeTab clickItem={handleClickThemeItem}/>
    },
    {
      key: 'pure',
      label: '纯色',
      children: <PureTab clickItem={handleClickPureItem}/>
    },
  ]
  return (
    <div className='themeContainer'>
      <Tabs defaultActiveKey={activeTab} items={tabList} onChange={handleChange}></Tabs>
    </div>
  )
}
