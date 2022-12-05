import React from 'react'
import './Header.css'
import {Link, useNavigate} from 'react-router-dom'
import {BiHome} from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/Auth/AuthSlice'



const Header = () => {
    const {user} = useSelector((store)=>store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onLogout=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Fori Analytics</Link>
            <BiHome/>
        </div>
        <ul>
       {user?
            (<li>
                <button className='btn' onClick={onLogout}> Logout </button>
            </li>)
            :(<div className='flex_row'>
            <li>
                <Link to='/login'>Login </Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            </div>)}
        </ul>
    </header>
  )
}

export default Header