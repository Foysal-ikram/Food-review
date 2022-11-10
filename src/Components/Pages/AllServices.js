import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {

    const [data , setData] = useState([])

    useEffect( ()=>{
        fetch('https://food-review-server.vercel.app/services')
        .then(res=>res.json())
        .then(data => setData(data))
    } ,[])
    
    console.log(data)
    return (
        <div className='grid grid-cols-4 gap-8 my-16 mt-32 mx-2'>
            {
                data.map(data=> <AllServiceCard
                key={data._id}
                data={data}
                ></AllServiceCard> )
            }
        </div>
    );
};

export default AllServices;