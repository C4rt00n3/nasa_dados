import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--Grey50);

  img {
    margin-left: 10%;
    width: 50%;
    height: 90%;

    max-height: 60px;
    @media (min-width: 1000px) {
      width: 20%;
    }
  }
  .BsList {
    border: none;
    background: none;
    width: 30px;
    height: 30px;

    padding: 5px;

    margin-right: 10%;

    svg {
      width: 30px;
      height: 30px;

      color: var(--Withe);
    }
  }
`;
