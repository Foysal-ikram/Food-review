import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login1 from '../../assets/myimage/login.jpg' ;
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Loader/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../useTitle';


const Login = () => {
    useTitle('login')
    const {user ,login,google} = useContext(AuthContext) ;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();
    // const provider2 = new GithubAuthProvider();
    // const provider3 = new FacebookAuthProvider();
    const google2 = () => {
        google(provider)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email:user.email
                    
                }
                fetch('https://food-review-server.vercel.app/jwt' , {
                    method : 'POST' ,
                    headers: { 'content-type' : 'application/json' },
                    body : JSON.stringify(currentUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    localStorage.setItem('food-token' , data.token)
                    navigate(from, { replace: true });
                })
               
            })
            .catch(error => console.error(error))

    }
    

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
    
                    const currentUser = {
                        email:user.email
                        
                    }
                    fetch('https://food-review-server.vercel.app/jwt' , {
                        method : 'POST' ,
                        headers: { 'content-type' : 'application/json' },
                        body : JSON.stringify(currentUser)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                        localStorage.setItem('food-token' , data.token)
                        navigate(from, { replace: true });
                    })
                   
                })
                .catch(error => console.error(error))
    

         
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