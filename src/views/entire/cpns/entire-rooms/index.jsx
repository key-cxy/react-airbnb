import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RoomsWrapper } from "./style";

const EntireRooms = memo((props) => {
  const { totalCount, roomList, isLoading } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading,
  }));

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="room-list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item._id} />;
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
