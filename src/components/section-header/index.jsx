import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

SectionHeader.defaultProps = {
  title: "标题",
  subtitle: "",
};

export default SectionHeader;
