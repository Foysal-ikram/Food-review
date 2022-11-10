import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServiceCard = ({ data }) => {
    console.log(data)
    const { _id, img, description, rating, price, name } = data;
    const navigate = useNavigate();

    return (
        <div>
            <div className="card py-6 px-2 w-full min-w-full border-2  bg-base-100 shadow-xl w-full  transform hover:scale-105 ">
                {/* <div onClick={() => navigate(`/mobiles/${_id}`)} > */}<div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} width={450} className="max-h-40 lg:max-h-52 px-4 " alt="Shoes" />
                            {/* <img src={img} alt="" className="max-h-40 lg:max-h-52 px-4 "/> */}
                        </PhotoView>
                    </PhotoProvider>
                    <div className="">
                        <div className='justify-center'>
                            <div className='text-center my-8 h-12  '>
                                <h3 className="card-title inline px-4">
                                    {name}
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h3>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='font-sans text-xl font-semibold aaa px-4'>Price: $ {price}</h2>
                            <h2 className='font-sans text-xl font-semibold aaa px-4 flex items-center'> Rating:{rating}<AiTwotoneStar /> </h2>
                        </div>
                        <p className='px-4 pt-3 text-justify'>{description.slice(0, 100)}...</p>


                    </div>
                </div>
                <div className="p-3"><button className='btn2 btn btn-block ' onClick={() => navigate(`/services/${_id}`)}>
                    view details
                </button>
                </div>
            </div>

        </div>
    );
};

export default AllServiceCard;