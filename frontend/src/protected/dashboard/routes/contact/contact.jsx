import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../_components/navbar';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Contact = () => {
  const [feedback, setFeedback] = useState({
    username: "",
    email: "",
    message: "",

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeedback((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  console.log(feedback)
  const handleClick = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/feedback", feedback)
      alert("Successfully send the message")
      navigate("/contact");
    } catch (error) {
      console.log(error);
    }
  }


  console.log()
  return (
    <div style={{ backgroundImage: 'url("bgc3.png")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
      <div className='pt-16 max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
        <div className='flex flex-col my-11 md:pl-40 md:pt-28 pb-11  max-w-[1240px] mx-auto pt-8 pr-4'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] md:pr-8'>
            Mitey's Crochet
          </h1>
          <p className='py-4 '>
            - Crochet Flowers that are freely customized by the wants of the customers.
            These flowers stand out with intricate designs, vibrant colors, and meticulous craftsmanship.
          </p>
          <div className='flex justify-center md:justify-between items-center md:w-[30%] my-1'>
            <FaFacebookSquare size={24} className='mx-2 md:mx-0' />
            <FaInstagram size={24} className='mx-2 md:mx-0' />
            <FaTwitterSquare size={24} className='mx-2 md:mx-0' />
          </div>
        </div>
        <div className="mx-auto my-8 pr-2 md:pr-20 md:pt-1">

          <form className=" border-rose-400 flex flex-col justify-center px-6 pt-8 pb-8 lg:px-8 mx-auto w-full max-w-sm bg-white shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <p className="mb-2 text-center">Have questions or concerns? Reach out to us using the form below:</p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text" onChange={handleChange} placeholder='e.g John Raymond' name='username'
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email" onChange={handleChange} placeholder='e.g bataan@gmail.com' name='email'
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                type="text" onChange={handleChange} placeholder='e.g Thank you for your message' name='message'
              ></textarea>
            </div>

            <button
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClick}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>




      <div className='text-center  mx-auto py-4 px- bg-gray-100 '>
        <div className='mt-1'>
          <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
        </div>
      </div>
      <Navbar />


    </div>
  )
};

export default Contact;