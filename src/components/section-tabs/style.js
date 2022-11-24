import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    height: 48px;
    font-size: 17px;
    padding: 14px 16px;
    border: solid 0.5px #d8d8d8;
    border-radius: 3px;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 15%);
    background: #fff;
    color: #484848;
    font-weight: bold;
    line-height: 20px;
    margin-right: 16px;
    white-space: nowrap;

    user-select: none;
    text-align: center;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    &.active {
      background: #00848a;
      border: solid 0.5px #00848a;
      color: #fff;
    }
  }
`;
