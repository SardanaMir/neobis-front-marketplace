import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackToMain from '../components/BackToMain';
import { useAuth } from '../hooks/use-Auth'; 
import AddPhoneNumber from '../components/AddPhoneNumber'
import { profileInfo, changeProfileInfo } from '../api';

function Profile() {
    const [username, setUsername] = useState('')
    const [success, setSuccess] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);

    const [userData, setUserData] = useState({
        first_name: '',
        last_name:'',
        email: '',
        DOB:'',
        phone_number:'',
        username:'',
        profile_image: null
    });

    const fetchUserData = async () => {
        try {
            const response = await profileInfo(); 
            setUserData(response);
        } catch (error) {
            console.error('Ошибка при загрузке данных пользователя', error);
        }
    };
    useEffect(() => {
        // Загрузка данных пользователя при монтировании компонента
        fetchUserData(); // Реализуйте эту функцию для загрузки данных пользователя
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await changeProfileInfo(userData);
        } catch (error) {
            console.error('Ошибка при обновлении данных пользователя', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value, "password": "Qazwsx1234!", 
    })};
 
    return (
    <div className='flex h-screen'>
        <Navbar/>
        <div className='bg-gray-100 w-8/12'>
            <div className='max-w-2xl block my-0 mx-auto'>
                <BackToMain/>
                <h2 className='text-lg font-bold text-center'>Личный кабинет</h2>
                <div className='flex flex-col items-center'>
                    <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center mt-24'>
                        <img src="src/assets/icons/user.svg" alt="" />
                    </div>
                    <p className='text-base font-semibold text-indigo-600'>Выбрать фотографию</p>
                </div>
                <form onSubmit={handleFormSubmit}className='flex flex-col mt-8'>
                    <input 
                    type="text" 
                    id='firstName' 
                    name='first_name' 
                    placeholder='Имя'
                    value={userData.first_name}
                    onChange={handleInputChange}
                    className='max-w-full h-11 pl-4	border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-t-xl'/>
                    <input 
                    type="text" 
                    id='last_name' 
                    name='last_name' 
                    placeholder='Фамилия'
                    value={userData.last_name}
                    onChange={handleInputChange}
                    className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none'/>
                    <input 
                    type="text" 
                    id='username' 
                    name='username' 
                    placeholder='Логин' 
                    value={userData.username}
                    onChange={handleInputChange}
                    className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none'/>
                    <input 
                    type="text" 
                    id='birthday' 
                    name='DOB' 
                    placeholder='Дата рождения (YYYY-MM-DD)' 
                    value={userData.DOB}
                    onChange={handleInputChange}
                    className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-b-xl'/>
                    
                    <AddPhoneNumber setisModalOpen={setisModalOpen} isModalOpen={isModalOpen} userData={userData} setUserData={setUserData}/>
                    
                    <div className='max-w-full h-11 pl-4 mt-3 bg-white border-b border-solid border-gray-300 rounded-t-xl flex justify-between'>
                        <button onClick={()=>setisModalOpen(true)} className='text-indigo-600 font-semibold'>Добавить номер</button>
                        <input 
                        type="tel" 
                        name='tel'
                        placeholder='0(000)000 000' 
                        value={userData.phone_number}
                        onChange={handleInputChange}
                        className='h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-t-xl'/>
                    </div>
                    
                    <input 
                    type="email" 
                    id='userEmail' 
                    name='email'
                    placeholder='E-mail'
                    value={userData.email}
                    className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-b-xl'/>
                    <button 
                    type="submit"
                    className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Сохранить</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile


