import React from "react";
import { Chart } from "react-google-charts";







export default function App(props) {

  const {data , title} = props

  const options = {
    chartArea: { height: "80%", width: "90%" },
  
   
    legend: { position: "none" },
    chart: {
      title: title,
      // subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  
    curveType: "function",
    legend: { position: "none" },
  };
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data.map((item,i)=>{
        if(i===0){
        return item
        }else{
        return [new Date(item[0]),item[1],item[2]]
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

