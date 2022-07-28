import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';
import { setVerifyEmailWindowMessage, setCodeSentMessage } from '../features/auth';
import { RegistrationService } from '../service/authService'
import { createWalletsService } from '../service/tokenService'
import { OK } from '../constants';
const Register = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.value);
    const [email, setEmail] = useState('');
    const [alias, setAlias] = useState('');
    const [password, setPassword] = useState('');
    const [passcode, setPasscode] = useState('');
    const [message, setMessage] = useState('');
    const registerComponentHelper = async (event) => {
        event.preventDefault();
        const response = await RegistrationService(email, alias, password, passcode);
        if (response.emailVerification === false) // registration failed so set message.
            setMessage(response.data.message)
        else { // registration successful
            const res = await createWalletsService(alias);
            console.log(res);
            dispatch(setVerifyEmailWindowMessage({ data: 'Please verify your email.' }));
            if (response.data.status === OK) { //'ok' means email was sent successfully
                dispatch(setCodeSentMessage({ data: 'Code Sent!' }));
                nav('/verify-email/' + alias);
            }
            else {
                dispatch(setCodeSentMessage({ data: 'Code not sent' }));
                nav('/verify-email/' + alias);
            }
        }

    }
    return (
        <>
            <Header />
            {(!auth.isLoggedIn)
                ? <div>
                    <h1>Register</h1>
                    <p>{message}</p>
                    <form onSubmit={registerComponentHelper}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='text'
                            placeholder='xyz@example.com'
                        /><br />
                        <input
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            type='text'
                            placeholder='Alias/Username'
                        /><br />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Password'
                        /><br />
                        <input
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                            type='text'
                            placeholder='Payment Passcode'
                        /><br />
                        <input type="submit" value="Register" />
                    </form>
                </div>
                : <div><h3>You are already Logged In!</h3></div>
            }
        </>
    )
}

export default Register