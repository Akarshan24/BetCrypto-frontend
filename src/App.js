import './App.css';
import Header from './components/header';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exaact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>
      </Routes>
      {}
    </BrowserRouter>
  );
}

export default App;
