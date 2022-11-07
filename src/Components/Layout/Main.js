import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import ScrollToTop from '../Loader/ScrollToTop';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
    return (<ScrollToTop>

        <div className='max-w-screen-xl	 mx-auto ' data-theme="light">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    </ScrollToTop>
    );
};

export default Main;