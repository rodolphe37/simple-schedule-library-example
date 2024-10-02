import React, { Fragment } from "react";

type params = {
  withList: boolean;
  setWithList: React.Dispatch<React.SetStateAction<boolean>>;
  withLegend: boolean;
  setWithLegend: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  locale: string;
  withDays: boolean;
  setWithDays:React.Dispatch<React.SetStateAction<boolean>>
};

const TestButtons = (props: params) => {


  return (
    <Fragment>
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap:"wrap",
          gap:"1.2em"
        }}
      >
        <button className={`${props.isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}
          style={{ background: props.withDays ? "#aaaaaa" : "#f9f9f9", color:"#000"}}
          onClick={() => props.setWithDays((prevState) => !prevState)}
        >
          {props.withDays ? "Without " : "With "}days of week number example
        </button>
        <button
          style={{ background: props.withList ? "#aaaaaa" : "#f9f9f9", color:"#000" }}
          onClick={() => props.setWithList((prevState) => !prevState)}
        >
          {props.withList ? "Without " : "With "}list example
        </button>
        <button
          style={{ background: props.withLegend ? "#aaaaaa" : "#f9f9f9" , color:"#000"}}
          onClick={() => props.setWithLegend((prevState) => !prevState)}
        >
          {props.withLegend ? "Without " : "With "}legend example
        </button>
        <button
          style={{ background: props.isDarkMode ? "#aaaaaa" : "#f9f9f9" , color:"#000"}}
          onClick={() => props.setIsDarkMode((prevState) => !prevState)}
        >
          {props.isDarkMode ? "Light " : "Dark "} mode example
        </button>
      </div>
      <p>
        {props.locale === "fr"
          ? "Les calendriers sont en mode clair sans aucune autres options par défaut"
          : "By default the schedules are in light mode without any other options"}
      </p>
    </Fragment>
  );
};

export default TestButtons;
