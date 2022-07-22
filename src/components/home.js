import { checkLogin, getUserDataFromToken } from '../service/loginService';
const Home = () => {
  return (
    <>
    {checkLogin()?<h2>Hey, {getUserDataFromToken().alias}</h2>:<p>Please LogIn/Register</p>}
    </>
  )
}
export default Home;