import {useState, useRef, useEffect} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ShowCardItem from '../components/ShowCardItem';
import ItemBlock from '../components/ItemBlock';
import BackToMain from '../components/BackToMain';

function FavoriteItems() {
    
  return (
    <>
    {/* <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => setisModalOpen(false)}>
        <ShowCardItem item={productCard}/>
    </div> */}
    <div className='flex h-screen'>
        <Navbar/>
        <div className='bg-gray-100 w-8/12'>
            <div className='max-w-2xl block my-0 mx-auto'>
                <BackToMain/>
                <h2 className='text-lg font-bold text-center'>Понравившиеся</h2>
            </div>
            {/* <div className='p-10 flex flex-wrap justify-center gap-4'>
                {likedItems.map((item, index) =>(
                    <div  className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer flex flex-col justify-between'>
                        <ItemBlock item={item} index={index} setProductCard={setProductCard} setisModalOpen={setisModalOpen}/>
                    </div>
                ))}
            </div> */}
            {/* <h2>
                Ничего нет
            </h2> */}
        </div>
    </div>
    </>


  )
}

export default FavoriteItems


