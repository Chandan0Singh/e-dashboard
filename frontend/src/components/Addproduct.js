import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [isError, setIsError] = useState(false)

  const onSubmit = async () => {

    if (!name || !price || !category || !company) {
      setIsError(true)
      return false;
    }

    const UserId = JSON.parse(localStorage.getItem("user"))._id
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, UserId, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json()

    setCategory('')
    setCompany('')
    setName('')
    setPrice('')

    setIsError(false);
  }

  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg">
        <h1>Add Product</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text" p
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            className="p-2 border border-gray-300 rounded"
          />
          {isError && !name &&  <span className="error-msg">please enter valid name</span>}
          
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="p-2 border border-gray-300 rounded"
          />
          {isError && !price &&  <span className="error-msg">please enter valid price</span>}

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="p-2 border border-gray-300 rounded"
          />
          {isError && !category &&  <span className="error-msg">please enter valid category</span>}

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            className="p-2 border border-gray-300 rounded"
          />
          {isError && !company &&  <span className="error-msg">please enter valid company</span>}

        </div>
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
