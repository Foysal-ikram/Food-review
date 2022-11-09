import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from '../Loader/UserContext';
import { toast, ToastContainer } from 'react-toastify';

const ServiceDetails = () => {
    const [ reviews , setReviews] = useState() ;
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    console.log(user)
    const { _id, name, img, price, rating, description } = data;


   



    const givereview = event => {
        event.preventDefault();
        const form = event.target;
        const Cname = form.name.value;
        const email = user?.email || 'unregistered';
        const imageURL = form.image.value;
        const message = form.message.value;


        const review = {

            serviceName: name,
            price: price,
            customer: Cname,
            email,
            image: user.photoURL,

            message
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews()
                if (data.acknowledged) {
                    toast('-----------------🦄 Your review is added-------------------------', {
                        position: "top-center",
                        autoClose: 5,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,

                        theme: "dark",


                    })
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }







    return (
        <div className='mt-32 mb-8'>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 bg-base-100 shadow-xl">
                <div>
                    <img src={img} alt="Album" />
                </div>
                <div className="card-body ">
                    <h2 className="card-title">This is our famous {name} !</h2>
                    <p className='pt-8'>{description}</p>
                    <div className="card-actions justify-end">

                    </div>
                    <h4 className='text-3xl font-semibold'>Price : ${price}</h4>
                    <h4 className='flex items-center font-semibold text-3xl'>Rating : {rating} <AiFillStar /> </h4>

                </div>
            </div>
            {/* -----------------------------------Old Reviews-------------------------------- */}

            <div>
                
                { reviews?.serviceName}
            </div>
       
            {/* -------------------------------Post review section ------------------------------ */}
                <div className='p-4 border-4 mt-4 shadow-xl '>
                   <div className='bg-orange-400'> <ToastContainer/></div>
                    <form onSubmit={givereview}>

                        <h2 className="text-xl pb-2 pl-1">Place your review here </h2>

                        <div className='grid grid-cols-1 gap-4'>
                            <input name="name" type="text" placeholder=" Name" className="input input-ghost w-full  input-bordered" required />
                            <input name="image" type="text" placeholder="Place Photo URL" className="input input-ghost w-full  input-bordered"  />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                        <input className='btn' type="submit" value="Place Your review" />

                    </form>
                </div>
            
        </div>
    );
};

export default ServiceDetails;