import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"));
  }, [dispatch]);

  const { goodPriceInfo } = useSelector((state) => {
    return state.home.goodPriceInfo;
  }, shallowEqual);

  console.log(goodPriceInfo, 11111);
  return <div>Home</div>;
});

export default Home;
