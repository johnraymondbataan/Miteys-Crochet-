import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Update = ()=>{

    const navigate = useNavigate()
    const location = useLocation()
    const crochetId = location.pathname.split("/")[2]

    const [crochet, setCrochet] = useState({
       
        prod_name: "",
        prod_description: "",
        image: "",
        price: "",
        stock: "",
    })

    const handleChange = (e) =>{
        setCrochet((prev)=>({...prev, [e.target.name]: e.target.value}))
        
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:8800/crochet/${crochetId}`,crochet)
            alert("Product update successfully!");
            navigate("/dashboard")
        }catch(err){
            console.log(err)
        }
    }
 
    return(
        <div className='pt-3 pb-3 mx-auto'>
            <div className=' font-serif text-sm font-bold  border-rose-400 flex flex-col justify-center px-6 pt-4 pb-4 lg:px-8 mx-auto w-full max-w-sm bg-white shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline  '>
                <img
                    className="w-[100px] mx-auto"
                    src="/miteys.jpg"
                    alt="Your Company"
                />

                <h1 className='mt-1 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900 '>Update an item</h1>

                <form className="mt-3 space-y-3" action="#" method="POST">
                    <div>
                        <label htmlFor="first_name" className="block text-sm  leading-6 text-gray-900">
                            Product name
                        </label>
                        <div className="mt-1">
                            <input
                                id="productname"
                                autoComplete="Productname"
                                required
                                className=' border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
                                type="text" placeholder="Product name" onChange={handleChange} name="prod_name" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="first_name" className="block text-sm  leading-6 text-gray-900">
                            Product Description
                        </label>
                        <div className="mt-1">
                            <input
                                id="ProductDescription"
                                autoComplete="ProductDescription"
                                required
                                className=' border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
                                type="text" placeholder="Product description" onChange={handleChange} name="prod_description" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="first_name" className="block text-sm leading-6 text-gray-900">
                            Product Image
                        </label>
                        <div className="mt-1">
                            <input
                                id="Product Image"
                                autoComplete="Product Image"
                                required
                                className=' border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
                                type="text" placeholder="Product image" onChange={handleChange} name="image" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="first_name" className="block text-sm leading-6 text-gray-900">
                            Product Price
                        </label>
                        <div className="mt-1">
                            <input
                                id=" Product Price"
                                autoComplete=" Product Price"
                                required
                                className=' border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
                                type="text" placeholder=" Product price" onChange={handleChange} name="price" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Product stock" className="block text-sm leading-6 text-gray-900">
                            Product stock
                        </label>
                        <div className="mt-1">
                            <input
                                id="  Product stock"
                                autoComplete="  Product stock"
                                required
                                className=' border-rose-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin'
                                type="text" placeholder="  Product stock" onChange={handleChange} name="stock" />
                        </div>
                    </div>

                   
                
                    <div className=" gap-2 pt-3 pl-36 flex">
                    <button
                            type="button"
                            className="  bg-rose-500 text-white  py-2 px-6 rounded-full font-semibold hover:bg-rose-700 transition duration-300' text-sm shover:underline"
                            onClick={handleClick}
                        >
                            Update
                        </button>
                        <Link to="/dashboard" className=" bg-rose-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-rose-700 transition duration-300' text-sm shover:underline">
                            Back
                        </Link>
                    </div>

                    
                </form>
            </div>

        </div>
       




           
        
    )
}

export default Update;