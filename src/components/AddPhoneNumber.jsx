import React, { useState, useCallback } from 'react';
import Timer from './Timer';
import { checkPhoneNumber, verifyCode } from '../api';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';

function AddPhoneNumber({setisModalOpen, isModalOpen, userData, setUserData}){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [success, setSuccess] = useState(false)
    const [code, setCode] = useState('');
    const dispatch = useDispatch();

    const updateCode = useCallback(
        debounce( async (code, phoneNumber)=>{
            const data = {"verification_code": code,"phone_number": phoneNumber }
            try{
                await verifyCode(data)
                setisModalOpen(false)
                toast.success('Номер телефона сохранен')
            }catch(err){
                setisModalOpen(true)
                toast.success('Неправильный код')
            }
        }, 1000),[]
    )

    const handlePhoneNumber = async (e) =>{
        e.preventDefault();
        console.log(phoneNumber)
        setUserData({ ...userData, "phone_number": phoneNumber, "profile_image": undefined});
        setPhoneNumber(phoneNumber)
        console.log(phoneNumber)
        const token = localStorage.getItem('accessToken')
        addUserData(userData.last_name, userData.first_name, phoneNumber, userData.email, userData.username, token);
        try{
            await checkPhoneNumber(userData);
            setSuccess(true)
        }catch(err){
            toast.error('Ошибка! Попробуйте позже');
        }
    }
    const handleChange = async (e) =>{
        e.preventDefault()
        const code = e.target.value;
        const formattedCode = code.replace(/[^\d]/g, '');
        setCode(formattedCode);
        updateCode(code, phoneNumber)
    }
    function addUserData(last_name, first_name, phone_number, email, username, token){
        dispatch(setUser({last_name, first_name, phone_number, email, username, token}));
    }
    return (
        <>
        {success ? (
        <div className={isModalOpen ? 'fixed w-full	h-full top-0 left-0	bg-black bg-opacity-50 ' : 'hidden'}>
            
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img onClick={() => {setisModalOpen(false), setSuccess(false), setPhoneNumber(''), setCode('')}}  className="absolute top-3 right-3 cursor-pointer" src="src/assets/icons/close.svg" alt="close" />
                <h2 className='text-2xl	font-bold'>Изменить номер телефона</h2>
                <div className='w-20 h-20 flex bg-indigo-600 rounded-2xl justify-center items-center mt-6 shadow-xl'>
                    <img src="src/assets/icons/call.svg" alt="" />
                </div>
                <h2 className='text-xl mt-6'>Введите код из СМС</h2>
                <form className='flex flex-col mt-2	items-center'>
                    <input type="text" value={code} onChange={handleChange} placeholder='oooo' maxLength={4} className="w-20 text-3xl tracking-widest block focus:outline-none"/>
                </form>
                <Timer userData={userData} setUserData={setUserData} code={code}/>
            </div>
        </div>
        ) : (
        <div className={isModalOpen ? 'fixed w-full	h-full top-0 left-0	bg-black bg-opacity-50' : 'hidden'}>
            <div className='w-96 min-h-fit bg-white p-8 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img onClick={() => {setisModalOpen(false), setSuccess(false), setPhoneNumber(''), setCode('')}}  className="absolute top-3 right-3 cursor-pointer" src="src/assets/icons/close.svg" alt="close" />
                <h2 className='text-2xl	font-bold'>Изменить номер телефона</h2>
                <div className='w-20 h-20 flex bg-indigo-600 rounded-2xl justify-center items-center mt-6 shadow-xl'>
                    <img src="src/assets/icons/call.svg" alt="" />
                </div>
                <h2 className='text-xl mt-6'>Введите номер телефона</h2>
                <p className='text-base text-gray-400 text-center'>Мы отправим вам СМС с кодом подтверждения</p>
                <form className='flex flex-col mt-6	items-center'>
                    <input 
                    type="text" 
                    name="phone_number"
                    onChange={(e)=> setPhoneNumber(e.target.value)} 
                    placeholder='(000) 000-0000' 
                    minLength={10} 
                    maxLength={10} 
                    className="text-3xl w-52 focus:outline-none"      
                    />
                    <button 
                    onClick={handlePhoneNumber}  
                    className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Далее</button>
                </form>
            </div>
        </div>
        )}
        </>



    )
}
export default AddPhoneNumber