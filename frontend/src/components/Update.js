import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';


const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();

    useEffect(()=>{
        getProductData();
        // console.log("params", params);
    },[])

    const getProductData = async () =>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    // const onSubmit = async () => {
    //     console.log(name, price, category, company);
    // }


    return (
        <div className="w-screen flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg">
                <h1>Update Product</h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="text" p
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product Name"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    // onClick={onSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default UpdateProduct;
