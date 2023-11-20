function ItemBlock(){
    function showCard(e){
        e.preventDefault();
        setSuccess(true);
    }
    return(
        <div onClick={showCard} className='p-10'>
            <div className='w-40 h-48 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                <img src="src/assets/img/image 2.jpg" alt="" />
                <p className='text-sm font-semibold	'>BMW M4 Coupe: A Two-Door</p>
                <p className='text-sm text-indigo-600 font-semibold	' >20 000$</p>
                <div>Like</div>
            </div>
        </div>
    )

}

export default ItemBlock