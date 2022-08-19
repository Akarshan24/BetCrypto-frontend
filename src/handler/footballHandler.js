import { DOMAIN_DEV } from "../constants"

export const getTournamentsHandler = async () => {
    const response = await fetch(DOMAIN_DEV + 'football/get-tournaments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    const data = await response.json();
    return data;
}
export const getMatchListForTournamentHandler = async (id) => {
    const response = await fetch(DOMAIN_DEV + `football/get-match-list?tournamentId=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    const data = await response.json();
    return data;
}
export const getMatchFromIdHandler = async (id) => {
    const response = await fetch(DOMAIN_DEV + `football/get-match-details?id=${id}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    const data = await response.json();
    return data;
}
export const getPoolsFromMatchHandler = async (id, slot) => {
    const response = await fetch(DOMAIN_DEV + `football/get-pools-for-match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: {
            id, slot
        }
    });
    const data = await response.json();
    return data;
}