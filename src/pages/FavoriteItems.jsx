import {useState, useRef, useEffect} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/use-Auth'; 
import ShowCardItem from '../components/ShowCardItem';
import ItemBlock from '../components/ItemBlock';
import BackToMain from '../components/BackToMain';
import mystore from '../mystore.json';

function FavoriteItems() {
    const [isModalOpen, setisModalOpen] = useState(false);
    // const [likedItems, setLikedItems] = useState([]);
    const [productCard, setProductCard] = useState('');
    const [likedItems, setLikedItems] = useState(Array(mystore.length).fill(false));
    const [isBlockShow, setIsBlockShow] = useState(true);

    let likedItemsArr = JSON.parse(localStorage.getItem('data')) || [];
    const isAuth = useAuth();
    if (isAuth.isAuth === false){
      return <Navigate to='/login'/>
    }
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
    //         console.log(likedItemsArr)
    //         localStorage.setItem('data', JSON.stringify(likedItemsArr));
    //         setIsBlockShow(false)
    //     }
    // }
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data')) || {};
        setLikedItems(data);
    },[]);

  return (
    <>
    <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => setisModalOpen(false)}>
        <ShowCardItem item={productCard}/>
    </div>
    <div className='flex h-screen'>
        <Navbar/>
        <div className='bg-gray-100 w-8/12'>
            <div className='max-w-2xl block my-0 mx-auto'>
                <BackToMain/>
                <h2 className='text-lg font-bold text-center'>Понравившиеся</h2>
            </div>
            {/* карточка товара */}
            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {likedItems.map((item, index) =>(
                    <div  className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer flex flex-col justify-between'>
                        <ItemBlock item={item} index={index} setProductCard={setProductCard} setisModalOpen={setisModalOpen}/>

                        {/* <div key={item.id} >
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <img onClick={() => likeItem(index, item)} src={likedItems[index] ?"src/assets/icons/heart-red.svg" : "src/assets/icons/heart-white.svg"}/>
                                <p className='text-xs text-gray-300'>100</p>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>


  )
}

export default FavoriteItems


