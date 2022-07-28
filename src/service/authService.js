import { sendVerificationCode, verifyLoginCredentialsAndGetJWT, saveUserDetails, updatePassword, checkEmailVerificationCode } from '../handler/authHandler';
import { decodeToken } from 'react-jwt';
import { OK, BAD_REQUEST, INTERNAL_ERROR, UNAUTHORIZED, FORBIDDEN, NOT_FOUND } from '../constants';
export const LoginService = async (alias, password) => {
    const response = await verifyLoginCredentialsAndGetJWT(alias, password)
    if (response.status === OK) {
        localStorage.setItem('jwt', response.message);
        return ({ data: response, emailVerification: false })    //everything ok!
    }
    else {
        if (response.status === FORBIDDEN) {
            const data = await sendVerificationCode(alias);
            return ({ data: data, emailVerification: true });
        }
        else {
            return ({ data: response, emailVerification: false }); // wrong creds
        }
    }

}
export const checkLogin = () => {

    if (localStorage.getItem('jwt') !== null)
        return true;
    return false;

}
export const getUserDataFromToken = () => {
    if (checkLogin())
        return decodeToken(localStorage.getItem('jwt'));
    return null;
}
export const LogOut = () => {
    localStorage.removeItem('jwt');
    //await window.location.reload();
}
export const VerifyEmailService = async (code, alias) => {
    const response = await checkEmailVerificationCode(code, alias);
    return response;
}
export const sendVerificationCodeToUser = async (alias) => {
    const response = await sendVerificationCode(alias);
    return response;
}
export const RegistrationService = async (email, alias, password, passcode) => {
    var response = await saveUserDetails(email, alias, password, passcode);
    const data = response;
    console.log("Registration response from server:", data);
    if (data.status === INTERNAL_ERROR) {
        return ({ data: data, emailVerification: false });
    }
    else {
        response = await sendVerificationCode(alias);
        return ({ data: response, emailVerification: true });
    }
}
export const changePasswordService = async (object) => {
    const { alias, code, password } = object;
    let response = await checkEmailVerificationCode(code, alias);
    if (response.status === OK) {
        response = await updatePassword(alias, password);
        if (response.status === FORBIDDEN) {
            LogOut();
        }
        return ({ status: response.status });
    }
    else {
        return ({ status: BAD_REQUEST, message: 'Wrong Code' });
    }
}