import { DOMAIN_DEV } from "../constants";

export const getWalletBalancesHandler = async (alias) => {
    var response = await fetch(DOMAIN_DEV + 'token/get-wallet-balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': localStorage.getItem('jwt')
        },
        body: JSON.stringify({
            alias
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export const createWalletsHandler = async (alias) => {
    var response = await fetch(DOMAIN_DEV + 'token/create-wallets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            alias
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}
