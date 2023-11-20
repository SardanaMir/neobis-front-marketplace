function AddItem() {

    return (
        <>
        <div className='fixed w-full	h-full top-0 bg-black bg-opacity-50'>
            <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <input type="text" id="priceItem"/>
                <input type="text" id="titleItem"/>
                <input type="text" id="shortDescrItem" />
                <input type="text" id="descrItem"/>
            </div>
        </div>
        </>
    )
  }
  
export default AddItem
  
  
  