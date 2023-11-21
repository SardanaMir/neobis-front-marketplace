import { useSelector } from 'react-redux';
import { useState } from 'react';
import userReducer from './store';
import Profile from './Profile';
import MyStore from './MyStore';
import {Link} from 'react-router-dom';


function Navbar() {
    const [profile, setProfile] = useState(false);
    const [mystore, setMystore] = useState(false);
    const [isLogout, setIsLogot] = useState(false);


    const handleProfile = (e) =>{
        e.preventDefault();
        setProfile(true)
    }
    
    const showMyStore = (e) =>{
        e.preventDefault();
        setMystore(true)
    }

  return (
    <>
        <div className={isLogout ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => setIsLogot(false)}>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img src="src/assets/icons/logout-1.svg" alt="logout" />
                <p className='text-base font-semibold text-center mt-3'>Вы действительно хотите выйти с приложения?</p>
                <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-5'>Выйти</button>
                <button onClick={() => setIsLogot(false)} className='w-80 bg-white text-indigo-600 block mx-auto my-0 mt-3'>Отмена</button>
            </div>
        </div>

        <section className='p-6 w-4/12'>
            <Link to='/profile' className='flex gap-x-3 items-center cursor-pointer'>
                <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                    <img src="src/assets/icons/user.svg" alt="user" />
                </div>
                <div>
                    <p className='text-lg font-semibold'>Сардана</p>
                    <p className='text-lg font-normal'>sardana</p>
                </div>
            </Link>
            <div className='flex gap-x-3 items-center mt-11 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <img src="src/assets/icons/heart.svg" alt="" />
                    <p>Понравившиеся</p>
                </div>
                <img src="src/assets/icons/direction-right.svg" alt="" />
            </div>
            <Link to='/mystore' className='flex gap-x-3 items-center mt-5 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center'>
                        <img src="src/assets/icons/store.svg" alt="" />
                    </div>
                    <p>Мои товары</p>
                </div>
                <img src="src/assets/icons/direction-right.svg" alt="" />
            </Link>
            <div onClick={()=>setIsLogot(true)} className='flex gap-x-3 items-center mt-14 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center'>
                        <img src="src/assets/icons/logout.svg" alt="" />
                    </div>
                    <p>Выйти</p>
                </div>
                <img src="src/assets/icons/direction-right.svg" alt="" />
            </div>
        </section>
    </>

  )
}

export default Navbar


