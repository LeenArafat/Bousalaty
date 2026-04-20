import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import SuggestMajors from './pages/suggest-majors/SuggestMajors';
import About from './pages/suggest-majors/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/student\'s-dashboard/dashboard';
import Quiz from './pages/explore-interests/Quiz';


    {/*
      <Navbar />
      <Routes>
        <Route path="/" element={<SuggestMajors />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Quiz />
      <Dashboard />
    */}
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<SuggestMajors />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;

    
