import React from "react";
import { Chart } from "react-google-charts";






export default function App(props) {

  const {data, title} = props


  const options = {
    chartArea: { height: "80%", width: "75%" },
  
    title: title,
    hAxis: { slantedText: false },
    // hAxis: { title: "No of Rides" },
    vAxis: { title: "No of Transactions/ Rides" },
  
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data.map((item,i)=>{
        if(i===0){
        return item
        }else{
        return [new Date(item[0]),item[1]]
        }
      })}
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
      ]
    }
    />
  );
}

