import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from '../Loader/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import ReviewDetails from './ReviewDetails';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext)
    const data = useLoaderData()

    console.log(data)
    const { _id, name, img, price, rating, description } = data;
    console.log('mongo search ....', name)

    useEffect(() => {
        fetch(`https://food-review-server.vercel.app/reviews?name=${name}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [name])





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

        fetch('https://food-review-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    toast('🦄 Your review is added', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,

                        theme: "dark",


                    })
                    const newReview = [...reviews, review]
                    setReviews(newReview)
                    //console.log(reviews)
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

            <div className='bg-orange-200 border-2 mt-6 rounded'>
                <h1 className='text-center font-semibold py-6 font-serif	text-3xl	'>Reviews</h1>
            {
                    reviews?.length === 0 && <h2 className='text-4xl text-center font-serif font-bold'>No review found</h2>    
                    
                }
                {
                    reviews.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                    ></ReviewDetails>)
                }

            </div>

            {/* -------------------------------Post review section ------------------------------ */}

                <ReviewCard
                givereview={givereview}
                user={user}
                
                ></ReviewCard>
        </div>
    );
};

export default ServiceDetails;