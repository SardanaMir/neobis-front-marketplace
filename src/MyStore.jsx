import {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import mystore from './mystore.json'
import ShowCardItem from './ShowCardItem';
import ItemBlock from './ItemBlock';

function MyStore() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');

    const showProductCard = (item) => {
        setProductCard(item);
    }


  return (
    <>
        <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'} onClick={() => setisModalOpen(false)}>
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
                    {mystore.map((item) =>(
                        <div key={item.id} className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer' onClick={()=> (setProductCard(item), setisModalOpen(true))}>
                            <ItemBlock {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>


  )
}

export default MyStore


