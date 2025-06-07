import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, seEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("Login", { email, password });
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
        } else {
            alert('please enter valid details')
        }
    }

    return (
        <div className="w-screen flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg">
                <h1>Login</h1>
                <div className="flex flex-col gap-4">
                    <input className="" type="email" value={email} v onChange={(e) => seEmail(e.target.value)} placeholder="email" />
                    <input className="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;