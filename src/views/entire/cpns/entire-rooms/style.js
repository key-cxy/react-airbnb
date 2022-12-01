import styled from "styled-components";

export const RoomsWrapper = styled.div`
  .title {
    color: #222;
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
