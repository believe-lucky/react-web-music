import './theme.less'
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
  return (
    <div className="themeTab">
      {
        themeList.map(item => (
          <div
            className="themeItem"
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