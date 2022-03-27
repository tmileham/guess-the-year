import React from "react";

import Header from "./Header";
import StartGame from "./components/quiz/StartGame";
import Configure from "./components/Configure";

const Home = () => {
  return (
    <>
      <Header />
      <StartGame />
      <Configure />
    </>
  );
};

export default Home;
