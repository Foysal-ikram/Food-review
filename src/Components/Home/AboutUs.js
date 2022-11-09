import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 p-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div >
                <img src="https://i.pinimg.com/736x/45/36/21/453621b62a17ff28a75a92e70db2e15a.jpg" className="max-w-sm max-h-60 lg:max-h-full	hidden lg:block rounded-lg shadow-2xl" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXHPFE2Y5T6ebWBreDL3PvOEZKsA8SsLE7g&usqp=CAU" alt="" width={400}  className='lg:hidden '/>
                </div>
                <div className='lg:pr-24 lg:pl-12 text-justify pt-4'>
                    <h1 className="text-5xl font-bold">About My Services</h1>
                    <p className="py-6">I mainly serve fastfoods . This can be your better choice. We have some people who makes these food in our home. These foods are extremely healthy and not for baby child. We make this in organic way and with carefully. Working with your trust and love .</p>
                   
                </div>
            </div>
        </div>
    );
};

export default AboutUs;