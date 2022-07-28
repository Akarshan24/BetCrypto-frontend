import React from 'react'
import Header from './header';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { OK } from '../constants';
import { sendVerificationCodeToUser } from '../service/authService';
const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const nav = useNavigate();
    const goToChangePassword = async (event) => {
        event.preventDefault();
        console.log('here')
        const res = await sendVerificationCodeToUser(user.alias);
        if (res.status === OK)
            nav('/change-password/' + user.alias);
    }
    return (
        <>
            <Header />
            <div>
                <h5>Alias : {user.alias}</h5><br />
                <h5>Email : {user.email}</h5>
                <button onClick={goToChangePassword}><h5>Change Password</h5></button>
                <Link to='/changePasscode'><h5>Change Passcode</h5></Link>
            </div>
        </>
    )
}

export default Profile