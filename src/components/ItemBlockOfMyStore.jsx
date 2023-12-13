import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemBlockOfMyStore({item, index, setProductCard, setisModalOpen}){
    const [open, setOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    const handleClick = (e) => {
      setPopupPosition({ x: e.clientX, y: e.clientY });
      setPopupVisible(!popupVisible);
    };
  
    const handleClose = () => {
      setPopupVisible(false);
    };

    const handleChangeItemInfo = (data) =>{
        setPopupVisible(false);
        //вызываем модальное окно
        console.log(data)

    }
    const handleDeleteItem = (data) =>{
        setPopupVisible(false);
        //получаем данные товара и отправляем на endpoint на удаление
        console.log(data)
    }

    return(
        <>
        <div className="flex flex-col justify-between h-full" id={item.id}>
            <img src={item.imgURL} alt={item.title} onClick={()=> (setProductCard(item), setisModalOpen(true))}/>
            <div>
                <p className='text-sm font-semibold'>{item.title}</p>
                <p className='text-sm text-indigo-600 font-semibold'>{item.price}<span>{item.currency}</span></p>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img src="src/assets/icons/heart-white.svg" alt="" />
                        <p className='text-xs text-gray-300'>100</p>
                    </div>
                    <img className='p-2' onClick={handleClick} src="src/assets/icons/extra-button.svg" alt="" />
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
                <div onClick={()=>handleChangeItemInfo(item.id)} className='flex gap-3 items-center'>
                    <img src="src/assets/icons/change.svg" alt="change button" />
                    <p className='text-sm text-indigo-600 font-semibold cursor-pointer'>Изменить</p>
                </div>
                <div onClick={()=>handleDeleteItem(item.id)} className='flex gap-3 items-center mt-3'>
                    <img src="src/assets/icons/delete.svg" alt="delete button" />
                    <p className='text-sm text-indigo-600 font-semibold cursor-pointer'>Удалить</p>
                </div>
            </div>
        )}
        </>

    )

}

export default ItemBlockOfMyStore