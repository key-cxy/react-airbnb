import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./cpns/entire-filter";
import EntirePagination from "./cpns/entire-pagination";
import EntireRooms from "./cpns/entire-rooms";
import { EntireWrapper } from "./style";

import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
