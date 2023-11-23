import {Link} from 'react-router-dom';

function MainScreenHeader(){
    return (
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
                    <Link to='/profile' className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                        <img src="src/assets/icons/user.svg" alt="user" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default MainScreenHeader