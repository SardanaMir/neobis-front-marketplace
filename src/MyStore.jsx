import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';

function MyStore() {
    const [success, setSuccess] = useState('');

    function showCard(e){
        e.preventDefault();
        setSuccess(true);
    }
  return (
    <div className='bg-gray-100 w-8/12'>
        <div className='max-w-2xl block my-0 mx-auto'>
            <div className='flex pt-1.5	gap-x-1	'>
                {/* link */}
                <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer'>
                <img src="src/assets/icons/arrow-left.svg" alt="" />
                </div>
                <p className='text-base	font-normal'>Назад</p>
            </div>
            <h2 className='text-lg font-bold text-center'>Мои товары</h2>
        </div>
        {/* карточка товара */}
        <div onClick={showCard} className='p-10'>
            <div className='w-40 h-48 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                <img src="src/assets/img/image 2.jpg" alt="" />
                <p className='text-sm font-semibold	'>BMW M4 Coupe: A Two-Door</p>
                <p className='text-sm text-indigo-600 font-semibold	' >20 000$</p>
                <div>Like</div>
            </div>
        </div>
    </div>
  )
}

export default MyStore


