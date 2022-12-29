import { createContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import {
  iAuthContext,
  IPhotosItem,
  IProviderValue,
  IRootObject,
} from "./types";

export const ContextRovers = createContext({} as IProviderValue);

export function ProviderContextRovers({ children }: iAuthContext) {
  const [itens, setIten] = useState([] as IPhotosItem[]);
  const [backup, setBackup] = useState([] as IPhotosItem[]);
  const [rover, setRover] = useState<string>("Curiosity");
  const [sun, setSun] = useState<number>(1000);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function Get() {
      try {
        const response: IRootObject = await api.get(
          `/rovers/${rover}/photos?`,
          {
            params: {
              sol: sun,
              api_key: "Rch4gMGLMCL8A7Pn9gWbvbeYI8NMUGazYaJitp7K",
              page: Number(page),
            },
          }
        );
        const { data } = response;
        const { photos } = data;
        if (photos.length) {
          const NewPhotos = [...itens, ...photos];
          setIten(NewPhotos);
          setBackup(NewPhotos);
        }
      } catch (error) {
        console.log(error);
      }
    }
    Get();
  }, [rover, sun, page]);

  useEffect(() => {
    const intersect = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTimeout(() => {
          setPage((pageInsedeState) => pageInsedeState + 1);
        }, 500);
      }
    });
    const end = document.querySelector(".end");
    if (end) {
      intersect.observe(end);
    }
    return () => intersect.disconnect();
  }, []);

  return (
    <ContextRovers.Provider
      value={{
        page,
        setPage,
        itens,
        setRover,
        setIten,
        backup,
        setBackup,
        setSun,
        sun,
        rover,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
}
