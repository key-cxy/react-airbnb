import React, { memo, useRef } from "react";

import { HeaderWrapper } from "./style";
import HeaderCenter from "./cpns/header-center";
import HeaderLeft from "./cpns/header-left";
import HeaderRight from "./cpns/header-right";
import LoginContext from "./cpns/login-content";

const AppHeader = memo(() => {
  const loginRef = useRef(null);
  const loginOptionHandle = () => {
    loginRef.current && loginRef.current.showModal();
  };
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight loginOptionHandle={loginOptionHandle} />
      <LoginContext ref={loginRef} />
    </HeaderWrapper>
  );
});

export default AppHeader;
