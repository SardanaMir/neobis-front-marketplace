import React, { useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router';
import Profile from './pages/Profile';


function ProfileComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(navigate)
  console.log(location)

  useEffect(() => {
    const pathname = location.pathname;
    localStorage.setItem('lastPath', pathname);
  }, [location]);

  useEffect(() => {
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath) {
      navigate(lastPath);
    }
  }, [navigate]);
  
  return (
    <Profile/>
  );
}


export default ProfileComponent;
