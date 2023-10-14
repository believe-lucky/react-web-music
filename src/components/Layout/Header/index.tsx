import { useCallback, useState } from "react";
import { Input, Avatar, Space, Popover, message } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  CaretDownOutlined,
  SettingOutlined,
  MailOutlined,
} from "@ant-design/icons";
import AccountContent from "./Account";
import "./header.less";
import Logo from "@/assets/images/logo.png";
import { search } from "@/api/header";
import { useRequest } from "ahooks";
import { useImmer } from "use-immer";
import SearchContent from "./Searcher";
import Theme from "./Theme";
import { useNavigate } from 'react-router-dom'
interface SearchParams {
  keywords: string;
  // type: number
}
const searchSong = function (params: SearchParams) {
  return search(params);
};

export default function Header() {
  const [keywords, setKeywords] = useState("");
  const [songList, setSongList] = useImmer([]);
  const { loading, run } = useRequest(searchSong, {
    manual: true,
    debounceWait: 500,
    onSuccess: (res, params) => {
      if (res.code == 200) {
        setSongList(res.result.songs);
      } else {
        setSongList([]);
      }
    },
    onError: (error) => message.error(error.message),
  });

  const handleChangeKeywords = useCallback(
    async (e) => {
      setKeywords(e.target.value);
    },
    [keywords]
  );
  // 子组件卸载后，清空数据
  const handleDestory = () => {
    setSongList([]);
  };
  // 点击歌曲后，自动关闭搜索的弹窗
  const [openSearch, setOpenSearch] = useState(false)
  const handleOpenSearch = (value: boolean) => {
    setOpenSearch(value)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      run({ keywords })
    }
  }

  const navigate = useNavigate()
  
  return (
    <div className="headerContent">
      <div className="logo">
        <img src={Logo} alt="Logo" width={24} height={24} />
        <span className="logoTitle">云音乐</span>
      </div>
      <div className="headerNavigate">
        <div className="navigateIcon" onClick={() => navigate(-1)}>
          <i className="iconfont icon-left"></i>
        </div>
        <div className="navigateIcon" style={{ marginLeft: "10px" }} onClick={() => navigate(1)}>
          <i className="iconfont icon-right"></i>
        </div>
        <div className="headerSearch">
          <Popover
            content={
              <SearchContent
                songList={songList}
                handleDestory={handleDestory}
                keywords={keywords}
                handleOpenSearch={handleOpenSearch}
              />
            }
            arrow={false}
            trigger="click"
            overlayClassName="searchPop"
            destroyTooltipOnHide
            open={openSearch}
            onOpenChange={handleOpenSearch}
          >
            <Space>
              <Input
                placeholder="大家都在搜大家都在搜大家都在搜"
                prefix={<SearchOutlined />}
                value={keywords}
                onChange={handleChangeKeywords}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </Space>
          </Popover>
        </div>
        <div className="navigateIcon sing">
          <i className="iconfont icon-maikefeng"></i>
        </div>
      </div>
      <div className="userInfo">
        <Popover content={AccountContent} arrow={false} trigger="click">
          {/* <div> */}
          <Space>
            <Avatar icon={<UserOutlined />} size={28} />
            <div className="userName">狼爱上狼爱上羊羊</div>
            <CaretDownOutlined className="userOutline" />
          </Space>
          {/* </div> */}
        </Popover>
      </div>
      <div className="headerSetting">
        <Popover content={Theme} arrow={false} trigger="click">
          <Space>
            <i className="iconfont icon-Clothes"></i>
          </Space>
        </Popover>
        <SettingOutlined style={{ width: "16px", height: "16px" }} />
        <MailOutlined style={{ width: "16px", height: "16px" }} />
      </div>
    </div>
  );
}
