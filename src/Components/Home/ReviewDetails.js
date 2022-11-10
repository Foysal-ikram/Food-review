import React from 'react';

const ReviewDetails = ({review}) => {
    const img2 = 'aaaaa' ;
   
    const {_id, image, email ,customer,serviceName,message} = review ;
    console.log(image)
    return (
        <div className='border-2 p-2 bg-gray-100'>
            <div className='flex items-center'>
               
                <img src={ image } width={30} alt="aa" />
                <h5 className='text-sm	'>{customer}</h5>
            </div>
            <div className='pl-2'>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;