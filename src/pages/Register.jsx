import * as React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUsername, setEmail } from '../store/inputSlice';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { basicSchema } from '../schema';
import UsernameInput from '../components/UsernameInput';
import EmailInput from '../components/EmailInput';

function Register() {
  const [errMsg, setErrMsg] = useState('');
  const [requestError, setRequestError] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    values,
    errors,
    touched,
    isSubmitting,
    // handleBlur,
    handleChange,
    // handleSubmit,
} = useFormik({
    initialValues: {
    email: "",
    username: "",
    },
    validationSchema: basicSchema
});

  function addUserData(username, email){
    dispatch(setUsername({username, email}));
    // dispatch(setEmail({email}))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(values.email, values.username)
    addUserData(values.username, values.email)
    const userInfo = {'username': values.username, 'email': values.email};
    navigate('/password')
    try{
    // const response = await login(userInfo)

  }catch(err){
      setRequestError(true)
      setErrMsg(true)
      console.log(err)          
      toast.error(err.message)
      // if(!err?.response){
      //   setErrMsg('No server response')
      // }else if(err.response?.status === 400){
      //   setErrMsg('Missing username or password');
      // }else if (err.response?.status === 401){
      //   setErrMsg('Unauthorized')
      // }else {
      //   setErrMsg('Неверный логин или пароль')
      // }
    }
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
      {
      requestError &&
      <ToastContainer  
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    }
      <form onSubmit={handleSubmit} className='mt-64 block mx-auto my-0'>

        <div>
          <input 
          type="text" 
          // ref={userRef} 
          onChange={handleChange} 
          value={values.username}
          className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 focus:outline-none' }
          id='username' 
          placeholder='Имя пользователя' 
          required/>
        </div>
        {errors.username && touched.username && (<p className="text-red-600">{errors.username}</p>)}

        <div>
          <input 
            type='email' 
            onChange={handleChange} 
            value={values.email}
            id='email' 
            className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 mt-12 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 mt-12 focus:outline-none'} 
            placeholder='Почта' 
            required/>
        </div>

        {errors.email && touched.email && (<p className="text-red-600">{errors.email}</p>)}

        <button 
        type='submit' 
        className='w-80 h-11 bg-indigo-600	text-white rounded-full mt-20 ' 
        disabled={isSubmitting}>Далее</button>
      </form>
    </div>
  </section>
  )
}

export default Register


