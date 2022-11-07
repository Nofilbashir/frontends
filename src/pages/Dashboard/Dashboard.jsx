import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../../components/GoalForm/GoalForm'
import Spinner from'../../components/Spinner/Spinner'
import { getGoals, reset } from '../../features/Goal/GoalSlice'
import GoalItem from '../../components/GoalItem/GoalItem'
import "./Dashboard.css"
import VbarChart from "../../components/charts/Vbar/VbarChart"
import HbarChart from "../../components/charts/Hbar/HbarChart"
import Line from "../../components/charts/Line/Line"
import Pie from "../../components/charts/Pie/pie"
import Area from '../../components/charts/Area/Area'
import Card from '../../components/Card/Card'
import Combo from '../../components/charts/Combo/Combo'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((store)=>store.auth)
  const {goals, isLoading, isError, message}  =useSelector((store)=>store.goals)

  useEffect(()=>{
    console.log('dashboard')
    console.log(isError)
    
    if(!user){
      navigate('/login')
    }else{
      // dispatch(getGoals())
      // if(!isError){
      //   console.log(message)
      // }
    }

    return ()=>{
      dispatch(reset())
    }
  },[user, isError,message, navigate, dispatch])


  // if(isLoading){
  //   return(
  //     <Spinner/>
  //   )
  // }
  return (
    <>
    <section className='dashboardContainer'>
    {/* <div className="dashboardbox cardBox">
       <Card heading='Total Revenue' amount='391 $'/>
       <Card heading='Average Reveue' amount='12 $'/>
       <Card heading='Total Bookings' amount='168'/>
       <Card heading='Total hours Booked' amount='653'/>
   
      </div> */}
      <div className="dashboardbox">
        <h2>Heading</h2>
        <Combo/>
      </div>
      <div className="dashboardbox">
        <Line/>
      </div>
      <div className="dashboardbox">
        <HbarChart/>
      </div>
      <div className="dashboardbox">
        <VbarChart/>
      </div>
      <div className="dashboardbox">
        <Area/>
      </div>
      <div className="dashboardbox">
        <Line/>
      </div>
      <div className="dashboardbox">
        <Pie/>
      </div>

      {/* <div className="dashboardbox cardBox">
       <Card heading='Total Revenue' amount='391 $'/>
       <Card heading='Average Reveue' amount='12 $'/>
       <Card heading='Total Bookings' amount='168'/>
       <Card heading='Total hours Booked' amount='653'/>
      </div> */}


       <div className="dashboardbox">
        <Line/>
      </div>

      <div className="dashboardbox">
        <Line/>
      </div>

      <div className="dashboardbox">
        <HbarChart/>
      </div>
   
    </section>

    </>
  )
}

export default Dashboard