import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";

import { Rate, Carousel } from "antd";
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;

  const [selectIndex, setSelectIndex] = useState(0);
  const sliderRef = useRef();
  const controlClickHandle = (isNext = true, event) => {
    // 上一个面板/下一个面板
    isNext ? sliderRef.current?.next() : sliderRef.current?.prev();

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    // 阻止冒泡
    event.stopPropagation();
  };

  /** 子元素的赋值 */
  const pictureElement = (
    <div className="cover">
      <img
        className="cover-img"
        src={itemData.picture_url}
        alt={itemData.name}
      />
    </div>
  );

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>

      <Carousel dots={false} ref={sliderRef}>
        {itemData.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img className="cover-img" src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <ItemWrapper
      itemWidth={itemWidth}
      verifyColor={itemData.verify_info.text_color || "#39576A"}
    >
      <div className="inner">
        {!!itemData.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info?.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate
            style={{ color: "#00848A", fontSize: "10px" }}
            disabled
            value={itemData.star_rating ?? 5}
          />
          <span className="count" style={{ paddingTop: "2px" }}>
            {itemData.reviews_count}
          </span>
          {itemData.bottom_info && (
            <span
              className="count"
              style={{ color: itemData.bottom_info.content_color }}
            >
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
