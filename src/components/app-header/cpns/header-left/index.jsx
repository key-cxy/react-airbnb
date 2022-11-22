import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();

  const logoHandleClick = () => {
    navigate("/home");
  };

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoHandleClick}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;