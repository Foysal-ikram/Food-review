import React from 'react';
import img from '../../assets/myimage/logo.png';
import { AiFillFacebook ,AiFillTwitterCircle  } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";



const Footer = () => {
    return (
        <div>
            <footer className="footer p-16 bg-sky-800 text-white">
                <div>
                    {/* <img src={star} width={100} alt="" /> */}
                    <p>DAN's Foody<br /></p>
                    <img src={img} alt="" width={100} />
                    <p>Have a great fame for Food delivery service</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Our Blog</a>
                    <a href="/" className="link link-hover">Membership</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Foody</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Posts</a>
                    <a href="/" className="link link-hover">Delivery</a>
                </div>
                <div>
                    <span className="footer-title">Others</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Add policy</a>
                   <div className='flex text-2xl items-center'>
                   <a href="/" className=""><AiFillFacebook/></a>
                    <a href="/" className="mx-2"><AiFillTwitterCircle/></a>
                    <a href="/" className=" text-3xl"><TiSocialLinkedinCircular/></a>
                   </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;