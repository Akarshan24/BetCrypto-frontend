import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
import authReducer from './features/auth';
import footballReducer from './features/footballMatch';
import tournamentReducer from './features/footballTournament';
const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    footballMatch: footballReducer,
    footballTournament: tournamentReducer
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
