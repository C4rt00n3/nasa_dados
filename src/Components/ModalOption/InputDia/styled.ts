import styled from "styled-components";

export const StyledInptSolar = styled.div`
  width: 95%;
  justify-content: flex-end;

  display: flex;
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  button {
    width: 28px;
    height: 29px;

    background-color: var(--Grey20);

    border: none;
    color: var(--Withe);

    font-size: 18px;
    font-weight: 600;
  }
  input {
    width: 51px;
    height: 29px;

    background-color: var(--Grey20);
    color: var(--Withe);

    border: none;
    :focus {
      border: none;
      outline: none;
      box-shadow: none;
    }

    padding: 0;
  }
  .sum {
    border-radius: 8px 0 0 8px;
  }
  .sub {
    border-radius: 0 8px 8px 0;
  }
`;
