import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import AddItemForm from './AddItemFrom';
function MainScreenHeader(){
    const [open, setOpen] = useState(false);
    const [addItem, setAddItem] = useState(false);
    const {username} = useSelector(state => state.user);

    return (    
        <header className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
                <img src="src/assets/img/logo.png" alt="" />
                <h2 className="text-xl font-semibold">MOBI MARKET</h2>
            </div>
            <div className="flex items-center gap-5">
                <button onClick={() => setAddItem(!addItem)} className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none'>Подать заявление</button>
                <div className='flex gap-x-3 items-center cursor-pointer'>
                    <div>
                        <p className='text-lg font-semibold'>Сардана</p>
                        <p className='text-lg font-normal'>{username}</p>
                    </div>
                    <div onClick={()=>setOpen(!open)} className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center relative'>
                        <img src="src/assets/icons/user.svg" alt="user" />
                    </div>
                </div>
            </div>
            {open && (
                <div className='absolute w-50 h-50 bg-white rounded-xl p-6 flex flex-col gap-5 right-0 mt-56'>
                    <Link to='/profile' className='text-sm text-indigo-600 font-semibold cursor-pointer'>Профиль</Link>
                    <Link to='/favorite' className='text-sm text-indigo-600 font-semibold cursor-pointer'>Понравившиеся</Link>
                    <Link to='/mystore' className='text-sm text-indigo-600 font-semibold cursor-pointer'>Мои товары</Link>
                </div>
            )}
            
            {addItem && (
            <div onClick={() => setAddItem(false)} className='fixed w-full h-full top-0 bg-black bg-opacity-50'>
                <AddItemForm/>
            </div>
            )}
        </header>
    )
}
export default MainScreenHeader