import React from "react";
import { Chart } from "react-google-charts";



export default function App(props) {

  const {data, title} = props
  
const options = {
  
  title:title,
  hAxis: { title: "No of Rides" },
  vAxis: { title: "Distance Traveled" },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: "Times-Roman",
      color: "green",
      bold: true,
      italic: true,
      auraColor: "none",
    },
  },
};


  return (
    <Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
