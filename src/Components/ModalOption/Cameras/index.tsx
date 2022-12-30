import { useContext, useState } from "react";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRovers";
import { StyledDivCameras } from "./styled";
interface iElement {
  name: string;
  list: boolean;
  sigla: string;
}
export const unique = [
  {
    name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    list: false,
    sigla: "MINITES",
  },
  { name: "Panoramic Camera", list: false, sigla: "PANCAM" },
  { name: "Navigation Camera", list: false, sigla: "NAVCAM" },
  { name: "Mars Descent Imager", list: false, sigla: "MARDI" },
  { name: "Mars Hand Lens Imager", list: false, sigla: "MAHLI" },
  { name: "Chemistry and Camera Complex", list: false, sigla: "CHEMCAM" },
  { name: "Mast Camera", list: false, sigla: "MAST" },
  { name: "Rear Hazard Avoidance Camera", list: false, sigla: "RHAZ" },
  { name: "Front Hazard Avoidance Camera", list: false, sigla: "FHAZ" },

  { name: "Rover Up-Look Camera ", list: false, sigla: "EDL_RDCAM" },
  { name: "Rover Down-Look Camera", list: false, sigla: "EDL_RDCAM" },
  { name: "Descent Stage Down-Look Camera", list: false, sigla: "EDL_DDCAM" },
  { name: "Parachute Up-Look Camera A", list: false, sigla: "EDL_PUCAM1" },
  { name: "Parachute Up-Look Camera B", list: false, sigla: "EDL_PUCAM2" },
  { name: "Navigation Camera - Left", list: false, sigla: "NAVCAM_LEFT" },
  { name: "Navigation Camera - Right ", list: false, sigla: "NAVCAM_RIGHT" },
  { name: "Mast Camera Zoom - Right", list: false, sigla: "MCZ_RIGHT" },
  { name: "Mast Camera Zoom - Left", list: false, sigla: "MCZ_LEFT" },
  {
    name: "Front Hazard Avoidance Camera - Left",
    list: false,
    sigla: "FRONT_HAZCAM_LEFT_A",
  },
  {
    name: "Front Hazard Avoidance Camera - Right",
    list: false,
    sigla: "FRONT_HAZCAM_RIGHT_A ",
  },
  {
    name: "Rear Hazard Avoidance Camera - Left",
    list: false,
    sigla: "REAR_HAZCAM_LEFT ",
  },
  {
    name: "Rear Hazard Avoidance Camera - Right",
    list: false,
    sigla: "REAR_HAZCAM_RIGHT",
  },
  { name: "MEDA Skycam", list: false, sigla: "SKYCAM" },
  { name: "SHERLOC WATSON Camera ", list: false, sigla: "SHERLOC_WATSON " },
];

export function Cameras() {
  const dataUnique = localStorage.getItem("unique");

  let uniqueUse = [...unique];

  if (dataUnique) {
    uniqueUse = JSON.parse(dataUnique);
  }

  const { rover, setIten, backup, filteCams, setCheck, check } =
    useContext(ContextRovers);

  function camsRovers() {
    if (rover === "Curiosity") {
      const rovers = [
        "Navigation Camera",
        "Mars Descent Imager",
        "Mars Hand Lens Imager",
        "Chemistry and Camera Complex",
        "Mast Camera",
        "Rear Hazard Avoidance Camera",
        "Front Hazard Avoidance Camera",
      ];
      const listCams = unique.filter(
        (element) => rovers.some((e) => e === element.name) && element
      );

      uniqueUse = listCams;
    } else if (rover === "Opportunity" || rover === "Spirit") {
      const rovers = [
        "Rear Hazard Avoidance Camera",
        "Front Hazard Avoidance Camera",
        "Miniature Thermal Emission Spectrometer (Mini-TES)",
        "Panoramic Camera",
        "Navigation Camera",
      ];

      const listCams = unique.filter(
        (element) => rovers.some((e) => e === element.name) && element
      );

      uniqueUse = listCams;
    } else if (rover === "Perseverance") {
      const rovers = [
        "Rover Up-Look Camera ",
        "Rover Down-Look Camera",
        "Descent Stage Down-Look Camera",
        "Parachute Up-Look Camera A",
        "Parachute Up-Look Camera B",
        "Navigation Camera - Left",
        "Navigation Camera - Right ",
        "Mast Camera Zoom - Right",
        "Mast Camera Zoom - Left",
        "Front Hazard Avoidance Camera - Left",
        "Front Hazard Avoidance Camera - Right",
        "Rear Hazard Avoidance Camera - Left",
        "Rear Hazard Avoidance Camera - Right",
        "MEDA Skycam",
        "SHERLOC WATSON Camera ",
      ];

      const listCams = unique.filter(
        (element) => rovers.some((e) => e === element.name) && element
      );
      uniqueUse = listCams;
    }
  }
  camsRovers();

  const [newUnique, setNewUnique] = useState(uniqueUse as iElement[]);

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

      localStorage.setItem("unique", JSON.stringify(arr));

      newArr.splice(i, 0, element);

      uniqueUse = [...arr];

      event.currentTarget.className = "blue";

      setNewUnique(newArr);

      filteCams(element.sigla);
      setCheck(false);
    } else if (event.currentTarget.className === "blue") {
      element.list = false;

      const newArr = newUniq.filter((element) => element.name !== name);
      const arr = unique.filter((e) => e.name !== element.name);

      newArr.splice(i, 0, element);
      arr.splice(i, 0, element);

      uniqueUse = [...arr];

      localStorage.setItem("unique", JSON.stringify(arr));

      console.log(unique);

      setNewUnique(newArr);
      setCheck(true);
      setIten([...backup]);
    }
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
            className={!check && element.list ? "blue" : "normal"}
            onClick={(event) => buttonFilter(event, element, i)}
          >
            <p>{element.name}</p>
          </li>
        ))}
      </ul>
    </StyledDivCameras>
  );
}
