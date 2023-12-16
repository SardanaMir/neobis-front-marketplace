import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {updateProduct} from '../store/productsSlice';
import mystore from '../mystore.json'

const ChangeItemInfoForm = ({setIsOpen, isOpen, product}) => {
  const [products, setProducts] = useState();
  const [editingProduct, setEditingProduct] = useState(product);
  const dispatch = useDispatch();

  console.log(product)

  const items = useSelector(state=>state.products.items)
  console.log(items)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setProducts(mystore.map(product => (product.id === editingProduct.id ? editingProduct : product)));
    setIsOpen(false)
    const newPrice = editingProduct.price 
    console.log(editingProduct.price)
    //тут отправляем новые данные в бэк и toolkit
    dispatch(updateProduct({ id: editingProduct.id, newPrice }));


  };

  return (
    <div className={isOpen ? 'fixed w-full h-full left-0 top-0 bg-black bg-opacity-50' : 'hidden'}>
        <div className='w-96 min-h-fit bg-white p-7 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img onClick={() => setIsOpen(false)}  className="absolute top-3 right-3 cursor-pointer" src="src/assets/icons/close.svg" alt="close" />

            <form 
            onSubmit={handleSaveChanges} 
            className='max-w-full flex flex-col'>

                <img src={editingProduct.imgURL} alt="" />
                <input 
                type="text" 
                id="priceItem" 
                name="price"
                value={editingProduct.price} 
                onChange={handleChange} 
                placeholder="Цена" 
                className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-4'/>

                <input 
                type="text" 
                id="titleItem" 
                name="title"
                value={editingProduct.title} 
                placeholder="Название" 
                className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1'/>

                <textarea 
                type="text" 
                id="shortDescrItem" 
                name="description"
                value={editingProduct.description} 
                onChange={handleChange} 
                placeholder="Краткое описание" 
                className='max-w-full	min-h-fit border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1'/>

                <textarea 
                type="text" 
                id="descrItem" 
                name="details"
                value={editingProduct.details} 
                onChange={handleChange} 
                placeholder="Полное описание" 
                className='max-w-full min-h-fit border-b bg-gray-100 rounded-lg focus:outline-none p-1 mt-1'/>

                <button type="submit" 
                onClick={handleSaveChanges} 
                className='max-w-full h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-4'>Сохранить</button>
            </form>
        </div>
    </div>
  )
}

export default ChangeItemInfoForm