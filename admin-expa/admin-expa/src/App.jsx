/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TraineePage from './components/TraineePage';
import TrainerPage from './components/TrainerPage';
import EventsPage from './components/EventsPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trainee" element={<TraineePage />} />
                <Route path="/trainer" element={<TrainerPage />} />
                <Route path="/events" element={<EventsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
