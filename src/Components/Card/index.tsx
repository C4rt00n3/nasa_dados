import { StyledCard } from "./styled";
import IMG from "../../Img/semImg.svg";

export function Card({
  element,
  setModalImg,
  setOption,
  setImagem,
  setScrollPosition,
}: any) {
  function openModal(imagem: string) {
    setModalImg(true);
    setOption(false);
    setImagem(imagem);
    setScrollPosition(0);
  }
  return (
    <>
      <StyledCard
        onClick={() => openModal(element.id)}
        IMG={IMG}
        key={element.id}
      >
        <img src={element?.img_src} alt="Test" />
        <h3 className="Headline">{element.camera.full_name}</h3>
      </StyledCard>
    </>
  );
}
