import { createContext } from "react";
import { iAuthContext } from "./types";

export const AuthApi = createContext({});

export function ProviderAuthApi({ children }: iAuthContext) {
  return <AuthApi.Provider value={{}}>{children}</AuthApi.Provider>;
}
