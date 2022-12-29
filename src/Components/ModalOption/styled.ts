import styled from "styled-components";

export const StyledModalOption = styled.div`
  height: 100%;
  width: 30%;

  display: flex;
  flex-direction: column;
  position: fixed;

  right: 0;
  top: 0;
  background-color: var(--Grey50);

  gap: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .header_modal {
    height: 130px;
    width: 90%;

    padding: 0 5% 0 5%;

    background-color: var(--Grey40);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cam_rovers {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  .rovers {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  label {
    width: 85%;
  }
  select {
    width: 90%;
    height: 50px;

    padding-left: 5%;

    background-color: var(--Grey40);
    color: var(--Withe);

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border: none;
    border-radius: 4px;
    option {
      height: 35px;
    }
  }
  .close_modal {
    border: none;
    background: none;

    width: min-content;
    height: min-content;

    svg {
      color: var(--Withe);

      width: 25px;
      height: 24px;
    }
  }
  select {
    .opHidden {
      width: 0;
      height: 0;

      background: none;

      font-size: 0;
      font-weight: 0;
    }
  }
`;
