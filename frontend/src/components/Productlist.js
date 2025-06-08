import React, { useEffect, useState } from 'react'

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

    return (
        <div className="m-8">
            <h2 className="text-center font-bold text-xl mb-4">Product List</h2>
            <table className="table-auto border border-blue-300 w-full text-center">
                <thead>
                    <tr className="bg-white">
                        <th className="border border-blue-300 px-4 py-2">S. No</th>
                        <th className="border border-blue-300 px-4 py-2">Name</th>
                        <th className="border border-blue-300 px-4 py-2">Price</th>
                        <th className="border border-blue-300 px-4 py-2">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-blue-300 px-4 py-2">{index}</td>
                            <td className="border border-blue-300 px-4 py-2">{item.name}</td>
                            <td className="border border-blue-300 px-4 py-2">{item.price}</td>
                            <td className="border border-blue-300 px-4 py-2">{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default ProductList