import React from "react";

import { Link } from "react-router-dom";

const Configure = () => {
  return (
    <>
      <p>Select a question set:</p>
      <div className="currentQuestionSet">Random</div>
      <Link to="/configure">Select your own movies</Link>
    </>
  );
};

export default Configure;
