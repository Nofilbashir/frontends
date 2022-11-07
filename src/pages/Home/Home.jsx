import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import About from '../../components/homeComponents/about/About'
import Info from "../../components/homeComponents/info/Info"
import Pricing from "../../components/homeComponents/pricing/Pricing"
import { infoData } from '../../assets/data'

import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const {user} = useSelector((store)=>store.auth)

  return (
    <section className='home'>
      {/* banner  section */}
      <div className="banner">
          <div className="flex_column banner_left">
            <h2>Monitor your Business with realtime dashboard</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic quos itaque magnam distinctio odio, voluptatibus excepturi dolorem reprehenderit dolore.</p>
            <Link to='/dashboard' className='btn'>Explore</Link>
          </div>
          <div className="banner_right">
            <div className="graph1">
            <img className='' src={require('../../assets/db.png')} alt="" />
            </div>
            <div className='graph2'>
            <img src={require('../../assets/graph.png')} alt="" />
            </div>
          </div>
      </div>
      <div className="banner2">
        <About/>
        <div className="info">
          {infoData.map((element,i)=>{
           return <Info element={element} index={i}/>
          })}
        </div>
      </div>
      <Pricing/>
    </section>
  )
}

export default Home