import React from 'react'
import './Login.css'
import {SiPlausibleanalytics} from 'react-icons/si'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login, reset } from '../../features/Auth/AuthSlice'
import Spinner from '../../components/Spinner/Spinner'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector((store)=>store.auth)

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        })

        const {email, password} = formData


        const onChange =(e)=>{
            setFormData((prevState)=>({...prevState, [e.target.name]:e.target.value}))
    
        }
        const onSubmit =(e)=>{
            e.preventDefault()
            const userData = {email:email, password:password}
            dispatch(login(userData))

        }

        useEffect(()=>{
            console.log('login')
            if(isError){
                toast.error(message)
            }
            if(isSuccess){
                navigate('/')
            }
            dispatch(reset())
        },[user, isError, isSuccess,message, dispatch, navigate])

    if(isLoading){
            return (
                <Spinner/>
            )
        }

  return (
    <section className='container'>
        <div className='left'>
            <div className="heading">
                <SiPlausibleanalytics className='icon'/>
                <h4> Analytics</h4>
            </div>
            <h3>Monitor your business on realtime dashboard</h3>
        </div>

        <div className='right'>
            <h2>Login to Your Account</h2>
        <form onSubmit={onSubmit} className='form'>
            <div className="form_group">
                <input type="email" id='email' name='email' value={email} placeholder='Enter Your Email' onChange={onChange}/>
            </div>
            <div className="form_group">
                <input type="password"  id='password' name='password' value={password} placeholder='Enter Your password' onChange={onChange}/>
            </div>
            <div className="form_group">
                <button type='submit' className='btn btn_form'>Login</button>
            </div>
        </form>
        </div>
    </section>
  )
}
 
export default Login