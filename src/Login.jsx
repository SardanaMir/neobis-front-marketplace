import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {saveUserData } from './store/userSlice';
import {Link} from 'react-router-dom';

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const {
    formState: {isValid},
  } = useForm({
    mode: 'onChange'
  });

  useEffect(() =>{
    userRef.current.focus();
  }, []);
  
  useEffect(() =>{

  }, [username, pwd]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function addUserData(username, pwd){
    dispatch(saveUserData({username: username, password: pwd}));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    addUserData(username, pwd)
    // console.log(username, pwd)
    // try{
    //   const response = await axios.post( 
    //     JSON.stringify({user, pwd}),
    //     {
    //       header: {'Content-Type': 'application/json'},
    //       withCredentials: true
    //     }
    //   );
    // console.log(JSON.stringify(response?.data));
    // const accessToken = response?.data?.accessToken;
    // const roles = response?.data?.roles;
    // // setAuth({user, pwd, roles, accessToken})
    // setUsername('');
    // setPwd('');
    // setSuccess(true);
    // addUserData(user)
    // }catch(err){
    //   if(!err?.response){
    //     setErrMsg('No server response')
    //   }else if(err.response?.status === 400){
    //     setErrMsg('Missing username or password');
    //   }else if (err.response?.status === 401){
    //     setErrMsg('Unauthorized')
    //   }else {
    //     setErrMsg('Неверный логин или пароль')
    //   }
    //   errRef.current.focus();
    // }
  }

  return (
    <>
      {success ? (
        <></>
        ) : (
      <section className='flex'>
        <img className='h-full' src='src/assets/img/bg.jpg' alt="" />
        <div className='block mx-auto my-0 pt-2'>
          <div ref={errRef} className={errMsg ? 'absolute w-80 h-15 p-2.5 rounded-xl flex justify-center items-center bg-red-600 text-white gap-2.5 top-1' : 'hidden'} aria-live='asserive'><img src={errMsg ? 'src/assets/icons/warning.svg' : 'hidden'} alt="" />{errMsg}</div>
          <form onSubmit={handleSubmit} className='mt-64'>
            <div>
              <input 
              type="text" 
              ref={userRef} 
              onChange={(e) => setUsername(e.target.value)} 
              value={username} 
              className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 focus:outline-none' }
              id='username' 
              autoComplete='off' 
              placeholder='Имя пользователя' 
              required/>
            </div>
            <div className='relative'>
              <input 
              type={passwordVisible ? 'text' : 'password'} 
              onChange={(e) => setPwd(e.target.value)} 
              value={pwd}
              id='password' 
              className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 mt-12 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 mt-12 focus:outline-none'} 
              placeholder='Пароль' 
              required/>
              <img onClick={togglePasswordVisibility} className="absolute p-4 top-12 right-0" 
              src={passwordVisible ? "src/assets/icons/eye_blue.svg" : "src/assets/icons/eye_slash.svg"} 
              alt="passwordVisible" />
            </div>
            <button type='submit' className='loginBtn w-80 h-11 bg-indigo-600	text-white rounded-full flex justify-center	items-center mt-20' disabled={!isValid}>Войти</button>
          </form>
          <Link to={'/register'} className='w-80 bg-white text-indigo-600 block mx-auto my-0 mt-44'>Зарегистрироваться</Link>
        </div>
      </section>
      )}
    </>
  )
}

export default Login


