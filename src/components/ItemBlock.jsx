import { useState } from 'react';
import { likeProduct, unlikeProduct, myFavoriteProducts } from '../api';
import { useSelector, useDispatch } from 'react-redux';
import {updateLikeStatus} from '../redux/slices/productsSlice';

function ItemBlock({item, index, setProductCard, setisModalOpen}){
    const faveProducts = useSelector(state => state.myProducts.likedItems);
    const allProducts = useSelector(state => state.myProducts.items);
    const dispatch = useDispatch()

    const likeHandle = async (id, likeStatus) =>{
        if (likeStatus){
            await unlikeProduct(id);
        }else{
            await likeProduct(id);
        }
        dispatch(updateLikeStatus(id, likeStatus))
        console.log('store обновлен')
    }
    
    return(
        <div className="flex flex-col justify-between h-full" key={index}>
            <img src={item.product_image} alt={item.title} onClick={()=> (setProductCard(item), setisModalOpen(true))}/>
            <div>
                <p className='text-sm font-semibold'>{item.title}</p>
                <p className='text-sm text-indigo-600 font-semibold'>{item.price}<span>$</span></p>
                <div className='flex items-center'>
                    <img onClick={() => likeHandle(item.id, item.likeStatus)} src={item.likeStatus ? "src/assets/icons/heart-red.svg" : "src/assets/icons/heart-white.svg"}/>
                    <p className='text-xs text-gray-300'>{item.likes_count}</p>
                </div>
            </div>
        </div>
    )

}

export default ItemBlock