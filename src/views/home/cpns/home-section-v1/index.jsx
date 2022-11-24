import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";

const HomeSectionV1 = memo((props) => {
  const { dataInfo } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <SectionRoom roomList={dataInfo.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeSectionV1;
