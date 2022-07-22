import React from 'react';
import {useState} from 'react';
const Register = () => {
    const [email, setEmail] = useState('');
    const [alias, setAlias] = useState('');
    const [password, setPassword] = useState('');
    const [passcode, setPasscode] = useState('');

    const registerUser = async (event)=>{
        event.preventDefault()
       const response =  await fetch('http://localhost:5000/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, alias, password, passcode
            })
        });
        const data = await response.json();
        console.log(data);
    }
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
            <input
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            type = 'text'
            placeholder='xyz@example.com'
            /><br/>
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
            <input
            value = {passcode}
            onChange = {(e)=>setPasscode(e.target.value)}
            type = 'text'
            placeholder='Payment Passcode'
            /><br/>
            <input type="submit" value = "Register"/>
        </form>
    </div>
  )
}

export default Register