import { StyledModalOption } from "./styled";
import logo from "../../Img/logo.svg";
import { useContext } from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { InputDiaSolar } from "./InputDia";
import { ContextRovers } from "../../Context/ContextRovers/ContextRovers";
import { Cameras } from "./Cameras";

interface IModalOption {
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modaloption({ setOption }: IModalOption) {
  const { setRover, setIten, setBackup, setPage } = useContext(ContextRovers);

  function moveRover(string: string) {
    setIten([]);
    setBackup([]);
    setPage(1);
    setRover(string);
  }
  function close() {
    setOption(false);
  }

  const { rover } = useContext(ContextRovers);
  return (
    <StyledModalOption onChange={() => setOption(false)}>
      <div className="header_modal">
        <img src={logo} alt="Espaço há mais" />
        <button
          onClick={() => close()}
          className="close_modal"
          id="close_modal"
          type="button"
        >
          <BsFillBackspaceFill />
        </button>
      </div>
      <InputDiaSolar />
      <div className="rovers">
        <label className="Heading3" htmlFor="rovers">
          Rovers
        </label>
        <select
          onChange={(event) => moveRover(event.target.value)}
          name="rovers"
          id="rovers"
        >
          <option className="opHidden">{rover}</option>
          <option className="oppt" value="Opportunity">
            Opportunity
          </option>
          <option className="oppt" value="Spirit">
            Spirit
          </option>
          <option className="oppt" value="Curiosity">
            Curiosity
          </option>
          <option className="oppt" value="Perseverance">
            Perseveranc
          </option>
        </select>

        <Cameras />
      </div>
    </StyledModalOption>
  );
}
