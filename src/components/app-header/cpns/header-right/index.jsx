import React, { memo, useEffect, useState } from "react";

import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo((props) => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const windowClickHandle = () => {
      setShowPanel(false);
    };

    // true => 事件捕获
    window.addEventListener("click", windowClickHandle, true);
    return () => {
      window.removeEventListener("click", windowClickHandle, true);
    };
  }, []);

  //
  const profileClickHandle = () => {
    setShowPanel(true);
  };

  // 登录操作
  const loginHandle = () => {
    props.loginOptionHandle();
  };

  const panelItemClickHandle = (event) => {
    props.loginOptionHandle();
    event.stopPropagation();
  };
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn" onClick={loginHandle}>
          登录
        </span>
        <span className="btn" onClick={loginHandle}>
          注册
        </span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="register item" onClick={panelItemClickHandle}>
                注册
              </div>
              <div className="login item" onClick={panelItemClickHandle}>
                登录
              </div>
            </div>
            <div className="bottom">
              <div className="item">来爱彼迎发布房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
