import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = "显示全部";
  if (name) {
    showMessage = `显示更多${name}房源`;
  }

  const navigate = useNavigate();

  return (
    <FooterWrapper color={name ? "#008489" : "#000000"}>
      <div className="info" onClick={(e) => navigate("/entire")}>
        <div className="text">{showMessage}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
