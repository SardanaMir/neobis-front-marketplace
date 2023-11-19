import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';

function Password() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [pwd, setPwd] = useState('');

  const dispatch = useDispatch();

  const {
  formState: {isValid},
  } = useForm({
      mode: 'onChange'
  });

  // useEffect(() =>{
  //     userRef.current.focus();
  // }, []);

  useEffect(() =>{

  }, [pwd]);


  // const togglePasswordVisibility = () => {
  // setPasswordVisible(!passwordVisible);
  // };

  const handleSubmit = async (e) =>{
    e.preventDefault();
  }

  const pwdVisible = () => dispatch(togglePasswordVisibility(!passwordVisible));

  return (
    <>
      {success ? (
        <></>
        ) : (
        <section className='grid grid-cols-2 grid-rows-1 text-center'>
          <img className='h-full' src='src/assets/img/bg.jpg' alt="" />

          <div className='col-start-2'>
            {/* <div
              ref={errRef} className={errMsg ? 'absolute w-80 min-h-15 p-2.5 rounded-xl flex justify-center items-center bg-red-600 text-white gap-2.5 top-1 right-1/6' : 'hidden'} aria-live='asserive'><img src={errMsg ? 'src/assets/icons/warning.svg' : 'hidden'} alt="" />{errMsg}
            </div> */}
            <div className='flex items-center justify-between'>
              <div className='flex pt-1.5	gap-x-1	justify-start'>
                {/* link */}
                <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer '>
                  <img src="src/assets/icons/arrow-left.svg" alt="" />
                </div>
                <p className='text-base	font-normal'>Назад</p>
              </div>

              <h2 h2 className='text-lg font-bold'>Регистрация</h2>
              {/* className='w-11 h-7 rounded-3xl flex justify-center cursor-pointer' */}
              <div onClick={pwdVisible} >
                <img className="p-4 top-12 right-0" 
                  src={passwordVisible ? "src/assets/icons/eye_blue.svg" : "src/assets/icons/eye-disable.svg"} 
                  alt="passwordVisible" />
              </div>

            </div>


            <div className='w-80 flex flex-col items-center mx-auto my-0 mt-40 gap-y-7'>
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
                  type={passwordVisible ? 'text' : 'password'} 
                  onChange={(e) => setPwd(e.target.value)} 
                  value={pwd}
                  id='password' 
                  className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11  focus:outline-none text-3xl text-center border-b border-solid border-gray-300'} 
                  placeholder='....' 
                  required/>
                </div>
                <button type='submit' 
                className='w-80 h-11 bg-indigo-600	text-white rounded-full mt-20 ' 
                disabled={!isValid}>Далее</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Password


