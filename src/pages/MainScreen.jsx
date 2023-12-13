import { useEffect, useState, useDispatch } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import mystore from '../mystore.json';
import ShowCardItem from '../components/ShowCardItem';
import MainScreenHeader from '../components/MainScreenHeader';
import ItemBlock from '../components/ItemBlock';
import { useAuth } from '../hooks/use-Auth'; 

function MainScreen() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');
    const location = useLocation();

    console.log(location)
    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('data')) || {};
    //     const updatedLikedItems = mystore.map(item => data.some(likedItem => likedItem.id === item.id));
    //     setLikedItems(updatedLikedItems);
    // },[]);
    const isAuth = useAuth();
    if (isAuth.isAuth === false){
      return <Navigate to='/login'/>
    }

  return (
    <>
      <ShowCardItem item={productCard} setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
      <div className="p-6 bg-gray-100">
        <MainScreenHeader/>
        <div className='p-10 flex flex-wrap justify-center gap-4'>
          {mystore.map((item, index) =>(
            <div className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer flex flex-col justify-between'>
              <ItemBlock item={item} index={index} setProductCard={setProductCard} setisModalOpen={setisModalOpen}/>
            </div>
          ))}
        </div>
      </div>
    </> 
  )
}
export default MainScreen


