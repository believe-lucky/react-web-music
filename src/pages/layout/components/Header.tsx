import {useState} from 'react'
import { Input, Avatar, Space, Popover } from 'antd'
import { SearchOutlined, UserOutlined, CaretDownOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons'
import AccountInfo from './AccountInfo'
import './header.less'
import Logo from '@/assets/react.svg'
export default function Header() {
  return (
    <div className='headerContent'>
      <div className="logo">
        <img src={Logo} alt="Logo" width={24} height={24}/>
        <span className='logoTitle'>云音乐</span>
      </div>
      <div className="headerNavigate">
        <div className='navigateIcon'>
          <i className='iconfont icon-left'></i>
        </div>
        <div className="navigateIcon" style={{marginLeft:'10px'}}>
          <i className='iconfont icon-right'></i>
        </div>
        <div className='headerSearch'>
          <Input placeholder="大家都在搜大家都在搜大家都在搜" prefix={<SearchOutlined />}/>
        </div>
        <div className="navigateIcon sing">
          <i className='iconfont icon-maikefeng'></i>
        </div>
      </div>
      <div className="userInfo">
        {/* <AccountInfo/> */}
        <Popover content={AccountInfo} arrow={false}>
          {/* <div> */}
            <Space>
              <Avatar icon={<UserOutlined />} size={28}/>
              <div className='userName'>狼爱上狼爱上羊羊</div>
              <CaretDownOutlined />
            </Space>
          {/* </div> */}
        </Popover>
      </div>
      <div className="headerSetting">
        <i className='iconfont icon-Clothes'></i>
        <SettingOutlined style={{width:'16px',height:'16px'}}/>
        <MailOutlined style={{width:'16px',height:'16px'}}/>
      </div>
    </div>
  )
}
