import styled from "styled-components";

export const StyledMainPage = styled.div`
  padding-bottom: 10%;

  width: 100%;
  height: 100%;
  .img_nasa_main {
    width: 100%;
  }
  .div_img_nasa {
    height: 500px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .text_Info {
    margin-left: 10%;
    padding-top: 60px;
  }
  .fogete {
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    background-color: var(--Color-primary);
    color: var(--Withe);

    width: 50px;
    height: 50px;

    border-radius: 50%;

    top: 90%;
    margin-left: 49%;
    svg {
      transform: rotate(270deg);
    }
  }
  .end {
    display: flex;

    margin-bottom: -30px;

    bottom: 0;
  }
`;
