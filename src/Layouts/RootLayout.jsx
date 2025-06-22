import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../shared/Navber/Navber';
import Footer from '../shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;