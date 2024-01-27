import React from 'react'
import { Link, } from 'react-router-dom';


const Site = () => {
    return (
        <div>
        <div className="font-serif h-[100vh] w-full flex items-center justify-center bg-cover bg-center "
        style={{ backgroundImage: 'url("/bg3.png") ' }} >
        <div className="pt-10 text-center text-white gap-4 " >
          <p className="text-2xl mb-2 text-gray-800">Mitey's Collection 2024</p>
          <h1 className="text-4xl pb-3 font-semibold mb-4 text-gray-800">Welcome to Mitey's Crochet</h1>

        
          <Link to="/signin" className='bg-rose-300 text-gray-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-rose-200 transition duration-300 pl-5 pr-5 '>Get Started</Link>
          {/* <Link to="/admin" className='bg-white text-gray-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300'>Admin</Link>
           */}
        </div>

        
    
      </div>

      </div>
        
    )
}

export default Site