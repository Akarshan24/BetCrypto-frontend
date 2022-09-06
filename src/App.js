import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import VerifyEmail from './components/verifyEmail';
import Profile from './components/profile';
import ChangePassword from './components/changePassword';
import Wallet from './components/wallet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser, logOutUser } from './features/user';
import { getUserDataFromToken } from './service/authService';
import { userLoggedIn, userLoggedOut } from './features/auth';
import PoolsList from './components/poolsList';
import { getMatchListForTournamentService, getTournamentsService } from './service/footballService';
import { addTournament } from './features/footballTournament';
import { addMatch } from './features/footballMatch';
import { OK } from './constants';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      dispatch(logInUser(getUserDataFromToken()));
      dispatch(userLoggedIn());
    }
    else {
      dispatch(logOutUser());
      dispatch(userLoggedOut());
    }
  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exaact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/verify-email/:alias" exact element={<VerifyEmail />} />
        <Route path="/change-password/:alias" exact element={<ChangePassword />} />
        <Route path="/wallets/:currency" exact element={<Wallet />} />
        <Route path="/poolsList/:tournamentId/:matchId" exact element={<PoolsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
