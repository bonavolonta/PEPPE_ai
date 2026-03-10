import React from 'react';

export default function PeppeHeader() {
  return (
    <header className="it-header-wrapper">
      <div className="it-header-center-wrapper bg-primary text-white py-3 shadow-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="it-brand-wrapper">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none fw-bold fs-4">
                  <img 
                    src="/src/assets/img/logo.png" 
                    alt="PEPPEai Logo" 
                    className="me-2" 
                    style={{ height: '40px', width: 'auto' }}
                    referrerPolicy="no-referrer"
                  />
                  PEPPEai
                </a>
              </div>
              <nav className="it-header-navbar-wrapper">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <span className="text-white-50 small fst-italic">[Menu Placeholder]</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
