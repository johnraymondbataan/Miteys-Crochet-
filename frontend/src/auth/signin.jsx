import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:8800/client');
        setAdmin(response.data);
      } catch (err) {
        console.error('Error signing in:', err);
        console.log(err)
      }
    };

    fetchAdmin();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const foundAdmin = admin.find(
      (admin) => admin.username === username && admin.password === password

    );

    if (foundAdmin) {
      alert('Login is Successful');
      navigate(`/home`);
    } else {
      alert('Invalid, please try again');
    }


  };



  return (
    <div className=' mx-auto pt-12 '>

      <div className=" border-rose-400 flex flex-col justify-center px-6 pt-8 pb-8 lg:px-8 mx-auto w-full max-w-sm bg-white shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <div className='pt-0'>
          <img
            className="w-[100px] mx-auto"
            src="/miteys.jpg"
            alt="Your Company"
          />
        </div>

        <h2 className="mt-3 text-center text-3xl font-semibold font-serif leading-9 tracking-tight text-gray-900 ">
          Sign in
        </h2>

        <form className=" mt-6 space-y-4" action="#" method="POST">
          <div>
            <label htmlFor="username" className="block font-serif text-sm font-bold leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2 ">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="border-rose-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-serif font-bold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="border-rose-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              className="border-rose-500 flex w-full justify-center font-serif text-sm font-bold rounded-md bg-rose-500 px-3 py-1.5 leading-6 text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-8 text-center  font-serif text-sm font-bold text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className=' text-indigo-600 hover:text-indigo-500 font-semibold'>Sign Up</Link>
        </p>
        <div className="gap-2 font-serif text-sm font-bold flex pt-4 text-right pl-36">
          <Link to="/" className=" bg-rose-500 py-2 px-6 rounded-full font-semibold hover:bg-rose-700 transition duration-300' text-sm  text-white ">
            Back
          </Link>
          <Link to="/homepage" className=" bg-rose-500  py-2 px-5 rounded-full font-semibold hover:bg-rose-700 transition duration-300' text-sm  text-white ">
            Admin
          </Link>
        </div>

      </div>
    </div>
  )
};

export default Signin;