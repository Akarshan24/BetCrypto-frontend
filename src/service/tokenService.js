import { INTERNAL_ERROR, OK } from "../constants";
import { createWalletsHandler, getWalletBalancesHandler } from "../handler/tokenHandler"

export const createWalletsService = async (alias) => {
    console.log("Here")
    const response = await createWalletsHandler(alias);
    if (response.status === INTERNAL_ERROR) {
        console.log("Can't create wallets:", response.message);
    }
    console.log(response);
    return response;
}
export const getWalletBalancesService = async (alias) => {
    // return ({ status: OK, balances: { BTC: 1.100 } })
    const response = await getWalletBalancesHandler(alias);
    if (response.status === INTERNAL_ERROR) {
        console.log("Can't fetch balance:", response.message);
    }
    return response;
}
export const load = async (isLoggedIn, alias) => {
    console.log('load')
    if (isLoggedIn) {
        const response = await getWalletBalancesService(alias);
        if (response.status === OK) {
            for (let x in response.balances) {
                localStorage.setItem(x, response.balances[x]);
            }
        }
        window.location.reload();
    }
}
