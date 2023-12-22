import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {login} from '../api';
import { useFormik } from 'formik';


function Login() {
  const userRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [requestError, setRequestError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async () =>{
    const userInfo = {'username': values.username, 'password': values.password};
    console.log(userInfo)
    try{
    const response = await login(userInfo);
    console.log(response)
    const accessToken = response?.access_token;
    const refreshToken = response?.refresh_token;
    const email = response?.user?.email;
    const username = response?.user?.username;
    const lastName = response?.user?.last_name;
    const firstName = response?.user?.first_name;

    addUserData(username, accessToken, email, lastName, firstName);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    navigate('/');

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
  const {
    values,
    errors,
    touched,
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
  
  // useEffect(() =>{
  // }, [username, pwd]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function addUserData(username, token, email, lastName, firstName){
    dispatch(setUser({username, token, email, lastName, firstName}));
  }

  return (
    <section className='flex'>
      <img className='h-full' src='src/assets/img/bg.jpg' alt="фоновый рисунок" />
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
        <form onSubmit={handleSubmit} className='mt-64'>
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
          src={passwordVisible ? "src/assets/icons/eye_blue.svg" : "src/assets/icons/eye_slash.svg"} 
          alt="passwordVisible" />
        </div>
        <button type='submit' className='loginBtn w-80 h-11 bg-indigo-600	text-white rounded-full flex justify-center	items-center mt-20' 
        disabled={isSubmitting}>Войти</button>
        </form>
        <Link to={'/register'} className='w-80 bg-white text-indigo-600 block mx-auto my-0 mt-44'>Зарегистрироваться</Link>
      </div>
    </section>
  )
}

export default Login


