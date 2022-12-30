import { StyledModalImg } from "./styled";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../Img/logo.svg";
import MainImg from "../../../Img/semImg.svg";
import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRovers";
interface iModalImagem {
  setModalImg: React.Dispatch<React.SetStateAction<boolean>>;
  imagem: string;
  setImagem: React.Dispatch<React.SetStateAction<string>>;
}

export function ModalImg({ setModalImg, imagem, setImagem }: iModalImagem) {
  const { itens, setPage, page, check } = useContext(ContextRovers);

  const newItens = itens.filter((element) => element.id === Number(imagem));
  const obj = newItens[0];

  function filterImg() {
    const newItens = itens.filter((element) => element.id === Number(imagem));
    const obj = newItens[0];

    if (!obj) {
      setModalImg(false);
    }
    return obj && obj.img_src;
  }

  function moveImg(move: string) {
    itens.filter((element, i, arr) => {
      if (element.id === Number(imagem)) {
        if (move === "left" && i !== 0) {
          setTimeout(() => {
            const objRef = itens[i - 1];
            objRef && setImagem(objRef.id + "");
          }, 100);
        } else if (move !== "left" && i < itens.length) {
          setTimeout(() => {
            const objRef = itens[i + 1];
            objRef && setImagem(objRef.id + "");
          }, 100);

          if (i >= arr.length % 2 && check) {
            setPage(page + 1);
          }
        }
      }
      return "";
    });
  }
  return (
    <StyledModalImg imagem={MainImg}>
      <div className="modal">
        <div className="divHeader">
          <img src={Logo} alt="Espaço há mais" />
          <button onClick={() => setModalImg(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>
        <div className="img_test">
          <div className="img_modal">
            <div className="img_view">
              <img src={obj ? obj.img_src : filterImg()} alt="" />
            </div>
          </div>
          <div className="div_button">
            <button className="left_move" onClick={() => moveImg("left")}>
              <IoIosArrowBack />
            </button>
            <button onClick={() => moveImg("rigth")} className="back_img">
              <IoIosArrowBack />
            </button>
          </div>
        </div>
      </div>
    </StyledModalImg>
  );
}
