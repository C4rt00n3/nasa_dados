import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRovers";
import { unique } from "../Cameras";
import { StyledInptSolar } from "./styled";

export function InputDiaSolar() {
  const { setSun, sun, setPage, setIten, setBackup } =
    useContext(ContextRovers);
  function daySol(name: string) {
    if (name === "sub") {
      setPage(1);
      setSun(sun - 1);
      setIten([]);
      setBackup([]);
      localStorage.setItem("unique", JSON.stringify(unique));
    } else if (name === "sum") {
      setPage(1);
      setSun(sun + 1);
      setIten([]);
      setBackup([]);

      localStorage.setItem("unique", JSON.stringify(unique));
    }
  }

  function inputDaySolar(name: number) {
    setSun(name);
    setIten([]);
    setBackup([]);
    setPage(1);
  }
  return (
    <StyledInptSolar>
      <div>
        <p className="Heading3">Sol :</p>

        <button onClick={() => daySol("sum")} type="button" className="sum">
          +
        </button>

        <input
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            inputDaySolar(Number(event.currentTarget.value))
          }
          value={sun}
          placeholder="1000"
          type="number"
        />

        <button onClick={() => daySol("sub")} type="button" className="sub">
          -
        </button>
      </div>
    </StyledInptSolar>
  );
}
