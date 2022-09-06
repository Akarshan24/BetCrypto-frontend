import { OK } from "../constants";
import { getMatchFromIdHandler, getTournamentsHandler, getMatchListForTournamentHandler, getPoolsFromMatchHandler } from "../handler/footballHandler"

export const getTournamentsService = async () => {
    const response = await getTournamentsHandler();
    return response;
}
export const getMatchListForTournamentService = async (id) => {
    const response = await getMatchListForTournamentHandler(id);
    return response;
}
export const getMatchFromIdService = async (id) => {
    const response = await getMatchFromIdHandler(id);
    return response;
}
export const getPoolsFromMatchService = async (id) => {
    const response = await getPoolsFromMatchHandler(id);
    return response;
}