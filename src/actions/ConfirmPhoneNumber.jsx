import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function ConfirmPhoneNumber(){
    const [phoneNumber, setPhoneNumber] = useState('');
    const [success, setSuccess] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(phoneNumber)
        //endpoint to check phone number
        setSuccess(true)
    }
      
    return (
        <>

        <div className='fixed w-full h-full top-0 bg-black bg-opacity-50'>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col items-center top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl	font-bold'>Изменить номер телефона</h2>
                <div className='w-20 h-20 flex bg-indigo-600 rounded-2xl justify-center items-center mt-6'>
                    <img src="src/assets/icons/call.svg" alt="" />
                </div>
                <h2 className='text-xl mt-6'>Введите код из СМС</h2>
                <form onSubmit={handleSubmit} className='flex flex-col mt-6	'>
                    <input type="tel" className="text-3xl"/>
                    <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-6'>Далее</button>
                </form>
            </div>
        </div>
        
        </>



    )
}
export default AddPhoneNumber