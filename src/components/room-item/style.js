import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 8px;
  padding-top: 0;
  width: ${(props) => props.itemWidth};
  cursor: pointer;
  font-weight: 800;

  .cover {
    position: relative;
    padding: 66.66% 8px 0;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .desc {
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
    color: ${(props) => props.verifyColor};
  }

  .name {
    width: 100%;
    color: ${(props) => props.theme.textColor.secondary};
    line-height: 22px;
    font-size: 16px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .price {
    line-height: 20px;
    color: ${(props) => props.theme.textColor.secondary};
    font-weight: 400;
  }

  .bottom {
    display: flex;
    align-items: center;

    .ant-rate-star {
      margin-right: 1px !important;
    }

    .count {
      font-size: 12px;
      margin-top: 1px;
      margin-left: 2px;
    }
  }
`;
