import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from'../../components/Spinner/Spinner'
import {reset } from '../../features/Goal/GoalSlice'
import "./Dashboard.css"
import VbarChart from "../../components/charts/Vbar/VbarChart"
import HbarChart from "../../components/charts/Hbar/HbarChart"
import Line from "../../components/charts/Line/Line"
import Area from "../../components/charts/Area/Area"
import Pie from "../../components/charts/Pie/pie"
import VBarCombo from "../../components/charts/VBarCombo/VBarCombo"
import Bubble from '../../components/charts/Bubble/Bubble'
import Card from '../../components/Card/Card'
import Combo from '../../components/charts/Combo/Combo'
import {getDemoData} from '../../features/Goal/GoalSlice'



const Dashboard = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((store)=>store.auth)
  const {goals, isLoading, isError, message}  =useSelector((store)=>store.goals)
  const {RevenueGraph,NoOfRidesGraph, PeakDays,LocationAndRevenue,LocationAndRides,ACC_data,Co2Saved ,FuelAndTreesGraph}=goals

 


  // useEffect(()=>{
  //   if(!user){
  //     navigate('/login')
  //   }else{
  //     dispatch(getDemoData())
  //   }

  //   return ()=>{
  //     dispatch(reset())
  //   }
  // },[user, navigate, dispatch])


  
  useEffect(()=>{
      dispatch(getDemoData())

  },[dispatch])

  return (
    <>
    <section className='dashboardContainer'>
    <div className="dashboardbox cardBox">
       <Card heading='Total Revenue' amount={`${ACC_data.totalCost.toFixed(2)} $`} />
       <Card heading='Average Reveue' amount={`${(ACC_data.totalCost/ACC_data.totalRides).toFixed(2)} $`}/>
       <Card heading='Total Rides' amount={ACC_data.totalRides}/>
       <Card heading='Users' amount={ACC_data.Num_of_users}/>
   
      </div>        
      <div className="dashboardbox">
        <Combo data={RevenueGraph} title = 'Revenue Stream Analysis'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>
      <div className="dashboardbox">
        <VbarChart data={LocationAndRevenue} title = 'Top 5 main business Locations'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>       
      <div className="dashboardbox">
        <Line data={NoOfRidesGraph} title = 'Ride Frequency Analysis'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>
      <div className="dashboardbox">
        <HbarChart data={PeakDays} title = 'Peak Business day Analysis'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>
      <div className="dashboardbox">
        <Bubble data={LocationAndRides} title = 'Top 5 main business Locations with respect to transaction frequency'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>
      {/* <div className="dashboardbox">
        <Pie/>
      </div> */}

      <div className="dashboardbox cardBox">
       <Card heading='Total CO2 Saved' amount={`${ACC_data.totaCo2Saved.toFixed(0)} Kg`}/>
       <Card heading='Total Fuel Saved' amount={`${ACC_data.totalFuelSaved.toFixed(0)} L`}/>
       <Card heading='Total Trees Relaxed' amount={` ${ACC_data.totalTreesRelaxed.toFixed(0)} Trees`}/>
      </div>


       <div className="dashboardbox">
        <Area data={Co2Saved} title='CO2 Impact Analysis'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>


      <div className="dashboardbox">
        <VBarCombo data={FuelAndTreesGraph} title='Fuel and Trees Relaxed'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex, eveniet sint inventore deleniti ipsum nam, ad reiciendis eos odio dolorem? Praesentium quis porro incidunt!</p>
      </div>

   
    </section>

    </>
  )
}

export default Dashboard


