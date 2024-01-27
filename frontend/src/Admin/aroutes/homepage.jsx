import React from 'react'
import { Adminbar } from '../componets/adminbar'

const Homepage = () => {
  return (
    <div>

    <div className=' pt-11 w-full bg-white pr-9'>
        <div className='max-w-[1240px] mx-auto flex'>
          <div className='flex flex-col justify-center ml-8'>
            <p className='font-bold text-center pt-6 text-transparent'>/</p>
            <h1 className=' text-center md:text-2xl sm:text-3xl text-2xl font-semibold font-serif'>LIST OF PRODUCTS TO BE LAUNCHED </h1>

            <div className=' pt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/1.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/2.png")' }}>
              </div>
              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/3.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/4.png")' }}>
              </div>

              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/5.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/6.png")' }}>
              </div>

              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/7.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/9.png")' }}>
              </div>

              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/10.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/11.png")' }}>
              </div>

              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/12.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/Rose.jpg")' }}>
              </div>


            </div>
            
           
            
          
            
            

            <p className='shadow pb-1 pt-5 text-justify text-lg '>
              Mitey's Crochet is committed to promoting a commitment to quality in every production,
              valuing creativity, and providing exceptional handcrafted items. Our goal is to uphold the highest
              standards of crafts and crochet products while spreading joy through one-of-a-kind, meticulously
              created goods. Our dedication lies in going above and beyond client expectations, guaranteeing their
              contentment, and elevating the handmade with love Crafts.
            </p>
          </div>
        </div>

      </div>
      <div className='text-center  mx-auto py-4 px- bg-gray-100 '>
        <div className='mt-1'>
          <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
        </div>
      </div>
      <Adminbar/>
      </div>
  )
}

export default Homepage