import { useEffect, useState } from 'react';
import mystore from './mystore.json';

function ItemBlock(props){
    const [likedItems, setLikedItems] = useState(Array(mystore.length).fill(false));


    let likedItemsArr = JSON.parse(localStorage.getItem('data')) || [];

    const likeItem = (index, item) =>{
        const updatedLikedItems = [...likedItems];
        updatedLikedItems[index] = !updatedLikedItems[index];
        setLikedItems(updatedLikedItems);

        let a = likedItemsArr.every(prod =>{
            if(prod.id !== item.id){
                return true
            }
        }) 
        if (a === true){
            likedItemsArr.push(item);
        }
        localStorage.setItem('data', JSON.stringify(likedItemsArr));
    }
    
    return(
        <div className="flex flex-col justify-between h-full" id={props.item.id}>
            <img src={props.item.imgURL} alt={props.item.title} />
            <div>
                <p className='text-sm font-semibold'>{props.item.title}</p>
                <p className='text-sm text-indigo-600 font-semibold'>{props.item.price}$</p>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img onClick={() => likeItem(props.index, props.item)} src={likedItems[props.index] ?"src/assets/icons/heart-red.svg" : "src/assets/icons/heart-white.svg"}/>
                        <p className='text-xs text-gray-300'>100</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ItemBlock