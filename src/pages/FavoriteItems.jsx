import {useState} from 'react';
import Navbar from '../components/Navbar';
import ShowCardItem from '../components/ShowCardItem';
import ItemBlock from '../components/ItemBlock';
import BackToMain from '../components/BackToMain';
import { useSelector } from 'react-redux';


function FavoriteItems() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');

    const faveProducts = useSelector(state => state.myProducts.likedItems);
    
  return (
    <>
    <ShowCardItem item={productCard} setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
    <div className='flex h-screen'>
        <Navbar/>
        <div className='bg-gray-100 w-8/12'>
            <div className='max-w-2xl block my-0 mx-auto'>
                <BackToMain/>
                <h2 className='text-lg font-bold text-center'>Понравившиеся</h2>
            </div>
            <div className='p-10 flex flex-wrap justify-center gap-4'>
                {faveProducts.map((item, index) =>(
                    <div  className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer flex flex-col justify-between'>
                        <ItemBlock item={item} setProductCard={setProductCard} setisModalOpen={setisModalOpen} index={index} />
                    </div>
                ))}
            </div>

        </div>
    </div>
    </>


  )
}

export default FavoriteItems


