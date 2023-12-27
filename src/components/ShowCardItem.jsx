{/* карточка товара, модальное окно */}

function ShowCardItem({item, setisModalOpen, isModalOpen}){

  return(
    <div className={isModalOpen ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50 ' : 'hidden'}>
      <div id={item.id} key={item.id} className='relative w-96 min-h-fit bg-white p-10 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img onClick={() => setisModalOpen(false)}  className="absolute top-3 right-3 cursor-pointer" src="src/assets/icons/close.svg" alt="close" />
        <img  className="" src={item.product_image} alt={item.title} />
        <p className='text-2xl text-indigo-600 font-semibold mt-4'>{item.price}$</p>
        <img src="src/assets/icons/heart-white.svg" className="w-8 h-8 cursor-pointer"/>
        <p className='text-lg font-semibold mt-4'>{item.title}</p>
        <p className='text-sm text-gray-400 mt-4'>{item.short_description}</p>
        <p className='text-base font-semibold mt-4'>Детальная информация</p>
        <p className='text-sm text-gray-400'>{item.description}</p>
      </div>
    </div>
  )
}
export default ShowCardItem

