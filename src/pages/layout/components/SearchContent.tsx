import {useState, useEffect} from 'react'
import { useRequest,} from 'ahooks'
import { hotSearch} from '../api/header'
import { message} from 'antd'
import './searchContentStyle.less'
const getHotSearchList = () => {
  return hotSearch()
}
export default function SearchContent({sonList}) {
  const [hotSearchList, setHotSearchList] = useState([])
  const {loading, run} = useRequest(getHotSearchList, {
    manual: true,
    onSuccess: (res) => {
      
      if(res.code == 200) {
        setHotSearchList(res.data)
      }else{
        setHotSearchList([])
      }
    },
    onError: error => message.error(error.message)
  })
  useEffect(() => {
    run()
    return () => {
      setHotSearchList([])
    }
  },[])
    return (
      <div className='searchContainer'>
        <p className='hotSearch'>热搜榜</p>
        <ul className='hotSearchList'>
          {
            hotSearchList && hotSearchList.map((item,index) => (
              <li className='hotSearchListItem' key={index}>
                <div className={index<3?'index highLight':'index'}>{index + 1}</div>
                <div className="content">
                  <p className='title'>
                    {item.searchWord}
                    <span className='total'>{item.score}</span>
                    {index < 3 && <span className='hot'>HOT</span>}
                  </p>
                  <div className='description'>{item.content}</div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
}
