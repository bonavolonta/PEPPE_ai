import React from 'react';

export default function PeppeHero() {
  return (
    <section className="it-hero-wrapper bg-white py-5 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="mb-4 d-flex justify-content-center">
              <div className="bg-white p-2 rounded-3 shadow-sm" style={{ maxWidth: '200px' }}>
                <img 
                  src="/src/assets/img/logo.png" 
                  alt="PEPPEai Logo" 
                  className="img-fluid" 
                  style={{ maxHeight: '120px' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <h1 className="display-3 fw-bold text-dark mb-2">PEPPEai</h1>
            <p className="lead text-secondary mb-5">Formazione Docenti con l'AI</p>
            <div className="it-btn-container">
              <a className="btn btn-primary btn-lg rounded-pill px-5" href="#senso-comune">
                Scopri il progetto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
