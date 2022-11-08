import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllServices = () => {
    const data = useLoaderData() ;
    console.log(data)
    return (
        <div>
            <h1>aaaaa</h1>
        </div>
    );
};

export default AllServices;