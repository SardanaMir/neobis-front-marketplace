import React, { useState } from 'react';

function AddPhoneNumber(){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [success, setSuccess] = useState(false)
    const [code, setCode] = useState('');
    const [checkPhonNumError, setCheckPhonNumError] = useState(false)
    const [codeError, setCodeError] = useState(false)

    const handlePhoneNumber = (e) =>{
        e.preventDefault();
        const input = e.target.value;
        const formattedInput = input.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

        setPhoneNumber(formattedInput);
        //endpoint на проверку номера телефона 
        try{
            // setSuccess(true)
        }catch(err){
            setCheckPhonNumError(true)
        }
    }
    //проверка кода
    const handleChange = (e) =>{
        e.preventDefault()
        const input = e.target.value;
        const formattedInput = input.replace(/[^\d]/g, '');
        setCode(formattedInput);
        try{

        }catch(err){
            setCodeError(true)
        }
    }

    return (
        <>
        {success ? (
        <div className='fixed w-full h-full top-0 bg-black bg-opacity-50'>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl	font-bold'>Изменить номер телефона</h2>
                <div className='w-20 h-20 flex bg-indigo-600 rounded-2xl justify-center items-center mt-6 shadow-xl'>
                    <img src="src/assets/icons/call.svg" alt="" />
                </div>
                <h2 className='text-xl mt-6'>Введите код из СМС</h2>
                <form className='flex flex-col mt-2	items-center'>
                    <input type="text" value={code} onChange={handleChange} placeholder='oooo' maxLength={4} className="w-20 text-3xl tracking-widest block focus:outline-none"/>
                </form>
                <p className='text-slate-400 text-base mt-2'>Повторный запрос</p>
                <p>timer</p>
                {codeError && (<p className='text-base text-red-500 font-semibold text-center'>Неверный код</p>)}
                <p className='text-base text-red-500 font-semibold text-center'>Неверный код</p>
            </div>
        </div>
        ) : (
        <div className='fixed w-full h-full top-0 bg-black bg-opacity-50'>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl	font-bold'>Изменить номер телефона</h2>
                <div className='w-20 h-20 flex bg-indigo-600 rounded-2xl justify-center items-center mt-6 shadow-xl'>
                    <img src="src/assets/icons/call.svg" alt="" />
                </div>
                <h2 className='text-xl mt-6'>Введите номер телефона</h2>
                <p className='text-base text-gray-400 text-center'>Мы отправим вам СМС с кодом подтверждения</p>
                <form className='flex flex-col mt-6	items-center'>
                    <input type="text" onChange={handlePhoneNumber} value={phoneNumber} placeholder='(000) 000-0000' minLength={10} maxLength={10} className="text-3xl w-52 focus:outline-none" />
                    {checkPhonNumError && (<p className='text-base text-red-500 font-semibold text-center'>Данный номер уже зарегистрирован</p>)}
                    <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Далее</button>
                </form>
            </div>
        </div>
        )}
        </>



    )
}
export default AddPhoneNumber