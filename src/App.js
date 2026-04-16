import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import MajorDetails from './pages/explore-major/Major';
import SuggestMajors from './pages/suggest-majors/SuggestMajors';
import About from './pages/suggest-majors/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
    <MajorDetails />
      <Routes>
        <Route path="/" element={<SuggestMajors />} />
        <Route path="/About" element={<About />} />
      </Routes>

   
    </>
  );
}

export default App;