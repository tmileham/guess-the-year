import React, { useEffect } from "react";
import Datetime from "react-datetime";
import "./YearPicker.css";

const YearPicker = ({ year, setYear }) => {
  useEffect(() => {});

  return (
    <>
      <Datetime
        dateFormat="YYYY"
        timeFormat={false}
        closeOnSelect={true}
        onChange={(date) => setYear(date.year())}
      />

      <h5>You selected year: {year}</h5>
    </>
  );
};

export default YearPicker;
