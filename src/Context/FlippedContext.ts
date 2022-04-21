import { createContext, Dispatch, SetStateAction } from "react";
import { noop } from "../utils";

interface FlippedContextProps {
  isFlipped: boolean;
  setIsFlipped: Dispatch<SetStateAction<boolean>>;
}

export const FlippedContext = createContext<FlippedContextProps>({
  isFlipped: false,
  setIsFlipped: noop,
});
