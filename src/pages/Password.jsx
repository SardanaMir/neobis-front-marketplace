import {useState, useRef, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useFormik } from 'formik';
import { basicSchema } from '../schema';
import { useNavigate } from 'react-router-dom';
import {register} from '../api';

function Password() {
  const passwordRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const {username, email} = useSelector(state => state.user);
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
    password: "",
    confirmPassword: "",
    },
    validationSchema: basicSchema,

});
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userInfo = {'username': username, 'email': email, 'password1' : values.password, 'password2' : values.confirmPassword};    
    try{
      await register(userInfo)
      setSuccess(true);
      toast.success('Регистрация прошла успешно');
      setTimeout(() => navigate('/login'), 2000);
      const accessToken = response?.access_token;
      const refreshToken = response?.refresh_token;
    }
    catch(err){
      setErrMsg(true)
      setRequestError(true);
      toast.error(err.message)
    }
  };
  useEffect(() =>{
    passwordRef.current.focus();
  }, []);

  useEffect(() =>{
  }, [values.password]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className='grid grid-rows-1 grid-cols-[2fr_310px_3fr_60px]'>
      <img className='max-h-screen' src='src/assets/img/bg.jpg' alt="фоновый рисунок" />
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
        {
        requestError &&
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

      <div className='col-start-2 pt-2.5 pl-6'>
        <div className='flex'>
          <Link to='/register' className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer'>
            <img src="src/assets/icons/arrow-left.svg" alt="arrow-left" />
          </Link>
          <p className='text-base	font-normal ml-3'>Назад</p>
        </div>
      </div>

      <div className='flex flex-wrap flex-col items-center content-start text-center col-start-3 pt-2.5'>
      
        <h2 className='text-lg font-bold'>Регистрация</h2>

        <div className='w-80 flex flex-col items-center mx-auto my-0 mt-14 gap-y-7'>
          <div className='w-20 h-20 bg-indigo-600 rounded-2xl	flex items-center	justify-center'>
            <img src="src/assets/icons/lock.svg" alt="lock" />
          </div>

          <div>
            <h3 className='text-xl font-semibold'>Придумайте пароль</h3>
            <p className='text-base	text-gray-300'>Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.</p>
          </div>
          <form onSubmit={handleSubmit} className='block mx-auto my-0'>
            <div className='relative'>
              <input 
              ref={passwordRef}
              type={passwordVisible ? 'text' : 'password'} 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.password}
              id='password' 
              className={errMsg ? 'w-80 h-11 text-red-600 focus:outline-none' : 'w-80 h-11  focus:outline-none text-3xl text-center'} 
              placeholder='********' 
              required/>
            </div>
            {errors.password && touched.password && (<p className="text-red-600">{errors.password}</p>)}

              <input 
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type={passwordVisible ? 'text' : 'password'} 
              className={errMsg ? 'w-80 h-11 text-red-600 focus:outline-none' : 'w-80 h-11  focus:outline-none text-3xl text-center'} 
              id="confirmPassword"
              placeholder='********' 
              required
              />
              {errors.confirmPassword && touched.confirmPassword && (<p className="text-red-600">{errors.confirmPassword}</p>)}

            <button type='submit' 
            className='w-80 h-11 bg-indigo-600	text-white rounded-full mt-7 ' 
            disabled={isSubmitting}>Далее</button>
          </form>
        </div>
      </div>

      <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer' onClick={togglePasswordVisibility} >
        <img className="" 
        src={passwordVisible ? "src/assets/icons/eye_blue.svg" : "src/assets/icons/eye-disable.svg"} 
        alt="passwordVisible" />
      </div>
    </section>
  )
}

export default Password


