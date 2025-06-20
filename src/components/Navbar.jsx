import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector('.dropdown-menu');

      dropdown.addEventListener('mouseenter', () => {
        document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
          if (openMenu !== menu) openMenu.classList.remove('show');
        });
        menu.classList.add('show');
      });

      dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
      });
    });

    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item.dropdown')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
          menu.classList.remove('show');
        });
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        
        <Link className="navbar-brand logo" to="/">
          <img
            src="/logopng.png"
            alt="Logo"
            className="img-fluid"
            style={{ height: '60px', width: 'auto' }}
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAlt">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAlt">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown mx-2">
              <Link className="nav-link dropdown-toggle nav-link-hover" to="#" role="button" data-bs-toggle="dropdown">
                HSM DESIGN ACADEMY
              </Link>
              <ul className="dropdown-menu shadow-sm">
                <li><Link className="dropdown-item" to="/hsmdesignacademy/allcourses">All Courses</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignacademy/foundationcourses">Design Foundation Courses</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignacademy/learningresources">Teaching and Learning Resources</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignacademy/internship">Internship</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link className="nav-link dropdown-toggle nav-link-hover" to="#" role="button" data-bs-toggle="dropdown">
                HSM DESIGN STUDIO
              </Link>
              <ul className="dropdown-menu shadow-sm">
                <li><Link className="dropdown-item" to="/hsmdesignstudio/services">Services</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignstudio/projects">Own Projects</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link className="nav-link dropdown-toggle nav-link-hover" to="#" role="button" data-bs-toggle="dropdown">
                Services
              </Link>
              <ul className="dropdown-menu shadow-sm">
                <li><Link className="dropdown-item" to="/services/overalldesign">Overall Design Process</Link></li>
                <li><Link className="dropdown-item" to="/services/claymodelling">Clay Modelling</Link></li>
                <li><Link className="dropdown-item" to="/services/prototyping">Prototyping</Link></li>
                <li><Link className="dropdown-item" to="/services/showmodels">Show Models</Link></li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link nav-link-hover" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link nav-link-hover" to="/contact">Contact Us</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
