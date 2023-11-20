import {useState, useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [placeholderVisible, setPlaceholderVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const {
    formState: {isValid},
    } = useForm({
        mode: 'onChange'
    });

  useEffect(() =>{
    userRef.current.focus();
  }, []);
  
  useEffect(() =>{

  }, [user, email]);

  const handleKeyPress = () => {
    setPlaceholderVisible(!placeholderVisible)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post( 
        JSON.stringify({user, email}),
        {
          header: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
    console.log(JSON.stringify(response?.data));
    const accessToken = response?.data?.accessToken;
    const roles = response?.data?.roles;
    // setAuth({user, pwd, roles, accessToken})
    setUser('');
    setEmail('');
    setSuccess(true);
    }catch(err){
      if(!err?.response){
        setErrMsg('No server response')
      }else if(err.response?.status === 400){
        setErrMsg('Missing username or password');
      }else if (err.response?.status === 401){
        setErrMsg('Unauthorized')
      }else {
        setErrMsg('Неверный логин или пароль')
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <></>
        ) : (
        <section className='grid grid-cols-2 grid-rows-1 text-center'>
          <img className='h-full' src='src/assets/img/bg.jpg' alt="" />

          <div className='col-start-2'>
            <div className='flex pt-1.5	gap-x-1'>
              {/* link */}
              <Link to='/login' className='w-11 h-7 bg-gray-300 rounded-3xl flex justify-center cursor-pointer '>
                <img src="src/assets/icons/arrow-left.svg" alt="" />
              </Link>

              <p className='text-base	font-normal'>Назад</p>
            </div>

            <div
              ref={errRef} className={errMsg ? 'absolute w-80 min-h-15 p-2.5 rounded-xl flex justify-center items-center bg-red-600 text-white gap-2.5 top-1 right-1/6' : 'hidden'} aria-live='asserive'><img src={errMsg ? 'src/assets/icons/warning.svg' : 'hidden'} alt="" />{errMsg}
            </div>

            <h2 className='text-lg font-bold'>Регистрация</h2>

            <form onSubmit={handleSubmit} className='mt-64 block mx-auto my-0'>
              <div>
                <p className={placeholderVisible ? 'text-sm text-gray-300' : 'hidden'}>Имя пользователя</p>
                <input 
                type="text" 
                ref={userRef} 
                onChange={(e) => setUser(e.target.value)} 
                // onInput={(e) => handleKeyPress(e)}
                value={user} 
                className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 focus:outline-none' }
                id='username' 
                placeholder='Имя пользователя' 
                required/>
              </div>
              <div>
                <input 
                  type='email' 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  id='email' 
                  className={errMsg ? 'w-80 h-11 border-b border-solid border-red-300 text-red-600 mt-12 focus:outline-none' : 'w-80 h-11 border-b border-solid border-grey-300 mt-12 focus:outline-none'} 
                  placeholder='Почта' 
                  required/>
              </div>
              <button type='submit' 
              className='w-80 h-11 bg-indigo-600	text-white rounded-full mt-20 ' 
              disabled={!isValid}>Далее</button>
            </form>
          </div>
        </section>
      )}
    </>
  )
}

export default Register


