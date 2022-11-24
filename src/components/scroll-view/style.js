import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  margin-bottom: 24px;

  .control {
    position: absolute;
    z-index: 9;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    top: 14px;
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px !important;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }

  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`;
