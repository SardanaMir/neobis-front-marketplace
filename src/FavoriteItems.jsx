import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import mystore from './mystore.json'

function FavoriteItems() {
    const [success, setSuccess] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);

    function showCard(e){
        e.preventDefault();
        setSuccess(true);
    }
    const closeProductCard = () =>{
        setisModalOpen(false);
    }
  return (
    <>
    <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => closeProductCard()}>
        <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            {/* <img className="" src={item.imgURL} alt="" />
            <p className='text-2xl text-indigo-600 font-semibold mt-4'>{showProductCard.price}</p>
            <p>Like</p>
            <p className='text-lg font-semibold mt-4'>{item.title}</p>
            <p className='text-sm text-gray-400 mt-4'>{item.description}</p> */}
            <p className='text-base font-semibold mt-4'>Детальная информация</p>
            {/* <p className='text-sm text-gray-400'>{item.details}</p> */}
        </div>
    </div>
    <div className='flex h-screen'>
        <Navbar/>
        <div className='bg-gray-100 w-8/12'>
            <div className='max-w-2xl block my-0 mx-auto'>
                <Link to='/main' className='flex pt-1.5	gap-x-1	'>
                    {/* link */}
                    <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer'>
                    <img src="src/assets/icons/arrow-left.svg" alt="" />
                    </div>
                    <p className='text-base	font-normal'>Назад</p>
                </Link>
                <h2 className='text-lg font-bold text-center'>Понравившиеся</h2>
            </div>
            {/* карточка товара */}
            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {mystore.map(item =>(
                    <div onClick={()=> setisModalOpen(true)} key={item.id} id={item.id} className='w-40 h-50 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                        <img src={item.imgURL} alt={item.title} />
                        <p className='text-sm font-semibold	'>{item.title}</p>
                        <p className='text-sm text-indigo-600 font-semibold	'>{item.price}$</p>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <img src="src/assets/icons/heart-red.svg"/>
                                <p className='text-xs text-gray-300'>100</p>
                            </div>
                            <img src="src/assets/icons/more-vertical.svg"/>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
    </>


  )
}

export default FavoriteItems


