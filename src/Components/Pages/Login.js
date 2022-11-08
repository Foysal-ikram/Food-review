import React from 'react';
import { Link } from 'react-router-dom';
import login1 from '../../assets/myimage/login.jpg' ;
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const google2=()=>{

    }
    

    const handleSubmit=()=>{

    }
    
    return (
        <div>
    
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center hidden lg:block lg:text-left w-1/2">
                        <img src={login1} alt="" />
                    </div>
    
    
                    {/* ----------------------------Form Start------------ */}
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Login </h1>
    
                        <form onSubmit={handleSubmit} className="card-body">
    
    
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    
                                </label>
    
                            </div>
                            <div className="form-control mt-2">
                                <input type="submit" className='btn btn-primary' value="Login" />
                            </div>
                            <div className='block mt-6'>
                                <button onClick={google2} className='btn btn-outline w-full btn-dark text-3xl my-1'><FcGoogle /></button>
                             
                            </div>
                            <Link to='/register' className="text-center  link-hover">New here? Sign up</Link>
    
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    };

export default Login;