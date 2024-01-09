import {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {login} from '../api';
import { useFormik } from 'formik';
import backgroundImg from '../assets/img/bg.jpg'
import eyeBlue from '../assets/icons/eye_blue.svg'
import eyeSlash from '../assets/icons/eye_slash.svg'

function Login() {
  const userRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [requestError, setRequestError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async () =>{
    const userInfo = {'username': values.username, 'password': values.password};
    localStorage.clear()
    try{
    const response = await login(userInfo);
    const accessToken = response?.access_token;
    const refreshToken = response?.refresh_token;
    addUserData(accessToken);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    navigate('/');
  }catch(err){
      setRequestError(true)
      setErrMsg(true)
      toast.error('Ошибка! Проверьте логин и пароль')
    }
  }
  const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
} = useFormik({
    initialValues: {
    password: "",
    username: "",
    },
    onSubmit,
});

  useEffect(() =>{
    userRef.current.focus();
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function addUserData(token){
    dispatch(setUser({token}));
  }

  return (
    <section className='flex max-h-screen items-center'>
      <img className='max-h-screen' src={backgroundImg} alt="фоновый рисунок" />
      <div className='block mx-auto my-0 pt-2'>
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
        <form onSubmit={handleSubmit} className=''>
        <div>
          <input 
          type="text" 
          ref={userRef} 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username} 
          className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 focus:outline-none' }
          id='username' 
          autoComplete='off' 
          placeholder='Имя пользователя' 
          required/>
        </div>
        <div className='relative'>
          <input 
          type={passwordVisible ? 'text' : 'password'} 
          onChange={handleChange} 
          onBlur={handleBlur}
          value={values.password}
          id='password' 
          className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 mt-12 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 mt-12 focus:outline-none'} 
          placeholder='Пароль' 
          required/>
          <img onClick={togglePasswordVisibility} className="absolute p-4 top-12 right-0" 
          src={passwordVisible ? eyeBlue : eyeSlash} 
          alt="passwordVisible" />
        </div>
        <button type='submit' className='loginBtn w-80 h-11 bg-indigo-600	text-white rounded-full flex justify-center	items-center mt-20' 
        disabled={isSubmitting}>Войти</button>
        </form>
        <Link to={'/register'} className='w-80 bg-white text-indigo-600 block text-center mx-auto my-0 mt-24'>Зарегистрироваться</Link>
      </div>
    </section>
  )
}

export default Login


