import React, { useState } from "react";

const Login = () => {
    const [email, seEmail] = useState("")
    const [password, setPassword] = useState("")

    const Login = ()=>{
        console.log("Login", {email, password});
    }
    return (
        <div className="w-screen flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg">
                <h1>Login</h1>
                <div className="flex flex-col gap-4">
                    <input className="" type="email" value={email} v onChange={(e)=>seEmail(e.target.value)} placeholder="email" />
                    <input className="" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                </div>
                <button onClick={Login}>Login</button>
            </div>
        </div>
    );
}

export default Login;