{/* карточка товара, модальное окно */}
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import mystore from './mystore.json';
import { useDispatch } from 'react-redux';

function ShowCardItem(){
  const [item, setItem] = useState('');
  const [isModalOpen, setisModalOpen] = useState(false);
  
  const handleProductCard = (id) =>{
    setisModalOpen(true);    
    for(let i = 0; i < mystore.length; i++){
      if (mystore[i].id === id){
        setItem(mystore[i]) 
      }
    }
  }
  const closeProductCard = () =>{
    setisModalOpen(false);
  }
  
  return(
    <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => closeProductCard()}>
      <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img className="" src={item.imgURL} alt="" />
        <p className='text-2xl text-indigo-600 font-semibold mt-4'>{item.price}</p>
        <p>Like</p>
        <p className='text-lg font-semibold mt-4'>{item.title}</p>
        <p className='text-sm text-gray-400 mt-4'>{item.description}</p>
        <p className='text-base font-semibold mt-4'>Детальная информация</p>
        <p className='text-sm text-gray-400'>{item.details}</p>
      </div>
    </div>
  )
}
export default ShowCardItem