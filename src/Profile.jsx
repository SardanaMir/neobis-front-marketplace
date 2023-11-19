import { useSelector } from 'react-redux';
import { useState } from 'react';
import userReducer from './store';

function Profile() {
    const [username, setUsername] = useState('')
    const [success, setSuccess] = useState('');
    // const user = setUsername(useSelector(state => state.user.user[0].username))

    // try{
    //     setUsername(useSelector(state => state.user.user[0].username))
    // }catch(e){
    //     setUsername('')
    // }
    function addPhoneNumber(e){
        e.preventDefault();
        setSuccess(true);
    }

  return (
    <section className='flex h-screen'>

        <div className={success ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'}>

            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl	font-bold'>Изменить номер телефона</h2>
                <div className='w-20 h-20 flex bg-indigo-600 rounded-2xl justify-center items-center mt-6'>
                    <img src="src/assets/icons/call.svg" alt="" />
                </div>
                <h2 className='text-xl mt-6'>Введите номер телефона</h2>
                <p className='text-base text-gray-400 text-center'>Мы отправим вам СМС с кодом подтверждения</p>
                <form className='flex flex-col mt-6	'>
                    <input type="tel" placeholder='0(000)000 000' className='text-2xl'/>
                    <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Далее</button>
                </form>
            </div>
        </div>

        <div className='p-6 w-4/12'>
            <div className='flex gap-x-3 items-center'>
                <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                    <img src="src/assets/icons/user.svg" alt="" />
                </div>
                <div>
                    <p className='text-lg font-semibold'>Сардана</p>
                    <p className='text-lg font-normal'>{user}</p>
                </div>
            </div>
            <div className='flex gap-x-3 items-center mt-11 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <img src="src/assets/icons/heart.svg" alt="" />
                    <p>Понравившиеся</p>
                </div>
                <img src="src/assets/icons/direction-right.svg" alt="" />
            </div>
            <div className='flex gap-x-3 items-center mt-5 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center'>
                        <img src="src/assets/icons/store.svg" alt="" />
                    </div>
                    <p>Мои товары</p>
                </div>
                <img src="src/assets/icons/direction-right.svg" alt="" />
            </div>
            <div className='flex gap-x-3 items-center mt-14 justify-between cursor-pointer'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center'>
                        <img src="src/assets/icons/logout.svg" alt="" />
                    </div>
                    <p>Выйти</p>
                </div>
                <img src="src/assets/icons/direction-right.svg" alt="" />
            </div>
        </div>
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
                        <button onClick={addPhoneNumber} className='text-indigo-600 font-semibold'>Добавить номер</button>
                        <input type="tel" placeholder='0(000)000 000' className='h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-t-xl'/>
                    </div>
                    
                    <input type="email" id='userEmail' placeholder='E-mail' className='max-w-full h-11 pl-4 border-b border-solid border-gray-300 text-gray-600 focus:outline-none rounded-b-xl'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Profile


