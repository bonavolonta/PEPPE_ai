import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareQuote, AlertTriangle, CheckCircle, ArrowRightCircle, Target, Brain, Eye, Layers, ThumbsUp, ThumbsDown, Accessibility, Package, Wand2, UserMinus, Compass, XCircle, PenTool, FileSpreadsheet, MessageCircle, ArrowRightLeft } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step8() {
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
                        <li className="breadcrumb-item active" aria-current="page">Tappa 8</li>
                      </ol>
                    </nav>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="progress flex-grow-1" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <span className="small text-muted fw-medium">80%</span>
                    </div>
                    <p className="small text-muted mb-0">Tappa 8 di 10</p>
                  </div>

                  {/* Header */}
                  <header className="mb-5">
                    <span className="badge rounded-pill mb-3 px-3 py-2" style={{ backgroundColor: '#C87D2A', color: 'white' }}>Movimento 3 — Tappa 8</span>
                    <h1 className="display-4 fw-bold text-dark mb-3">Quindi come usarla?</h1>
                    <p className="lead text-secondary">L'IA non sostituisce il pensiero. Ma può essere un potente amplificatore cognitivo — se usata con consapevolezza progettuale. Il docente è il designer dell'esperienza di apprendimento, non un consumatore di strumenti.</p>
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
                          «O usi l'IA o non la usi. Chi la proibisce è reazionario, chi la usa senza regole è irresponsabile. Bisogna trovare una via di mezzo.»
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Oltre la dicotomia */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Oltre la falsa dicotomia uso/non-uso</h2>
                    <p className="fs-5 text-secondary">
                      Il dibattito pubblico sull'IA a scuola è spesso polarizzato: da un lato chi vuole vietarla, dall'altro chi vuole integrarla ovunque. Entrambe le posizioni mancano di sfumatura pedagogica.
                    </p>
                    <div className="p-4 rounded-4 mt-4" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #2B3A4E' }}>
                      <p className="fs-5 text-dark mb-0">
                        La domanda corretta non è "usarla o non usarla?" ma: <strong style={{ color: '#2B3A4E' }}>"Per quale obiettivo di apprendimento, in quale fase del processo, con quale tipo di scaffolding, e con quale riflessione metacognitiva?"</strong>
                      </p>
                    </div>
                  </section>

                  {/* Section 2: La trasformazione del ruolo docente */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">La trasformazione del ruolo docente</h2>
                    
                    <div className="card border-0 shadow-lg rounded-5 overflow-hidden my-5">
                      <div className="card-header border-0 p-4 text-center" style={{ background: 'linear-gradient(135deg, #2B3A4E 0%, #1a2533 100%)' }}>
                        <h3 className="h4 fw-bold text-white mb-1">Da consumatore a progettista</h3>
                        <p className="text-white-50 mb-0">L'evoluzione necessaria nell'era dell'IA</p>
                      </div>
                      
                      <div className="card-body p-0 bg-white position-relative">
                        <div className="row g-0">
                          
                          {/* Left: Docente-consumatore */}
                          <div className="col-12 col-lg-6 p-4 p-md-5 position-relative" style={{ backgroundColor: '#fff9f5' }}>
                            <div className="d-flex align-items-center gap-3 mb-4">
                              <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '64px', height: '64px', backgroundColor: '#fff', color: '#C87D2A' }}>
                                <Package size={32} />
                              </div>
                              <h4 className="h3 fw-bold mb-0" style={{ color: '#C87D2A', letterSpacing: '-0.02em' }}>Docente<br/>Consumatore</h4>
                            </div>
                            
                            <div className="d-flex flex-column gap-4 mt-5">
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-muted mt-1"><Package size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Soluzioni preconfezionate</p>
                                  <p className="small text-secondary mb-0">Usa strumenti AI come pacchetti chiusi senza adattarli al contesto.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-muted mt-1"><Wand2 size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Delega creativa</p>
                                  <p className="small text-secondary mb-0">Chiede all'AI di creare materiali didattici direttamente, saltando la progettazione.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-muted mt-1"><UserMinus size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Delega valutativa</p>
                                  <p className="small text-secondary mb-0">Affida la valutazione all'AI, perdendo il polso reale della classe.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-muted mt-1"><Compass size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Uso non guidato</p>
                                  <p className="small text-secondary mb-0">Gli studenti usano l'AI senza una bussola metodologica.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-muted mt-1"><XCircle size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Assenza di intenzionalità</p>
                                  <p className="small text-secondary mb-0">Nessuna intenzione pedagogica esplicita nell'uso dello strumento.</p>
                                </div>
                              </motion.div>
                            </div>

                            <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ backgroundColor: 'rgba(200, 125, 42, 0.1)', borderLeft: '4px solid #C87D2A' }}>
                              <p className="fw-bold mb-1" style={{ color: '#C87D2A' }}>Rischio principale</p>
                              <p className="small text-dark mb-0">Danno cognitivo per gli studenti e perdita di controllo pedagogico per il docente.</p>
                            </div>
                          </div>

                          {/* Right: Docente-progettista */}
                          <div className="col-12 col-lg-6 p-4 p-md-5 position-relative" style={{ backgroundColor: '#f4f9f5' }}>
                            {/* Decorative arrow pointing right (desktop) */}
                            <div className="d-none d-lg-flex position-absolute top-50 start-0 translate-middle align-items-center justify-content-center rounded-circle shadow-lg" style={{ width: '80px', height: '80px', backgroundColor: '#2B3A4E', zIndex: 10, border: '6px solid #fff' }}>
                              <ArrowRight size={32} color="#fff" />
                            </div>

                            <div className="d-flex align-items-center gap-3 mb-4">
                              <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '64px', height: '64px', backgroundColor: '#fff', color: '#198754' }}>
                                <PenTool size={32} />
                              </div>
                              <h4 className="h3 fw-bold mb-0" style={{ color: '#198754', letterSpacing: '-0.02em' }}>Docente<br/>Progettista</h4>
                            </div>
                            
                            <div className="d-flex flex-column gap-4 mt-5">
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-success mt-1"><Target size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Scelta mirata</p>
                                  <p className="small text-secondary mb-0">Sceglie quando l'AI serve specifici obiettivi di apprendimento.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-success mt-1"><Layers size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Integrazione strutturata</p>
                                  <p className="small text-secondary mb-0">Progetta attività in cui l'AI è solo uno degli strumenti a disposizione.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-success mt-1"><Brain size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Tutela cognitiva</p>
                                  <p className="small text-secondary mb-0">Preserva l'autonomia e la fatica cognitiva produttiva degli studenti.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-success mt-1"><FileSpreadsheet size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Efficienza amministrativa</p>
                                  <p className="small text-secondary mb-0">Usa l'AI per compiti burocratici, liberando tempo per la relazione educativa.</p>
                                </div>
                              </motion.div>
                              <motion.div whileHover={{ x: 5 }} className="d-flex gap-3">
                                <div className="text-success mt-1"><MessageCircle size={24} /></div>
                                <div>
                                  <p className="fw-bold text-dark mb-1">Metacognizione</p>
                                  <p className="small text-secondary mb-0">Guida una riflessione esplicita con gli studenti su come e perché usare l'IA.</p>
                                </div>
                              </motion.div>
                            </div>

                            <div className="mt-5 p-4 rounded-4 shadow-sm" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', borderLeft: '4px solid #198754' }}>
                              <p className="fw-bold mb-1" style={{ color: '#198754' }}>Opportunità principale</p>
                              <p className="small text-dark mb-0">L'IA diventa un amplificatore cognitivo e uno strumento per la didattica personalizzata.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Principi */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Principi per un uso pedagogicamente consapevole</h2>

                    <div className="row g-4 my-4">
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderLeft: '4px solid #C87D2A' }}>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(200, 125, 42, 0.1)', color: '#C87D2A' }}>
                              <Target size={20} />
                            </div>
                            <h3 className="h6 fw-bold mb-0" style={{ color: '#C87D2A' }}>Obiettivo prima dello strumento</h3>
                          </div>
                          <p className="text-secondary mb-0">
                            Non: "usiamo l'IA per questo argomento". Ma: "qual è l'obiettivo di apprendimento? L'IA aiuta a raggiungerlo, o lo ostacola?"
                          </p>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderLeft: '4px solid #C87D2A' }}>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(200, 125, 42, 0.1)', color: '#C87D2A' }}>
                              <Brain size={20} />
                            </div>
                            <h3 className="h6 fw-bold mb-0" style={{ color: '#C87D2A' }}>Proteggi la fatica cognitiva</h3>
                          </div>
                          <p className="text-secondary mb-0">
                            La fatica cognitiva produttiva è il meccanismo dell'apprendimento. Non delegare all'IA i processi che attivano il pensiero degli studenti.
                          </p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderLeft: '4px solid #C87D2A' }}>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(200, 125, 42, 0.1)', color: '#C87D2A' }}>
                              <Eye size={20} />
                            </div>
                            <h3 className="h6 fw-bold mb-0" style={{ color: '#C87D2A' }}>Trasparenza e metacognizione</h3>
                          </div>
                          <p className="text-secondary mb-0">
                            Quando si usa l'IA, si riflette su come è stata usata. Gli studenti imparano a leggere criticamente l'output, non solo a consumarlo.
                          </p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderLeft: '4px solid #C87D2A' }}>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(200, 125, 42, 0.1)', color: '#C87D2A' }}>
                              <Layers size={20} />
                            </div>
                            <h3 className="h6 fw-bold mb-0" style={{ color: '#C87D2A' }}>Differenziazione intenzionale</h3>
                          </div>
                          <p className="text-secondary mb-0">
                            L'IA può essere utile per alcuni studenti in alcune fasi (scaffolding, accessibilità) e controproducente per altri. La progettazione deve essere differenziata.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Quando l'AI serve / danneggia */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Quando l'IA serve — e quando danneggia</h2>

                    <div className="row g-4 my-4">
                      {/* Serve */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5" style={{ backgroundColor: '#f0f7f0', border: '1px solid #4A6B3A' }}>
                          <h3 className="h5 fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#4A6B3A' }}>
                            <ThumbsUp size={24} />
                            Quando l'IA serve l'apprendimento
                          </h3>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#4A6B3A' }}>•</span>
                              <span className="text-dark">Generare testi di partenza che gli studenti analizzano criticamente (non come prodotto finale)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#4A6B3A' }}>•</span>
                              <span className="text-dark">Accessibilità: semplificare testi complessi per studenti con BES</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#4A6B3A' }}>•</span>
                              <span className="text-dark">Feedback formativo immediato su esercizi strutturati (con tutor AI guidato)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#4A6B3A' }}>•</span>
                              <span className="text-dark">Supporto alla ricerca bibliografica (da verificare sempre)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#4A6B3A' }}>•</span>
                              <span className="text-dark">Simulare interlocutori per il dialogo e il debate</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#4A6B3A' }}>•</span>
                              <span className="text-dark">Liberare il docente da compiti amministrativi ripetitivi</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Danneggia */}
                      <div className="col-12 col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-md-5" style={{ backgroundColor: '#fff4ee', border: '1px solid #C87D2A' }}>
                          <h3 className="h5 fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#C87D2A' }}>
                            <ThumbsDown size={24} />
                            Quando l'IA danneggia l'apprendimento
                          </h3>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#C87D2A' }}>•</span>
                              <span className="text-dark">Delegare la scrittura di testi agli studenti (salta il processo di composizione)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#C87D2A' }}>•</span>
                              <span className="text-dark">Usarla come oracolo: chiedere risposte senza verifica delle fonti</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#C87D2A' }}>•</span>
                              <span className="text-dark">Sostituire la lettura delle fonti primarie</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#C87D2A' }}>•</span>
                              <span className="text-dark">Come strumento di valutazione delle competenze (misura l'uso dell'AI, non l'apprendimento)</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                              <span className="mt-1" style={{ color: '#C87D2A' }}>•</span>
                              <span className="text-dark">In attività che richiedono il processo cognitivo difficile come obiettivo</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: UDL */}
                  <section className="mb-5">
                    <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white border">
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(43, 58, 78, 0.1)', color: '#2B3A4E' }}>
                          <Accessibility size={24} />
                        </div>
                        <h2 className="h4 fw-bold mb-0 text-dark">L'IA come strumento UDL (Universal Design for Learning)</h2>
                      </div>
                      <p className="fs-5 text-secondary">
                        Nel framework UDL, l'IA può essere un potente strumento di <strong>accessibilità</strong>: permette di fornire <em lang="en">multiple means of representation, expression</em> e <em lang="en">engagement</em>. Ma questo richiede progettazione intenzionale, non uso acritico.
                      </p>
                      <p className="fs-5 text-secondary mb-0">
                        Il rischio opposto esiste: se l'IA viene usata per "risolvere" i problemi di apprendimento senza capirne le cause, si tratta di tecnologia compensatoria che maschera — e non rimuove — le barriere all'apprendimento.
                      </p>
                    </div>
                  </section>

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
                              Il docente non è un "utente" di IA: è un progettista dell'esperienza di apprendimento che sceglie, adatta e valuta criticamente gli strumenti disponibili — inclusa l'IA. Questa consapevolezza richiede formazione continua e riflessione pedagogica, non solo competenza tecnica.
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
                              Abbiamo visto cosa produce l'IA e cosa fa agli studenti. Ma c'è un costo che spesso dimentichiamo: quello ambientale. L'IA non è gratuita — ha un costo fisico molto reale.
                            </p>
                            <Link to="/step9" className="btn btn-primary fw-medium px-4 py-2 rounded-pill">
                              Tappa 9: Il costo invisibile <ArrowRight size={18} className="ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                    <Link to="/step7" className="btn btn-outline-secondary rounded-pill px-4">
                      ← Cosa succede a scuola?
                    </Link>
                    <Link to="/step9" className="btn btn-outline-primary rounded-pill px-4">
                      Il costo invisibile →
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
