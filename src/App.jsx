import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage.jsx';
import DetailPage from '../src/pages/DetailPage.jsx';

const App = () => {
  return (
    <Router>
      <div className='bg-black min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
