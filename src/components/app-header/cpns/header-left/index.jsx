import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import IconLogo from "@/assets/svg/icon_logo";
import { LeftWrapper } from "./style";

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
