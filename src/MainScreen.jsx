import { useEffect, useState } from 'react';
import mystore from './mystore.json';
import ShowCardItem from './ShowCardItem';
import MainScreenHeader from './MainScreenHeader';
import ItemBlock from './ItemBlock';

function MainScreen() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');

    const showProductCard = (item) => {
        setProductCard(item);
    }

    const closeProductCard = () =>{
        setisModalOpen(false);
    }
    
  return (
    <>
        <div onClick={() => closeProductCard()} className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'}>
            <ShowCardItem item={productCard}/>
        </div>
        <div className="p-6 bg-gray-100">
            <MainScreenHeader/>
            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {mystore.map((item) =>(
                    <div key={item.id} onClick={()=> (showProductCard(item), setisModalOpen(true))} className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer' >
                        <ItemBlock item={item}/>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
export default MainScreen


