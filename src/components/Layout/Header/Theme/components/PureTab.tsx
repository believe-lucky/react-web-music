import './pure.less'
import { Slider } from 'antd'
import { useState, } from 'react'
const pureList = [
  { color: '#fff' },
  { color: '#ff5c8a' },
  { color: '#ff7a9e' },
  { color: '#717ff9' },
  { color: '#4791eb' },
  { color: '#39afea' },
  { color: '#2bb669' },
  { color: '#6acc19' },
  { color: '#e2ab12' },
  { color: '#ff8f57' },
  { color: '#fd726d' },
  { color: '#fd544e' },
]

export default function PureTab({clickItem}) {

  const [customColor, setCustomColor] = useState({
    main: '',
    gray: ''
  })
  const handleChangeColor = (value:number) => {
    console.log('滑块', value);
    
  }
  return (
    <div className="pureTab">
      <div className="pureList">
        {
          pureList.map((item, index) => (
            <div
              className="pureItem"
              key={index}
              style={{background: item.color}}
              onClick={() => clickItem(item)}
            ></div>
          ))
        }
      </div>
      <div className='customColor'>
        <p>自定义颜色</p>
        <div className="customerColorSlider">
          <div className='colorBlock'></div>
          <div className='colorSlider'>
            <Slider  defaultValue={20} onAfterChange={handleChangeColor} tooltip={{open: false}}/>
            <Slider  defaultValue={20} onAfterChange={handleChangeColor} tooltip={{open: false}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
