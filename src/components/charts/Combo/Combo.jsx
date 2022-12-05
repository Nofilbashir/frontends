import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux'




export default function App(props) {
  const {data, title} = props
  const {goals,isSucess} = useSelector((store)=>store.goals)
  // console.log("combo",props.data.RevenueGraph)

  const options = {
    chartArea: { height: "80%", width: "75%" },
    title: title,
    vAxis: { title: "Revenue" },
  
    hAxis: { slantedText: false },
    // vAxis: { viewWindow: { min: 0, max: 200 } },
    legend: { position: "none" },
  };

  return (
    <>
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data.map((item,i)=>{
        if(i===0){
        return ["Date","Total Revenue","Average Revenue"]
        }else{
        return [new Date(item[0]),item[1],item[2]]
        }   
      })}         
    // data={[['Date',"B"],[new Date("2020-11-01"),2]]}
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
    </>
  );
}





















