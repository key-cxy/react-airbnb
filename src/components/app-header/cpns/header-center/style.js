import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 46px;
    color: #222;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.18);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 40px;
    padding-left: 8px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
    }

    .icon {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primary};
      margin-right: 8px;
    }
  }
`;
