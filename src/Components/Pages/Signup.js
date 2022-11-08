import { Link } from "react-router-dom";
import login from '../../assets/myimage/login.jpg' ;

const Signup = () => {
    const handleSubmit=()=>{
        
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