import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-top: 30px;
  color: ${(props) => props.theme.textColor.primary};

  .title {
    font-size: 22px;
    font-weight: 600;
  }

  .subtitle {
    margin-top: 12px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
