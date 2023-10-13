import { useEffect } from 'react'
import { Table, Button, Tooltip, message } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { playlist, like } from '@/api/findMusic'
import { useRequest } from 'ahooks'
import { useLocation, useParams } from 'react-router-dom'
import { useImmer } from 'use-immer'
import { formatTime } from '@/hooks/useFormat'
import { HeartOutlined, DownloadOutlined } from '@ant-design/icons'
import './list.less'
import { useSelector, useDispatch } from 'react-redux';
import { emitDetail } from '@/store/emitSongSlice'

interface DataType {
  al: Object,// 专辑
  alia: [], // 副标题
  ar: [],// 歌手
  dt: number,// 时长
  pop: number, // 热度
  key: string,
  mv: number, // mv id
  sq: number,
}

const paginationOptions = {
  position: ['bottomCenter'],
  showSizeChanger: false,
  pageSize: 100,
}
// 获取当前歌单歌曲列表
function getPlayList(params) {
  return playlist(params)
}
// 添加到喜欢
function likeCurrentMusic(params) {
  return like(params)
}

export default function List() {

  const theme = useSelector(state => state.themeStoreSlice.theme) || localStorage.getItem('theme')
  const tagStyle = {
    color: theme,
    border: '1px solid ' + theme,
    boxSizing: 'borderBox',
    display: 'block',
    lineHeight: '14px',
    height: '16px',
    width: '27px',
    fontSize: '14px',
    paddingInline: '1px',
    marginLeft: '6px',
    borderRadius: '3px'
  }
  const columns: ColumnsType<DataType> = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
      width: 50,
      render: (data, record, index) => <span>{index + 1}</span>
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 80,
      render: (_, row) => (
        <>
          <HeartOutlined className='like' onClick={() => likeMusic({ id: row.id })} />
          <DownloadOutlined className='download' />
        </>
      )
    },
    {
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      ellipsis: {
        showTitle: false
      },
      render: (data, row) => (
        <Tooltip placement='bottom' title={data}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span onDoubleClick={() => handleDoubleClick(row)} style={{ cursor: 'default' }}>{data}</span>
            {row.sq && <span style={tagStyle}>SQ</span>}
            {row.mv > 0 && <span style={tagStyle}>MV</span>}
          </span>
        </Tooltip>
      )
    },
    {
      title: '歌手',
      dataIndex: 'ar',
      key: 'ar',
      render: (data) => <span>{data.map(item => item.name).join('、')}</span>
    },
    {
      title: '专辑',
      dataIndex: 'al',
      key: 'al',
      render: (data) => <span>{data.name}</span>
    },
    {
      title: '时间',
      dataIndex: 'dt',
      key: 'dt',
      width: 80,
      render: data => <span>{formatTime(data)}</span>
    },
  ]

  // 获取路由参数id
  const { id } = useParams()
  const [songList, setSongList] = useImmer([])

  const { run } = useRequest(getPlayList, {
    manual: true,
    onSuccess: res => {
      console.log('歌单歌曲', res);
      if (res.code == 200) {
        res.songs.forEach(item => {
          item.key = item.id
        })
        setSongList(res.songs)
      }
    },
  })
  const { run: likeMusic } = useRequest(likeCurrentMusic, {
    manual: true,
    onSuccess: res => {

    },
    onError: err => {
      console.log('err', err);
      message.error(err.response.data.msg)
    }
  })

  const dispatch = useDispatch();
  // 双击歌曲，传入store
  const handleDoubleClick = (row) => {
    dispatch(emitDetail(row))
  }


  useEffect(() => {
    run({ id })
  }, [id])
  return (
    <div className='track-list-table'>
      <Table columns={columns} dataSource={songList} pagination={paginationOptions}></Table>
    </div>
  )
}
