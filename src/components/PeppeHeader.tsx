import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/img/logo.png';

export default function PeppeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuSections = [
    {
      title: "ORIENTAMENTO",
      color: "#0066CC", // Primary color
      items: [
        { title: "Cosa conosci già?", path: "/step1" },
        { title: "Chi controlla i modelli?", path: "/step2" },
        { title: "Non sono tutti la stessa cosa", path: "/step3" },
      ]
    },
    {
      title: "DEMISTIFICAZIONE",
      color: "#0066CC",
      items: [
        { title: "Come funzionano davvero?", path: "/step4" },
        { title: "Ma allora è intelligente?", path: "/step5" },
      ]
    },
    {
      title: "CONSEGUENZE",
      color: "#0066CC",
      items: [
        { title: "Se non è intelligente, cosa produce?", path: "/step6" },
        { title: "Cosa succede a scuola?", path: "/step7" },
        { title: "Quindi come usarla?", path: "/step8" },
      ]
    },
    {
      title: "ALLARGAMENTO",
      color: "#0066CC",
      items: [
        { title: "Il costo invisibile", path: "/step9" },
        { title: "La literacy critica", path: "/step10" },
      ]
    },
    {
      title: "RISORSE",
      color: "#0066CC",
      items: [
        { title: "Fonti principali", path: "/sources" },
        { title: "Glossario completo", path: "/glossary" },
        { title: "Crediti e licenza", path: "/credits" },
      ]
    }
  ];

  return (
    <>
      <header className="it-header-wrapper sticky-top" style={{ zIndex: 1040 }}>
        <div className="it-header-center-wrapper bg-primary text-white py-3 shadow-sm position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="it-brand-wrapper">
                  <Link to="/" className="d-flex align-items-center text-white text-decoration-none fw-bold fs-4" onClick={closeMenu}>
                    <img 
                      src={logo} 
                      alt="PEPPEai Logo" 
                      className="me-2" 
                      style={{ height: '40px', width: 'auto' }}
                      referrerPolicy="no-referrer"
                    />
                    PEPPEai
                  </Link>
                </div>
                
                {/* Menu Toggle Button (Desktop & Mobile) */}
                <button 
                  className="btn btn-link text-white p-0 d-flex align-items-center gap-2 text-decoration-none"
                  onClick={toggleMenu}
                  aria-label="Menu"
                >
                  <span className="d-none d-sm-inline fw-medium fs-5">Menu</span>
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`position-fixed top-0 start-0 h-100 w-100 bg-dark transition-all ${isMenuOpen ? 'visible' : 'invisible'}`}
        style={{ 
          zIndex: 1050, 
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
        }}
        onClick={closeMenu}
      >
        <div 
          className="position-absolute top-0 end-0 h-100 overflow-auto shadow-lg bg-white"
          style={{ 
            width: '100%', 
            maxWidth: '400px', 
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom border-light">
              <Link to="/" className="text-dark text-decoration-none fw-bold fs-4 d-flex align-items-center" onClick={closeMenu}>
                <img 
                  src={logo} 
                  alt="PEPPEai Logo" 
                  className="me-2" 
                  style={{ height: '32px', width: 'auto' }}
                  referrerPolicy="no-referrer"
                />
                Home
              </Link>
              <button className="btn btn-link text-dark p-0 opacity-75 hover-opacity-100 transition-all" onClick={closeMenu}>
                <X size={32} />
              </button>
            </div>
            
            <div className="d-flex flex-column gap-4 pb-5">
              {menuSections.map((section, idx) => (
                <div key={idx}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: section.color }}></div>
                    <h3 className="m-0 fw-bold text-secondary" style={{ fontSize: '0.9rem', letterSpacing: '1.5px' }}>
                      {section.title}
                    </h3>
                  </div>
                  <div className="d-flex flex-column gap-1 ps-3 border-start border-2 border-light ms-1">
                    {section.items.map((item, itemIdx) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link 
                          key={itemIdx}
                          to={item.path}
                          className={`text-decoration-none px-3 py-2 rounded-2 transition-all ${isActive ? 'bg-primary text-white fw-medium shadow-sm' : 'text-dark'}`}
                          onClick={closeMenu}
                          style={{ outline: 'none' }}
                          onMouseEnter={(e) => { if (!isActive) e.currentTarget.classList.add('bg-light') }}
                          onMouseLeave={(e) => { if (!isActive) e.currentTarget.classList.remove('bg-light') }}
                        >
                          <span 
                            style={{ 
                              fontSize: '1.1rem', 
                              lineHeight: '1.4',
                            }}
                          >
                            {item.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
