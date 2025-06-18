import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products')
        result = await result.json()
        setProducts(result)
    }

    console.log("product", products)

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        })
        result = await result.json()
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value.trim();
        if (key) {
            try {
                let result = await fetch(`http://localhost:5000/search/${key}`);
                result = await result.json();
                if (result.length > 0) {
                    setProducts(result);
                } else {
                    setProducts([]);
                }
            } catch (err) {
                console.error("Error in search:", err);
            }
        } else {
            getProducts();
        }
    };


    return (
        <div className="m-8">
            <h2 className="text-center font-bold text-xl mb-4">Product List</h2>
            <input
                type="text"
                placeholder="Search here..."
                className="mb-4 px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-sm mx-auto block"
                onChange={searchHandle}
            />

            <table className="table-auto border border-blue-300 w-full text-center">
                <thead>
                    <tr className="bg-white">
                        <th className="border border-blue-300 px-4 py-2">S. No</th>
                        <th className="border border-blue-300 px-4 py-2">Name</th>
                        <th className="border border-blue-300 px-4 py-2">Price</th>
                        <th className="border border-blue-300 px-4 py-2">Category</th>
                        <th className="border border-blue-300 px-4 py-2">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-blue-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-blue-300 px-4 py-2">{item.name}</td>
                                <td className="border border-blue-300 px-4 py-2">{item.price}</td>
                                <td className="border border-blue-300 px-4 py-2">{item.category}</td>
                                <td className="border border-blue-300 px-4 py-2">
                                    <button className="btn me-4" onClick={() => deleteProduct(item._id)}>
                                        Delete
                                    </button>
                                    <Link to={`/update/${item._id}`} className="btn">
                                        <button>Update</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-gray-500">
                                No products found.
                            </td>
                        </tr>
                    )}


                </tbody>
            </table>
        </div>

    )
}

export default ProductList