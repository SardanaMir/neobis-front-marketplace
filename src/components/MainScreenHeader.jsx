import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useState, useRef} from 'react';
import AddItemForm from './AddItemFrom';
import { profileInfo, changeProfileInfo, myProducts } from '../api';
import { setUser } from '../redux/slices/userSlice';

function MainScreenHeader(){
    const [isModalOpen, setisModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [addItem, setAddItem] = useState(false);
    const {username, first_name} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const actionRef = useRef()
    const [userData, setUserData] = useState({
        first_name: '',
        last_name:'',
        email: '',
        DOB:'',
        phone_number:'',
        username:'',
        profile_image: ''
    });
    useEffect(()=>{
        const getUserInfo = async () => {
            try {
                const userInfo = await profileInfo(); 
                console.log(userInfo)
                setUserData(userInfo);
                const token = localStorage.getItem('accessToken');
                addUserData(userInfo.last_name, userInfo.first_name, userInfo.phone_number, userInfo.email, userInfo.username, userInfo.DOB, token);
            } catch (error) {
            console.error('Ошибка при загрузке данных пользователя', error);
            }
        }
        getUserInfo(); 

        const handleClickOutside = (event) =>{
            if(!event.composedPath().includes(actionRef.current)){
                setOpen(false);
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => document.body.removeEventListener('click', handleClickOutside)
    }, [])

    function addUserData(last_name, first_name, phone_number, email, username, DOB, token){
        dispatch(setUser({last_name, first_name, phone_number, email, username, DOB, token}));
    }

    return (    
        <header className="grid grid-cols-2">
            <div className="flex items-center gap-2.5">
                <img src="src/assets/img/logo.png" alt="" />
                <h2 className="text-xl font-semibold">MOBI MARKET</h2>
            </div>
            <div ref={actionRef} className="flex items-center gap-5 justify-end">
                <button onClick={() => setisModalOpen(true)} className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none'>Подать заявление</button>
                <div  onClick={()=>setOpen(!open)} className='flex gap-x-3 items-center cursor-pointer'>
                    <div>
                        <p className='text-lg font-semibold'>{first_name}</p>
                        <p className='text-lg font-normal'>{username}</p>
                    </div>
                    <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center relative'>
                        <img src="src/assets/icons/user.svg" alt="user" />
                    </div>
                </div>
            </div>
            {open && (
                <div  className='absolute w-50 h-50 bg-white rounded-xl p-6 flex flex-col gap-5 right-0 mt-20'>
                    <Link to='/profile' className='text-sm text-indigo-600 font-semibold cursor-pointer'>Профиль</Link>
                    <Link to='/favorite' className='text-sm text-indigo-600 font-semibold cursor-pointer'>Понравившиеся</Link>
                    <Link to='/mystore' className='text-sm text-indigo-600 font-semibold cursor-pointer'>Мои товары</Link>
                </div>
            )}
            <AddItemForm setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
        </header>
    )
}
export default MainScreenHeader