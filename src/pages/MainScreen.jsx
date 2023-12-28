import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowCardItem from '../components/ShowCardItem';
import MainScreenHeader from '../components/MainScreenHeader';
import ItemBlock from '../components/ItemBlock';
import {addProducts} from '../redux/slices/productsSlice';
import {allProducts} from '../api';

function MainScreen() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [productCard, setProductCard] = useState('');
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items)

  useEffect(() => {
    const uploadAllProducts = async () => {
      const response = await allProducts();
      dispatch(addProducts(response));
    }
    uploadAllProducts();
  }, []);

  return (
    <>
      <ShowCardItem item={productCard} setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
      <section className="max-h-screen p-6 bg-gray-100 ">
        <MainScreenHeader/>
        <div className='p-10 flex flex-wrap justify-center gap-4'>
          {products.map((item, index) =>(
            <div className='w-40 h-50 bg-white rounded-xl p-6 cursor-pointer flex flex-col justify-between'>
              <ItemBlock item={item} index={index} setProductCard={setProductCard} setisModalOpen={setisModalOpen}/>
            </div>
          ))}
        </div>
      </section>
    </> 
  )
}
export default MainScreen


