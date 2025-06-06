import React from "react";

const Login = () => {
    return (
        <div className="w-screen flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg">
                <h1>Login</h1>
                <div className="flex flex-col gap-4">
                    <input className="" placeholder="email" />
                    <input className="" placeholder="password" />
                </div>
                <button>Login</button>
            </div>
        </div>
    );
}

export default Login;