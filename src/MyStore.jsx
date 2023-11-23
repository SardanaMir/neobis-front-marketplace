import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import mystore from './mystore.json'
import ShowCardItem from './ShowCardItem';
function MyStore() {
    const [success, setSuccess] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);
    const [likedItems, setLikedItems] = useState(Array(mystore.length).fill(false));
    const [productCard, setProductCard] = useState('');

    const showProductCard = (item) => {
        setProductCard(item);
    }

    const closeProductCard = () =>{
        setisModalOpen(false);
    }

    const likeItem = (index) =>{
        const updatedLikedItems = [...likedItems];
        updatedLikedItems[index] = !updatedLikedItems[index];
        setLikedItems(updatedLikedItems);
    }
  return (
    <>
    <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => closeProductCard()}>
        <ShowCardItem item={productCard}/>
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
                <h2 className='text-lg font-bold text-center'>Мои товары</h2>
            </div>
            {/* карточка товара */}
            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {mystore.map((item, index) =>(
                    <div key={item.id} id={item.id} className='w-40 h-50 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                        <img onClick={()=> (showProductCard(item), setisModalOpen(true))} src={item.imgURL} alt={item.title} />
                        <p className='text-sm font-semibold	'>{item.title}</p>
                        <p className='text-sm text-indigo-600 font-semibold	'>{item.price}$</p>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <img onClick={() => likeItem(index)} data-action='like' src={likedItems[index] ?"src/assets/icons/heart-red.svg" : "src/assets/icons/heart-white.svg"}/>
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

export default MyStore


