import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import SectionTabs from "@/components/section-tabs";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { dataInfo } = props;

  const tabs = dataInfo?.dest_address?.map((item) => item.name) || [];

  const [currentCity, setCurrentCity] = useState(tabs[0]);
  // section-tabs组件点击切换
  const tabClickHandle = (cityName) => {
    setCurrentCity(cityName);
  };

  return (
    <SectionV2Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <SectionTabs tabs={tabs} tabClick={tabClickHandle} />
      <SectionRoom
        roomList={dataInfo?.dest_list?.[currentCity]}
        itemWidth="33.333%"
      />
      <SectionFooter name={currentCity} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeSectionV2;
