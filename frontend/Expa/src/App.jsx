import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import { Header } from './components/Header';
import SlideShow from './components/SlideShow';
import Footer from './components/Footer';
import Features from './components/Features';
import { EventCards } from './components/EventCards';
import AdminSignup from './components/AdminSignup'; // Make sure to import your component
import Trainer from './components/Trainer';         // Make sure to import your component
import Trainee from './components/Trainee';         // Make sure to import your component

function Home() {
  return (
    <>
      <SlideShow />
      <div id="features">
        <h1 className="font-bold text-4xl">Features</h1>
        <Features />
      </div>
      <div id="events">
        <h1 className="font-bold text-4xl">Our Events</h1>
        <EventCards />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/trainee" element={<Trainee />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
