import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './pages/explore-interests/Quiz'
import HomePage from './pages/home-page/HomePage';
import ChatBot from './pages/home-page/ChatBot';
import AuthPage from './pages/home-page/auth/AuthPage';
import Navbar from './pages/Navbar';
import SuggestMajors from './pages/suggest-majors/SuggestMajors';
import About from './pages/suggest-majors/About';
import MajorDetails from './pages/explore-major/Major';
import { Dashboard } from './pages/student-dashboard/dashboard';

     
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/details" element={<MajorDetails /> } />
        <Route path="/suggestions" element={<SuggestMajors />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      <ChatBot />

    </>
  );
}
export default App;
