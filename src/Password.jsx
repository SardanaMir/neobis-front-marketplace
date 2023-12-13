import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { basicSchema } from './schema';
import { useNavigate } from 'react-router-dom';

function Password() {
  const passwordRef = useRef();
  const errRef = useRef();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  const {username, email} = useSelector(state => state.username)
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
    password: "",
    confirmPassword: "",
    },
    validationSchema: basicSchema
});

  useEffect(() =>{
    passwordRef.current.focus();
  }, []);

  useEffect(() =>{

  }, [values.password]);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, email, values.password)
    navigate('/');

    try{
      const response = await register(userInfo)
    }
    catch(err){
      setRequestError(true)
      if(+err.response?.data.status === 400){
        toast.error(err.response.data.message)
      } else if(err?.response){
        toast.error('Произошла ошибка')
      } else if(err?.message){
        toast.error('Сервер не отвечает')
      }
    }
  };

  return (
    <>
        <section className='grid grid-cols-2 grid-rows-1 text-center'>
          <img className='h-full' src='src/assets/img/bg.jpg' alt="" />

          <div className='col-start-2'>
            <div className='flex items-center justify-between'>
              <div className='flex pt-1.5	gap-x-1	justify-start'>
                <div className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer '>
                  <img src="src/assets/icons/arrow-left.svg" alt="" />
                </div>
                <p className='text-base	font-normal'>Назад</p>
              </div>

              <h2 h2 className='text-lg font-bold'>Регистрация</h2>
              {/* className='w-11 h-7 rounded-3xl flex justify-center cursor-pointer' */}
              <div onClick={togglePasswordVisibility} >
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
                  ref={passwordRef}
                  type={passwordVisible ? 'text' : 'password'} 
                  onChange={handleChange} 
                  value={values.password}
                  id='password' 
                  className={errMsg ? 'w-80 h-11 text-red-600 focus:outline-none' : 'w-80 h-11  focus:outline-none text-3xl text-center'} 
                  placeholder='' 
                  required/>
                </div>

                  <input 
                  value={values.confirmPassword}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  type={passwordVisible ? 'text' : 'password'} 
                  className={errMsg ? 'w-80 h-11 text-red-600 focus:outline-none' : 'w-80 h-11  focus:outline-none text-3xl text-center'} 
                  id="confirmPassword"
                  required
                  />
                  {errors.confirmPassword && touched.confirmPassword && (<p className="text-red-600">{errors.confirmPassword}</p>)}

                <button type='submit' 
                className='w-80 h-11 bg-indigo-600	text-white rounded-full mt-20 ' 
                disabled={isSubmitting}>Далее</button>
              </form>
            </div>
          </div>
        </section>
    </>
  )
}

export default Password


