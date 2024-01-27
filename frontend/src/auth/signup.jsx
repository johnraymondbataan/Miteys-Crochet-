import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [client, setClient] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_pass: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  console.log(client)
  const handleClick = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/client", client)
      navigate("/");
      alert('Sign Up is Successful');
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className='pt-2 pb-2 mx-auto  '> 

    <div className=" border-rose-400 flex flex-col justify-center px-6 pt-8 pb-8 lg:px-8 mx-auto w-full max-w-sm bg-white shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    <img
      className="w-[100px] mx-auto"
      src="/miteys.jpg"
      alt="Your Company"
    />
    <h2 className="mt-3 text-center text-3xl font-semibold font-serif leading-9 tracking-tight text-gray-900">
      Sign up
    </h2>
  
    <form className=" font-serif text-sm font-bold mt-4 space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="first_name" className="block font-serif text-sm font-bold leading-6 text-gray-900">
          First Name
        </label>
        <div className="mt-2">
          <input
            id="firstname"
            autoComplete="Firtname"
            required
            className='border-rose-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
            type="text" onChange={handleChange} placeholder='e.g John Raymond' name='first_name' />
        </div>
      </div>
  
      <div>
        <label htmlFor="last_name" className="block font-serif text-sm font-bold leading-6 text-gray-900">
          Last Name
        </label>
        <div className="mt-2">
          <input
            id="lastname"
            autoComplete="lastname"
            required className='border-rose-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin '
            type="text" onChange={handleChange} placeholder='e.g Bataan' name='last_name' />
        </div>
      </div>
  
      <div>
        <label htmlFor="email" className="blockfont-serif font-serif text-sm font-bold leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            autoComplete="email"
            required
            className='border-rose-500  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
            type="email" onChange={handleChange} placeholder='client@gmail.com' name="email" />
        </div>
      </div>
  
      <div>
        <label htmlFor="username" className="block font-serif text-sm font-bold  leading-6 text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            autoComplete="username"
            required
            className='border-rose-500  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
            type="text" onChange={handleChange} placeholder='Username' name="username" />
        </div>
      </div>
  
      <div>
        <label htmlFor="password" className="block vfont-serif font-serif text-sm font-bold leading-6 text-gray-900">
          Password
        </label>
        <div className="mt-2">
          <input className='border-rose-500  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
            type="password" onChange={handleChange} placeholder='********' name="password" />
        </div>
      </div>
  
      <div>
        <label htmlFor="confirm_pass" className="block font-serif text-sm font-bold leading-6 text-gray-900">
          Confirm Password
        </label>
        <div className="mt-2">
          <input className='border-rose-500  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
            type="password" onChange={handleChange} placeholder='********' name="confirm_pass" />
        </div>
      </div>
  
      <div>
        <button
          type="button"
          className="flex w-full justify-center rounded-md bg-rose-400 px-3 py-1.5 font-serif text-sm font-bold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleClick}
        >
          Sign up
        </button>
      </div>
    </form>
  
    <p className="mt-5 font-serif font-bold text-center text-sm text-gray-500">
      Already have an account?{' '}
      <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Sign In
      </a>
    </p>
  </div>
  </div>

  )
}

export default Signup