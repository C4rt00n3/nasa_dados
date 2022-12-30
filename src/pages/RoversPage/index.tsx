import { Header } from "../../Components/Header";
import { StyledMainPage } from "./styled";
import Img1 from "../../Img/curiosity.jpg";
import Img2 from "../../Img/opportunity.jpg";
import Img3 from "../../Img/spirit.jpg";

import { useContext, useEffect, useState } from "react";
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

  let unique = [
    { name: "Miniature Thermal Emission Spectrometer (Mini-TES)", list: false },
    { name: "Panoramic Camera", list: false },
    { name: "Navigation Camera", list: false },
    { name: "Mars Descent Imager", list: false },
    { name: "Mars Hand Lens Imager", list: false },
    { name: "Chemistry and Camera Complex", list: false },
    { name: "Mast Camera", list: false },
    { name: "Rear Hazard Avoidance Camera", list: false },
    { name: "Front Hazard Avoidance Camera", list: false },
  ];

  const { sun, rover, itens, check } = useContext(ContextRovers);

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
      {option && <Modaloption unique={unique} setOption={setOption} />}
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
      {check && <span className="end">testt</span>}
    </StyledMainPage>
  );
}
