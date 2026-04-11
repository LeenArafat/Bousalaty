import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YazanHomePage from './pages/home-page/HomePage.jsx';
import AuthPage from './pages/auth/AuthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YazanHomePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
