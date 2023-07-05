import React from "react";
import { useParams, BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

const Location = () => {
    const { city } = useParams();
    console.log(city)

    return (
        <h1>Welcome to {city}!</h1>
    );
};

function App() {
    return (
        <Router>
            <div>
                <p>
                    <Link to="/location/seattle">Seattle</Link>
                    |
                    <Link to="/location/chicago">Chicago</Link>
                    |
                    <Link to="/location/Ariana">Ariana</Link>
                    |
                    <Link to="/location/Amal Ya Bhima">Amal</Link>

                </p>
                <Routes>
                    <Route path="/location/:city" element={<Location />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
