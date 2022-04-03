import React, { useEffect } from "react";

import Header from "./Header";
import StartGame from "./StartGame";
import Configure from "./Configure";

const Mainmenu = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />

      <Configure />
      <StartGame />
    </>
  );
};

export default Mainmenu;
