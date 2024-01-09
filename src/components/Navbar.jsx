import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {removeUser} from '../redux/slices/userSlice'
import rightArrow from '../assets/icons/direction-right.svg'
import logout from '../assets/icons/logout-1.svg'
import user from '../assets/icons/user.svg'
import heart from '../assets/icons/heart.svg'
import store from '../assets/icons/store.svg'

function Navbar() {
    const [isLogout, setIsLogot] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {username, first_name} = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(removeUser());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login')
    }
    useEffect(()=>{

    }, [username, first_name])
  return (
    <>
        <div className={isLogout ? 'fixed w-full h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => setIsLogot(false)}>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img src={logout} alt="logout" />
                <p className='text-base font-semibold text-center mt-3'>Вы действительно хотите выйти с приложения?</p>
                <button onClick={handleLogout} className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-5'>Выйти</button>
                <button onClick={() => setIsLogot(false)} className='w-80 bg-white text-indigo-600 block mx-auto my-0 mt-3'>Отмена</button>
            </div>
        </div>

        <section className='p-6 w-4/12'>
            <Link to='/profile' className='flex gap-x-3 items-center cursor-pointer'>
                <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                    <img src={user} alt="user" />
                </div>
                <div>
                    <p className='text-lg font-semibold'>{first_name}</p>
                    <p className='text-lg font-normal'>{username}</p>
                </div>
            </Link>
            <Link to='/favorite' className='flex gap-x-3 items-center mt-11 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <img src={heart} alt="Сердце" />
                    <p>Понравившиеся</p>
                </div>
                <img src={rightArrow} alt="Стрелка направо" />
            </Link>
            <Link to='/mystore' className='flex gap-x-3 items-center mt-5 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center'>
                        <img src={store} alt="мой склад" />
                    </div>
                    <p>Мои товары</p>
                </div>
                <img src={rightArrow} alt="Стрелка направо" />
            </Link>
            <div onClick={()=>setIsLogot(true)} className='flex gap-x-3 items-center mt-14 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center'>
                        <img src={logout} alt="выйти" />
                    </div>
                    <p>Выйти</p>
                </div>
                <img src={rightArrow} alt="Стрелка направо" />
            </div>
        </section>
    </>

  )
}

export default Navbar


