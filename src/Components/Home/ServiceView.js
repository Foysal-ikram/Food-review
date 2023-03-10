import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ServiceView = () => {
    const [services , setServices] = useState([])
    const navigate = useNavigate() ;
   
    useEffect(()=>{
        fetch(`https://food-review-server.vercel.app/service`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])
    return (
        <div className=' pt-12 bg-orange-50	'>
            <h1 className='text-center text-5xl font-serif mx-20 mt-4 rounded py-4 bg-blue-200'>My services</h1>
           <div className="grid justify-items-center lg:grid-cols-3 grid-cols-1 gap-8 mx-20 mt-8">
           {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                
                >

                </ServiceCard>)
            }
           </div>
           <div className='mx-20 pb-16 mt-4'>
           <button onClick={()=>navigate('/services')}  className="btn btn-accent btn-block">View All</button>
           </div>
        </div>
    );
};

export default ServiceView;