import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const data = useLoaderData() ;
    const [review , setReview] = useState(data)

    const {_id }= data ;
   
    const givereview = event => {
        event.preventDefault()
        const form = event.target ;
        const message  = form.message.value ;
        review.message = message ;
        console.log(review)

        fetch(`http://localhost:5000/myreview/${_id}`, {
            method: 'PUT' ,
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)

        } )
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
        })


    }

    return (
        <div className='my-32'>
            <form onSubmit={givereview}>

                <h1 className='p-4 bg-gray-200 my-4 rounded-md'>Give your new review here : </h1>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>
                <input className='btn' type="submit" value="Place Your review" />
            </form>
        </div>
    );
};

export default UpdateReview;