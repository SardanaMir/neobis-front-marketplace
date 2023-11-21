import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import mystore from './mystore.json';
import ShowCardItem from './ShowCardItem';
import { useDispatch } from 'react-redux';
import {handleProductCard} from './store/cardSlice';
    
function MainScreen() {

    const [isModalOpen, setisModalOpen] = useState(false);
    const [item, setItem] = useState('');
    const dispatch = useDispatch();
    const [likedItems, setLikedItems] = useState(Array(mystore.length).fill(false));

    // const showProductCard = (id) => dispatch(handleProductCard(id))        
    function showProductCard(id){
        return dispatch(handleProductCard(id))      
    }
    
    // const handleProductCard = (id) =>{
    //     setisModalOpen(true);  
    //     for(let i = 0; i < mystore.length; i++){
    //         if (mystore[i].id === id){
    //           setItem(mystore[i]) 
    //         }
    //     }
    //     console.log(id);
    // }

    const closeProductCard = () =>{
        setisModalOpen(false);
    }

    let likedItemLS = {};
    let likedItemsArr = JSON.parse(localStorage.getItem('data')) || [];

    const likeItem = (index, id, title, url, price) =>{
        const updatedLikedItems = [...likedItems];
        updatedLikedItems[index] = !updatedLikedItems[index];
        setLikedItems(updatedLikedItems);

        let a = likedItemsArr.every(item =>{
            if(item.id !== id){
                return true
            }
        }) 
        if (a === true){
            likedItemLS = {}
            likedItemLS['id'] = id;
            likedItemLS['title'] = title;
            likedItemLS['imgURL'] = url;
            likedItemLS['price'] = price;
            likedItemLS['status'] = true;
            likedItemLS['index'] = index;
        }
        likedItemsArr.push(likedItemLS);
        localStorage.setItem('data', JSON.stringify(likedItemsArr));
    }
    
  return (
    <>
        <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => closeProductCard()}>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img className="" src={item.imgURL} alt="" />
                <p className='text-2xl text-indigo-600 font-semibold mt-4'>{showProductCard.price}</p>
                <p>Like</p>
                <p className='text-lg font-semibold mt-4'>{item.title}</p>
                <p className='text-sm text-gray-400 mt-4'>{item.description}</p>
                <p className='text-base font-semibold mt-4'>Детальная информация</p>
                <p className='text-sm text-gray-400'>{item.details}</p>
            </div>
        </div>

        <div className="p-6 bg-gray-100">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <img src="src/assets/img/logo.png" alt="" />
                    <h2 className="text-xl font-semibold">MOBI MARKET</h2>
                </div>
                <div className="flex items-center gap-5">
                    <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none'>Подать заявление</button>
                    <div className='flex gap-x-3 items-center cursor-pointer'>
                        <div>
                            <p className='text-lg font-semibold'>Сардана</p>
                            <p className='text-lg font-normal'>sardana</p>
                        </div>
                        <Link to='/profile' className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                            <img src="src/assets/icons/user.svg" alt="user" />
                        </Link>
                    </div>
                </div>
            </header>

            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {mystore.map((item, index) =>(
                <div key={item.id} id={item.id} className='w-40 h-50 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                    <img onClick={()=> (showProductCard(item.id), setisModalOpen(true))} src={item.imgURL} alt="" />
                    <p className='text-sm font-semibold'>{item.title}</p>
                    <p className='text-sm text-indigo-600 font-semibold	'>{item.price}$</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <img onClick={() => likeItem(index, item.id, item.title, item.imgURL, item.price)} data-action='like' src={likedItems[index] ?"src/assets/icons/heart-red.svg" : "src/assets/icons/heart-white.svg"}/>
                            <p className='text-xs text-gray-300'>100</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </div>
    </>
  )
}
// to={{ pathname: `/${item.id}`}}
export default MainScreen


