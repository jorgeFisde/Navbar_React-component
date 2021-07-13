import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { MyNavbar } from '../navbar/MyNavbar';

export const AppRouter = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            <MyNavbar />
        </Router>
    )
}
