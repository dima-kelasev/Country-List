import { useState } from "react";
import { Content } from "./components/Content/Content";
import { FlippedContext } from "./Context/FlippedContext";

import "./style/index.scss";

export function App(): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);
  const flippedValue = {
    isFlipped,
    setIsFlipped,
  };

  return (
    <FlippedContext.Provider value={flippedValue}>
      <Content />
    </FlippedContext.Provider>
  );
}
