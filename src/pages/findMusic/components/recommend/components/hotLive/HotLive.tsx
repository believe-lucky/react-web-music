import React from 'react'
import './hotLive.less'
import { Image } from 'antd'
import { FieldTimeOutlined} from '@ant-design/icons'
export default function HotLive() {
  return (
    <div className='hotLive'>
      <p className='hotTitle'>热门播客 &gt;</p>
      <div className="hotList">
        {
          [1,2,3,4,5,6].map(item => (
            <div className="hotItem" key={item}>
              {/* <Image/> */}
              <div className="img">
                <div className="play"></div>
              </div>
              <div className="content">
                <div className="title">等不到的等待等不到的等待等不到的等待等不到的等待等不到的等待等不到的等待</div>
                <span className="type">影视原声</span>
                <div className='detail'>
                  <div className="origin">电视剧 长相思 配乐配乐啥打法是否是否</div>
                  <i className='iconfont icon-play' style={{marginLeft:'10px', marginRight:'6px'}}></i>63万
                  <FieldTimeOutlined style={{marginLeft:'10px',marginRight:'6px'}}/> 01:20
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
