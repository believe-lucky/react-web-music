import './pure.less'
import { Slider, ColorPicker } from 'antd'
import { useState, } from 'react'
import type { Color } from 'antd/es/color-picker'
import { useSelector } from 'react-redux'
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

export default function PureTab({ clickItem }) {

  const handleChangeColor = (value: number) => {
    console.log('滑块', value);

  }
  const theme = useSelector(state => state.themeStoreSlice.theme) || localStorage.getItem('theme')
  // 颜色选取器变成受控组件
  const [colorValue, setColorValue] = useState<Color | string>(theme || '#ec4141')
  let [hexColor, setHexColor] = useState(null)
  // 选取完毕触发父组件传递的回调
  const onChangeComplete = (color: Color) => {
    setColorValue(color)
    // color.toHexString() 其他地方调用会报错
    setHexColor(color.toHexString())

    clickItem({ color: color.toHexString() })
  }

  return (
    <div className="pureTab">
      <div className="pureList">
        {
          pureList.map((item, index) => (
            <div
              className={item.color == theme ? 'pureItem active' : 'pureItem'}
              key={index}
              style={{ background: item.color }}
              onClick={() => clickItem(item)}
            ></div>
          ))
        }
      </div>
      <div className='customColor'>
        <p>自定义颜色</p>
        <div className="customerColorSlider">
          <ColorPicker
            size='large'
            value={colorValue}
            onChangeComplete={onChangeComplete}
            style={{ position: 'relative' }}
            className={theme == hexColor ? 'active' : ''}
          />
          {/* <div>{colorValue.toHexString().toLowerCase()}</div> */}
          {/* <div className='colorBlock'></div>
          <div className='colorSlider'>
            <Slider
              trackStyle={{background: 'transparent'}}
              defaultValue={20}
              onAfterChange={handleChangeColor}
              tooltip={{open: false}}
            />
            <Slider
              trackStyle={{background: 'transparent'}}
              defaultValue={20}
              onAfterChange={handleChangeColor}
              tooltip={{open: false}}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
