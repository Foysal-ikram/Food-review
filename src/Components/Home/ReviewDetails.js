import React from 'react';

const ReviewDetails = ({ review }) => {
    const url2 = "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif";

    const { _id, image, email, customer, serviceName, message } = review;
    
    console.log(image)
    return (
        <div className='border-2 p-2 bg-gray-100'>
            <div className='flex items-center my-2 text-orange-600	'>
               <img src={image ? image : url2} width={30} alt="aa" className='px-1' />
                <h5 className='text-sm'>{customer}</h5>
            </div>
            <div className='pl-2 text-sm	'>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;