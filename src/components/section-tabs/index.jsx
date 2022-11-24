import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import ScrollView from "../scroll-view";
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabs = [], tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleTabHandle = (item, index) => {
    setCurrentIndex(index);
    tabClick(item);
  };

  return (
    <TabsWrapper>
      <ScrollView>
        {tabs.map((tab, index) => {
          return (
            <div
              onClick={(e) => toggleTabHandle(tab, index)}
              className={classNames("item", { active: currentIndex === index })}
              key={tab}
            >
              {tab}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabs: PropTypes.array,
  tabClick: PropTypes.func,
};

export default SectionTabs;
