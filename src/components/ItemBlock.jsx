import { useEffect, useState } from 'react';
import mystore from '../mystore.json';

function ItemBlock({item, index, setProductCard, setisModalOpen}){
    const [likedItems, setLikedItems] = useState(Array(mystore.length).fill(false));

    let likedItemsArr = JSON.parse(localStorage.getItem('data')) || [];
    // const likeItem = (index, item) =>{
    //     const updatedLikedItems = [...likedItems];
    //     updatedLikedItems[index] = !updatedLikedItems[index];
    //     setLikedItems(updatedLikedItems);

    //     if (updatedLikedItems[index]) {
    //         // Если элемент был лайкнут, добавляем его в localStorage
    //         if (!likedItemsArr.some(prod => prod.id === item.id)) {
    //             likedItemsArr.push(item);
    //             localStorage.setItem('data', JSON.stringify(likedItemsArr));
    //         }
    //     } else {
    //         // Если элемент был разлайкнут, удаляем его из localStorage
    //         likedItemsArr = likedItemsArr.filter(prod => prod.id !== item.id);
    //         localStorage.setItem('data', JSON.stringify(likedItemsArr));
    //     }

    // }
    useEffect(() => {
        // const data = JSON.parse(localStorage.getItem('data')) || {};
        // const updatedLikedItems = mystore.map(item => data.some(likedItem => likedItem.id === item.id));
        // setLikedItems(updatedLikedItems);
    },[]);

    return(
        <div className="flex flex-col justify-between h-full" id={item.id}>
            <img src={item.product_image} alt={item.title} onClick={()=> (setProductCard(item), setisModalOpen(true))}/>
            <div>
                <p className='text-sm font-semibold'>{item.title}</p>
                <p className='text-sm text-indigo-600 font-semibold'>{item.price}<span>$</span></p>
                <div className='flex items-center'>
                    <img onClick={() => likeItem(index, item)} src={likedItems[index] ? "src/assets/icons/heart-red.svg" : "src/assets/icons/heart-white.svg"}/>
                    <p className='text-xs text-gray-300'>0</p>
                </div>
            </div>
        </div>
    )

}

export default ItemBlock