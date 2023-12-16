import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackToMain from '../components/BackToMain';
import { useAuth } from '../hooks/use-Auth'; 
import AddPhoneNumber from '../components/AddPhoneNumber'

function Profile(props) {
    const [username, setUsername] = useState('')
    const [success, setSuccess] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);

    const [userData, setUserData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        birthday:'',
        tel:'',
        username:'',
        // Другие поля пользователя
    });

    const isAuth = useAuth();
    if (isAuth.isAuth === false){
      return <Navigate to='/login'/>
    }

    useEffect(() => {
        // Загрузка данных пользователя при монтировании компонента
        fetchUserData(); // Реализуйте эту функцию для загрузки данных пользователя
    }, []);
    
    const fetchUserData = async () => {
    // Логика для загрузки данных пользователя с сервера
    try {
        const response = await fetch('https://mocki.io/v1/ee262848-b746-4487-b0c3-b04a0f3e163c'); 
        // Реализуйте эндпоинт для загрузки данных пользователя
        const userDataFromServer = await response.json();
        setUserData(userDataFromServer);
    } catch (error) {
        console.error('Ошибка при загрузке данных пользователя', error);
        }
    };
    
    const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/users/123', { // Замените на фактический ID пользователя
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        });
        const updatedUserData = await response.json();
        console.log('Данные пользователя успешно обновлены:', updatedUserData);
    } catch (error) {
        console.error('Ошибка при обновлении данных пользователя', error);
    }
    };

    const handleInputChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };
 
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
                    name='firstName' 
                    placeholder='Имя'
                    value={userData.firstName}
                    onChange={handleInputChange}
                    className='max-w-full h-11 pl-4	border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-t-xl'/>
                    <input 
                    type="text" 
                    id='lastName' 
                    name='lastName' 
                    placeholder='Фамилия'
                    value={userData.lastName}
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
                    name='birthday' 
                    placeholder='Дата рождения' 
                    value={userData.birthday}
                    onChange={handleInputChange}
                    className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-b-xl'/>
                    <AddPhoneNumber setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
                    <div className='max-w-full h-11 pl-4 mt-3 bg-white border-b border-solid border-gray-300 rounded-t-xl flex justify-between'>
                        <button onClick={()=>setisModalOpen(true)} className='text-indigo-600 font-semibold'>Добавить номер</button>
                        <input 
                        type="tel" 
                        name='tel'
                        placeholder='0(000)000 000' 
                        value={userData.tel}
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
                    {/* <button 
                    type="submit"
                    className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Сохранить</button> */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile


