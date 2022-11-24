import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 18px;
  cursor: pointer;

  .info {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${(props) => props.color};

    .text {
      font-size: 17px;
      margin-right: 6px;
    }
  }
`;
