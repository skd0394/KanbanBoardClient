import './App.css';
import Board from './Components/Board';
import Error from "./Components/Error";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Profile from './Components/Profile';
import {Routes,Route} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GoogleLogin } from './Redux/action';

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(GoogleLogin())
  },[])

  return (
    <>
      {/* <PrivateRoute> */}
        <Header />
      {/* </PrivateRoute> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/board"
          element={
            <PrivateRoute>
              <Board />
            </PrivateRoute>
          }
        />
        {/* <Route path='/logout' element */}
      </Routes>
    </>
  );
}

export default App;
