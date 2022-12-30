import styled from "styled-components";

export const StyledModalOption = styled.div`
  height: 100%;
  width: 35%;
  min-width: 320px;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  position: fixed;

  right: 0;
  top: 0;
  background-color: var(--Grey50);

  gap: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 500px) {
    min-width: 450px;
  }

  .header_modal {
    height: 130px;
    width: 90%;

    padding: 0 5% 0 5%;

    background-color: var(--Grey40);

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 80%;
      max-width: 250px;
    }
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
    .oppt {
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
  .opHidden {
    width: 0;
    height: 0;

    background: none;

    font-size: 0;
    font-weight: 0;

    padding: 0;
    margin: 0;

    min-height: 0;
    max-height: 0;

    position: absolute;
    bottom: 0;
    display: flex;
  }
`;
