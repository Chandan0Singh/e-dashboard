import React, { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = async () => {
        console.log("SignUp", { name, email, password });
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
    }

    return (
        <div className="w-screen flex flex-col gap-4 justify-center items-center" >
            <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg  ">
                <h1>Sign Up</h1>
                <div className="flex flex-col gap-4">
                    <input className="w-1\/3" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
                    <input className="w-1\/3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <input className="w-1\/3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <button onClick={signup}>SignUp</button>
            </div>
        </div>
    )
}
export default SignUp
