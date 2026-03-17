import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareQuote, AlertTriangle, CheckCircle, ArrowRightCircle, BrainCircuit, TrendingDown, Users, Info } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <PeppeHeader />
      <main>
        <section className="py-5 bg-white">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Breadcrumb & Progress */}
                  <div className="mb-5">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item text-muted">Movimento 3 — Conseguenze</li>
                        <li className="breadcrumb-item active" aria-current="page">Tappa 7</li>
                      </ol>
                    </nav>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="progress flex-grow-1" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <span className="small text-muted fw-medium">70%</span>
                    </div>
                    <p className="small text-muted mb-0">Tappa 7 di 10</p>
                  </div>

                  {/* Header */}
                  <header className="mb-5">
                    <span className="badge rounded-pill mb-3 px-3 py-2" style={{ backgroundColor: '#C87D2A', color: 'white' }}>Movimento 3 — Tappa 7</span>
                    <h1 className="display-4 fw-bold text-dark mb-3">Cosa succede a scuola?</h1>
                    <p className="lead text-secondary">Le evidenze empiriche sull'uso dell'IA nell'apprendimento. Due ricerche fondamentali mostrano un paradosso: l'IA può migliorare i risultati a breve termine ma danneggiare l'apprendimento reale.</p>
                  </header>

                  {/* Callout: Senso Comune */}
                  <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
                    <div className="card-body p-4 p-md-5 position-relative">
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#fff8f0', opacity: 0.5, zIndex: 0 }}></div>
                      <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#C87D2A', zIndex: 1 }}></div>
                      
                      <div className="position-relative z-1">
                        <h2 className="h5 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#C87D2A' }}>
                          <MessageSquareQuote size={24} />
                          L'assunto del senso comune
                        </h2>
                        <p className="fs-5 mb-0 text-dark fst-italic" style={{ fontFamily: 'Georgia, serif', lineHeight: 1.6 }}>
                          «L'IA in classe è sempre una risorsa positiva. Aiuta gli studenti, personalizza l'apprendimento, riduce il carico di lavoro. Prima la integriamo, meglio è.»
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Due ricerche fondamentali */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Due ricerche fondamentali</h2>

                    <div className="row g-4 my-4">
                      {/* 7a: Neural Debt */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 bg-white" style={{ borderTop: '4px solid #5B4A8A' }}>
                          <div className="card-body p-4 p-md-5">
                            <h3 className="h5 fw-bold mb-1" style={{ color: '#5B4A8A' }}>7a — Neural Debt</h3>
                            <h4 className="h6 text-muted fw-bold mb-4">Lo studio MIT (Kosmyna et al., 2025)</h4>
                            
                            <p className="text-secondary mb-4">
                              Nel 2025, ricercatori del MIT (Kosmyna et al.) hanno pubblicato <em lang="en">"Your Brain on ChatGPT"</em> — uno studio con EEG su 54 partecipanti che ha misurato l'attività cerebrale durante compiti di scrittura con e senza assistenza AI.
                            </p>
                            
                            <h5 className="h6 fw-bold text-dark mb-3">Risultati chiave:</h5>
                            <ul className="list-unstyled mb-4">
                              <li className="mb-3 d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#5B4A8A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">Partecipanti che usavano ChatGPT mostrarono connettività cerebrale ridotta del circa 55% rispetto al gruppo senza IA</span>
                              </li>
                              <li className="mb-3 d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#5B4A8A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">Le aree frontali (pianificazione, ragionamento) erano meno attivate</span>
                              </li>
                              <li className="mb-3 d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#5B4A8A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">Il gruppo con IA produceva testi di qualità simile a breve termine, ma con meno elaborazione cognitiva</span>
                              </li>
                              <li className="d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#5B4A8A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">Dopo settimane di uso, il gruppo IA mostrava difficoltà a svolgere compiti simili senza assistenza</span>
                              </li>
                            </ul>

                            <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderLeft: '3px solid #5B4A8A' }}>
                              <p className="fst-italic text-dark mb-2 small">
                                «Il cervello sembra "delegare" il lavoro cognitivo all'IA. Nel breve termine funziona. Nel lungo termine, alcune capacità cognitive si atrofizzano per mancanza di esercizio.»
                              </p>
                              <p className="text-muted small mb-0">— Kosmyna et al. (2025), MIT Media Lab (parafrasato)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 7b: Cognitive Debt */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 bg-white" style={{ borderTop: '4px solid #C87D2A' }}>
                          <div className="card-body p-4 p-md-5">
                            <h3 className="h5 fw-bold mb-1" style={{ color: '#C87D2A' }}>7b — Cognitive Debt</h3>
                            <h4 className="h6 text-muted fw-bold mb-4">Bastani et al. (2024)</h4>
                            
                            <p className="text-secondary mb-4">
                              Nel 2024, Bastani, Bastani, Sungu e colleghi hanno pubblicato <em lang="en">"Generative AI Can Harm Learning"</em> — uno studio randomizzato controllato su oltre 1.000 studenti di matematica.
                            </p>
                            
                            <p className="text-secondary mb-4">
                              <strong>Metodo:</strong> tre gruppi — 1) nessun accesso AI, 2) accesso libero a GPT-4, 3) accesso a tutor AI strutturato.
                            </p>

                            <h5 className="h6 fw-bold text-dark mb-3">Risultati chiave:</h5>
                            <ul className="list-unstyled mb-4">
                              <li className="mb-3 d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">Il gruppo con GPT-4 libero aveva voti più alti nelle sessioni assistite</span>
                              </li>
                              <li className="mb-3 d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">In un esame finale senza IA, quel gruppo otteneva risultati peggiori del gruppo senza AI</span>
                              </li>
                              <li className="d-flex align-items-start gap-2">
                                <span className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={16} /></span>
                                <span className="text-secondary">Il gruppo con tutor strutturato aveva risultati migliori di entrambi</span>
                              </li>
                            </ul>

                            <div className="p-3 rounded-3 mt-auto" style={{ backgroundColor: 'rgba(200, 125, 42, 0.05)', borderLeft: '3px solid #C87D2A' }}>
                              <p className="fst-italic text-dark mb-2 small">
                                «Gli studenti che usavano l'IA liberamente dipendevano da essa per eseguire i compiti. Quando veniva rimossa, erano meno capaci degli studenti che non l'avevano mai usata.»
                              </p>
                              <p className="text-muted small mb-0">— Bastani et al. (2024), The Wharton School</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Il paradosso dell'apprendimento */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Il paradosso dell'apprendimento con l'IA</h2>
                    
                    <div className="card border-0 shadow-lg rounded-5 overflow-hidden my-5">
                      <div className="card-header border-0 p-4 text-center" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                        <h3 className="h5 fw-bold text-dark mb-1">Performance nel tempo: con e senza IA</h3>
                        <p className="text-muted small mb-0">Basato sui dati di Bastani et al. (2024)</p>
                      </div>
                      
                      <div className="card-body p-4 p-md-5 bg-white">
                        <div className="position-relative w-100" style={{ height: '300px' }}>
                          {/* Chart SVG */}
                          <svg viewBox="0 0 650 320" className="w-100 h-100" preserveAspectRatio="xMidYMid meet">
                            {/* Chart area background */}
                            <rect x="70" y="20" width="500" height="240" fill="#f8f9fa" rx="8" />

                            {/* Y axis gridlines */}
                            <line x1="70" y1="68" x2="570" y2="68" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="70" y1="116" x2="570" y2="116" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="70" y1="164" x2="570" y2="164" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="70" y1="212" x2="570" y2="212" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>

                            {/* Y axis labels */}
                            <text x="55" y="24" textAnchor="end" fontSize="12" fill="#6c757d" fontWeight="500">100%</text>
                            <text x="55" y="72" textAnchor="end" fontSize="12" fill="#6c757d" fontWeight="500">80%</text>
                            <text x="55" y="120" textAnchor="end" fontSize="12" fill="#6c757d" fontWeight="500">60%</text>
                            <text x="55" y="168" textAnchor="end" fontSize="12" fill="#6c757d" fontWeight="500">40%</text>
                            <text x="55" y="216" textAnchor="end" fontSize="12" fill="#6c757d" fontWeight="500">20%</text>
                            <text x="55" y="264" textAnchor="end" fontSize="12" fill="#6c757d" fontWeight="500">0%</text>

                            {/* X axis labels */}
                            <text x="120" y="285" textAnchor="middle" fontSize="12" fill="#495057" fontWeight="600">Settimana 1</text>
                            <text x="245" y="285" textAnchor="middle" fontSize="12" fill="#495057" fontWeight="600">Settimana 4</text>
                            <text x="370" y="285" textAnchor="middle" fontSize="12" fill="#495057" fontWeight="600">Settimana 8</text>
                            <text x="520" y="280" textAnchor="middle" fontSize="12" fill="#dc3545" fontWeight="700">Esame finale</text>
                            <text x="520" y="295" textAnchor="middle" fontSize="11" fill="#dc3545" fontWeight="600">(senza AI)</text>

                            {/* Y axis label (rotated) */}
                            <text x="15" y="140" textAnchor="middle" fontSize="12" fill="#6c757d" fontWeight="600" transform="rotate(-90, 15, 140)">Performance</text>

                            {/* Line 1: Gruppo con AI libera (dashed, orange #C87D2A) */}
                            <polyline
                              points="120,80 245,68 370,63 520,128"
                              fill="none"
                              stroke="#C87D2A"
                              strokeWidth="3"
                              strokeDasharray="8 6"
                            />
                            {/* Dots on line 1 */}
                            <circle cx="120" cy="80" r="6" fill="#fff" stroke="#C87D2A" strokeWidth="3"/>
                            <circle cx="245" cy="68" r="6" fill="#fff" stroke="#C87D2A" strokeWidth="3"/>
                            <circle cx="370" cy="63" r="6" fill="#fff" stroke="#C87D2A" strokeWidth="3"/>
                            <circle cx="520" cy="128" r="6" fill="#fff" stroke="#C87D2A" strokeWidth="3"/>

                            {/* Line 2: Gruppo senza AI (solid, green #198754) */}
                            <polyline
                              points="120,116 245,104 370,92 520,87"
                              fill="none"
                              stroke="#198754"
                              strokeWidth="3"
                            />
                            {/* Dots on line 2 */}
                            <circle cx="120" cy="116" r="6" fill="#fff" stroke="#198754" strokeWidth="3"/>
                            <circle cx="245" cy="104" r="6" fill="#fff" stroke="#198754" strokeWidth="3"/>
                            <circle cx="370" cy="92" r="6" fill="#fff" stroke="#198754" strokeWidth="3"/>
                            <circle cx="520" cy="87" r="6" fill="#fff" stroke="#198754" strokeWidth="3"/>

                            {/* Vertical dotted line at final exam point */}
                            <line x1="520" y1="20" x2="520" y2="260" stroke="#dc3545" strokeWidth="2" strokeDasharray="6 4" opacity="0.5"/>

                            {/* "Punto di inversione" label */}
                            <rect x="475" y="35" width="90" height="24" rx="12" fill="#dc3545" opacity="0.1" />
                            <text x="520" y="51" textAnchor="middle" fontSize="10" fill="#dc3545" fontWeight="700">Punto di inversione</text>
                          </svg>
                        </div>
                        
                        {/* Legend */}
                        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 pt-4 border-top">
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ width: '30px', height: '3px', borderBottom: '3px dashed #C87D2A' }}></div>
                            <span className="small fw-bold text-dark">Gruppo con AI libera</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ width: '30px', height: '3px', backgroundColor: '#198754' }}></div>
                            <span className="small fw-bold text-dark">Gruppo senza AI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted small text-center fst-italic">
                      Il paradosso dell'apprendimento con IA: il gruppo che usa l'IA liberamente mostra performance migliori nelle fasi assistite, ma peggiori all'esame finale senza AI rispetto al gruppo che non l'ha mai usata.
                    </p>
                  </section>

                  {/* Section 3: Debito neurale, debito cognitivo */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Debito neurale, debito cognitivo</h2>
                    <p className="fs-5 text-secondary">
                      Il concetto di "debito cognitivo" (<em lang="en">cognitive debt</em>) descrive la progressiva erosione di capacità cognitive per mancato esercizio, causata dalla delega sistematica a strumenti tecnologici.
                    </p>
                    <p className="fs-5 text-secondary">
                      Analogamente al debito finanziario, il debito cognitivo si accumula nel tempo: ogni compito delegato "risparmia" fatica nel breve termine, ma erode la capacità di farlo autonomamente nel futuro.
                    </p>

                    {/* Stats Grid */}
                    <div className="row g-4 my-4">
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4 bg-light">
                          <div className="mx-auto mb-3 text-primary">
                            <BrainCircuit size={40} />
                          </div>
                          <h3 className="display-5 fw-bold mb-2" style={{ color: '#5B4A8A' }}>−55%</h3>
                          <p className="fw-medium text-dark mb-2">connettività cerebrale nelle aree frontali</p>
                          <p className="small text-muted fst-italic mb-0">Kosmyna et al., 2025 (MIT)</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4 bg-light">
                          <div className="mx-auto mb-3 text-danger">
                            <TrendingDown size={40} />
                          </div>
                          <h3 className="display-5 fw-bold mb-2" style={{ color: '#C87D2A' }}>−17%</h3>
                          <p className="fw-medium text-dark mb-2">performance all'esame finale (gruppo AI vs no-AI)</p>
                          <p className="small text-muted fst-italic mb-0">Bastani et al., 2024</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4 bg-light">
                          <div className="mx-auto mb-3 text-success">
                            <Users size={40} />
                          </div>
                          <h3 className="display-5 fw-bold mb-2" style={{ color: '#198754' }}>1.000+</h3>
                          <p className="fw-medium text-dark mb-2">studenti nello studio randomizzato controllato</p>
                          <p className="small text-muted fst-italic mb-0">Bastani et al., 2024</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Callout: Attenzione */}
                  <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
                    <div className="card-body p-4 position-relative">
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#fff8f0', zIndex: 0 }}></div>
                      <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#C87D2A', zIndex: 1 }}></div>
                      
                      <div className="position-relative z-1">
                        <h3 className="h6 fw-bold text-uppercase mb-2 d-flex align-items-center gap-2" style={{ color: '#C87D2A', letterSpacing: '0.05em' }}>
                          <AlertTriangle size={18} />
                          Attenzione: correlazione ≠ causalità
                        </h3>
                        <p className="mb-0 text-dark">
                          Questi studi mostrano correlazioni importanti, non necessariamente causalità definitiva. La ricerca sull'impatto cognitivo dell'IA è ancora in fase iniziale. Ciò che sappiamo giustifica cautela e progettazione consapevole dell'uso — non proibizione.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Callouts */}
                  <div className="d-flex flex-column gap-4 mb-5">
                    {/* Consapevolezza costruita */}
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="card-body p-4 p-md-5 position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#f8f9fa', zIndex: 0 }}></div>
                        <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#198754', zIndex: 1 }}></div>
                        
                        <div className="position-relative z-1 d-flex gap-3">
                          <div className="d-none d-sm-block text-success mt-1">
                            <CheckCircle size={32} />
                          </div>
                          <div>
                            <h2 className="h5 fw-bold mb-3" style={{ color: '#198754' }}>
                              La consapevolezza costruita
                            </h2>
                            <p className="mb-0 text-dark">
                              Le evidenze suggeriscono che l'uso acritico e non strutturato dell'IA nell'apprendimento può danneggiare le capacità cognitive degli studenti nel lungo termine. La quantità d'uso non è il problema — il <em>come</em> si usa fa la differenza.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verso la prossima tappa */}
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="card-body p-4 p-md-5 position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#e9ecef', zIndex: 0 }}></div>
                        <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#0d6efd', zIndex: 1 }}></div>
                        
                        <div className="position-relative z-1 d-flex gap-3">
                          <div className="d-none d-sm-block text-primary mt-1">
                            <ArrowRightCircle size={32} />
                          </div>
                          <div>
                            <h2 className="h5 fw-bold mb-3" style={{ color: '#0d6efd' }}>
                              Verso la prossima tappa
                            </h2>
                            <p className="mb-4 text-dark">
                              Se non è "usare o non usare", qual è la risposta? Quale ruolo deve avere il docente?
                            </p>
                            <Link to="/step8" className="btn btn-primary fw-medium px-4 py-2 rounded-pill">
                              Tappa 8: Quindi come usarla? <ArrowRight size={18} className="ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                    <Link to="/step6" className="btn btn-outline-secondary rounded-pill px-4">
                      ← Se non è intelligente, cosa produce?
                    </Link>
                    <Link to="/step8" className="btn btn-outline-primary rounded-pill px-4">
                      Quindi come usarla? →
                    </Link>
                  </nav>

                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PeppeFooter />
    </div>
  );
}
