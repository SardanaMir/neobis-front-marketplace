import {Link} from 'react-router-dom';
import React from 'react';
import arrowLeft from '../assets/icons/arrow-left.svg'

function BackToMain(){
    return (
        <Link to='/' className='flex pt-1.5	gap-x-1	'>
            <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer'>
                <img src={arrowLeft} alt="arrowLeft" />
            </div>
            <p className='text-base	font-normal'>Назад</p>
        </Link>
    )
}
export default BackToMain