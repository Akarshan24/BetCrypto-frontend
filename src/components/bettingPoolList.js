import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { OK } from '../constants';
import Header from './header';
import { getMatchFromIdService, getPoolsFromMatchService } from '../service/footballService';
import { determineSlot } from '../utils/footballUtils';
const BettingPoolList = () => {
    const { matchId } = useParams();
    const [match, setMatch] = useState({});
    //const
    useEffect(() => {
        const loadData = async () => {
            var response = await getMatchFromIdService(matchId);
            if (response.status === OK) {
                setMatch(response.response)
                const slot = determineSlot(response.response.dateTime);
                response = await getPoolsFromMatchService(matchId, slot);
                if (response.status === OK) {
                    console.log("Pools--->", response.response);
                }
            }
        }
        loadData();
    }, [])
    return (
        <div>
            <Header />
            <div className='container'>
                <h3><img src={match.homeTeamCrest} width="80" height="80" />{match.homeTeam} v/s {match.awayTeam}<img src={match.awayTeamCrest} width="80" height="80" /></h3>
            </div>
        </div>
    )
}

export default BettingPoolList;