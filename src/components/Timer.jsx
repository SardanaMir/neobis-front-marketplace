import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(59);
    const [linkVisible, setLinkVisible] = useState(false);
  
    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setLinkVisible(true);
      }
    }, [timeLeft]);
    
    const handleSendCode = (e) =>{
        //endpoint на повторную отправку письма на почту
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