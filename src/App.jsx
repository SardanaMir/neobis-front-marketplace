import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Register from './Register';
import Password from './Password';
import Profile from './Profile';
import MyStore from './MyStore'
import Navbar from './Navbar';
import MainScreen from './MainScreen';
import ItemBlock from './ItemBlock';
import FavoriteItems from './FavoriteItems';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/main' element={<MainScreen/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/mystore' element={<MyStore/>}/>
          <Route path='/favorite' element={<FavoriteItems/>}/>
        </Routes>
      </Router>

    </>

  )
}

export default App


