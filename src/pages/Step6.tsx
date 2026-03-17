import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareQuote, AlertTriangle, CheckCircle, ArrowRightCircle, Database, Cpu, MessageSquare, RefreshCw } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step6() {
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
                        <li className="breadcrumb-item active" aria-current="page">Tappa 6</li>
                      </ol>
                    </nav>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="progress flex-grow-1" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <span className="small text-muted fw-medium">60%</span>
                    </div>
                    <p className="small text-muted mb-0">Tappa 6 di 10</p>
                  </div>

                  {/* Header */}
                  <header className="mb-5">
                    <span className="badge rounded-pill mb-3 px-3 py-2" style={{ backgroundColor: '#C87D2A', color: 'white' }}>Movimento 3 — Tappa 6</span>
                    <h1 className="display-4 fw-bold text-dark mb-3">Se non è intelligente, cosa produce?</h1>
                    <p className="lead text-secondary">GIGO: Garbage In, Garbage Out. I modelli non giudicano la qualità dei dati su cui vengono addestrati. Le distorsioni del mondo reale entrano nei modelli e possono uscire amplificate.</p>
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
                          «L'IA è neutrale e oggettiva. Non ha pregiudizi perché non è umana. Anzi, è più affidabile degli esseri umani proprio perché non ha emozioni.»
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: GIGO */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Garbage In, Garbage Out (GIGO)</h2>
                    <p className="fs-5 text-secondary">
                      Il principio GIGO è uno dei più antichi dell'informatica: un sistema produce output della qualità dei suoi input. Se un modello viene addestrato su dati distorti, il suo output rifletterà — e potenzialmente amplificherà — quelle distorsioni.
                    </p>
                    <p className="fs-5 text-secondary">
                      Per gli LLM, i dati di addestramento sono essenzialmente "tutto il testo disponibile su internet + libri + articoli". Internet non è neutrale: riflette la composizione demografica, culturale e linguistica di chi produce testi online (principalmente anglofoni, istruiti, occidentali).
                    </p>

                    {/* Infografica: Il ciclo GIGO - Redesigned */}
                    <div className="my-5">
                      <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                        <div className="card-header border-0 p-4 text-center" style={{ background: 'linear-gradient(135deg, #2B3A4E 0%, #1a2533 100%)' }}>
                          <h3 className="h4 fw-bold text-white mb-1">Il ciclo GIGO</h3>
                          <p className="text-white-50 mb-0">Garbage In, Garbage Out</p>
                        </div>
                        
                        <div className="card-body p-4 p-md-5 bg-light position-relative">
                          {/* Desktop Layout */}
                          <div className="d-none d-lg-flex justify-content-between align-items-center gap-3 position-relative z-1">
                            
                            {/* Step 1 */}
                            <motion.div whileHover={{ y: -5 }} className="card flex-fill border-0 shadow-sm rounded-4 p-4 text-center h-100" style={{ borderTop: '4px solid #E07A3A' }}>
                              <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(224, 122, 58, 0.1)', color: '#E07A3A' }}>
                                <Database size={32} />
                              </div>
                              <h4 className="h6 fw-bold text-dark">1. Dati di addestramento</h4>
                              <p className="small text-muted mb-0">Distorti, non rappresentativi</p>
                            </motion.div>

                            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-muted px-2">
                              <ArrowRight size={32} />
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div whileHover={{ y: -5 }} className="card flex-fill border-0 shadow-sm rounded-4 p-4 text-center h-100" style={{ borderTop: '4px solid #2B3A4E' }}>
                              <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(43, 58, 78, 0.1)', color: '#2B3A4E' }}>
                                <Cpu size={32} />
                              </div>
                              <h4 className="h6 fw-bold text-dark">2. Modello</h4>
                              <p className="small text-muted mb-0">Apprende i pattern dei dati</p>
                            </motion.div>

                            <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="text-muted px-2">
                              <ArrowRight size={32} />
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div whileHover={{ y: -5 }} className="card flex-fill border-0 shadow-sm rounded-4 p-4 text-center h-100" style={{ borderTop: '4px solid #5B4A8A' }}>
                              <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(91, 74, 138, 0.1)', color: '#5B4A8A' }}>
                                <MessageSquare size={32} />
                              </div>
                              <h4 className="h6 fw-bold text-dark">3. Output</h4>
                              <p className="small text-muted mb-0">Riproduce e amplifica le distorsioni</p>
                            </motion.div>

                          </div>

                          {/* Feedback Loop Desktop */}
                          <div className="d-none d-lg-block mt-4 pt-3 position-relative">
                            {/* Connecting lines */}
                            <div className="position-absolute w-100 h-100" style={{ top: '-30px', left: 0, zIndex: 0, pointerEvents: 'none' }}>
                              <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                                <path d="M 85% 0 V 40 H 15% V 0" fill="none" stroke="#6B7F3B" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" />
                                <polygon points="15%,0 10%,10 20%,10" fill="#6B7F3B" opacity="0.4" style={{ transform: 'translateY(-5px)' }} />
                              </svg>
                            </div>
                            
                            <motion.div whileHover={{ scale: 1.02 }} className="card border-0 shadow-sm rounded-4 p-3 mx-auto position-relative z-1" style={{ maxWidth: '400px', backgroundColor: 'rgba(107, 127, 59, 0.1)', border: '1px solid rgba(107, 127, 59, 0.2)' }}>
                              <div className="d-flex align-items-center justify-content-center gap-3">
                                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                                  <RefreshCw size={28} color="#6B7F3B" />
                                </motion.div>
                                <div className="text-start">
                                  <h4 className="h6 fw-bold mb-0" style={{ color: '#3a4a1a' }}>Feedback loop</h4>
                                  <p className="small mb-0" style={{ color: '#4a5a2a' }}>L'output diventa nuovo training data</p>
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* Mobile Layout */}
                          <div className="d-flex d-lg-none flex-column align-items-center gap-3">
                            {/* Step 1 */}
                            <div className="card w-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ borderLeft: '4px solid #E07A3A' }}>
                              <div className="d-flex align-items-center gap-3">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(224, 122, 58, 0.1)', color: '#E07A3A' }}>
                                  <Database size={24} />
                                </div>
                                <div className="text-start">
                                  <h4 className="h6 fw-bold text-dark mb-1">1. Dati di addestramento</h4>
                                  <p className="small text-muted mb-0">Distorti, non rappresentativi</p>
                                </div>
                              </div>
                            </div>

                            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-muted">
                              <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
                            </motion.div>

                            {/* Step 2 */}
                            <div className="card w-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ borderLeft: '4px solid #2B3A4E' }}>
                              <div className="d-flex align-items-center gap-3">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(43, 58, 78, 0.1)', color: '#2B3A4E' }}>
                                  <Cpu size={24} />
                                </div>
                                <div className="text-start">
                                  <h4 className="h6 fw-bold text-dark mb-1">2. Modello</h4>
                                  <p className="small text-muted mb-0">Apprende i pattern dei dati</p>
                                </div>
                              </div>
                            </div>

                            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-muted">
                              <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
                            </motion.div>

                            {/* Step 3 */}
                            <div className="card w-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ borderLeft: '4px solid #5B4A8A' }}>
                              <div className="d-flex align-items-center gap-3">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(91, 74, 138, 0.1)', color: '#5B4A8A' }}>
                                  <MessageSquare size={24} />
                                </div>
                                <div className="text-start">
                                  <h4 className="h6 fw-bold text-dark mb-1">3. Output</h4>
                                  <p className="small text-muted mb-0">Riproduce e amplifica le distorsioni</p>
                                </div>
                              </div>
                            </div>

                            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-muted">
                              <RefreshCw size={24} color="#6B7F3B" />
                            </motion.div>

                            {/* Feedback Loop Mobile */}
                            <div className="card w-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ backgroundColor: 'rgba(107, 127, 59, 0.1)', borderLeft: '4px solid #6B7F3B' }}>
                              <div className="d-flex align-items-center gap-3">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(107, 127, 59, 0.2)', color: '#3a4a1a' }}>
                                  <RefreshCw size={24} />
                                </div>
                                <div className="text-start">
                                  <h4 className="h6 fw-bold mb-1" style={{ color: '#3a4a1a' }}>Feedback loop</h4>
                                  <p className="small mb-0" style={{ color: '#4a5a2a' }}>L'output diventa nuovo training data</p>
                                </div>
                              </div>
                            </div>

                          </div>
                          
                          <p className="text-center text-muted small mt-4 pt-3 border-top fst-italic mb-0">
                            Il ciclo GIGO: i bias nei dati di addestramento si propagano attraverso il modello fino all'output, e l'output può diventare a sua volta nuovo dato di addestramento, amplificando il problema.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Esempi concreti */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Esempi concreti: quando i bias diventano visibili</h2>

                    <div className="row g-4 my-4">
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 bg-white" style={{ borderTop: '4px solid #C87D2A' }}>
                          <div className="card-body p-4">
                            <h3 className="h5 fw-bold mb-3" style={{ color: '#C87D2A' }}>Bias di genere</h3>
                            <p className="text-secondary small mb-0">
                              LLM addestrati su testi storici associano più frequentemente professioni ad alto status al genere maschile. Se chiedi di "descrivere un chirurgo", il modello tende ad usare "lui". (Studi multipli, 2021–2023)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 bg-white" style={{ borderTop: '4px solid #C87D2A' }}>
                          <div className="card-body p-4">
                            <h3 className="h5 fw-bold mb-3" style={{ color: '#C87D2A' }}>Bias linguistico</h3>
                            <p className="text-secondary small mb-0">
                              I modelli performano meglio in inglese, peggio nelle lingue con meno testo online. L'italiano, il sardo, le lingue minoritarie sono sistematicamente sottorappresentati.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 bg-white" style={{ borderTop: '4px solid #C87D2A' }}>
                          <div className="card-body p-4">
                            <h3 className="h5 fw-bold mb-3" style={{ color: '#C87D2A' }}>Bias culturale</h3>
                            <p className="text-secondary small mb-0">
                              Concetti come "famiglia", "lavoro", "giustizia" vengono interpretati con frame prevalentemente anglofoni/occidentali. Le visioni del mondo non-occidentali sono sottorappresentate o distorte.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: BIBO */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">BIBO: il complemento di GIGO</h2>
                    <p className="fs-5 text-secondary">
                      Un corollario di GIGO è il principio BIBO (Bias In, Bias Out): se il bias è nei dati di addestramento, sarà nell'output. Ma c'è di più: i modelli possono <strong>amplificare</strong> i bias presenti nei dati, perché tendono a generalizzare i pattern statistici in modo più netto di quanto appaiano nei dati originali.
                    </p>

                    {/* Callout: Implicazione pratica */}
                    <div className="card border-0 shadow-sm my-4 rounded-4 overflow-hidden">
                      <div className="card-body p-4 position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#fff8f0', zIndex: 0 }}></div>
                        <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#C87D2A', zIndex: 1 }}></div>
                        
                        <div className="position-relative z-1">
                          <h3 className="h6 fw-bold text-uppercase mb-2 d-flex align-items-center gap-2" style={{ color: '#C87D2A', letterSpacing: '0.05em' }}>
                            <AlertTriangle size={18} />
                            Implicazione pratica
                          </h3>
                          <p className="mb-0 text-dark">
                            Quando usi un LLM per creare materiali didattici, verificane sempre l'output per eventuali rappresentazioni stereotipate di genere, cultura, religione o etnia. Il modello non "sa" di essere biased — produce quello che ha visto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Allucinazioni */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Le allucinazioni: quando il modello inventa</h2>
                    <p className="fs-5 text-secondary">
                      I modelli linguistici possono produrre informazioni false in modo convincente — fenomeno detto "<strong>allucinazione</strong>" (fenomeno per cui un LLM genera informazioni false, inesistenti o non verificabili con la stessa fluidità e sicurezza con cui genera informazioni vere). Questo avviene perché il modello ottimizza la plausibilità linguistica, non la veridicità.
                    </p>
                    <p className="fs-5 text-secondary mb-3">Esempi documentati di allucinazioni includono:</p>
                    
                    <ul className="list-group list-group-flush mb-4 bg-transparent">
                      <li className="list-group-item bg-transparent border-0 d-flex align-items-start gap-3 px-0 py-2">
                        <div className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={18} /></div>
                        <span className="fs-5 text-secondary">Citazioni di articoli scientifici che non esistono</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 d-flex align-items-start gap-3 px-0 py-2">
                        <div className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={18} /></div>
                        <span className="fs-5 text-secondary">Biografie di persone reali con dati falsi</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 d-flex align-items-start gap-3 px-0 py-2">
                        <div className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={18} /></div>
                        <span className="fs-5 text-secondary">Normative legislative inesistenti</span>
                      </li>
                      <li className="list-group-item bg-transparent border-0 d-flex align-items-start gap-3 px-0 py-2">
                        <div className="mt-1" style={{ color: '#C87D2A' }}><ArrowRightCircle size={18} /></div>
                        <span className="fs-5 text-secondary">Fatti storici distorti o inventati</span>
                      </li>
                    </ul>

                    <p className="fs-5 text-secondary">
                      Il modello non "sa" di stare allucinando: genera l'output più statisticamente plausibile, indipendentemente dalla sua veridicità.
                    </p>
                  </section>

                  {/* Callout sintesi */}
                  <div className="alert alert-success shadow-sm border-0 border-start border-success border-4 mb-5" role="alert">
                    <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                      <CheckCircle size={24} className="text-success" />
                      La consapevolezza costruita
                    </h2>
                    <p className="mb-0 text-dark">
                      I modelli IA non sono neutri: incorporano i bias dei dati su cui sono stati addestrati. Usarli senza senso critico rischia di amplificare stereotipi e disinformazione. Il docente deve diventare un lettore critico dell'output, non un consumatore passivo.
                    </p>
                  </div>

                  {/* Callout ponte */}
                  <div className="card border-primary mb-5 shadow-sm text-center rounded-4">
                    <div className="card-body py-5">
                      <h2 className="h4 card-title text-primary d-flex align-items-center justify-content-center gap-2 fw-bold mb-3">
                        <ArrowRightCircle size={24} />
                        Verso la prossima tappa
                      </h2>
                      <p className="card-text fs-5 text-secondary mb-4">
                        I bias dell'IA hanno conseguenze anche nell'apprendimento. Cosa succede agli studenti che usano questi strumenti senza consapevolezza critica?
                      </p>
                      <Link to="/step7" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                        Tappa 7: Cosa succede a scuola? →
                      </Link>
                    </div>
                  </div>

                  {/* Page navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                    <Link to="/step5" className="btn btn-outline-secondary rounded-pill px-4">
                      ← Ma allora è intelligente?
                    </Link>
                    <Link to="/step7" className="btn btn-outline-primary rounded-pill px-4">
                      Cosa succede a scuola? →
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
