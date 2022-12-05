import React from "react";
import { Chart } from "react-google-charts";



export default function App(props) {
  const {data, title} = props

      
      const options = {

        legend: { position: "none" },
        chart: {
          title: title,
          // subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
