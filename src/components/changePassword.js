import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OK, FORBIDDEN } from '../constants';
import { useNavigate } from 'react-router-dom';
import { LogOut, changePasswordService } from '../service/authService';
import { logOutUser } from '../features/user';
import { userLoggedOut } from '../features/auth';
const ChangePassword = () => {
    const user = useSelector(state => state.user.value);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [render, setRender] = useState(false);
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [message, setMessage] = useState('');
    const changePasswordComponentHelper = async (event) => {
        event.preventDefault();
        if (password !== confirm)
            setMessage("Passwords don't match!");
        else {
            const response = await changePasswordService({ alias: user.alias, code, password });
            console.log("Password change response:", response);
            if (response.status === OK) {
                await LogOut();
                dispatch(logOutUser());
                dispatch(userLoggedOut());
            }
            else if (response.status === FORBIDDEN)
                nav('/login');
            else {
                setMessage(response.message);
            }

        }
    }
    useEffect(() => {
        if (localStorage.getItem('jwt'))
            setRender(true);
    })
    return (
        <>
            {render
                ? <form onSubmit={changePasswordComponentHelper}>
                    {message}
                    <input
                        placeholder="Verification Code"
                        type='text'
                        value={code}
                        onChange={(e) => { setCode(e.target.value); }}
                    /><br />
                    <input
                        placeholder="New Password"
                        type='password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                    /><br />
                    <input
                        placeholder="Confirm Password"
                        type='password'
                        value={confirm}
                        onChange={(e) => { setConfirm(e.target.value); }}
                    /><br />
                    <input
                        type='submit'
                        value='Submit'
                    /><br />
                </form >
                : <h2>Please LogIn/Register</h2>
            }
        </>
    )
}

export default ChangePassword