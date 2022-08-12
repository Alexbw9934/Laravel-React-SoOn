import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './../container/Header';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
}

export default Home;