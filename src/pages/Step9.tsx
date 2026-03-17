import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareQuote, AlertTriangle, CheckCircle, ArrowRightCircle, Droplets, Zap, Globe2, Factory, Users, CloudRain } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step9() {
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
                        <li className="breadcrumb-item text-muted">Movimento 4 — Allargamento responsabile</li>
                        <li className="breadcrumb-item active" aria-current="page">Tappa 9</li>
                      </ol>
                    </nav>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="progress flex-grow-1" style={{ height: '8px' }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                      </div>
                      <span className="small text-muted fw-medium">90%</span>
                    </div>
                    <p className="small text-muted mb-0">Tappa 9 di 10</p>
                  </div>

                  {/* Header */}
                  <header className="mb-5">
                    <span className="badge rounded-pill mb-3 px-3 py-2" style={{ backgroundColor: '#4A6B3A', color: 'white' }}>Movimento 4 — Tappa 9</span>
                    <h1 className="display-4 fw-bold text-dark mb-3">Il costo invisibile</h1>
                    <p className="lead text-secondary">Ogni query costa acqua, energia, carbonio. L'IA ha un peso fisico reale e spesso nascosto. La sostenibilità ambientale dell'IA è la dimensione più trascurata del dibattito educativo.</p>
                  </header>

                  {/* Callout: Senso Comune */}
                  <div className="card border-0 shadow-sm mb-5 rounded-4 overflow-hidden">
                    <div className="card-body p-4 p-md-5 position-relative">
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#f4f9f5', opacity: 0.5, zIndex: 0 }}></div>
                      <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#4A6B3A', zIndex: 1 }}></div>
                      
                      <div className="position-relative z-1">
                        <h2 className="h5 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#4A6B3A' }}>
                          <MessageSquareQuote size={24} />
                          L'assunto del senso comune
                        </h2>
                        <p className="fs-5 mb-0 text-dark fst-italic" style={{ fontFamily: 'Georgia, serif', lineHeight: 1.6 }}>
                          «L'IA è digitale — è pulita, immateriale, non inquina. Al massimo consuma un po' di elettricità.»
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: La fisicità dell'IA */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">La fisicità dell'IA: i data center</h2>
                    <p className="fs-5 text-secondary">
                      L'IA non è immateriale. Ogni prompt elaborato, ogni immagine generata, ogni ricerca eseguita richiede hardware fisico che consuma energia elettrica e acqua per il raffreddamento.
                    </p>
                    <p className="fs-5 text-secondary mb-5">
                      I <strong>data center</strong> che ospitano i modelli di IA sono infrastrutture fisiche enormi. Microsoft, Google, Amazon e Meta stanno costruendo nuovi impianti a ritmo accelerato: solo nel 2023–2024, gli investimenti globali in data center hanno superato i 200 miliardi di dollari.
                    </p>

                    {/* Stat Grid */}
                    <div className="row g-4 mb-5">
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-light" style={{ borderTop: '4px solid #C87D2A' }}>
                          <div className="mx-auto mb-3 text-warning">
                            <Zap size={32} color="#C87D2A" />
                          </div>
                          <h3 className="h4 fw-bold mb-1" style={{ color: '#C87D2A' }}>~700k kWh</h3>
                          <p className="fw-medium text-dark small mb-2">energia per addestrare GPT-3 (una tantum)</p>
                          <p className="small text-muted fst-italic mb-0" style={{ fontSize: '0.75rem' }}>Patterson et al. (2021) — equivalente a ~300 voli NY-SF</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-light" style={{ borderTop: '4px solid #C87D2A' }}>
                          <div className="mx-auto mb-3 text-warning">
                            <Zap size={32} color="#C87D2A" />
                          </div>
                          <h3 className="h4 fw-bold mb-1" style={{ color: '#C87D2A' }}>~0,01 kWh</h3>
                          <p className="fw-medium text-dark small mb-2">energia per singola query GPT-4</p>
                          <p className="small text-muted fst-italic mb-0" style={{ fontSize: '0.75rem' }}>Stima IEA (2024) — circa 10× una ricerca Google</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-light" style={{ borderTop: '4px solid #3A6B7A' }}>
                          <div className="mx-auto mb-3 text-info">
                            <Droplets size={32} color="#3A6B7A" />
                          </div>
                          <h3 className="h4 fw-bold mb-1" style={{ color: '#3A6B7A' }}>~500 mL</h3>
                          <p className="fw-medium text-dark small mb-2">acqua per ~20–50 query ChatGPT</p>
                          <p className="small text-muted fst-italic mb-0" style={{ fontSize: '0.75rem' }}>Li et al. (2023) — equivalente a una bottiglia</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-light" style={{ borderTop: '4px solid #5B4A8A' }}>
                          <div className="mx-auto mb-3 text-primary">
                            <Factory size={32} color="#5B4A8A" />
                          </div>
                          <h3 className="h4 fw-bold mb-1" style={{ color: '#5B4A8A' }}>+48%</h3>
                          <p className="fw-medium text-dark small mb-2">crescita emissioni CO₂ di Google (2019–2023)</p>
                          <p className="small text-muted fst-italic mb-0" style={{ fontSize: '0.75rem' }}>Google Environmental Report (2024)</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Consumo energetico comparato */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Consumo energetico per addestramento</h2>
                    
                    <div className="card border-0 shadow-lg rounded-5 overflow-hidden my-5">
                      <div className="card-header border-0 p-4 text-center" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                        <h3 className="h5 fw-bold text-dark mb-1">Confronto tra modelli IA (stima MWh)</h3>
                        <p className="text-muted small mb-0">I modelli proprietari consumano ordini di grandezza più energia</p>
                      </div>
                      
                      <div className="card-body p-4 p-md-5 bg-white">
                        <div className="position-relative w-100" style={{ height: '300px' }}>
                          <svg viewBox="0 0 680 300" className="w-100 h-100" preserveAspectRatio="xMidYMid meet">
                            {/* X axis gridlines */}
                            <line x1="180" y1="20" x2="180" y2="260" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="280" y1="20" x2="280" y2="260" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="380" y1="20" x2="380" y2="260" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="480" y1="20" x2="480" y2="260" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="580" y1="20" x2="580" y2="260" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>

                            {/* X axis labels */}
                            <text x="180" y="280" textAnchor="middle" fontSize="11" fill="#6c757d" fontWeight="500">0</text>
                            <text x="280" y="280" textAnchor="middle" fontSize="11" fill="#6c757d" fontWeight="500">10.000</text>
                            <text x="380" y="280" textAnchor="middle" fontSize="11" fill="#6c757d" fontWeight="500">20.000</text>
                            <text x="480" y="280" textAnchor="middle" fontSize="11" fill="#6c757d" fontWeight="500">30.000</text>
                            <text x="580" y="280" textAnchor="middle" fontSize="11" fill="#6c757d" fontWeight="500">40.000</text>
                            <text x="660" y="280" textAnchor="middle" fontSize="11" fill="#6c757d" fontWeight="500">50.000</text>
                            <text x="380" y="295" textAnchor="middle" fontSize="10" fill="#6c757d" fontWeight="600">MWh (megawattora)</text>

                            {/* Base line */}
                            <line x1="180" y1="260" x2="660" y2="260" stroke="#adb5bd" strokeWidth="2"/>

                            {/* Bars */}
                            {/* GPT-4 */}
                            <rect x="180" y="40" width="480" height="24" fill="#C87D2A" rx="4" />
                            <text x="170" y="56" textAnchor="end" fontSize="12" fill="#212529" fontWeight="600">GPT-4 (~2023)</text>
                            <text x="665" y="56" textAnchor="start" fontSize="11" fill="#C87D2A" fontWeight="700">~50.000</text>

                            {/* Gemini Ultra */}
                            <rect x="180" y="80" width="288" height="24" fill="#3A6B7A" rx="4" />
                            <text x="170" y="96" textAnchor="end" fontSize="12" fill="#212529" fontWeight="600">Gemini Ultra (~2023)</text>
                            <text x="475" y="96" textAnchor="start" fontSize="11" fill="#3A6B7A" fontWeight="700">~30.000</text>

                            {/* GPT-3 */}
                            <rect x="180" y="120" width="12" height="24" fill="#C87D2A" opacity="0.6" rx="4" />
                            <text x="170" y="136" textAnchor="end" fontSize="12" fill="#212529" fontWeight="600">GPT-3 (2020)</text>
                            <text x="198" y="136" textAnchor="start" fontSize="11" fill="#C87D2A" fontWeight="700">~1.200</text>

                            {/* Llama 3 */}
                            <rect x="180" y="160" width="5" height="24" fill="#4A6B3A" rx="2" />
                            <text x="170" y="176" textAnchor="end" fontSize="12" fill="#212529" fontWeight="600">Llama 3 70B (2024)</text>
                            <text x="190" y="176" textAnchor="start" fontSize="11" fill="#4A6B3A" fontWeight="700">~530</text>

                            {/* BLOOM */}
                            <rect x="180" y="200" width="4" height="24" fill="#5B4A8A" rx="2" />
                            <text x="170" y="216" textAnchor="end" fontSize="12" fill="#212529" fontWeight="600">BLOOM (2022, open)</text>
                            <text x="190" y="216" textAnchor="start" fontSize="11" fill="#5B4A8A" fontWeight="700">~433</text>

                            {/* Google Search */}
                            <rect x="180" y="240" width="2" height="12" fill="#6B7F3B" rx="1" />
                            <text x="170" y="250" textAnchor="end" fontSize="11" fill="#6c757d" fontWeight="500">Ricerca Google (query)</text>
                            <text x="185" y="250" textAnchor="start" fontSize="10" fill="#6B7F3B" fontWeight="600">0,0003</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Consumo idrico */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Il consumo idrico: una risorsa invisibile</h2>
                    <p className="fs-5 text-secondary mb-4">
                      L'acqua è necessaria per raffreddare i data center. Li et al. (2023) hanno stimato che ChatGPT consuma circa 500 mL di acqua per una sessione di 20–50 domande. I sistemi di raffreddamento evaporativo sono largamente diffusi nei data center di grandi aziende tecnologiche.
                    </p>

                    <div className="row g-4 mb-5">
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ backgroundColor: '#f0f8ff' }}>
                          <div className="mx-auto mb-3 text-info">
                            <CloudRain size={48} color="#3A6B7A" />
                          </div>
                          <h4 className="h5 fw-bold text-dark mb-1">Una query ChatGPT</h4>
                          <h3 className="h3 fw-bold mb-2" style={{ color: '#3A6B7A' }}>~25 mL</h3>
                          <p className="small text-secondary mb-0">gocce d'acqua</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ backgroundColor: '#e6f2ff' }}>
                          <div className="mx-auto mb-3 text-info">
                            <Droplets size={48} color="#3A6B7A" />
                          </div>
                          <h4 className="h5 fw-bold text-dark mb-1">20 query ChatGPT</h4>
                          <h3 className="h3 fw-bold mb-2" style={{ color: '#3A6B7A' }}>~500 mL</h3>
                          <p className="small text-secondary mb-0">una bottiglia d'acqua</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center" style={{ backgroundColor: '#cce5ff' }}>
                          <div className="mx-auto mb-3 text-info">
                            <Globe2 size={48} color="#3A6B7A" />
                          </div>
                          <h4 className="h5 fw-bold text-dark mb-1">Addestrare GPT-3</h4>
                          <h3 className="h3 fw-bold mb-2" style={{ color: '#3A6B7A' }}>~700.000 L</h3>
                          <p className="small text-secondary mb-0">una piscina olimpica</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Lavoro invisibile & Disuguaglianze */}
                  <section className="mb-5">
                    <div className="row g-4">
                      <div className="col-12 col-lg-6">
                        <h2 className="h3 fw-bold mb-4">Il lavoro invisibile nel Sud del mondo</h2>
                        <p className="text-secondary">
                          I modelli IA richiedono enormi quantità di dati annotati da esseri umani: immagini classificate, testi etichettati, contenuti dannosi identificati manualmente. Questo lavoro è prevalentemente svolto da lavoratori in Kenya, India, Pakistan, Filippine a salari molto bassi.
                        </p>
                        <div className="p-4 rounded-4 my-4" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #6c757d' }}>
                          <p className="fst-italic text-dark mb-2">
                            "Nel 2023, un'inchiesta di TIME ha documentato che lavoratori kenyani erano pagati meno di 2 dollari all'ora per esaminare contenuti traumatici — immagini di violenza, abusi, estremismo — per addestrare i filtri di sicurezza di OpenAI."
                          </p>
                          <p className="small text-muted mb-0 fw-bold">— TIME Magazine, gennaio 2023</p>
                        </div>
                        <p className="text-secondary mb-0">
                          I lavoratori dell'<em lang="en">annotation economy</em> sopportano il costo psicologico e lavorativo del rendere sicuri i prodotti IA che vengono poi venduti a prezzi elevati nei paesi ad alto reddito.
                        </p>
                      </div>

                      <div className="col-12 col-lg-6">
                        <h2 className="h3 fw-bold mb-4">Le disuguaglianze nell'accesso</h2>
                        <p className="text-secondary mb-4">
                          Mentre i costi fisici dell'IA (energia, acqua, materiali rari) sono concentrati geograficamente, i benefici sono distribuiti in modo diseguale. L'IA "democratica" è ancora prevalentemente accessibile a chi ha connessione internet veloce, dispositivi moderni, e competenza linguistica in inglese.
                        </p>
                        <p className="text-secondary mb-4">
                          I modelli linguistici di grandi dimensioni sono stati addestrati prevalentemente su testi in lingua inglese; le performance in italiano, arabo, swahili o lingue indigene sono sistematicamente inferiori. Questa disparità linguistica è una forma di disuguaglianza tecnologica.
                        </p>
                        
                        {/* Callout Attenzione */}
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                          <div className="card-body p-4 position-relative">
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#fff8f0', zIndex: 0 }}></div>
                            <div className="position-absolute top-0 start-0 h-100" style={{ width: '4px', backgroundColor: '#C87D2A', zIndex: 1 }}></div>
                            
                            <div className="position-relative z-1">
                              <h3 className="h6 fw-bold text-uppercase mb-2 d-flex align-items-center gap-2" style={{ color: '#C87D2A', letterSpacing: '0.05em' }}>
                                <AlertTriangle size={18} />
                                Terre rare e semiconduttori
                              </h3>
                              <p className="mb-0 text-dark small">
                                I chip che fanno girare i modelli IA richiedono elementi come tantalio, cobalto, litio. La loro estrazione è spesso associata a conflitti armati, lavoro minorile e danni ambientali in Africa centrale e Sud America. (Report OCSE, 2021)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Emissioni CO2 */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4">Le emissioni CO₂ delle Big Tech (2018–2023)</h2>
                    <p className="fs-5 text-secondary mb-4">
                      Nonostante i comunicati ufficiali sull'impegno verso la neutralità carbonica, le emissioni delle principali aziende tech sono aumentate significativamente con l'espansione dell'IA.
                    </p>

                    <div className="card border-0 shadow-lg rounded-5 overflow-hidden my-5">
                      <div className="card-body p-4 p-md-5 bg-white">
                        <div className="position-relative w-100" style={{ height: '300px' }}>
                          <svg viewBox="0 0 650 300" className="w-100 h-100" preserveAspectRatio="xMidYMid meet">
                            {/* Y axis gridlines */}
                            <line x1="60" y1="240" x2="620" y2="240" stroke="#adb5bd" strokeWidth="2"/>
                            <line x1="60" y1="190" x2="620" y2="190" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="60" y1="140" x2="620" y2="140" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="60" y1="90" x2="620" y2="90" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>
                            <line x1="60" y1="40" x2="620" y2="40" stroke="#dee2e6" strokeWidth="1" strokeDasharray="4 4"/>

                            {/* Y axis labels */}
                            <text x="50" y="244" textAnchor="end" fontSize="11" fill="#6c757d" fontWeight="500">0,0</text>
                            <text x="50" y="194" textAnchor="end" fontSize="11" fill="#6c757d" fontWeight="500">0,5</text>
                            <text x="50" y="144" textAnchor="end" fontSize="11" fill="#6c757d" fontWeight="500">1,0</text>
                            <text x="50" y="94" textAnchor="end" fontSize="11" fill="#6c757d" fontWeight="500">1,5</text>
                            <text x="50" y="44" textAnchor="end" fontSize="11" fill="#6c757d" fontWeight="500">2,0</text>
                            <text x="15" y="140" textAnchor="middle" fontSize="10" fill="#6c757d" fontWeight="600" transform="rotate(-90, 15, 140)">MtCO₂e</text>

                            {/* X axis labels */}
                            <text x="100" y="260" textAnchor="middle" fontSize="11" fill="#495057" fontWeight="600">2018</text>
                            <text x="200" y="260" textAnchor="middle" fontSize="11" fill="#495057" fontWeight="600">2019</text>
                            <text x="300" y="260" textAnchor="middle" fontSize="11" fill="#495057" fontWeight="600">2020</text>
                            <text x="400" y="260" textAnchor="middle" fontSize="11" fill="#495057" fontWeight="600">2021</text>
                            <text x="500" y="260" textAnchor="middle" fontSize="11" fill="#495057" fontWeight="600">2022</text>
                            <text x="600" y="260" textAnchor="middle" fontSize="11" fill="#495057" fontWeight="600">2023</text>

                            {/* Vertical line for AI Boom */}
                            <line x1="500" y1="20" x2="500" y2="240" stroke="#dc3545" strokeWidth="1" strokeDasharray="6 4" opacity="0.6"/>
                            <text x="510" y="30" textAnchor="start" fontSize="10" fill="#dc3545" fontWeight="700">↑ Boom IA generativa</text>

                            {/* Lines */}
                            {/* Google (1.0, 1.0, 0.95, 1.2, 1.4, 1.48) */}
                            <polyline points="100,140 200,140 300,145 400,120 500,100 600,92" fill="none" stroke="#3A6B7A" strokeWidth="3" strokeLinejoin="round"/>
                            <circle cx="100" cy="140" r="5" fill="#3A6B7A"/>
                            <circle cx="200" cy="140" r="5" fill="#3A6B7A"/>
                            <circle cx="300" cy="145" r="5" fill="#3A6B7A"/>
                            <circle cx="400" cy="120" r="5" fill="#3A6B7A"/>
                            <circle cx="500" cy="100" r="5" fill="#3A6B7A"/>
                            <circle cx="600" cy="92" r="5" fill="#3A6B7A"/>

                            {/* Microsoft (0.95, 0.93, 0.9, 1.1, 1.3, 1.56) */}
                            <polyline points="100,145 200,147 300,150 400,130 500,110 600,84" fill="none" stroke="#5B4A8A" strokeWidth="3" strokeLinejoin="round"/>
                            <circle cx="100" cy="145" r="5" fill="#5B4A8A"/>
                            <circle cx="200" cy="147" r="5" fill="#5B4A8A"/>
                            <circle cx="300" cy="150" r="5" fill="#5B4A8A"/>
                            <circle cx="400" cy="130" r="5" fill="#5B4A8A"/>
                            <circle cx="500" cy="110" r="5" fill="#5B4A8A"/>
                            <circle cx="600" cy="84" r="5" fill="#5B4A8A"/>

                            {/* Meta (0.6, 0.65, 0.7, 0.8, 0.95, 1.1) */}
                            <polyline points="100,180 200,175 300,170 400,160 500,145 600,130" fill="none" stroke="#C87D2A" strokeWidth="3" strokeLinejoin="round"/>
                            <circle cx="100" cy="180" r="5" fill="#C87D2A"/>
                            <circle cx="200" cy="175" r="5" fill="#C87D2A"/>
                            <circle cx="300" cy="170" r="5" fill="#C87D2A"/>
                            <circle cx="400" cy="160" r="5" fill="#C87D2A"/>
                            <circle cx="500" cy="145" r="5" fill="#C87D2A"/>
                            <circle cx="600" cy="130" r="5" fill="#C87D2A"/>
                          </svg>
                        </div>

                        {/* Legend */}
                        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 pt-4 border-top">
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ width: '20px', height: '4px', backgroundColor: '#3A6B7A', borderRadius: '2px' }}></div>
                            <span className="small fw-bold text-dark">Google</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ width: '20px', height: '4px', backgroundColor: '#5B4A8A', borderRadius: '2px' }}></div>
                            <span className="small fw-bold text-dark">Microsoft</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ width: '20px', height: '4px', backgroundColor: '#C87D2A', borderRadius: '2px' }}></div>
                            <span className="small fw-bold text-dark">Meta</span>
                          </div>
                        </div>
                        <p className="text-muted small text-center mt-3 fst-italic mb-0">
                          Dati da rapporti ambientali aziendali 2024 — valori approssimati in MtCO₂e (milioni di tonnellate CO₂ equivalente)
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Bottom Callouts */}
                  <div className="d-flex flex-column gap-4 mb-5">
                    {/* Sintesi */}
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="card-body p-4 p-md-5 position-relative">
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#f8f9fa', zIndex: 0 }}></div>
                        <div className="position-absolute top-0 start-0 h-100" style={{ width: '6px', backgroundColor: '#198754', zIndex: 1 }}></div>
                        
                        <div className="position-relative z-1 d-flex gap-3">
                          <div className="d-none d-sm-block text-success mt-1">
                            <Globe2 size={32} />
                          </div>
                          <div>
                            <h2 className="h5 fw-bold mb-3" style={{ color: '#198754' }}>
                              Sintesi
                            </h2>
                            <p className="mb-0 text-dark">
                              La sostenibilità ambientale dell'IA è una dimensione etica fondamentale. Scegliere quando e come usare l'IA, scegliere modelli più efficienti, riflettere sull'impatto complessivo — sono scelte che ogni utente consapevole può fare. La scuola è il luogo dove questa consapevolezza si forma.
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
                              La domanda che ci porta avanti
                            </h2>
                            <p className="mb-4 text-dark">
                              Abbiamo percorso tutte e 10 le tappe. Cosa abbiamo costruito? Quale consapevolezza portiamo con noi?
                            </p>
                            <Link to="/step10" className="btn btn-primary fw-medium px-4 py-2 rounded-pill">
                              Approdo: La literacy critica sull'IA <ArrowRight size={18} className="ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                    <Link to="/step8" className="btn btn-outline-secondary rounded-pill px-4">
                      ← Quindi come usarla?
                    </Link>
                    <Link to="/step10" className="btn btn-outline-primary rounded-pill px-4">
                      La literacy critica sull'IA →
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
