import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { loginUser } from '../service/loginService';
export const Login = () => {
    const[alias, setAlias] = useState('');
    const[password, setPassword] = useState('');
    const[message ,setMessage] = useState('');
    const navigate = useNavigate();
    const loginComponentHelper = async (event)=>{
        event.preventDefault();
        const response = await loginUser(alias, password);
        if(response.status !== 'ok'){
          setMessage("Invalid Creds")
          navigate('/login', {replace: false, state : {alias, password, message}})
        }
        else{
          setMessage('');
          navigate('/');
          window.location.reload();
        }
    }
  return (
    <div className='container'>
    <h1>Login</h1>
    <h2>{message}</h2>
    <form onSubmit={loginComponentHelper}>
            <input
            value = {alias}
            onChange = {(e)=>setAlias(e.target.value)}
            type = 'text'
            placeholder='Alias/Username'
            /><br/>
            <input
            value = {password}
            onChange = {(e)=>setPassword(e.target.value)}
            type = 'password'
            placeholder='Password'
            /><br/>
            <input type="submit" value = "Login"/>
        </form>
        </div>
  )
}

export default Login