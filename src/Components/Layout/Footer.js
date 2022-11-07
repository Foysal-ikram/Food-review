import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-28 bg-black text-white">
                <div>
                    {/* <img src={star} width={100} alt="" /> */}
                    <p>Star tech Mobile shop<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Our Blog</a>
                    <a href="/" className="link link-hover">Membership</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Posts</a>
                    <a href="/" className="link link-hover">Delivery</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Add policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;