import * as React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { setUser } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { basicSchema } from '../schema';

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
    console.log(userInfo);
  }

  function addUserData(username, email){
    dispatch(setUser({username, email}));
  }

  return (
    <section className='grid grid-cols-2 grid-rows-1 text-center'>
    <img className='h-full' src='src/assets/img/bg.jpg' alt="" />
    <div className='col-start-2'>
      <div className='flex pt-1.5	gap-x-1'>
        <Link to='/login' className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer '>
          <img src="src/assets/icons/arrow-left.svg" alt="arrow-left" />
        </Link>
        <p className='text-base	font-normal'>Назад</p>
      </div>
      <h2 className='text-lg font-bold'>Регистрация</h2>
      <form onSubmit={handleSubmit} className='mt-64 block mx-auto my-0'>
        <div>
        <input 
          type="text" 
          // ref={userRef} 
          value={values.username}
          onChange={handleChange} 
          onBlur={handleBlur}
          id='username' 
          className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 focus:outline-none' }
          placeholder='Имя пользователя' 
          required/>
        </div>
        {errors.username && touched.username && (<p className="text-red-600">{errors.username}</p>)}
        <div>
        <input 
          type='email' 
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur} 
          id='email' 
          className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 mt-12 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 mt-12 focus:outline-none'} 
          placeholder='Почта' 
          required/>
        </div>
        {errors.email && touched.email && (<p className="text-red-600">{errors.email}</p>)}

        <button 
        type='submit' 
        disabled={isSubmitting}
        className='w-80 h-11 bg-indigo-600 text-white rounded-full mt-20 ' 
        >Далее</button>
      </form>
    </div>
  </section>
  )
}

export default Register


