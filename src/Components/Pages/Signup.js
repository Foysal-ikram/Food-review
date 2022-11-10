import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from '../../assets/myimage/login.jpg' ;
import useTitle from "../../useTitle";
import { AuthContext } from "../Loader/UserContext";

const Signup = () => {
    useTitle('signup')
    const {user , createUser} = useContext(AuthContext)
    const [error , setError]= useState(null)
    const navigate = useNavigate() ;

    const handleSubmit=event=>{
        event.preventDefault() ;
        const form = event.target ;
        const email= form.email.value ;
        const name = form.name.value ;
        const password = form.password.value ;
        const confirm = form.confirm.value ;
        console.log(name,email,password,confirm)

        if(password !== confirm){
            setError('Password did not match')
            
        }
       
        createUser(email,password)
        .then(result=>{
            const user= result.user ;
            console.log(user)
            navigate('/') ;
        })
        .catch(error=>console.error(error))

    }

  

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center hidden lg:block lg:text-left w-1/2">
                        <img src={login} alt="" />
                    </div>


                    {/* ----------------------------Form Start------------ */}
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign up </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='confirm' placeholder="Confirm Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#"  className= "label-text-alt link link-hover">Forgot password?</a> 
                                    {/* <p  className='ml-5 text-rose-600	label-text-alt'>{error}</p> */}
                                    
                                   </label>
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Sign up" />
                            </div>
                            <Link to='/login'   className= "text-center link-hover">Already have an account ? Log in</Link> 
                                  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

   
export default Signup;