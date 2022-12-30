import { createContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import {
  iAuthContext,
  IPhotosItem,
  IProviderValue,
  IRootObject,
} from "./types";

const keyApi = "Rch4gMGLMCL8A7Pn9gWbvbeYI8NMUGazYaJitp7K";

export const ContextRovers = createContext({} as IProviderValue);

export function ProviderContextRovers({ children }: iAuthContext) {
  const [itens, setIten] = useState([] as IPhotosItem[]);
  const [backup, setBackup] = useState([] as IPhotosItem[]);
  const [rover, setRover] = useState<string>("Curiosity");
  const [sun, setSun] = useState<number>(1000);
  const [page, setPage] = useState<number>(1);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    async function Get() {
      try {
        const response: IRootObject = await api.get(
          `/rovers/${rover}/photos?`,
          {
            params: {
              sol: sun,
              api_key: keyApi,
              page: Number(page),
            },
          }
        );
        const { data } = response;
        const { photos } = data;
        if (photos.length) {
          setIten([...itens, ...photos]);
          setBackup([...itens, ...photos]);
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
  }, [check]);

  async function filteCams(name: string) {
    try {
      const response: IRootObject = await api.get(`/rovers/${rover}/photos?`, {
        params: {
          sol: sun,
          api_key: keyApi,
          camera: name,
        },
      });
      const { data } = response;
      const { photos } = data;
      if (photos.length) {
        setIten(photos);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCheck(false);
    }
  }
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
        filteCams,
        setCheck,
        check,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
}
