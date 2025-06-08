import React from "react";
import { Link , useNavigate } from 'react-router-dom';
import style from '../styles/Nav.module.css';
const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/signup'); // Redirect to login page after logout
    }

    return (
        <div className="bg-gray-900 text-white flex justify-evenly items-center p-4">
            <img src="/banner-01.webp" className={style.logo} alt="Logo" />
            <hr className="border-gray-700" />
            {auth ? <ul className="flex gap-4 bg-gray-800">
                <li className="no-bullets text-l p-4"><Link className="no-underline " to='/'> Home </Link></li>
                <li className="no-bullets text-l p-4"><Link className="no-underline " to='/add-product'> Add Product </Link></li>
                <li className="no-bullets text-l p-4"><Link className="no-underline " to='/products'> Update Product </Link></li>
                <li className="no-bullets text-l p-4"><Link className="no-underline " to='/profile'> Profile </Link></li>
                <li className="no-bullets text-l p-4" onClick={logout}><Link className="no-underline " to='/logout'> Logout {JSON.parse(auth).name}</Link></li>
            </ul> : 
            <ul className="flex gap-4 bg-gray-800">
                <li className="no-bullets text-l p-4"><Link className="no-underline " to='/signup'> Sign Up </Link></li>
                <li className="no-bullets text-l p-4"><Link className="no-underline " to='/login'> Login  </Link></li>
            </ul>
             }
        </div>
    )
}

export default Nav;