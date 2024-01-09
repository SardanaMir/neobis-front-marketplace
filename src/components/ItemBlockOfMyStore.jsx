import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import ChangeItemInfoForm from './ChangeItemInfoForm';
import {deleteItem} from '../api';
import { removeItem } from '../redux/slices/myProductsSlice';
import extraBtn from '../assets/icons/extra-button.svg'
import whiteHeart from '../assets/icons/heart-white.svg'

function ItemBlockOfMyStore({item, index, setProductCard, setisModalOpen}){
    const [isOpen, setIsOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [product, setProduct] = useState();
    const [selectedProduct, setSelectedProduct] = useState(false);
    const actionRef = useRef()
    const dispatch = useDispatch();

    const handleClick = (e) => {
      setPopupPosition({ x: e.clientX, y: e.clientY });
      setPopupVisible(!popupVisible);
    };

    const handleChangeItemInfo = (data) =>{
        setPopupVisible(false);
        //вызываем модальное окно
        setProduct(data)
        setSelectedProduct(true)
    }

    const handleDeleteItem = async (item) =>{
        await deleteItem(item.id);
        setPopupVisible(false);
        dispatch(removeItem(item.id))
    }
    //закрытие popup при нажатии на другую область окна
    useEffect(()=>{
        const handleClickOutside = (event) =>{
            if(!event.composedPath().includes(actionRef.current)){
                setPopupVisible(false);
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => document.body.removeEventListener('click', handleClickOutside)
    }, [])

    return(
        <>
        <div ref={actionRef} className="flex flex-col justify-between h-full" id={item.id}>
            <img src={item.product_image} alt={item.title} onClick={()=> (setProductCard(item), setisModalOpen(true))}/>
            <div>
                <p className='text-sm font-semibold'>{item.title}</p>
                <p className='text-sm text-indigo-600 font-semibold'>{item.price}<span>$</span></p>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img src={whiteHeart} alt="" />
                        <p className='text-xs text-gray-300'>100</p>
                    </div>
                    <img className='p-2' onClick={handleClick} src={extraBtn} alt="" />
                </div>
            </div>
        </div>

        {popupVisible && (
            <div style={{
                position: 'absolute',
                top: popupPosition.y,
                left: popupPosition.x,
                padding: '10px',
                backgroundColor: '#fff',
                zIndex: 999,
                border: 'none',
                borderRadius:'20px'
              }}>
                <div onClick={()=>(handleChangeItemInfo(item), setIsOpen(true))} className='flex gap-3 items-center'>
                    <img src="src/assets/icons/change.svg" alt="change button" />
                    <p className='text-sm text-indigo-600 font-semibold cursor-pointer'>Изменить</p>
                </div>
                <div onClick={()=>handleDeleteItem(item)} className='flex gap-3 items-center mt-3'>
                    <img src="src/assets/icons/delete.svg" alt="delete button" />
                    <p className='text-sm text-indigo-600 font-semibold cursor-pointer'>Удалить</p>
                </div>
            </div>
        )}
        {selectedProduct && (<ChangeItemInfoForm product={product} setIsOpen={setIsOpen} isOpen={isOpen}/>)}
        </>

    )

}

export default ItemBlockOfMyStore