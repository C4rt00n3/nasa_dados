import styled from "styled-components";

interface iStyledImg {
  imagem: string;
}

export const StyledModalImg = styled.div<iStyledImg>`
  position: fixed;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  top: 0;

  background-color: rgb(20, 11, 11, 0.37);
  .modal {
    width: 100%;
    height: 100%;

    max-width: 700px;

    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    top: 0;
  }
  .divHeader {
    width: 90%;
    height: 60px;

    padding: 0 5% 0 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--Grey20);
    img {
      width: 60%;
      max-width: 340px;
    }
    button {
      border: none;
      background: none;

      svg {
        color: var(--Withe);

        width: 30px;
        height: 30px;
      }
    }
  }
  .img_test {
    width: 100%;

    height: 100%;
  }
  .img_view {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1000px) {
      width: 100%;
      height: 100%;

      background-image: url(${({ imagem }) => imagem});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
    }
  }
  .img_modal {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    button {
      background: none;
      border: none;

      color: var(--Withe);

      margin-top: -70%;
      svg {
        width: 30px;
        height: 30px;

        :hover {
          border: 1px solid;
          border-radius: 50%;
        }
      }
    }
  }
  .back_img {
    margin-right: 10px;

    svg {
      transform: rotate(180deg);
    }
  }
  .div_button {
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 40%;

    width: 100%;
    max-width: 700px;

    button {
      width: 40px;

      border: none;
      background: none;

      color: var(--Withe);

      svg {
        width: 40px;
        height: 40px;

        :hover {
          border: 1px solid;
          border-radius: 50%;
        }
      }
    }
  }
`;
