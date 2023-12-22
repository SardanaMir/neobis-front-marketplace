
import { useState, useRef} from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {addNewItem} from '../api';

function AddItemForm({setisModalOpen, isModalOpen}){
    // const [price, setPrice] = useState('');
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [details, setDetails] = useState('');
    const [success, setSuccess] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);
    const imgRef = useRef(null);

    const onSubmit = (value) =>{
        const formData = new FormData();
        formData.append('photo', value.photo);
        formData.append('price', value.price);
        formData.append('title', value.title);
        formData.append('description', value.description);
        formData.append('details', value.details);
        console.log(formData);
    }

    const formik = useFormik({
        initialValues: {
            photo: [],
            price: null,
            title: '',
            description: '',
            details: ''
        }, 
        onSubmit
    })

    const handleClick = () => {
        imgRef.current.click();
    }
    
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     // console.log(price, title, description, details);
    //     const newItemInfo = {'price': price, 'title': title, 'description': description, 'details': details};


    //     setisModalOpen(false);
    //     setSuccess(true);
    //     toast.success('Товар добавлен')
    //     setPrice('');
    //     setTitle('');
    //     setDescription('');
    //     setDetails('');
    //     try{
    //         //endpoint на добавление
    //         // const response = addNewItem(newItemInfo)
    //         // console.log(response)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    return(
        <>
        {
        success &&
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        }
        <div className={isModalOpen ? 'fixed w-full	h-full left-0 top-0 bg-black bg-opacity-50 ' : 'hidden'}>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img onClick={() => setisModalOpen(false)}  className="absolute top-3 right-3 cursor-pointer" src="src/assets/icons/close.svg" alt="close" />
                <form onSubmit={formik.handleSubmit} className="flex flex-col">
                    <label htmlFor="addImg" onClick={handleClick}>
                        <img src="src/assets/img/addImg.png" className='cursor-pointer' alt="add photo" />
                    </label>
                    <input
                        ref={imgRef}
                        id="addImg"
                        className="hidden"
                        name="photo"
                        type="file"
                        onBlur={formik.handleBlur}
                        onChange={(event)=>formik.setFieldValue('photo', event.target.files)}
                        
                    />
                    <input type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} id="priceItem" name="price" placeholder="Цена" className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-4' required/>
                    <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} id="titleItem" name="title" placeholder="Название" className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1' required/>
                    <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="description" id="shortDescrItem" placeholder="Краткое описание" className='max-w-full	h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1' required/>
                    <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="details" id="descrItem" placeholder="Полное описание" className='max-w-full min-h-fit border-b bg-gray-100 rounded-lg focus:outline-none p-2 mt-1'/>
                    <button type='submit' className='max-w-full h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-4'>Добавить</button>
                </form>
            </div>
        </div>
        </>

    )
}
export default AddItemForm