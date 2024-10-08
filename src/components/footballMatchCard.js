import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { padding } from '@mui/system';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
const FootballMatchCard = (props) => {
    const nav = useNavigate();
    const auth = useSelector(state => state.auth.value);
    const goToBettingPage = () => {
        //if (auth.isLoggedIn)
        nav(`/poolsList/${props.tournamentId}/${props.match.id}`); // pass date as well
        //nav('/login');
    }
    return (
        <div>
            <div className='container' style={{ marginTop: 30 }}>
                <h5>Time left for Slot { } : { }</h5>
            </div>
            <div className='container' style={{ marginTop: 80 }}>
                <h3>{props.match.homeTeam} <br />v/s<br /> {props.match.awayTeam}</h3>
            </div>
            <div className='container' style={{ marginBottom: 400, padding: 1 }}>
                <Button size='large' onClick={goToBettingPage}>Bet Now!</Button>
            </div>
        </div>
    )
}

export default FootballMatchCard