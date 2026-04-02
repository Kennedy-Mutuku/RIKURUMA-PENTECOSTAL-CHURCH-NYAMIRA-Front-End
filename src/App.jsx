import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

// Placeholder components for other pages
const Placeholder = ({ title }) => (
  <div className="container section">
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p>Content coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Admin Dashboard - No Navbar/Footer */}
            <Route path="/dashboard/*" element={<Dashboard />} />
            
            {/* Public Routes */}
            <Route path="*" element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ministries" element={<Placeholder title="Ministries" />} />
                  <Route path="/programs" element={<Placeholder title="Programs" />} />
                  <Route path="/events" element={<Placeholder title="Events" />} />
                  <Route path="/gallery" element={<Placeholder title="Gallery" />} />
                  <Route path="/contact" element={<Placeholder title="Contact Us" />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
                <BackToTop />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
