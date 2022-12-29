import { useContext } from "react";
import { ContextRovers } from "../../../Context/ContextRovers/ContextRovers";
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
    } else if (name === "sum") {
      setPage(1);
      setSun(sun + 1);
      setIten([]);
      setBackup([]);
    }
  }

  function inputDaySolar(name: number) {
    setPage(1);
    setSun(name);
    setIten([]);
    setBackup([]);
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
          value={sun > 0 ? sun : ""}
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
