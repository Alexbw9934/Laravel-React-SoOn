import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from './page/Home';
import Login from './page/Login';
import Dashboard from './component/Dashboard';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;