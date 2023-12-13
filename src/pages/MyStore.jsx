import {useState, useRef, useEffect} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import mystore from '../mystore.json'
import ShowCardItem from '../components/ShowCardItem';
import ItemBlock from '../components/ItemBlock';
import BackToMain from '../components/BackToMain';
import { useAuth } from '../hooks/use-Auth'; 
import ItemBlockOfMyStore from '../components/ItemBlockOfMyStore';
function MyStore() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');
    const {username} = useSelector(state => state.user);

    const showProductCard = (item) => {
        setProductCard(item);
    }
    //проверка на логи
    // const isAuth = useAuth();
    // if (isAuth.isAuth === false){
    //   return <Navigate to='/login'/>
    // }
    let mytruestore = mystore.filter((item) =>{
        if (item.username === username){
            return true
        }
    })
    console.log(mytruestore)
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
                    {mytruestore.map((item, index) =>(
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


