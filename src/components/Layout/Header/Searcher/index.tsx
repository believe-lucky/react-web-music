import { useState, useEffect } from "react";
import { useRequest } from "ahooks";
import { hotSearch } from "@/api/header";
import { message } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import "./searchContentStyle.less";
import { addHistory, clearHistory } from "@/store/headerStoreSlice";
import { useSelector, useDispatch } from "react-redux";
import { emitDetail } from '@/store/emitSongSlice'

const getHotSearchList = () => {
  return hotSearch();
};
export default function SearchContent({ sonList, handleDestory, keywords, handleOpenSearch }) {
  const [hotSearchList, setHotSearchList] = useState([]);
  const { loading, run } = useRequest(getHotSearchList, {
    manual: true,
    onSuccess: (res) => {
      if (res.code == 200) {
        setHotSearchList(res.data);
      } else {
        setHotSearchList([]);
      }
    },
    onError: (error) => message.error(error.message),
  });
  // 从store中获取搜索历史
  const searchHistory = useSelector(
    (state) => state.headerStoreSlice.searchHistory
  );
  const dispatch = useDispatch();
  useEffect(() => {
    run();
    keywords.trim() && dispatch(addHistory(keywords));

    return () => {
      handleDestory();
      setHotSearchList([]);
    };
  }, []);
  const handleClickSonList = (target) => {
    dispatch(emitDetail(JSON.parse(target.dataset.songdetail)))
    // 关闭popover
    handleOpenSearch(false)
  }
  return (
    <div className="searchContainer">
      {(sonList.length && (
        <>
          <p className="hotSearch">
            <SearchOutlined />
            猜你想搜
          </p>
          <ul className="hotSearchList" onClick={(e) => handleClickSonList(e.target)}>
            {sonList.map((item) => (
              <li className="searchSonItem" key={item.id} data-songdetail={JSON.stringify(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </>
      )) || (
          <>
            <p className="hotSearch">
              搜索历史
              <DeleteOutlined
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(clearHistory())}
              />
            </p>
            <div className="searchHistory">
              {searchHistory.map((item, index) => (
                <div key={index} className="historyItem">
                  {item}
                </div>
              ))}
            </div>
            <p className="hotSearch">热搜榜</p>
            <ul className="hotSearchList">
              {hotSearchList &&
                hotSearchList.map((item, index) => (
                  <li className="hotSearchListItem" key={index}>
                    <div className={index < 3 ? "index highLight" : "index"}>
                      {index + 1}
                    </div>
                    <div className="content">
                      <p className="title">
                        {item.searchWord}
                        <span className="total">{item.score}</span>
                        {index < 3 && <span className="hot">HOT</span>}
                      </p>
                      <div className="description">{item.content}</div>
                    </div>
                  </li>
                ))}
            </ul>
          </>
        )}
    </div>
  );
}
