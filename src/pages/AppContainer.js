import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import Categorypage from './Categories';
import Navbar from './Navbar';

const BookstoreContainer = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Categories" element={<Categorypage />} />
    </Routes>
  </div>

);

export default BookstoreContainer;
