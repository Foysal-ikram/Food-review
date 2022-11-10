import React from 'react';

const OurJourney = () => {
    return (
        <div> <h2 className="text-4xl font-bold font-serif mb-1 pt-8	text-center">Our journey</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl px-24 py-12">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKLy-P755sjjB1xGzuw79YjA8zqQyPcL5Q8jITx8Q-nRBYN3ASJslLLriGd2BaqX8tzg&usqp=CAU" alt="Album" className='lg:w-1/2' />            <div className="card-body">

                    <p className=' bg-gray-200 font-mono text-xl pl-3 pt-2'> 2 years of service</p>
                    <p className=' bg-gray-200 font-mono text-xl pl-3 pt-2'> On time delivery </p>
                    <p className=' bg-gray-200 font-mono text-xl pl-3 pt-2'> Higenic food delivery</p>
                    <p className=' bg-gray-200 font-mono text-xl pl-3 pt-2'> Cash on delivery</p>
                    <p className=' bg-gray-200 font-mono text-xl pl-3 pt-2'> Easy retunr on objection</p>

                </div>
            </div>
        </div>
    );
};

export default OurJourney;