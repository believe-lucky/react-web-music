import React from 'react'
import { Dropdown, Space, Avatar, Divider  } from 'antd'
import { RightOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './account.less'

const accountItems = [
  {icon: '', showDivider: true},
  { icon: 'vip', label: '会员中心', subLabel: '未订购', showArrows: true },
  { icon: 'xunzhang', label: '等级', subLabel: 'Lv.3', showArrows: true },
  { icon: 'shopping', label: '商城', subLabel: '', showArrows: true },
  {icon: '', showDivider: true},
  { icon: 'user', label: '个人信息设置', subLabel: '', showArrows: true },
  { icon: 'chat', label: '绑定社交账号', subLabel: '', showArrows: true },
  {icon: '', showDivider: true},
  { icon: 'kefu', label: '我的客服', subLabel: '', showArrows: true },
  {icon: '', showDivider: true},
  { icon: 'logout', label: '退出登录', subLabel: '', showArrows: false },
]
export default function AccountInfo() {
  return (
    <div className='accountContainer'>
      <div className='accountStatistics'>
        <div className="account">
          <p>0</p>
          <span>动态</span>
        </div>
        <div className="account">
          <p>0</p>
          <span>关注</span>
        </div>
        <div className="account">
          <p>0</p>
          <span>粉丝</span>
        </div>
      </div>
      <div className="signIn">
        <i className='iconfont icon-coin'></i>
        签到
      </div>
      <ul>
        {accountItems.map((item,index) => {
          if(item.showDivider) {
            return (
              <div key={index}>
                <Divider/>
              </div>
            )
          }
          return (
            <li key={item.icon} style={{cursor: 'pointer'}}>
              <i className={`iconfont icon-${item.icon}`}></i>
              <span style={{marginLeft: '8px',color: '#333'}}>
                {item.label}
              </span>
              <div style={{float: 'right'}}>
                <span style={{color:'#666'}}>{item.subLabel}</span>
                <RightOutlined style={{fontSize: '12px',marginLeft:'4px',color: '#666'}}/>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
