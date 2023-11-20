import { useSelector } from 'react-redux';
import { useState } from 'react';
import userReducer from './store';
import Navbar from './Navbar';

function Profile(props) {
    const [username, setUsername] = useState('')
    const [success, setSuccess] = useState('');

  return (
    <>
        <div className='bg-gray-100 w-8/12'>
            <div className='max-w-2xl block my-0 mx-auto'>
                <div className='flex pt-1.5	gap-x-1	'>
                    {/* link */}
                    <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer'>
                    <img src="src/assets/icons/arrow-left.svg" alt="" />
                    </div>
                    <p className='text-base	font-normal'>Назад</p>
                </div>
                <h2 className='text-lg font-bold text-center'>Регистрация</h2>
                <div className='flex flex-col items-center'>
                    <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center mt-24'>
                        <img src="src/assets/icons/user.svg" alt="" />
                    </div>
                    <p className='text-base font-semibold text-indigo-600'>Выбрать фотографию</p>
                </div>
                <form className='flex flex-col mt-8'>
                    <input type="text" id='firstName' placeholder='Имя' className='max-w-full h-11 pl-4	border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-t-xl'/>
                    <input type="text" id='lastName' placeholder='Фамилия' className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none'/>
                    <input type="text" id='username' placeholder='Логин' className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none'/>
                    <input type="text" id='birthday' placeholder='Дата рождения' className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-b-xl'/>
                    
                    <div className='max-w-full h-11 pl-4 mt-3 bg-white border-b border-solid border-gray-300 rounded-t-xl flex justify-between'>
                        <button className='text-indigo-600 font-semibold'>Добавить номер</button>
                        <input type="tel" placeholder='0(000)000 000' className='h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-t-xl'/>
                    </div>
                    
                    <input type="email" id='userEmail' placeholder='E-mail' className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-b-xl'/>
                    <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Сохранить</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Profile


