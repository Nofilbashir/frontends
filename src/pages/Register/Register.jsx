import React from 'react'
import { useState, useEffect } from 'react'
import {SiPlausibleanalytics} from 'react-icons/si'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { register, reset } from '../../features/Auth/AuthSlice'
import Spinner from '../../components/Spinner/Spinner'


const Register = () => {


    const [formData, setFormData] = useState(
        {name:'',
        email:'',
        password:'',
        confirmPassword:''
        })

        const {name, email, password, confirmPassword} = formData

        const onChange =(e)=>{
            setFormData((prevState)=>({...prevState, [e.target.name]:e.target.value}))
    
        }
        const onSubmit =(e)=>{
            e.preventDefault()
    
            if(password!== confirmPassword){
                toast.error('password do not match')
            }else{
                const userData = { name, email, password}
                dispatch(register(userData))
            }
        }

        const navigate = useNavigate()
        const dispatch = useDispatch()
        

        const {user, isLoading, isError, isSuccess, message} = useSelector((store)=>store.auth)

        useEffect(()=>{

            if(isError){
                toast.error(message)
            }
            if(isSuccess || user){
                navigate('/')
            }

            dispatch(reset())
        },[user, isError, isSuccess, message, navigate, dispatch])

        if(isLoading){
            return <Spinner/>
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
        <h2>Create Account</h2>
    <form onSubmit={onSubmit} className='form'>
       
        <div className="form_group">
                <input type="text"  id='name' name='name' value={name} placeholder='Enter Your Name' onChange={onChange}/>
            </div>
            <div className="form_group">
                <input type="email"  id='email' name='email' value={email} placeholder='Enter Your Email' onChange={onChange}/>
            </div>
            <div className="form_group">
                <input type="password"  id='password' name='password' value={password} placeholder='Enter Your password' onChange={onChange}/>
            </div>
            <div className="form_group">
                <input type="password" id='confirmPassword' name='confirmPassword' value={confirmPassword} placeholder='Confirm Your Password' onChange={onChange}/>
            </div>
            <div className="form_group">
                <button type='submit' className='btn btn_form'>Create Account</button>
            </div>
    </form>
    </div>
</section>


  )
}
 
export default Register