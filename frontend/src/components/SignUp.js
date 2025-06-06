import React from "react";

const SignUp = () => {
    return (
        <div className="w-screen flex flex-col gap-4 justify-center items-center" >
            <div className="flex flex-col gap-4 p-4 justify-center items-center rounded-lg drop-shadow-md shadow-lg  ">
            <h1>Sign Up</h1>
            <div className="flex flex-col gap-4">
                <input className="w-1\/3" placeholder="name" />
                <input className="w-1\/3" placeholder="email" />
                <input className="w-1\/3" placeholder="password" />
            </div>
            <button>SignUp</button>
            </div>
        </div>
    )
}
export default SignUp
