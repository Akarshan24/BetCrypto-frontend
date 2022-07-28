import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Header from './header';
import { INTERNAL_ERROR, OK } from '../constants';
import { setCodeSentMessage, setVerifyEmailWindowMessage, emailVerified } from '../features/auth';
import { VerifyEmailService, sendVerificationCodeToUser } from "../service/authService";
const VerifyEmail = () => {
  const { alias } = useParams();
  const auth = useSelector((state) => state.auth.value);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const verifyEmailHelper = async (event) => {
    event.preventDefault();
    const response = await VerifyEmailService(code, alias);
    if (response.status === INTERNAL_ERROR)
      dispatch(setVerifyEmailWindowMessage({ data: "Wrong Code" }))
    else {
      dispatch(emailVerified());
      nav('/login');
    }
  }
  const resendCode = async (event) => {
    event.preventDefault();
    dispatch(setCodeSentMessage({ data: "Sending Code..." }));
    const data = await sendVerificationCodeToUser(alias);
    if (data.status === OK)
      dispatch(setCodeSentMessage({ data: 'Code Sent!' }));
    else
      dispatch(setCodeSentMessage({ data: 'Please resend' }))
  }

  return (
    <>
      <Header />
      {
        (!auth.isEmailVerified && alias !== '')
          ? <><form onSubmit={verifyEmailHelper}>
            <h4>{auth.verifyEmailWindowMessage}</h4>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type='text'
              placeholder='Enter verification code'
            /><br />
            <p>{auth.codeSentMessage}</p>
            <input type="submit" value="Verify" />
          </form>
            <form onSubmit={resendCode}>
              <input type='submit' value="Resend Code" />
            </form></>
          : <div><h3>You don't have access to this page. This might mean your email is already verified or you haven't registered yet.</h3></div>
      }
    </>
  )
}
export default VerifyEmail;