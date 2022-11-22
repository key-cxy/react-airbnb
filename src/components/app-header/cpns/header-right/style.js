import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    margin-right: 8px;

    .btn {
      padding: 12px;
      cursor: pointer;
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    width: 77px;
    border: 1px solid #dddddd;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 58px;
      right: 0;
      width: 200px;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

      background-color: #fff;

      .top,
      .bottom {
        padding: 8px 0;

        .item {
          padding: 8px 15px;
          color: #666;

          &:hover {
            background-color: #f5f5f5;
          }
        }

        .register {
          color: ${(props) => props.theme.textColor.primary};
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
