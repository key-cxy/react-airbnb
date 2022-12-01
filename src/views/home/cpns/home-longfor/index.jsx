import LongforItem from "@/components/longfor-item";
import ScrollView from "@/components/scroll-view";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";

const HomeLongfor = memo((props) => {
  const { dataInfo } = props;

  return (
    <LongforWrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {dataInfo?.list?.map((item, index) => {
            return <LongforItem itemData={item} key={index} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeLongfor;
