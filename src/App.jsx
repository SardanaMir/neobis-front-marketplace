
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MyStore from './pages/MyStore'
import MainScreen from './pages/MainScreen';
import FavoriteItems from './pages/FavoriteItems';
import Password from './Password'
import './App.css'

function App() {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.user.isAuth);

  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // console.log(isAuth)
  },[isAuth])

  return (
    <Routes>
      {
        isAuth ? (
          <>
            <Route path='/' element={<MainScreen/>} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/favorite' element={<FavoriteItems/>}/>
            <Route path='/mystore' element={<MyStore/>}/>
          </>
        ) : (
          <>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/password' element={<Password/>}/>
          </>
        )
      }
    </Routes>
  )
}

export default App


