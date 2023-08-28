import './theme.less'
import { useSelector } from 'react-redux'
const themeList = [
  {
    key: 'black',
    label: '炫酷黑',
    color: '#222'
  },
  {
    key: 'red',
    label: '官方红',
    color: '#ec4141'
  },
  {
    key: 'pink',
    label: '可爱粉',
    color: '#fb76a1'
  },
  {
    key: 'blue',
    label: '天际蓝',
    color: '#3fa5f7'
  },
  {
    key: 'green',
    label: '清新绿',
    color: '#36b479'
  },
  {
    key: 'gold',
    label: '土豪金',
    color: '#edb455'
  },
]
export default function ThemeTab({ clickItem }) {
  const theme = useSelector(state => state.themeStoreSlice.theme) || localStorage.getItem('theme')
  return (
    <div className="themeTab">
      {
        themeList.map(item => (
          <div
            className={item.color == theme ? 'themeItem active' : 'themeItem'}
            key={item.key}
            style={{ background: item.color }}
            onClick={() => clickItem(item)}
          >
            <div className='themeLabel'>{item.label}</div>
          </div>
        ))
      }
    </div>
  )
}