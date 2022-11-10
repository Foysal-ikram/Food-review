import React, { useState } from 'react';
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const MyreviewCard = ({ review, deleteReview, update }) => {
    const { _id, customer, email, message, serviceName } = review;
    const navigate = useNavigate() ;



    return (
        <div className='bg-gray-200 rounded-md m-4 p-4'>
            <div className='flex justify-between pl-3'>
                <h1 className='flex items-center'> <FcBusinessman /> Customer: {customer}</h1>
                <p className=''>service Name : {serviceName}</p>
            </div>
            <div className='bg-blue-300	p-4 rounded-md'>
                your review : <br /> {message}
            </div>
            <div className='py-4'>
                <button className='btn btn-sm btn-info mx-2' onClick={() => deleteReview(_id)}>Delete</button>
                <button className='btn btn-sm btn-error'  onClick={() => navigate(`/myreview/${_id}`)}>Edit</button>
            </div>
        </div>
    );
};

export default MyreviewCard;