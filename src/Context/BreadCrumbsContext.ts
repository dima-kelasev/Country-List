import { createContext } from "react";

export interface BreadCrumbsType {
  crumbs: string[];
}

export const BreadCrumbsContext = createContext({
  crumbs: [],
});
