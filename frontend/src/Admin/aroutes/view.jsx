import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Adminbar } from '../componets/adminbar';

const Dashboard = () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        const fetchAllCrochet = async () => {
            try {
                const res = await axios.get("http://localhost:8800/client");
                setClient(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllCrochet();
    }, []);

    //   const handleDelete = async (id) => {
    //     try {
    //       await axios.delete("http://localhost:8800/client" + id);
    //       window.location.reload();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    return (
        <div>
            <div className="text-transparent max-w-4xl mx-auto pr-4">
                <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center pt-1 text-transparent pb-10">/</h1>
            </div>

            <div className="max-w-[1240px] mx-auto pt-12 md:pt-5 pr-4 border-2 border-rose-300 ">
                <p className="px-4 md:px-11 pb-3 text-justify text-lg text-gray-700">
                    An administrator, commonly referred to as an admin, holds a pivotal role in overseeing and managing a list of client users within a system. Endowed with elevated access privileges, admins are responsible for user management tasks such as creating, modifying, and deactivating client user accounts.
                </p>
            </div>

            <h1 className="pt-4 pb-2 pl-5 text-4xl font-bold text-gray-800">
                <button className="bg-rose-200  font-serif font-semibold px-4 py-2 rounded-md mr-2 text-2xl focus:outline">
                    List of the client user.
                </button>
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-gray-300 pt-8 pb-6 border-separate border-spacing-1">
                    <thead>
                        <tr className="border font-serif border-gray-500">
                            <th className="border bg-rose-100 border-rose-500 p-6 pt-4">First Name</th>
                            <th className="border bg-rose-100 border-rose-500 p-6 pt-4">Last Name</th>
                            <th className="border bg-rose-100 border-rose-500 p-6 pt-4"> Username</th>
                            <th className="border bg-rose-100 border-rose-500 p-6 pt-4">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.map((client) => (
                            <tr key={client.id} className="border font-sans border-gray-500">
                                <td className="border border-rose-500 p-6 pt-4 text-gray-700 text-center">{client.first_name}</td>
                                <td className="border border-rose-500 p-6 pt-4 text-gray-700 text-center">{client.last_name}</td>
                                <td className="border border-rose-500 p-6 pt-4 text-gray-800 text-center">{client.username}</td>
                                <td className="border border-rose-500 p-6 pt-4 text-gray-800 text-center">{client.email_add}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center mx-auto py-4 bg-gray-100">
                <div className="mt-1">
                    <p>&copy; {new Date().getFullYear()} Mitey's Crochet since 2021. All rights reserved.</p>
                </div>
            </div>

            <Adminbar />
        </div>
    );
};

export default Dashboard;