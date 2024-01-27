import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Adminbar } from '../componets/adminbar';

const Dashboard = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/crochet" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="text-transparent max-w-4xl mx-auto pr-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center pt-1 text-transparent pb-10 ">View of the user</h1>
      </div>
      <div className=" border-2 border-rose-300  max-w-[1240px] mx-auto pt-8 md:pt-2 pr-4">
       

        <p className=" pb-6 px-4 md:px-11 text-justify text-lg text-gray-700">
          Administrators streamline product management through the "Add" method,
          effortlessly incorporating new crochet items. The "Delete"
          method empowers them to curate the inventory, requiring intentional
          confirmation for irreversible removal. Meanwhile, the "Update" method
          ensures accuracy, allowing administrators to seamlessly modify product
          details like name, description, price, and stock, keeping the catalog
          current with the latest changes in offered crochet items.
        </p>
      </div>

      <h1 className="pt-4 pb-2 pl-5 text-3xl  text-gray-800 text-center">
        <button className="bg-rose-200 font-semibold font-serif px-4 py-2 rounded-md mr-2 text-lg focus:outline">
          List of items that already add, update and delete of the admin.
        </button>
      </h1>

      <div className="border-2  border-rose-400 w-full pt-8 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5">
        {crochet.map((crochet) => (
          <div key={crochet.id} className="border-2 border-rose-500 w-full p-6 pt-4">
            {crochet.image && <img src={crochet.image} alt={crochet.image} className="w-full mb-2 transform hover:scale-105 transition-transform duration-300" />}

            <h2 className="text-lg font-semibold ">{crochet.prod_name}</h2>
            <p className="text-gray-700 mb-2">{crochet.prod_description}</p>

            <div className="flex gap-8">
              <p className="text-gray-800 mb-2">Price - {crochet.price}</p>
              <p className="text-gray-800 mb-2">Stock - {crochet.stock}</p>
            </div>

            <div className="flex pl-6 md:pl-16">
              <button
                className="border-2  hover:bg-rose-200  border-gray-200 px-2 py-1 rounded-md mr-2"
                onClick={() => handleDelete(crochet.id)}
              >
                Delete
              </button>
              <button className=" border-2  hover:bg-rose-200  border-gray-200 px-2 py-1 rounded-md">
                <Link to={`/update/${crochet.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1 className="pt-4 pb-6  pl-5 text-3xl font-bold text-gray-800 text-center">
        <button className="bg-rose-200  hover:bg-rose-400 px-4 py-2 rounded-md mr-2 font-semibold font-serif text-lg focus:outline">
          <Link to="/add">Add new items</Link>
        </button>
      </h1>
      <div>
      </div>
      <div className='text-center  mx-auto py-4 px- bg-gray-100 '>
                <div className='mt-1'>
                    <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
                </div>
            </div>
      <Adminbar />
    </div>
  );
};

export default Dashboard;