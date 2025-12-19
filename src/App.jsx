import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from "./pages/Home";
import Footer from './components/Footer';
import Alert from './components/Alert';

// Simple page components - you can replace these with your actual page components
const About = () => <div className="py-10"><h2 className="text-2xl font-bold text-center">About Page</h2></div>;
const Services = () => <div className="py-10"><h2 className="text-2xl font-bold text-center">Services Page</h2></div>;
const Contact = () => <div className="py-10"><h2 className="text-2xl font-bold text-center">Contact Page</h2></div>;

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');

    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerEl = document.querySelector('header');
      const headerOffset = headerEl ? headerEl.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 8;

      window.scrollTo({ top, behavior: 'smooth' });
    }, 0);

    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return null;
};

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <Header />
      <ScrollToHash />
      <main className="flex-grow bg-neutral-50">
        <div className="w-full px-2 sm:px-4 lg:px-6 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Alert /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
