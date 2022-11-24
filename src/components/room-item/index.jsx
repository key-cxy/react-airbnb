import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { Rate } from "antd";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt={itemData.name} />
    </div>
  );

  return (
    <ItemWrapper
      itemWidth={itemWidth}
      verifyColor={itemData.verify_info.text_color || "#39576A"}
    >
      <div className="inner">
        {pictureElement}
        <div className="desc">{itemData.verify_info?.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            style={{ color: "#00848A", fontSize: "10px" }}
            disabled
            value={itemData.star_rating ?? 5}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span
              className="count"
              style={{ color: itemData.bottom_info.content_color }}
            >
              {" "}
              · {itemData.bottom_info.content}
            </span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
