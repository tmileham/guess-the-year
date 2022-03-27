import React, { useState, useEffect } from "react";

import Header from "./Header";
import StartGame from "./StartGame";
import Configure from "./Configure";

const Mainmenu = () => {
  useEffect(() => {
    console.log("hi");
  }, []);
  return (
    <>
      <Header />

      <Configure />
      <StartGame />
    </>
  );
};

export default Mainmenu;
