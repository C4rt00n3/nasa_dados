import { StyledHeader } from "./styled";
import Img from "../../Img/logo.svg";
import { BsList } from "react-icons/bs";
interface IPropsHeader {
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setOption }: IPropsHeader) {
  return (
    <StyledHeader id="header_ref">
      <img src={Img} alt="Espaço há mais" />
      <button
        onClick={() => setOption(true)}
        className="BsList"
        id="functions"
        type="button"
      >
        <BsList />
      </button>
    </StyledHeader>
  );
}
