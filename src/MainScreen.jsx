import {Link} from 'react-router-dom';




function MainScreen() {
    const store = [  
        {
        "title": "PlayStation 5",
        "price": "499",
        "description": "The PlayStation 5 is the latest gaming console from Sony, offering cutting-edge graphics and immersive gaming experiences.",
        "details": "It features a custom AMD RDNA 2 GPU, lightning-fast SSD, haptic feedback controllers, and support for 4K gaming.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Apple AirPods Pro",
        "price": "249",
        "description": "The AirPods Pro are wireless earbuds from Apple, offering active noise cancellation and immersive sound.",
        "details": "They come with three different sizes of soft, flexible silicone tips that conform to the contours of each ear, providing both a comfortable fit and a superior seal.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Samsung 55-inch QLED TV",
        "price": "1499",
        "description": "The Samsung QLED TV offers stunning picture quality with vibrant colors and deep contrast.",
        "details": "It features Quantum Dot technology, Ambient Mode+, and Object Tracking Sound for an immersive viewing experience.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Dyson V11 Vacuum Cleaner",
        "price": "599",
        "description": "The Dyson V11 is a cordless vacuum cleaner with powerful suction and intelligent cleaning modes.",
        "details": "It features an LCD screen that shows current performance, including selected power mode, remaining run time, filter maintenance reminders, and blockage reports.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Canon EOS R5 Camera",
        "price": "3899",
        "description": "The Canon EOS R5 is a full-frame mirrorless camera designed for professional photography and videography.",
        "details": "It features 8K video recording, in-body image stabilization, and a 45MP full-frame CMOS sensor.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Fitbit Versa 3 Smartwatch",
        "price": "229",
        "description": "The Fitbit Versa 3 is a health & fitness smartwatch with built-in GPS, heart rate monitoring, and voice assistant support.",
        "details": "It offers a battery life of up to 6+ days, fast charging, and water resistance up to 50 meters.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "KitchenAid Stand Mixer",
        "price": "349",
        "description": "The KitchenAid Stand Mixer is a versatile kitchen appliance designed for baking and cooking enthusiasts.",
        "details": "It features a powerful motor, 10 optimized speeds, and various attachments for mixing, kneading, and whipping.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Sony WH-1000XM4 Headphones",
        "price": "349",
        "description": "The Sony WH-1000XM4 is a premium wireless noise-cancelling headphones for high-quality audio and long-wear comfort.",
        "details": "It offers Dual Noise Sensor and HD Noise Cancelling Processor QN1, speak-to-chat technology, and 30 hours of battery life.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "Weber Spirit II E-310 Gas Grill",
        "price": "479",
        "description": "The Weber Spirit II E-310 is a powerful and reliable gas grill for outdoor cooking and grilling.",
        "details": "It features an open cart design, 3 powerful burners, and Flavorizer bars for that classic grilled flavor.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
      },
      {
        "title": "LG CX 55-inch OLED TV",
        "price": "1799",
        "description": "The LG CX OLED TV offers stunning picture quality with infinite contrast and vibrant colors.",
        "details": "It features NVIDIA G-SYNC compatibility, Dolby Vision IQ & Dolby Atmos, and a9 Gen 3 AI Processor.",
        "imgURL": "https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_b_2-800x700h.jpg.webp"
    }]

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
                    <Link to='/profile' className='w-16 h-16 flex bg-indigo-600 rounded-full justify-center items-center'>
                        <img src="src/assets/icons/user.svg" alt="user" />
                    </Link>
                </div>
            </div>
        </header>

        <div className='p-10 flex flex-wrap justify-center gap-4'>
            {store.map((item, index) =>(
            <div key={index} className='w-40 h-50 bg-white rounded-xl flex flex-col justify-center p-4 cursor-pointer'>
                <img src={item.imgURL} alt="" />
                <p className='text-sm font-semibold'>{item.title}</p>
                <p className='text-sm text-indigo-600 font-semibold	'>{item.price}</p>
                <div>Like</div>
            </div>
            ))}

        </div>

    </div>


  )
}

export default MainScreen


