import { useState, useRef} from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {addNewItem} from '../api/addNewItem';

function AddItemForm({setisModalOpen, isModalOpen}){
    const [success, setSuccess] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);
    const imgRef = useRef(null);

    const onSubmit = async (value) =>{
        console.log(selectedFile)
        const formData = new FormData();
        formData.append('product_image', selectedFile[0]);
        formData.append('price', value.price);
        formData.append('title', value.title);
        formData.append('short_description', value.short_description);
        formData.append('description', value.description);
        try{
            const response = await addNewItem(formData)
            console.log(response)
            setSuccess(true);
            setisModalOpen(false);
            toast.success('Товар добавлен');
        }catch(err){
            setSuccess(true);
            toast.error(err.message);
            console.log(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            price: null,
            title: '',
            short_description: '',
            description: ''
        }, 
        onSubmit
    })

    const handleClick = () => {
        imgRef.current.click();
    }

    const handleChange = (event) =>{
        const files = Array.from(event.target.files);
        console.log(files)
        setSelectedFile(files);
    }

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
                    <div className='flex'>
                        <label onClick={handleClick}>
                            <img src="src/assets/img/addImg.png" className='cursor-pointer' alt="add photo" />
                        </label>
                        <input
                            ref={imgRef}
                            id="addImg"
                            className="hidden"
                            name="photo"
                            type="file"
                            onBlur={formik.handleBlur}
                            onChange={handleChange}
                            accept="image/*,.png,.jpg"
                            multiple
                            required
                        />
                        <div className="selected-images">
                            {selectedFile.map((file, index) => (
                                <img key={index} src={URL.createObjectURL(file)} alt="selected" className='w-20	h-24 rounded-xl ml-1.5'/>
                            ))}
                        </div>
                    </div>
                    <input 
                    type="number" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    id="priceItem" 
                    name="price" 
                    placeholder="Цена" 
                    className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-4' 
                    required/>
                    <input 
                    type="text" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    id="titleItem" 
                    name="title" 
                    placeholder="Название" 
                    className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1' 
                    required/>
                    <input 
                    type="text" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    name="short_description" 
                    id="shortDescrItem" 
                    placeholder="Краткое описание" 
                    className='max-w-full	h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1' 
                    required/>
                    <input 
                    type="text" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    name="description" 
                    id="descrItem" 
                    placeholder="Полное описание" 
                    className='max-w-full min-h-fit border-b bg-gray-100 rounded-lg focus:outline-none p-2 mt-1'/>
                    <button 
                    type='submit' 
                    className='max-w-full h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-4'>Добавить</button>
                </form>
            </div>
        </div>
        </>

    )
}
export default AddItemForm