import {verifyLoginCredentialsAndGetJWT} from '../handler/loginHandler';
import {decodeToken} from 'react-jwt';
var ctr = 0;
export const loginUser = async(alias, password)=>{
    const data = await verifyLoginCredentialsAndGetJWT(alias, password)
    if(data.status === 'ok'){
        localStorage.setItem('jwt', data.token);
    }
    return data;
}
export const checkLogin = () =>  {
    ctr++;
    console.log(ctr)
    if(localStorage.getItem('jwt')!==null)
        return true;
    return false;

}
export const getUserDataFromToken = () =>{
    if(checkLogin())
        return decodeToken(localStorage.getItem('jwt'));
    return null;
}
export const LogOut = () =>{
 localStorage.removeItem('jwt');
}