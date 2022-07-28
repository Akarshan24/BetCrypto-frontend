import Header from './header';
import { useSelector } from 'react-redux';
const Home = () => {
  const auth = useSelector(state => state.auth.value);
  const user = useSelector(state => state.user.value);
  return (
    <>
      <Header />
      {auth.isLoggedIn ? <h2>Hey, {user.alias}</h2> : <p>Please LogIn/Register</p>}
    </>
  )
}
export default Home;