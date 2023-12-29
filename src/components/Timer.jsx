import React, {useState, useEffect} from 'react'
import { checkPhoneNumber } from '../api';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Timer = ({code}) => {
    const [timeLeft, setTimeLeft] = useState(59);
    const [linkVisible, setLinkVisible] = useState(false);
    const userData = useSelector(state => state.user);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setLinkVisible(true);
      }
    }, [timeLeft]);
    
    const handleSendCode = async (e) =>{
      e.preventDefault()
      try{
        await checkPhoneNumber(userData);
        setSuccess(true);
        toast.success('Письмо отправлено');
      }catch(err){
        toast.error('Ошибка! Попробуйте позже');
      }
    }

    return (
      <div>
        {timeLeft > 0 ? (
            <>
            <p className='text-slate-400 text-base mt-2'>Повторный запрос</p>
            <p className='text-slate-400 text-base text-center'>00:{timeLeft}</p>
            </>
        ) : (
          <button onClick={handleSendCode} className='bg-inherit text-indigo-600 font-semibold'>Отправить код еще раз</button> 
        )}
      </div>
    );
  }

export default Timer