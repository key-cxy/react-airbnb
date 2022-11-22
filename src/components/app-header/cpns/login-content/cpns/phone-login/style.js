import styled from "styled-components";

export const PhoneWrapper = styled.div`
  .ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 40px;
  }

  .ant-select-selector,
  .ant-input,
  .ant-form-item {
    height: 40px !important;
    border-radius: 0;
  }

  .submit,
  .wx-login {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: ${(props) => props.theme.color.secondary};
    text-align: center;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
  }

  .wx-login {
    color: #000;
    font-weight: 600;
    background-color: #fff;
    border: 2px solid #484848;
    display: flex;
    align-items: center;
    justify-content: center;

    span:last-child {
      padding-left: 10px;
    }
  }

  .divide {
    position: relative;
    text-align: center;
    height: 40px;
    line-height: 40px;

    ::before {
      content: "";
      display: block;
      width: 47%;
      height: 1px;
      background: #e4e4e4;
      position: absolute;
      top: 50%;
    }
    ::after {
      content: "";
      display: block;
      width: 47%;
      height: 1px;
      background: #e4e4e4;
      position: absolute;
      top: 50%;
      right: 0;
    }
  }
  .other {
    position: relative;
    text-align: center;
    height: 40px;
    line-height: 40px;

    ::before {
      content: "";
      display: block;
      width: 40%;
      height: 1px;
      background: #e4e4e4;
      position: absolute;
      top: 50%;
    }
    ::after {
      content: "";
      display: block;
      width: 40%;
      height: 1px;
      background: #e4e4e4;
      position: absolute;
      top: 50%;
      right: 0;
    }
  }

  .email {
    display: flex;
    align-items: center;
    justify-content: center;

    span:last-child {
      padding-left: 10px;
      font-size: 16px;
      color: ${(props) => props.theme.textColor.secondary};
      font-weight: 600;
      margin-top: -1px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
