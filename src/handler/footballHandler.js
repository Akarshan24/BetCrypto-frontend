import { DOMAIN_DEV } from "../constants"

export const getTournamentsHandler = async () => {
    const response = await fetch(DOMAIN_DEV + 'football/get-tournaments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
export const getMatchListForTournamentHandler = async (id) => {
    const response = await fetch(DOMAIN_DEV + `football/get-match-list?tournamentId=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}