import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../../_components/navbar';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Shop = () => {
  const [crochet, setCrochet] = useState([]);

  useEffect(() => {
    const fetchAllCrochet = async () => {
      try {
        const res = await axios.get("http://localhost:8800/crochet");
        setCrochet(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCrochet();
  }, []);

  

  return (
    <div className=''>
      <div className="text-transparent max-w-4xl mx-auto pr-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center pt-1 text-transparent pb-7 ">View of the user</h1>
      </div>
     

      <h1 className="font-serif pb-2 pl-5 text-4xl  text-gray-800 text-center">
        <button className=" font-semibold px-4 py-2 rounded-md mr-2 text-4xl focus:outline">
          Products Available
        </button>
      </h1>

      <div className=" font-sans border-2  border-rose-500 w-full pt-8 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5">
        {crochet.map((crochet) => (
          <div key={crochet.id} className="border-2 border-rose-400 w-full p-6 pt-4">
            {crochet.image && <img src={crochet.image} alt={crochet.image} className="w-full mb-2 shadow transform hover:scale-105 transition-transform duration-300" />}

            <h2 className="text-lg font-semibold ">{crochet.prod_name}</h2>
            <p className="text-gray-700 ">{crochet.prod_description}</p>

            <div className="flex gap-8 xl:gap-8 pt-3 md:pl-0">
              <p className="text-gray-800 mb-2">Price - {crochet.price}</p>
              <p className="text-gray-800 mb-2">Stock - {crochet.stock}</p>
            </div>

            <div className="flex pl-0 pt-3 md:pl-20">

              <button className=" border-2  border-gray-200 px-2 py-1 rounded-md hover:bg-rose-300">
                <Link to={`/shop`}>Add to cart</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=' pr-6 w-full bg-white ' >
        <div className='max-w-[1240px] mx-auto flex'>
          <div className='flex flex-col justify-center ml-8'>
          
            <h1 className=' text-center md:text-4xl pt-5 sm:text-3xl text-2xl font-semibold font-serif'>Best-Selling Products</h1>

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

      <div>
      </div>
      <div className='text-transparent text-center  mx-auto py-4 px- '>
        <div className='mt-1'>
          <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
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




      <Navbar />
    </div>
  );
};

export default Shop;