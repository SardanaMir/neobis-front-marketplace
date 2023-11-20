{/* карточка товара, модальное окно */}


function CardItem(){
    <div className={success ? 'fixed w-full	h-full top-0 bg-black bg-opacity-50' : 'hidden'}>
        <div className='w-96 min-h-fit bg-white p-5 rounded-3xl flex flex-col top-2/4 left-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img className="" src="src/assets/img/image 3.jpg" alt="" />
            <p className='text-2xl text-indigo-600 font-semibold mt-4'>12000</p>
            <p>Like</p>
            <p className='text-lg font-semibold mt-4'>Adidas Yeezy 500</p>
            <p className='text-sm text-gray-400 mt-4'>The Yeezy 500 Blush is a limited edition shoe designed by Kanye West for Adidas</p>
            <p className='text-base font-semibold mt-4'>Детальная информация</p>
            <p className='text-sm text-gray-400'>
            It features a unique design, with a chunky silhouette and a blush colorway. The shoe has a mix of suede, mesh and leather, and it's considered a highly sought-after item among shoe enthusiasts.
            </p>
        </div>
    </div>
}
export default CardItem