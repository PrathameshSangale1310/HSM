import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ClayModelling from './Services/clayModelling';
import Prototyping from './Services/Prototyping';
import ShowModels from './Services/showModels';
import Internship from './components/Internship';
import Career from './components/Career';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/services/claymodelling" element={<ClayModelling />} />
        <Route path="/services/prototyping" element={<Prototyping />} />
        <Route path="/services/showmodels" element={<ShowModels />} />
        <Route path="/internship" element={<Internship />} />

      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
