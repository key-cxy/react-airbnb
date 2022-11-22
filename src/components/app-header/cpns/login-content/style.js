import styled from "styled-components";

export const LoginWrapper = styled.div`
  .login-box {
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }

    .title {
      margin-top: 40px;
      font-size: 24px;
      font-weight: 800;
      color: ${(props) => props.theme.textColor.secondary};
    }

    .description {
      padding-bottom: 18px;
    }

    .ant-checkbox-wrapper {
      align-items: center;

      .confirm-info {
        margin-top: 10px;
        vertical-align: middle;
        a {
          text-decoration: underline;
        }
      }
    }
  }

  .ant-checkbox-inner {
    /* background-color: ${(props) => props.theme.color.secondary}; */
  }

  .checkbox-tips {
    background-color: ${(props) => props.theme.color.secondary};
    width: 190px;
    padding: 4px 10px;
    border-radius: 5px;
    position: absolute;
    top: -26px;
    left: -12px;
    color: #fff;

    ::before {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      top: 28px;
      border: 10px solid transparent;
      border-top: 10px solid ${(props) => props.theme.color.secondary};
    }
  }
`;
