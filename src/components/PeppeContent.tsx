import React from 'react';

export default function PeppeContent() {
  return (
    <section id="senso-comune" className="py-5 bg-white border-top">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Il Senso Comune sull'IA</h2>
              <p className="lead text-muted">Cosa crediamo di sapere sull'IA — e cosa invece ci serve davvero</p>
            </div>
            
            <div className="p-4 p-md-5 bg-light rounded-4 shadow-sm border">
              <div className="placeholder-content text-center py-5">
                <p className="fst-italic text-secondary mb-0">
                  [PLACEHOLDER — Contenuto da definire dal team PEPPE AI]
                </p>
                <div className="mt-4 text-start">
                  <p className="text-muted">
                    Suggerimento struttura: miti vs realtà, domande provocatorie, testo narrativo, o citazione + approfondimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
