import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Importance from './pages/Importance';
import Coordinators from './pages/Coordinators';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbars />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/importance" element={<Importance />} />
            <Route path="/pac-coordinators" element={<Coordinators />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
