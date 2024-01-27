import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:8800/admin');
        setAdmin(response.data);
      } catch (err) {
        console.error('Error signing in:', err);
        console.log(err)
      }
    };

    fetchAdmin();
  }, []);

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  //   const foundAdmin = admin.find(
  //     (admin) => admin.email === email && admin.password === password
  //   );

  //   if (foundAdmin) {
  //     alert('Login is Successful');
  //     navigate('/homepage');
  //   } else {
  //     alert('Invalid, please try again');
  //   }
  //   console.log(email, password);
  //   console.log(admin)
  // };

  const handleSignIn=(e)=>{
    e.preventDefault()
 
    const foundAdmin = admin.find(
      admin => admin.email === email && admin.password === password
    );
 
    if (foundAdmin) {
      alert('Login successful')
      navigate("/dahsboard")
      // Perform actions for successful login (e.g., navigate to dashboard)
    } else {
      alert('Invalid email or password')
      console.log(email, password);
       console.log(admin)
      // Show error message or take appropriate action
    }
  }

  

  return (
    <div className=' pb-4 mx-auto pt-4  '> 
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm  bg-white shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outlin">
    <img
      className="w-[100px] mx-auto"
      src="/miteys.jpg"
      alt="Your Company"
    />
    <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
      Sign in
    </h2>
  
    <form className="mt-8 space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
  
      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
  
      <div>
        <button
          type="button"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </div>
    </form>
  
    <p className="mt-10 text-center text-sm text-gray-500">
      Don't have an account?{' '}
      <Link to="/signup">Sign Up</Link>
    </p>
    <div className=" pt-4 text-right">
          <Link to="/" className=" bg-gray-200  py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300' text-sm text-indigo-600 hover:underline">
            Back
          </Link>
          </div>

  </div>
  </div>
  )
};

export default Signin;