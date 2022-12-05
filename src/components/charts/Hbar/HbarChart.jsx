import React from "react";
import { Chart } from "react-google-charts";


export default function App(props) {
  const {data, title} = props

  const options = {
    title: title,
    hAxis: { title: "No of Rides" },
    vAxis: { title: "Days" },
    width: "100%",
    height: 400,
    bar: { groupWidth: "45%" },
    legend: { position: "none" },
  };
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
