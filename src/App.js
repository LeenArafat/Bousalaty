import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './pages/explore-interests/Quiz'
import HomePage from './pages/home-page/HomePage';
import ChatBot from './pages/home-page/ChatBot';
import AuthPage from './pages/home-page/auth/AuthPage';
import Navbar from './pages/Navbar';
import SuggestMajors from './pages/suggest-majors/SuggestMajors';
import About from './pages/suggest-majors/About';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/quiz" element={< Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <ChatBot />
    </div>
  );
}

export default App;