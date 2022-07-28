import React from 'react'
import Header from './header';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser, setUserFromToken } from '../features/user';
import { OK, NOT_FOUND } from '../constants';
import { getUserDataFromToken, LoginService } from '../service/authService';
import { setVerifyEmailWindowMessage, userLoggedIn, setCodeSentMessage } from '../features/auth';
export const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.value);
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const loginComponentHelper = async (event) => {
    event.preventDefault();
    const response = await LoginService(alias, password);
    console.log(response);
    if (response.emailVerification === false && response.data.status === OK) {
      const user = getUserDataFromToken();
      dispatch(logInUser(user));
      dispatch(userLoggedIn());
      navigate('/');
      //window.location.reload();
    }
    else if (response.emailVerification === false && response.data.status === NOT_FOUND)
      setMessage('Invalid Creds')
    else {
      dispatch(setVerifyEmailWindowMessage({ data: "Please verify your email to Login." }))
      if (response.data.status === OK) {
        dispatch(setCodeSentMessage({ data: 'Code sent!' }));
        navigate('/verify-email/' + alias);
      }
      else {
        dispatch(setCodeSentMessage({ data: 'Please resend' }));
        navigate('/verify-email/' + alias);
      }
    }

  }
  return (
    <>
      <Header />
      {(!auth.isLoggedIn)
        ? <div className='container'>
          <h1>Login</h1>
          <h2>{message}</h2>
          <form onSubmit={loginComponentHelper}>
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
            <input type="submit" value="Login" />
          </form>
        </div>
        : <div>
          <h3>You are already Logged In!</h3>
        </div>
      }
    </>
  )
}

export default Login