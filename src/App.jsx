import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';

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
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/ministries" element={<Placeholder title="Ministries" />} />
          <Route path="/programs" element={<Placeholder title="Programs" />} />
          <Route path="/events" element={<Placeholder title="Events" />} />
          <Route path="/gallery" element={<Placeholder title="Gallery" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="/donate" element={<Placeholder title="Donate" />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
