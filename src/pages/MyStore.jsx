import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import ShowCardItem from '../components/ShowCardItem';
import BackToMain from '../components/BackToMain';
import ItemBlockOfMyStore from '../components/ItemBlockOfMyStore';
import {addMyStore} from '../redux/slices/myProductsSlice';
import {myProducts} from '../api';

function MyStore() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');
    const dispatch = useDispatch();

    // const store = async () =>{
    //     const response = await myProducts()
    //     dispatch(addMyStore(response));
    // }
    // useEffect(()=>{
    //     store
    // }, [products]);
    
    useEffect(() => {
        const store = async () => {
            const response = await myProducts();
            dispatch(addMyStore(response));
        };
        store();
    }, []);

    const products = useSelector(state => state.myProducts.items);

  return (
    <>
        <ShowCardItem item={productCard} setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
        <div className='flex h-screen'>
            <Navbar/>
            <div className='bg-gray-100 w-8/12'>
                <div className='max-w-2xl block my-0 mx-auto'>
                    <BackToMain/>
                    <h2 className='text-lg font-bold text-center'>Мои товары</h2>
                </div>
                <div className='p-10 flex flex-wrap justify-center gap-4'>
                    {products.map((item, index) =>(
                        <div className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer flex flex-col justify-between'>
                            <ItemBlockOfMyStore item={item} index={index} setProductCard={setProductCard} setisModalOpen={setisModalOpen}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default MyStore


