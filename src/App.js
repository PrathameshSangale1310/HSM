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
import Gallery from './components/Gallery';
import Courses from './hsmAcademy/Courses';
import C1 from './hsmAcademy/c1'; // Capitalized for JSX usage

import './App.css';

function App() {
  return (
    <>
    <div className="main-wrapper">
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/claymodelling" element={<ClayModelling />} />
        <Route path="/services/prototyping" element={<Prototyping />} />
        <Route path="/services/showmodels" element={<ShowModels />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/hsmdesignacademy/courses" element={<Courses />} />
        <Route path="/hsmAcademy/c1" element={<C1 />} />


      </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
