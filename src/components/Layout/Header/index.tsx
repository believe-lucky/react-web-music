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
interface SearchParams {
  keywords: string;
  // type: number
}
const searchSon = function (params: SearchParams) {
  return search(params);
};

export default function Header() {
  const [keywords, setKeywords] = useState("");
  const [sonList, setSonList] = useImmer([]);
  const { loading, run } = useRequest(searchSon, {
    manual: true,
    debounceWait: 500,
    onSuccess: (res, params) => {
      if (res.code == 200) {
        setSonList(res.result.songs);
      } else {
        setSonList([]);
      }
    },
    onError: (error) => message.error(error.message),
  });

  const handleChangeKeywords = useCallback(
    async (e) => {
      setKeywords(e.target.value);
      await run({ keywords: e.target.value });
    },
    [keywords]
  );
  // 子组件卸载后，清空数据
  const handleDestory = () => {
    setSonList([]);
  };
  return (
    <div className="headerContent">
      <div className="logo">
        <img src={Logo} alt="Logo" width={24} height={24} />
        <span className="logoTitle">云音乐</span>
      </div>
      <div className="headerNavigate">
        <div className="navigateIcon">
          <i className="iconfont icon-left"></i>
        </div>
        <div className="navigateIcon" style={{ marginLeft: "10px" }}>
          <i className="iconfont icon-right"></i>
        </div>
        <div className="headerSearch">
          <Popover
            content={
              <SearchContent
                sonList={sonList}
                handleDestory={handleDestory}
                keywords={keywords}
              />
            }
            arrow={false}
            trigger="click"
            overlayClassName="searchPop"
            destroyTooltipOnHide
          >
            <Space>
              <Input
                placeholder="大家都在搜大家都在搜大家都在搜"
                prefix={<SearchOutlined />}
                value={keywords}
                onChange={handleChangeKeywords}
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
        <i className="iconfont icon-Clothes"></i>
        <SettingOutlined style={{ width: "16px", height: "16px" }} />
        <MailOutlined style={{ width: "16px", height: "16px" }} />
      </div>
    </div>
  );
}
