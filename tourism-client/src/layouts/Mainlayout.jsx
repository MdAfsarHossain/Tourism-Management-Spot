import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Mainlayout = () => {
    return (
        <div>
            {/* <h1>Main Layout</h1> */}
            <Navbar></Navbar>
            <Outlet />
            {/* <Home></Home> */}

        </div>
    );
};

export default Mainlayout;