import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { OK } from '../constants';
import Header from './header';

import BettingPoolList from './bettingPoolList';
import { useDispatch, useSelector } from 'react-redux';
import { getMatchFromIdService, getMatchListForTournamentService, getPoolsFromMatchService, getTournamentsService } from '../service/footballService';
import { addTournament } from '../features/footballTournament';
import { addMatch } from '../features/footballMatch';
const PoolsList = () => {
    const dispatch = useDispatch();
    const { matchId, tournamentId } = useParams();
    const [match, setMatch] = useState({});
    const [pools, setPools] = useState([]);
    const [megaPools, setMegaPools] = useState({});
    const [wtaPools, setWtaPools] = useState({});
    useEffect(() => {
        const loadData = async () => {
            const response = await getPoolsFromMatchService(matchId);
            setMatch(response.matchDetails);
            setPools(response.pools)
        };
        loadData();
    }, [])
    return (
        <div>
            <Header />
            <div className='container'>
                <h1><img src={match.homeTeamCrest} width="80" height="80" />{match.homeTeam} v/s {match.awayTeam}<img src={match.awayTeamCrest} width="80" height="80" /></h1>
                <h3>Mega Pools</h3>
                <BettingPoolList type="Mega" match={match} pools={pools.filter(pool => { if (pool.poolCapacity !== 2 && pool.poolCapacity !== 5) return pool; })} />
                <h3>Winner takes all</h3>
                <BettingPoolList type="WTA" match={match} pools={pools.filter(pool => { if (pool.poolCapacity === 2 || pool.poolCapacity === 5) return pool; })} />
            </div>
        </div>
    )
}

export default PoolsList;