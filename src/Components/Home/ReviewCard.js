import React from 'react';

const ReviewCard = ({givereview,user}) => {

    if(user){

    return (
        <div>
            <div className='p-4 border-4 mt-4 shadow-xl '>
                <div className='bg-orange-400'> </div>
                <form onSubmit={givereview}>

                    <h2 className="text-xl pb-2 pl-1">Place your review here </h2>

                    <div className='grid grid-cols-1 gap-4'>
                        <input name="name" type="text" placeholder=" Name" className="input input-ghost w-full  input-bordered" required />
                        <input name="image" type="text" placeholder="Place Photo URL" className="input input-ghost w-full  input-bordered" />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                    <input className='btn' type="submit" value="Place Your review" />

                </form>
            </div>
        </div>
    );
};
} ;

export default ReviewCard;