import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mystore from '../mystore.json';
import ShowCardItem from '../components/ShowCardItem';
import MainScreenHeader from '../components/MainScreenHeader';
import ItemBlock from '../components/ItemBlock';
import {addProducts} from '../redux/slices/productsSlice';
import {allProducts} from '../api';

function MainScreen() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [productCard, setProductCard] = useState('');
    const dispatch = useDispatch();
    const products = useSelector(state=>state.products.items)

    const prodAllFromBack = async () => {
      const response = await allProducts();
      console.log(response)
    }
    useEffect(() => {
      // const data = JSON.parse(localStorage.getItem('data')) || {};
      // const updatedLikedItems = mystore.map(item => data.some(likedItem => likedItem.id === item.id));
      // setLikedItems(updatedLikedItems);
      dispatch(addProducts(mystore));
      console.log(prodAllFromBack())
    },[]);

    // const products = async () =>{
    //   console.log('555')

    //   try{
    //     console.log('1111')

    //     const res = await allProducts()
    //     console.log(res)
    //     return res
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }
    // useEffect(()=>{
    //   products()
    // })
  // const getProducts = async () =>{
  //   try{
  //     dispatch(fetchItems())
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  // useEffect(()=>{
  //   getProducts()
  // }, [])

  return (
    <>
      <ShowCardItem item={productCard} setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
      <div className="p-6 bg-gray-100">
        <MainScreenHeader/>
        <div className='p-10 flex flex-wrap justify-center gap-4'>
          {products.map((item, index) =>(
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


