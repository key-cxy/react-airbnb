import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";

const EntirePagination = memo((props) => {
  const dispatch = useDispatch();
  const changePaginationHandle = (e, page) => {
    dispatch(fetchRoomListAction(page - 1));
  };

  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount,
  }));

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount =
    (currentPage + 1) * 20 > totalCount ? totalCount : (currentPage + 1) * 20;
  return (
    <PaginationWrapper>
      <Pagination
        onChange={changePaginationHandle}
        count={totalPage}
        color="primary"
      />
      <div className="range">
        第 {startCount} – {endCount} 个房源，共超过 {totalCount} 个
      </div>
    </PaginationWrapper>
  );
});

export default EntirePagination;
