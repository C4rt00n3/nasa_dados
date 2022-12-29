import { Header } from "../../Components/Header";
import { StyledMainPage } from "./styled";
import Img1 from "../../Img/curiosity.jpg";
import Img2 from "../../Img/opportunity.jpg";
import Img3 from "../../Img/spirit.jpg";

import React, { useContext, useEffect, useState } from "react";
import { Modaloption } from "../../Components/ModalOption";
import { ListPhotos } from "./ListPhotos";
import { ContextRovers } from "../../Context/ContextRovers/ContextRovers";
import { ModalImg } from "./ModalImg";
import { FaFighterJet } from "react-icons/fa";

export function RoversPage() {
  const [option, setOption] = useState(false);
  const [modalImg, setModalImg] = useState(false);
  const [imagem, setImagem] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const { sun, rover, itens } = useContext(ContextRovers);

  const sizeMonitor = window.outerHeight;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let newRover = "";

  if (rover === "Curiosity") {
    newRover = Img1;
  } else if (rover === "Opportunity") {
    newRover = Img2;
  } else if (rover === "Spirit") {
    newRover = Img3;
  }

  return (
    <StyledMainPage>
      <Header setOption={setOption} />
      {modalImg && (
        <ModalImg
          setImagem={setImagem}
          imagem={imagem}
          setModalImg={setModalImg}
        />
      )}
      {option && <Modaloption setOption={setOption} />}
      <div className="div_img_nasa">
        <img src={newRover} alt="" />
      </div>
      {itens.length && (
        <h2 className="Heading2 text_Info">{`imagens do rover ${rover} tiradas sol:${sun}`}</h2>
      )}
      <ListPhotos
        setScrollPosition={setScrollPosition}
        setImagem={setImagem}
        setModalImg={setModalImg}
        setOption={setOption}
      />

      {scrollPosition > sizeMonitor * 2 && !modalImg ? (
        <a className="fogete" href="#header_ref">
          <FaFighterJet />
        </a>
      ) : (
        ""
      )}
      <span className="end"></span>
    </StyledMainPage>
  );
}
