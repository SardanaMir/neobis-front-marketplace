

function MainScreen() {

  return (
    
    <div className="p-6 bg-gray-100">
        <header className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
                <img src="src/assets/img/logo.png" alt="" />
                <h2 className="text-xl font-semibold">MOBI MARKET</h2>
            </div>
            <div className="flex items-center gap-5">
                <button className='w-80 h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none'>Подать заявление</button>
                <div className='flex gap-x-3 items-center cursor-pointer'>
                    <div>
                        <p className='text-lg font-semibold'>Сардана</p>
                        <p className='text-lg font-normal'>sardana</p>
                    </div>
                    <div className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                        <img src="src/assets/icons/user.svg" alt="user" />
                    </div>
                </div>
            </div>
        </header>
        <div>
            <div className='p-10'>
                <div className='w-40 h-48 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                    <img src="src/assets/img/image 2.jpg" alt="" />
                    <p className='text-sm font-semibold	'>BMW M4 Coupe: A Two-Door</p>
                    <p className='text-sm text-indigo-600 font-semibold	' >20 000$</p>
                    <div>Like</div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default MainScreen


