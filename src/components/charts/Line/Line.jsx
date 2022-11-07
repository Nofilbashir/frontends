import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Value", "Price"],
  [new Date(1997, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(1998, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(1999, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2000, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2001, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2002, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2003, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2004, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2005, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2006, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2007, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2008, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  [new Date(2009, 1, 1), 2000 * Math.random(),2000 * Math.random()],
  
];


export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function App() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      chartPackages={["corechart", "controls"]}
      controls={[
        {

          controlType: "DateRangeFilter",
          options: {
            filterColumnLabel: "Date",
            ui: { format: { pattern: "yyyy-MM" } },
          },
          controlPosition: "top",
        },
      ]}
    />
  );
}

