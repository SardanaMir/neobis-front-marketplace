{/* карточка товара, модальное окно */}

function ShowCardItem(props){

  return(
    <div id={props.item.id} key={props.item.id} className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <img className="" src={props.item.imgURL} alt="" />
      <p className='text-2xl text-indigo-600 font-semibold mt-4'>{props.item.price}$</p>
      <p>Like</p>
      <p className='text-lg font-semibold mt-4'>{props.item.title}</p>
      <p className='text-sm text-gray-400 mt-4'>{props.item.description}</p>
      <p className='text-base font-semibold mt-4'>Детальная информация</p>
      <p className='text-sm text-gray-400'>{props.item.details}</p>
    </div>
  )
}
export default ShowCardItem