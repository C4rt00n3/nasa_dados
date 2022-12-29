import { useContext } from "react";
import { Card } from "../../../Components/Card";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRovers";
import { StyledList } from "./styled";

interface iModalList {
  setModalImg: React.Dispatch<React.SetStateAction<boolean>>;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
  setImagem: React.Dispatch<React.SetStateAction<string>>;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

export function ListPhotos({
  setModalImg,
  setOption,
  setImagem,
  setScrollPosition,
}: iModalList) {
  const { itens, sun, rover } = useContext(ContextRovers);

  return (
    <StyledList>
      {itens.length ? (
        itens.map((element, i) => (
          <Card
            setScrollPosition={setScrollPosition}
            setImagem={setImagem}
            key={element.id}
            setModalImg={setModalImg}
            element={element}
            setOption={setOption}
          />
        ))
      ) : (
        <h1 className="Heading1">{`Não encontramos nemnhuma foto do rover  ${rover} do sol ${sun}`}</h1>
      )}
    </StyledList>
  );
}
