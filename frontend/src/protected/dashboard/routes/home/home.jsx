import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Navbar } from '../../_components/navbar';

const Home = () => {

  return (
    <div className="shadow ">
      
      <div className=" font-serif h-[100vh] w-full bg-no-repeat flex items-center justify-center bg-cover bg-center  "
        style={{ backgroundImage: 'url("/bg3.png") ' }} >
        <div className=" pt-10 text-center text-white" >
          <p className="text-2xl mb-2 text-gray-800 font-serif">Mitey's Collection 2024</p>
          <h1 className="text-6xl pb-3 font-semibold mb-4 text-gray-800 font-serif">New Arrivals</h1>
          <a
            href="/shop"
            className="bg-white text-gray-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-rose-200 transition duration-300"
          >
            Shop Now
          </a>
        </div>

      </div>

      <div className=' pr-6 w-full bg-white ' style={{ backgroundImage: 'url("bgc2.png")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
        <div className='max-w-[1240px] mx-auto flex'>
          <div className='flex flex-col justify-center ml-8'>
            <p className='font-bold text-center font-serif pt-11'>CATEGORIES</p>
            <h1 className=' text-center md:text-4xl sm:text-3xl text-2xl font-semibold font-serif'>Mitey's Crochet </h1>

            <div className=' pt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/1.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/Rose.jpg")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/2.png")' }}>
              </div>

              <div className="relative flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: 'url("/7.png")' }}>
              </div>
            </div>

            <p className=' pb-3 pt-5 font-serif text-justify text-md '>
              Mitey's Crochet is committed to promoting a commitment to quality in every production,
              valuing creativity, and providing exceptional handcrafted items. Our goal is to uphold the highest
              standards of crafts and crochet products while spreading joy through one-of-a-kind, meticulously
              created goods. Our dedication lies in going above and beyond client expectations, guaranteeing their
              contentment, and elevating the handmade with love Crafts.
            </p>
          </div>
        </div>

      </div>

      <div className='pr-6 shadow w-full bg-white ' style={{ backgroundImage: 'url("bgc2.png")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
        <div className='max-w-[1240px] mx-auto flex'>
          <div className='flex flex-col justify-center ml-8'>

            <h1 className=' text-center md:text-4xl sm:text-3xl text-2xl font-serif pt-11'>Featured Products </h1>
            
            <div className=' pt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
              
              <div>
                <div className="flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/k10.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center'>Little Chick</h2>
              </div>


              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/k7.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Pink Bunny Mush</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/k2.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Strawberry Mush</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/k4.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Watermelon Mush</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/k11.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Anya</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/3.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Tulip & Daisy</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/5.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Sunflower & Rose</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/13.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Lavander</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/4.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Lavander & Daisy</h2>
              </div>

              <div>
                <div className=" flex flex-col items-center justify-center border-2 border-rose-500 aspect-square w-full bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: 'url("/6.png")' }}>
                </div>
                <h2 className='pt-1 font-serif text-center' >Sunflower & Daisy</h2>
              </div>



            </div>
            

            <p className='pt-5 pb-7 text-justify text-md font-serif '>
              Mitey's Crochet is committed to promoting a commitment to quality in every production,
              valuing creativity, and providing exceptional handcrafted items. Our goal is to uphold the highest
              standards of crafts and crochet products while spreading joy through one-of-a-kind, meticulously
              created goods. Our dedication lies in going above and beyond client expectations, guaranteeing their
              contentment, and elevating the handmade with love Crafts.
            </p>
          </div>
        </div>

      </div>
     
      
      <div className=' shadow mx-auto py-10 px-6 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Mitey's Crochet </h1>
          <p className='py-4'>-	Crochet Flowers that are freely customized by the wants of the customers.
            These flowers stand out with intricate designs, vibrant colors, and meticulous craftsmanship.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center  mx-auto py-4 px-6  bg-gray-50 '>
        <div className='mt-1'>
          <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
        </div>
      </div>


    
      <Navbar/>
    </div>
    


  )
}


export default Home;