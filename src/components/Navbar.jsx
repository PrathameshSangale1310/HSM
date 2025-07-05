import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isLightNavbarPage = ['/contact', '/about','/hsmdesignacademy/courses'].includes(location.pathname);

  const [scrolled, setScrolled] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoSrc =
  isLightNavbarPage || isTabletOrSmaller
    ? '/logopng.png'
    : (scrolled ? '/logopng.png' : '/whitebglogo.png');


  const navbarClass = `
    navbar navbar-expand-lg 
    ${scrolled ? 'navbar-scrolled' : ''}
    ${isLightNavbarPage ? 'light-navbar' : ''}
  `;

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector('.dropdown-menu');

      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 991) {
          document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
            if (openMenu !== menu) openMenu.classList.remove('show');
          });
          menu.classList.add('show');
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 991) {
          menu.classList.remove('show');
        }
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

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 991;
    const allNavLinks = document.querySelectorAll('.nav-link, .dropdown-item');

    const handleLinkClick = (e) => {
      const parent = e.target.closest('.nav-item');
      const hasDropdown = parent?.classList.contains('dropdown');
      const dropdownMenu = parent?.querySelector('.dropdown-menu');

      if (isMobile()) {
        if (hasDropdown) {
          if (dropdownMenu.classList.contains('show')) {
            closeNavbar();
          } else {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
              if (menu !== dropdownMenu) menu.classList.remove('show');
            });
            dropdownMenu.classList.add('show');
          }
        } else {
          closeNavbar();
        }
      }
    };

    const closeNavbar = () => {
      const navbarCollapse = document.getElementById('navbarNavAlt');
      const isExpanded = navbarCollapse.classList.contains('show');
      if (isExpanded) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    };

    allNavLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      allNavLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className={navbarClass}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link className="navbar-brand logo" to="/">
          <img
            src={logoSrc}
            alt="Logo"
            className="img-fluid"
            style={{ height: '60px', width: 'auto' }}
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAlt">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAlt">
          <ul className="navbar-nav align-items-left">
            <li className="nav-item dropdown mx-2">
              <Link className="nav-link dropdown-toggle nav-link-hover" to="#" role="button">
                HSM Design Academy
              </Link>
              <ul className="dropdown-menu shadow-sm">
                <li><Link className="dropdown-item" to="/hsmdesignacademy/courses">Courses</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignacademy/foundationcourses">Design Foundation Courses</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignacademy/learningresources">Teaching and Learning Resources</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignacademy/internship">Internship</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link className="nav-link dropdown-toggle nav-link-hover" to="#" role="button">
                HSM Design Studio
              </Link>
              <ul className="dropdown-menu shadow-sm">
                <li><Link className="dropdown-item" to="/hsmdesignstudio/services">Services</Link></li>
                <li><Link className="dropdown-item" to="/hsmdesignstudio/projects">Own Projects</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <Link className="nav-link dropdown-toggle nav-link-hover" to="#" role="button">
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
