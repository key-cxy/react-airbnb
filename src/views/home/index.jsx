import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import HomeBanner from "./cpns/home-banner";
import HomeSectionV1 from "./cpns/home-section-v1";
import HomeSectionV2 from "./cpns/home-section-v2";
import { isEmptyObject } from "@/utils/is-empty-object";
import HomeSectionV3 from "./cpns/home-section-v3";
import HomeLongfor from "./cpns/home-longfor";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 dataInfo={discountInfo} />
        )}

        {/* 热门推荐 */}
        {isEmptyObject(recommendInfo) && (
          <HomeSectionV2 dataInfo={recommendInfo} />
        )}

        {/* longfor */}
        {isEmptyObject(longforInfo) && <HomeLongfor dataInfo={longforInfo} />}

        {/* 好评 */}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 dataInfo={highScoreInfo} />
        )}

        {/* 高性价比 */}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 dataInfo={goodPriceInfo} />
        )}

        {/* plus */}
        {isEmptyObject(plusInfo) && <HomeSectionV3 dataInfo={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
