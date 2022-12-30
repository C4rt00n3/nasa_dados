import { useContext, useState } from "react";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRovers";
import { StyledDivCameras } from "./styled";
interface iElement {
  name: string;
  list: boolean;
}
interface iCameras {
  unique: iElement[];
}

export function Cameras({ unique }: iCameras) {
  const { rover, setIten, backup, filteCams, setCheck } =
    useContext(ContextRovers);

  function camsRovers() {
    if (rover === "Curiosity") {
      unique = [
        { name: "Navigation Camera", list: false },
        { name: "Mars Descent Imager", list: false },
        { name: "Mars Hand Lens Imager", list: false },
        { name: "Chemistry and Camera Complex", list: false },
        { name: "Mast Camera", list: false },
        { name: "Rear Hazard Avoidance Camera", list: false },
        { name: "Front Hazard Avoidance Camera", list: false },
      ];
    } else if (rover === "Opportunity" || rover === "Spirit") {
      unique = [
        { name: "Rear Hazard Avoidance Camera", list: false },
        { name: "Front Hazard Avoidance Camera", list: false },
        {
          name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
          list: false,
        },
        { name: "Panoramic Camera", list: false },
        { name: "Navigation Camera", list: false },
      ];
    }
  }

  camsRovers();

  function convertName(name: string) {
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

    return newName;
  }
  const [newUnique, setNewUnique] = useState(unique as iElement[]);

  function buttonFilter(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    element: iElement,
    i: number
  ) {
    const name = event.currentTarget.innerText;

    const newUniq = newUnique.filter((iten) => {
      if (iten.name !== element.name) {
        iten.list = false;
      }
      return iten;
    });

    if (event.currentTarget.className !== "blue") {
      element.list = true;

      const newArr = newUniq.filter((element) => element.name !== name);
      const arr = unique.filter((e) => e.name !== element.name);

      arr.splice(i, 0, element);
      newArr.splice(i, 0, element);

      unique = [...arr];
      console.log(unique);

      event.currentTarget.className = "blue";

      setNewUnique(newArr);

      filteCams(convertName(name));
      setCheck(false);
    } else if (event.currentTarget.className === "blue") {
      element.list = false;

      const newArr = newUniq.filter((element) => element.name !== name);
      const arr = unique.filter((e) => e.name !== element.name);
      newArr.splice(i, 0, element);
      arr.splice(i, 0, element);
      unique = [...arr];

      console.log(unique);
      setNewUnique(newArr);
      setCheck(true);
      setIten([...backup]);
    }

    console.log(unique);
  }

  function toRestore() {
    const newBackup = [...backup];

    setIten(newBackup);

    const obj = newUnique.map((element) => {
      if (element.list) {
        element.list = false;
      }

      return element;
    });

    setNewUnique(obj);
    setCheck(true);
  }

  return (
    <StyledDivCameras>
      <label className="Heading3" htmlFor="cameras_rovers">
        Cameras
      </label>
      <ul>
        <li onClick={() => toRestore()}>
          <p>Todos</p>
        </li>
        {newUnique.map((element, i) => (
          <li
            key={i}
            className={element.list ? "blue" : "normal"}
            onClick={(event) => buttonFilter(event, element, i)}
          >
            <p>{element.name}</p>
          </li>
        ))}
      </ul>
    </StyledDivCameras>
  );
}
