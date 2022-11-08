import React from 'react';
import bn1 from '../../assets/myimage/bn1.png'
import bn2 from '../../assets/myimage/bn2.png'
import bn3 from '../../assets/myimage/bn3.png'
import bn4 from '../../assets/myimage/bn4.png'
import { IoCaretForwardSharp, IoCaretBackSharp } from "react-icons/io5";



const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:mt-20 ">
                <div id="slide1" className="carousel-item relative w-full  ">
                    <div className='overlay'>
                        <img src={bn4} className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-2">
                        <a href="#slide4" className="btn btn-circle "><IoCaretBackSharp /></a>
                        <a href="#slide2" className="btn btn-circle mx-1"><IoCaretForwardSharp /> </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <div>
                        <img src={bn2} className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-2">
                        <a href="#slide1" className="btn btn-circle"><IoCaretBackSharp /></a>
                        <a href="#slide3" className="btn btn-circle"><IoCaretForwardSharp /> </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <div>
                        <img src={bn3} className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-2">
                        <a href="#slide2" className="btn btn-circle"><IoCaretBackSharp /></a>
                        <a href="#slide4" className="btn btn-circle"><IoCaretForwardSharp /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <div>
                        <img src={bn1} className="w-100 " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-2">
                        <a href="#slide3" className="btn btn-circle"><IoCaretBackSharp /></a>
                        <a href="#slide1" className="btn btn-circle"><IoCaretForwardSharp /></a>
                    </div>
                </div>
            </div>
        </div>













    );
};

export default Banner;