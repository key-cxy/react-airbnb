import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  z-index: 9;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  top: 80px;
  padding-left: 16px;

  .filter {
    display: flex;

    .item {
      padding: 6px 12px;
      color: #bbb5ac;
      border: 1px solid #dcdce0;
      line-height: 18px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      margin-left: 8px;
      margin-right: 5px;

      &.active {
        color: #e8e6e3;
        border-color: #008489;
        background-color: #008489;
      }
    }
  }
`;
