import { StyledModalOption } from "./styled";
import logo from "../../Img/logo.svg";
import { useContext } from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { InputDiaSolar } from "./InputDia";
import { ContextRovers } from "../../Context/ContextRovers/ContextRovers";

interface IModalOption {
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modaloption({ setOption }: IModalOption) {
  const { setRover, setIten, backup, setBackup, setPage } =
    useContext(ContextRovers);
  const rovers = backup.map(({ camera }) => camera.full_name);

  const unique = rovers.filter((el, i, arr) => arr.indexOf(el) === i);
  unique.splice(0, 0, "Todos");

  function filterCam(name: string) {
    let newName = "";
    switch (name) {
      case "Front Hazard Avoidance Camera":
        newName = "FHAZ";
        break;
      case "Rear Hazard Avoidance Camera":
        newName = "RHAZ";
        break;
      case "Mast Camera":
        newName = "MAST";
        break;
      case "Chemistry and Camera Complex":
        newName = "CHEMCAM";
        break;
      case "Mars Hand Lens Imager":
        newName = "MAHLI";
        break;
      case "Mars Descent Imager":
        newName = "MARDI";
        break;
      case "Navigation Camera":
        newName = "NAVCAM";
        break;

      case "Panoramic Camera":
        newName = "PANCAM";
        break;
      case "Miniature Thermal Emission Spectrometer (Mini-TES)":
        newName = "MINITES";
        break;
    }
    const NewCam = backup.filter(({ camera }) => camera.name === newName);
    if (NewCam.length) {
      setIten(NewCam);
    } else {
      setIten(backup);
    }
  }
  function moveRover(string: string) {
    setIten([]);
    setBackup([]);
    setPage(1);
    setRover(string);
  }

  const { rover } = useContext(ContextRovers);
  return (
    <StyledModalOption onChange={() => setOption(false)}>
      <div className="header_modal">
        <img src={logo} alt="" />
        <button
          onClick={() => setOption(false)}
          className="close_modal"
          id="close_modal"
          type="button"
        >
          <BsFillBackspaceFill />
        </button>
      </div>
      <InputDiaSolar />
      <div className="cam_rovers">
        <label className="Heading3" htmlFor="cameras_rovers">
          Cameras
        </label>
        <select
          onChange={(event) => filterCam(event.target.value)}
          name="Cameras_rovers"
          id="cameras_rovers"
        >
          <option className="opHidden">Todos</option>
          {unique.map((element, i) => (
            <option key={i} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>

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
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
          <option value="Curiosity">Curiosity</option>
        </select>
      </div>
    </StyledModalOption>
  );
}
