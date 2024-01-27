import React from 'react'
import { Navbar } from '../../_components/navbar';


const About = () => {
  return (
    <div className="">
      <div className=' bg-white py-16'>
      <div className="text-transparent max-w-4xl mx-auto ">
        <h1 className="text-2xl font-bold text-gray-800 text-center pt-1 text-transparent ">View of the user</h1>
      </div>

      <div className=" border-2 border-rose-500 pb-11  max-w-[1240px] mx-auto pt-8 md:pt-2 pr-4" style={{ backgroundImage: 'url("bgc4.png")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
      <h1 className="text-3xl font-bold pt-2 mb-4 text-gray-800 text-center font-serif ">About Us</h1>
          <p className="  text-center text-lg text-gray-700">
            Welcome to Mitey's Crochet since 2021.
          </p>
          <p className=" px-11 text-justify text-lg text-gray-700">
            Crochet Flowers that are freely customized by the wants of the customers.
            These flowers stand out with intricate designs, vibrant colors, and meticulous craftsmanship.
            Our unique selling points include customizable options, eco-friendly materials, and a touch of
            handmade charm. Explore our special promotions, featuring limited-edition collections, bundle
            discounts, and personalized flower arrangements to add a floral touch to every occasion. Embrace
            the beauty of handcrafted blooms with Mitey's Crochet Flowers.
          </p>
     </div>



     <div className="text-transparent max-w-4xl mx-auto ">
        <h1 className="text-2xl font-bold text-gray-800 text-center pt-1 text-transparent ">View of the user</h1>
      </div>

        <div className='relative flex-col items-center border-2 border-rose-500 pt-11 max-w-[1240px] mx-auto grid  sm:grid-cols-1 md:grid-cols-2 gap-4 justify-center px-6  pb-8 lg:px-8 w-full  bg-white shadow appearance-none rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
          <img className='w-[350px] mx-auto my-5 transform hover:scale-105 transition-transform duration-300' src="ab3.png" alt='/' />
          <div className=' flex flex-col my-11 pr-11'>
            <h1 className='text-center md:text-left md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-serif'>Short story behind </h1>
            <p className='pt-2 md:pl-2 text-lg text-justify'>
              Mitey's Crochet began its journey during the first year of the pandemic.
              Faced with the challenges of lockdowns and isolation, the founder, Mitey, sought
              solace in the therapeutic art of crochet. What initially started as a personal
              escape soon transformed into a business, driven by a desire to share the joy of handmade
              creations. The business emerged organically, spurred by passion and the support of a close-knit
              community. Our unique selling points include customizable options, eco-friendly materials,
              and a touch of handmade charm.
            </p>
          </div>

          <div className=' my-11 pl-16'>
            <h1 className='md:text-4xl  sm:text-3xl text-2xl font-bold py-2 font-serif'>The founder of Mitey's Crochet</h1>
            <p className='pt-2 text-lg text-justify'>
              Introducing Michelle "Mitey" Cruz, the passionate creator of Mitey's Crochet. Mitey devotes time
              and effort to creating one-of-a-kind, handcrafted items, and her heart is firmly ingrained in
              her crocheting and artistry. Their passion for transforming yarn into art and their dedication
              to spreading the beauty and joy of well-crafted objects across her community serve as the driving
              forces behind their drive. Mitey's mission extends beyond product creation to include the intricate
              weaving of memories, tales, and feelings into each stitch.
            </p>
          </div>
          <img className='w-[350px] mx-auto my-5 transform hover:scale-105 transition-transform duration-300' src="ab1.png" alt='/' />

          <img className='w-[350px] mx-auto my-5 transform hover:scale-105 transition-transform duration-300 pb-2' src="ab2.png" alt='/' />
          <div className='flex flex-col my-11 pr-11'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-serif'>Year start Since 2021</h1>
            <p className='pt-2 text-lg text-justify'>
              Mitey's Crochet and Crafts began its journey during the first year of the pandemic.
              Faced with the challenges of lockdowns and isolation, the founder, Mitey, sought
              solace in the therapeutic art of crochet. What initially started as a personal
              escape soon transformed into a business, driven by a desire to share the joy of
              handmade creations. The business emerged organically, spurred by passion and the
              support of a close-knit community.
            </p>
          </div> 


        </div>

      </div>

      

      
      <div className='border-2 border-rose-500 py-7 max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <img className='w-[300px] mx-auto my-2 transform hover:scale-105 transition-transform duration-300' src="miteys.jpg" alt='/' />
        <img className='shadow w-[350px] mx-auto pt-12 transform hover:scale-105 transition-transform duration-300' src="cert.png" alt='/' />
      </div>

      <div className="text-transparent max-w-4xl mx-auto ">
        <h1 className="text-2xl font-bold text-gray-800 text-center pt-1 text-transparent ">View of the user</h1>
      </div>


      



      <div className='text-center pt--2 mx-auto py-4 px- bg-gray-100 '>
        <div className='mt-1'>
          <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
export default About