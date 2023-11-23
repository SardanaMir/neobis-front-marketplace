import {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import ShowCardItem from './ShowCardItem';
import ItemBlock from './ItemBlock';

function FavoriteItems() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [likedItems, setLikedItems] = useState([]);
    const [productCard, setProductCard] = useState('');

    const showProductCard = (item) => {
        setProductCard(item);
    }

    const closeProductCard = () =>{
        setisModalOpen(false);
    }
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data')) || {};
        setLikedItems(data);
    },[]);

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
                <h2 className='text-lg font-bold text-center'>Понравившиеся</h2>
            </div>
            {/* карточка товара */}
            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {likedItems.map(item =>(
                    <div key={item.id} onClick={()=> (showProductCard(item), setisModalOpen(true))}
                    className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer'>
                        <ItemBlock item={item} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>


  )
}

export default FavoriteItems


