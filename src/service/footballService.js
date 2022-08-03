import { OK } from "../constants";
import { getTournamentsHandler, getMatchListForTournamentHandler } from "../handler/footballHandler"

export const getTournamentsService = async () => {
    const response = await getTournamentsHandler();
    return response;
}
export const getMatchListForTournamentService = async (id) => {
    const response = await getMatchListForTournamentHandler(id);
    return response;
} 