import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Login, Home} from './templates';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    )
}

export default Router;
