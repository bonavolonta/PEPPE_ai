import React from 'react';
import { Link } from 'react-router-dom';

export default function PeppeFooter() {
  return (
    <footer className="it-footer bg-primary py-5 text-white">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12 col-md-8">
            <div className="mb-4">
              <p className="mb-2">
                Questo materiale è distribuito con licenza{' '}
                <a 
                  href="https://creativecommons.org/licenses/by/4.0/deed.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-underline"
                >
                  Creative Commons Attribuzione 4.0 Internazionale (CC BY 4.0)
                </a>
              </p>
            </div>
            <div className="d-flex justify-content-center gap-4 align-items-center">
              <a 
                href="https://creativecommons.org/licenses/by/4.0/deed.it" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://i.creativecommons.org/l/by/4.0/88x31.png" 
                  alt="Licenza Creative Commons CC BY 4.0" 
                  referrerPolicy="no-referrer"
                  className="img-fluid"
                />
              </a>
              <Link to="/credits" className="text-white text-decoration-none border border-white rounded-pill px-3 py-1 hover-scale transition-all">
                Crediti e Licenza
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
