import { createContext } from "react";

export interface AppContextType {
  crumbs: string[];
  capital: string[];
}

export const AppContext = createContext<AppContextType>({
  crumbs: [],
  capital: [],
});
