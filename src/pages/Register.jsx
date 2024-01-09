import * as React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { setUser } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { basicSchema } from '../schema';
import backgroundImg from '../assets/img/bg.jpg'
import arrowLeft from '../assets/icons/arrow-left.svg'

function Register() {
  const [errMsg, setErrMsg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
} = useFormik({
    initialValues: {
    email: "",
    username: "",
    },
    validationSchema: basicSchema,
    
});

  const handleSubmit = (e) =>{
    e.preventDefault()
    const userInfo = {'username': values.username, 'email': values.email};
    addUserData(values.username, values.email);
    navigate('/password');
  }

  function addUserData(username, email){
    dispatch(setUser({username, email}));
  }

  return (
    <section className='grid grid-rows-1 grid-cols-[2fr_310px_3fr]'>
      <img className='max-h-screen' src={backgroundImg} alt="фоновый рисунок" />
      <div className='col-start-2 pt-2.5 pl-6'>
        <div className='flex'>
          <Link to='/login' className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer'>
            <img src={arrowLeft} alt="arrow-left" />
          </Link>
          <p className='text-base	font-normal ml-3'>Назад</p>
        </div>
      </div>
      <div className='flex flex-wrap flex-col content-start	items-center col-start-3 pt-2.5'>
        <h2 className='text-lg font-bold'>Регистрация</h2>
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto my-0 mt-20'>
          <input 
            type="text" 
            value={values.username}
            onChange={handleChange} 
            onBlur={handleBlur}
            id='username' 
            className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 focus:outline-none' }
            placeholder='Имя пользователя' 
            required
          />
          {errors.username && touched.username && (<p className="text-red-600">{errors.username}</p>)}
          <input 
            type='email' 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur} 
            id='email' 
            className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 mt-12 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 mt-12 focus:outline-none'} 
            placeholder='Почта' 
            required
          />
          {errors.email && touched.email && (<p className="text-red-600">{errors.email}</p>)}

          <button 
          type='submit' 
          disabled={isSubmitting}
          className='w-80 h-11 bg-indigo-600 text-white rounded-full mt-20 '>Далее</button>

        </form>
      </div>
    </section>
  )
}

export default Register


