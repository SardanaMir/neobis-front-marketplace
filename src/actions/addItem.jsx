function AddItem() {

    return (
        <>
        <div className='fixed w-full h-full top-0 bg-black bg-opacity-50'>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <form className="flex flex-col">
                    <div className="w-16 min-h-fit bg-gray-100 rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer">
                        <img src="src/assets/icons/image-add.svg" alt="" />
                        <p className="text-xs text-indigo-600 text-center font-medium">Добавить фото</p>
                    </div>
                    <input type="text" id="priceItem" placeholder="Цена" className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-4'/>
                    <input type="text" id="titleItem" placeholder="Название" className='max-w-full h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1'/>
                    <input type="text" id="shortDescrItem" placeholder="Краткое описание" className='max-w-full	h-11 border-b bg-gray-100 rounded-lg focus:outline-none pl-2 mt-1'/>
                    <input type="text" id="descrItem" placeholder="Полное описание" className='max-w-full min-h-fit border-b bg-gray-100 rounded-lg focus:outline-none p-2 mt-1'/>
                    <button className='max-w-full h-11 bg-indigo-600 text-white rounded-2xl focus:outline-none mt-4'>Добавить</button>
                </form>
            </div>
        </div>
        </>
    )
  }
  
export default AddItem
  
  
  