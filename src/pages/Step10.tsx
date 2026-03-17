import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Map, Compass, Search, AlertTriangle, Globe2, CheckCircle, BookOpen, Lightbulb, Shield, Users, Zap, MessageSquareQuote, Target } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step10() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableData = [
    { step: "0 — Strumenti", path: "/step1", before: "ChatGPT e pochi altri", after: "Ecosistema globale di centinaia di modelli", implication: "Aprire la prospettiva oltre il familiare" },
    { step: "1 — Geopolitica", path: "/step2", before: "Tecnologia neutrale e universale", after: "Fatto geopolitico, culturale e di potere", implication: "Scegliere gli strumenti consapevolmente" },
    { step: "2 — Tassonomia", path: "/step3", before: "\"IA\" come termine generico", after: "Gerarchia precisa: IA ⊃ ML ⊃ DL ⊃ GenAI", implication: "Linguaggio preciso evita confusione" },
    { step: "3 — Meccanismo", path: "/step4", before: "I modelli \"capiscono\" il testo", after: "Predizione statistica del token successivo", implication: "Calibrare aspettative e usi appropriati" },
    { step: "4 — Intelligenza", path: "/step5", before: "L'IA è intelligente, forse più di noi", after: "Nessuna agency, nessuna comprensione semantica", implication: "Non delegare il pensiero critico" },
    { step: "5 — Bias", path: "/step6", before: "L'IA è neutrale e oggettiva", after: "GIGO: rispecchia e amplifica bias dei dati", implication: "Lettura critica sistematica dell'output" },
    { step: "6 — Impatto", path: "/step7", before: "L'IA è sempre positiva per l'apprendimento", after: "Può danneggiare le capacità cognitive se mal usata", implication: "Progettazione intenzionale dell'uso" },
    { step: "7 — Ruolo docente", path: "/step8", before: "Usare o non usare l'IA", after: "Il docente è progettista dell'esperienza di apprendimento", implication: "Formazione pedagogica continua" },
    { step: "8 — Sostenibilità", path: "/step9", before: "L'IA è pulita e immateriale", after: "Costo fisico reale: energia, acqua, carbonio, lavoro", implication: "Consapevolezza ambientale nell'uso" },
  ];

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
                        <li className="breadcrumb-item text-muted">Movimento 4 — Allargamento responsabile</li>
                        <li className="breadcrumb-item active" aria-current="page">Approdo</li>
                      </ol>
                    </nav>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="progress flex-grow-1" style={{ height: '8px' }}>
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <span className="small text-muted fw-medium">100%</span>
                    </div>
                    <p className="small text-muted mb-0">Tappa 10 di 10 — Approdo</p>
                  </div>

                  {/* Header */}
                  <header className="mb-5 text-center">
                    <span className="badge rounded-pill mb-3 px-3 py-2" style={{ backgroundColor: '#ffc107', color: '#000' }}>
                      <Star size={14} className="me-1 d-inline-block align-text-top" /> Approdo
                    </span>
                    <h1 className="display-4 fw-bold text-dark mb-4">La literacy critica sull'IA</h1>
                    <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
                      Siamo arrivati all'approdo del percorso. Non con risposte definitive, ma con strumenti più solidi per navigare un paesaggio in continuo cambiamento.
                    </p>
                  </header>

                  {/* Section 1: Dal senso comune alla consapevolezza critica */}
                  <section className="mb-5">
                    <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-light">
                      <h2 className="h3 fw-bold mb-4 text-dark">Dal senso comune alla consapevolezza critica</h2>
                      <p className="fs-5 text-secondary">
                        In 10 tappe, abbiamo decostruito 10 assunti del senso comune sull'IA e costruito al loro posto un insieme di consapevolezze più fondate. Non si tratta di saper usare strumenti specifici — questi cambiano ogni mese. Si tratta di aver costruito un <strong className="text-dark">frame critico</strong>.
                      </p>
                      <p className="fs-5 text-secondary mb-0">
                        Un frame critico è un insieme di domande, categorie e prospettive che permette di valutare qualsiasi nuovo sviluppo tecnologico con strumenti propri, senza dipendere dall'opinione corrente o dal marketing dei produttori.
                      </p>
                    </div>
                  </section>

                  {/* Section 2: Mappa Concettuale */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4 text-center">Il percorso in una mappa</h2>
                    
                    <div className="position-relative py-5">
                      {/* Central Hub */}
                      <div className="position-absolute top-50 start-50 translate-middle z-3 d-none d-lg-flex flex-column align-items-center justify-content-center rounded-circle shadow-lg" style={{ width: '160px', height: '160px', backgroundColor: '#fff', border: '8px solid #4A6B3A' }}>
                        <BookOpen size={32} color="#4A6B3A" className="mb-2" />
                        <span className="fw-bold text-center lh-sm" style={{ color: '#2C4A2A', fontSize: '1.1rem' }}>Literacy<br/>Critica<br/>sull'IA</span>
                      </div>

                      <div className="row g-4 position-relative z-1">
                        {/* Orientamento */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: 'rgba(58, 107, 122, 0.05)', borderTop: '4px solid #3A6B7A' }}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                              <Compass size={24} color="#3A6B7A" />
                              <h3 className="h5 fw-bold mb-0" style={{ color: '#3A6B7A' }}>Orientamento</h3>
                            </div>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-2 d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#3A6B7A'}}></div> <span className="text-dark fw-medium">Ecosistema globale</span></li>
                              <li className="mb-2 d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#3A6B7A'}}></div> <span className="text-dark fw-medium">Fatto geopolitico</span></li>
                              <li className="d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#3A6B7A'}}></div> <span className="text-dark fw-medium">Tassonomia precisa</span></li>
                            </ul>
                          </div>
                        </div>

                        {/* Demistificazione */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderTop: '4px solid #5B4A8A' }}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                              <Search size={24} color="#5B4A8A" />
                              <h3 className="h5 fw-bold mb-0" style={{ color: '#5B4A8A' }}>Demistificazione</h3>
                            </div>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-2 d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#5B4A8A'}}></div> <span className="text-dark fw-medium">Predizione statistica</span></li>
                              <li className="d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#5B4A8A'}}></div> <span className="text-dark fw-medium">Nessuna agency</span></li>
                            </ul>
                          </div>
                        </div>

                        {/* Conseguenze */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: 'rgba(200, 125, 42, 0.05)', borderTop: '4px solid #C87D2A' }}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                              <AlertTriangle size={24} color="#C87D2A" />
                              <h3 className="h5 fw-bold mb-0" style={{ color: '#C87D2A' }}>Conseguenze</h3>
                            </div>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-2 d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#C87D2A'}}></div> <span className="text-dark fw-medium">Bias e GIGO</span></li>
                              <li className="mb-2 d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#C87D2A'}}></div> <span className="text-dark fw-medium">Debito cognitivo</span></li>
                              <li className="d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#C87D2A'}}></div> <span className="text-dark fw-medium">Docente-progettista</span></li>
                            </ul>
                          </div>
                        </div>

                        {/* Allargamento */}
                        <div className="col-12 col-md-6">
                          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: 'rgba(74, 107, 58, 0.05)', borderTop: '4px solid #4A6B3A' }}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                              <Globe2 size={24} color="#4A6B3A" />
                              <h3 className="h5 fw-bold mb-0" style={{ color: '#4A6B3A' }}>Allargamento</h3>
                            </div>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-2 d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#4A6B3A'}}></div> <span className="text-dark fw-medium">Impatto fisico</span></li>
                              <li className="d-flex align-items-center gap-2"><div className="rounded-circle" style={{width:'6px', height:'6px', backgroundColor:'#4A6B3A'}}></div> <span className="text-dark fw-medium">Giustizia globale</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: La tavola epistemologica */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">La tavola epistemologica del percorso</h2>
                    <p className="text-secondary mb-4">
                      Per ogni tappa, abbiamo seguito una struttura coerente: partire dall'assunto del senso comune, decostruirlo attraverso evidenze empiriche e concetti fondati, e ricavarne un'implicazione pedagogica concreta.
                    </p>

                    <div className="table-responsive shadow-sm rounded-4 border">
                      <table className="table table-hover mb-0 align-middle">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" className="py-3 px-4 border-bottom-0 text-uppercase small fw-bold text-muted">Tappa</th>
                            <th scope="col" className="py-3 px-4 border-bottom-0 text-uppercase small fw-bold text-muted">Senso comune (prima)</th>
                            <th scope="col" className="py-3 px-4 border-bottom-0 text-uppercase small fw-bold text-muted">Consapevolezza critica (dopo)</th>
                            <th scope="col" className="py-3 px-4 border-bottom-0 text-uppercase small fw-bold text-muted">Implicazione pedagogica</th>
                          </tr>
                        </thead>
                        <tbody className="border-top-0">
                          {tableData.map((row, index) => (
                            <tr key={index}>
                              <td className="py-3 px-4 fw-medium text-nowrap">
                                <Link to={row.path} className="text-decoration-none text-primary hover-underline">
                                  {row.step}
                                </Link>
                              </td>
                              <td className="py-3 px-4 text-secondary" style={{ fontSize: '0.95rem' }}>{row.before}</td>
                              <td className="py-3 px-4 text-dark fw-medium" style={{ fontSize: '0.95rem' }}>{row.after}</td>
                              <td className="py-3 px-4 text-primary fw-medium" style={{ fontSize: '0.95rem' }}>{row.implication}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Section 4: Definizione */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Una definizione di AI literacy critica</h2>
                    <p className="text-secondary mb-4">Proponiamo questa definizione operativa, sintetica delle 10 tappe:</p>

                    <div className="card border-0 shadow-lg rounded-5 overflow-hidden mb-4" style={{ background: 'linear-gradient(135deg, #2B3A4E 0%, #1a2533 100%)' }}>
                      <div className="card-body p-4 p-md-5 text-center position-relative">
                        <MessageSquareQuote size={48} color="rgba(255,255,255,0.1)" className="position-absolute top-0 start-0 m-4" />
                        <p className="fs-4 text-white fw-medium mb-0 position-relative z-1" style={{ lineHeight: 1.6, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                          "La literacy critica sull'IA è la capacità di orientarsi nel paesaggio tecnologico dell'IA, comprenderne i meccanismi fondamentali, riconoscerne i limiti e i bias, valutarne le conseguenze cognitive e ambientali, e usarla — quando appropriato — come strumento pedagogicamente intenzionale che preserva e potenzia l'autonomia cognitiva degli studenti."
                        </p>
                      </div>
                    </div>

                    <p className="text-secondary">
                      Questa definizione è consapevolmente distinta dalla semplice "AI literacy" intesa come capacità di usare strumenti IA. L'aggettivo <em>critica</em> indica che la competenza include la valutazione, il contestualizzare, il decidere <em>quando e se</em> usare l'IA — non solo il come.
                    </p>
                  </section>

                  {/* Section 5: Call to action */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Cosa puoi fare da domani</h2>
                    <p className="text-secondary mb-4">La consapevolezza critica non è uno stato, ma una pratica. Alcune azioni concrete per iniziare:</p>

                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <div className="d-flex gap-3">
                          <div className="text-primary mt-1"><Lightbulb size={24} /></div>
                          <div>
                            <h4 className="h6 fw-bold text-dark mb-1">Quando usi l'IA</h4>
                            <p className="small text-secondary">Chiediti sempre "Questo compito cognitivo serve allo studente — o lo sto saltando?". La domanda non è se usarla, ma se in questo caso specifico il suo uso potenzia o sostituisce il pensiero.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="d-flex gap-3">
                          <div className="text-primary mt-1"><Users size={24} /></div>
                          <div>
                            <h4 className="h6 fw-bold text-dark mb-1">Parla di IA con gli studenti</h4>
                            <p className="small text-secondary">Non come magia nera né come soluzione magica, ma come strumento con limiti e costi. La metacognizione sull'IA è già educazione critica.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="d-flex gap-3">
                          <div className="text-primary mt-1"><Shield size={24} /></div>
                          <div>
                            <h4 className="h6 fw-bold text-dark mb-1">Sii esplicito sulla fonte</h4>
                            <p className="small text-secondary">Quando usi materiali generati con IA, dillo. Quando gli studenti usano IA, fatelo diventare oggetto di analisi critica, non solo di accettazione o rifiuto.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="d-flex gap-3">
                          <div className="text-primary mt-1"><Target size={24} /></div>
                          <div>
                            <h4 className="h6 fw-bold text-dark mb-1">Scegli strumenti consapevolmente</h4>
                            <p className="small text-secondary">Considera chi li ha fatto, dove, con quali valori e con quale impatto ambientale. La scelta dello strumento è una scelta etica.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex gap-3">
                          <div className="text-primary mt-1"><Zap size={24} /></div>
                          <div>
                            <h4 className="h6 fw-bold text-dark mb-1">Mantieniti aggiornato</h4>
                            <p className="small text-secondary">Il paesaggio cambia velocemente, ma il frame critico che hai costruito oggi ti servirà domani. Cerca comunità di pratica con altri docenti che condividono questa prospettiva.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Bottom Callouts */}
                  <div className="d-flex flex-column gap-4 mb-5">
                    {/* L'approdo */}
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="card-body p-4 p-md-5 position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#fffdf5', zIndex: 0 }}></div>
                        <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#ffc107', zIndex: 1 }}></div>
                        
                        <div className="position-relative z-1 d-flex gap-3">
                          <div className="d-none d-sm-block text-warning mt-1">
                            <Star size={32} />
                          </div>
                          <div>
                            <h2 className="h5 fw-bold mb-3 text-dark">
                              L'approdo
                            </h2>
                            <p className="mb-0 text-dark">
                              Il senso comune sull'IA si costruisce rapidamente e con poca resistenza critica. La literacy critica richiede sforzo, aggiornamento continuo e comunità di pratica. Speriamo che questo percorso sia stato un primo passo utile.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verso i crediti */}
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="card-body p-4 p-md-5 position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#e9ecef', zIndex: 0 }}></div>
                        <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#6c757d', zIndex: 1 }}></div>
                        
                        <div className="position-relative z-1 d-flex gap-3">
                          <div className="d-none d-sm-block text-secondary mt-1">
                            <BookOpen size={32} />
                          </div>
                          <div>
                            <h2 className="h5 fw-bold mb-3 text-secondary">
                              Riferimenti e licenza
                            </h2>
                            <p className="mb-4 text-dark">
                              Tutte le fonti citate in questo percorso, la licenza CC BY 4.0 e i crediti del progetto.
                            </p>
                            <Link to="/sources" className="btn btn-secondary fw-medium px-4 py-2 rounded-pill">
                              Fonti principali <ArrowRight size={18} className="ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                    <Link to="/step9" className="btn btn-outline-secondary rounded-pill px-4">
                      ← Il costo invisibile
                    </Link>
                    <Link to="/sources" className="btn btn-outline-secondary rounded-pill px-4">
                      Fonti principali →
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
