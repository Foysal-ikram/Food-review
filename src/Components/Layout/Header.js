import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Loader/UserContext';
import { HiOutlineShoppingBag } from "react-icons/hi";
import './Header.css'
import logo from '../../assets/myimage/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext) ;
    const location = useLocation();
    const navigate = useNavigate() ;

    const logOut2 = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    const menue = <>

        <Link to="/" className='font-semibold mx-4 nav2'>Home</Link>
        <Link to="/orders" className='font-semibold mx-4 nav2'>My Orders</Link>
        {
            user?.email ?
                <button onClick={logOut2} className="btn btn-ghost ">Log Out</button>
                :
                <>
                    <Link to="/login" className='font-semibold mx-4 nav2'>Login</Link>
                    <Link to="/signup" className='font-semibold mx-4 nav2'>Sign up</Link>
                </>
        }

    </>

    return (
        <div className='mb-20 pb-2'>
            <div className="navbar navSticky  rounded border-b-2	 lg:px-16   ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menue}

                        </ul>
                    </div>
                    <Link to="/"><img src={logo} width={75}  alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="inline-block align-middle menu menu-horizontal p-0">
                        {menue}

                    </ul>
                </div>
                <div className="navbar-end" onClick={()=>navigate('/cart')} >
                    <p className="text-2xl btn btn-ghost"><HiOutlineShoppingBag/></p>
                </div>
            </div>
        </div>
    );
};

export default Header;