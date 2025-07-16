import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="image-sections">
        <img src="/sm1.jpeg" alt="Banner" />
      </div>
      <div className="about-section">
        <p className="section-paragraph hsm">
          <strong>Highway Star Mobility (HSM)</strong> is a dynamic and forward-thinking design studio committed to redefining
           mobility and product aesthetics through cutting-edge design consultancy and immersive educational experiences.
            With a strong foundation in creative innovation and engineering precision, we offer a unique blend of industry-relevant
             services and hands-on learning through our two key verticals: the <strong>Highway Star Mobility Design Studio </strong> 
            and <strong>Highway Star Mobility Design Academy</strong>. Our mission is to bridge the gap between concept and reality, while
            nurturing the next generation of design professionals.
        </p>
      </div>
      <div className='about'>
        <img className='my-2' src="/s4.jpg" alt="Banner" />
        <img className='my-2' src="/s5.jpeg" alt="Banner" />
        <img className='my-2' src="/s6.jpeg" alt="Banner" />
        <img className='my-2' src="/s7.jpeg" alt="Banner" />
      </div>

      <div className="about-section">
        <h2 className="sub-title">Design Studio</h2>
        <p className="section-paragraph">
          At <strong>Highway Star Mobility Design Studio (HSMDS)</strong>, we provide end-to-end design consultancy services that transform ideas into impactful products. Our studio specializes in comprehensive design processes including design research, concept generation, clay modeling, rapid prototyping, working prototype development, engineering design, 3D modeling, and surface modeling. Whether you are an automotive brand, a startup, or an industrial client, we partner with you to deliver functional and aesthetically driven design solutions that align with your vision and market needs.
        </p>
      </div>

      <div className="about-section">
        <h2 className="sub-title">Design Academy</h2>
        <p className="section-paragraph">
          <strong>Highway Star Mobility Design Academy (HSMDA)</strong> is the educational wing of our studio, dedicated to fostering hands-on skill development in the fields of clay modeling and prototyping. We offer intensive, workshop-based programs tailored for aspiring designers, engineering students, and working professionals from the industry. Our curriculum is designed to provide practical exposure, guided mentorship, hands-on experience, and real-world project experience—preparing learners to thrive in competitive design environments and become industry-ready professionals.
        </p>
      </div>
    </div>
  );
}

export default About;
