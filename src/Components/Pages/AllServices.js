import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {

    const [data , setData] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setData(data))
    } ,[])
    
    console.log(data)
    return (
        <div className='grid grid-cols-3 gap-4'>
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