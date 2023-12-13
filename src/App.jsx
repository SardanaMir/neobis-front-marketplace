
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/use-Auth';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MyStore from './pages/MyStore'
import MainScreen from './pages/MainScreen';
import FavoriteItems from './pages/FavoriteItems';
import Username from './components/UsernameInput';
import Password from './Password'
import './App.css'
import ItemBlockOfMyStore from './components/ItemBlockOfMyStore'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // const isAuth = useAuth();
  // if (isAuth.isAuth === false){
  //   return <Navigate to='/login'/>
  // }

  useEffect(() => {
    const pathname = location.pathname;
    localStorage.setItem('lastPath', pathname);
  }, [location]);

  // useEffect(() => {
  //   const lastPath = localStorage.getItem('lastPath');
  //   if (lastPath) {
  //     navigate(lastPath);
  //   }
  // }, [navigate]);

  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<MainScreen/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/mystore' element={<MyStore/>}/>
        <Route path='/favorite' element={<FavoriteItems/>}/>
        <Route path='/password' element={<Password/>}/>
    </Routes>
    {/* <ItemBlockOfMyStore/> */}
    </>
  )
}

export default App


