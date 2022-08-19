import { DOMAIN_DEV } from "../constants";

export const verifyLoginCredentialsAndGetJWT = async (alias, password) => {
    const response = await fetch(DOMAIN_DEV + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            alias, password
        })
    });
    const data = await response.json();
    return data;
}
export const checkEmailVerificationCode = async (code, alias) => {
    const response = await fetch(DOMAIN_DEV + 'auth/verify-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            code, alias
        })
    });
    const data = await response.json();
    return data;
}
export const saveUserDetails = async (email, alias, password, passcode) => {
    const response = await fetch(DOMAIN_DEV + 'auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            email, alias, password, passcode
        })
    });
    const data = await response.json();
    return data;
}
export const sendVerificationCode = async (alias) => {

    var response = await fetch(DOMAIN_DEV + 'auth/send-verification-code', {
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
export const updatePassword = async (alias, password) => {
    var response = await fetch(DOMAIN_DEV + 'auth/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('jwt'),
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            alias, password
        })
    });
    const data = await response.json();
    console.log(data);
    return data;
}