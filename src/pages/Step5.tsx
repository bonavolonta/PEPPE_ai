import React from 'react';
import { Link } from 'react-router-dom';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step5() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PeppeHeader />
      <main>
        <section className="py-5 bg-white">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                
                {/* Breadcrumb & Progress */}
                <div className="mb-5">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Ma allora è intelligente?</li>
                    </ol>
                  </nav>
                  
                  <div className="d-flex justify-content-between mb-2 small text-muted fw-bold">
                    <span>Percorso</span>
                    <span>Tappa 5 di 10</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                {/* Hero */}
                <header className="mb-5 border-bottom pb-4">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'linear-gradient(135deg, #5B4A8A 0%, #E07A3A 100%)', color: 'white', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                    <span>★</span> Tappa centrale del percorso
                  </div>
                  <br />
                  <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">Movimento 2 — Tappa 4</span>
                  <h1 className="display-4 fw-bold text-dark mb-3">Ma allora è intelligente?</h1>
                  <p className="lead text-secondary">Il nodo critico dell'intero percorso. L'intelligenza artificiale è un agente straordinariamente efficace ma del tutto stupido. Possiede una nuova forma di <em>agency</em>, ma è priva di intenzionalità, coscienza e comprensione semantica genuina.</p>
                </header>

                {/* Callout: Senso Comune */}
                <div className="alert alert-warning shadow-sm border-0 border-start border-warning border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-quote-fill text-warning" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293M12.5 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 11.04 6c-.958 0-1.734.746-1.734 1.667 0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293"/>
                    </svg>
                    Il senso comune dice…
                  </h2>
                  <p className="mb-0 text-dark">"ChatGPT è intelligente — forse più intelligente di molti studenti. Ragiona, capisce, risponde meglio di molti esseri umani. Presto ci supererà in tutto."</p>
                </div>

                {/* Section 1: Il problema del linguaggio */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Quando il linguaggio inganna</h2>
                  <p className="fs-5 text-secondary">
                    I modelli linguistici usano parole come "capire", "ragionare", "sapere". Ma queste parole, applicate agli LLM, hanno un significato radicalmente diverso rispetto a quando le usiamo per gli esseri umani. Questa non è una sottigliezza filosofica: è la differenza tra capire uno strumento e fraintenderlo.
                  </p>
                  <p className="fs-5 text-secondary">
                    Luciano Floridi, uno dei maggiori filosofi della tecnologia, introduce il concetto di <strong>intentional stance</strong>: tendiamo istintivamente ad attribuire intenzioni e comprensione a qualsiasi sistema che si comporti come se le avesse. Un termostato "vuole" mantenere la temperatura. Un'app meteo "sa" che pioverà. Un LLM "capisce" la domanda.
                  </p>
                  <p className="fs-5 text-secondary">
                    Ma l'attribuzione non implica la realtà. Descrivere il comportamento in termini intenzionali è una scorciatoia cognitiva comoda — non una descrizione accurata dei meccanismi interni del sistema.
                  </p>
                </section>

                {/* INFOGRAFICA: Agency vs Automazione */}
                <section className="mb-5">
                  <h2 className="visually-hidden">Agency Artificiale vs Intenzionalità: cosa fa e cosa non fa l'IA</h2>
                  <div className="row g-4">
                    {/* Colonna Automazione */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', border: '2px solid #5B4A8A' }}>
                        <div className="p-3 text-center text-white" style={{ backgroundColor: '#5B4A8A' }}>
                          <h3 className="h6 fw-bold mb-0">AGENCY ARTIFICIALE</h3>
                          <span className="small opacity-75">(motore sintattico)</span>
                        </div>
                        <div className="card-body p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#5B4A8A' }}>✓</span>
                              <span className="text-dark">Predice token sulla base di pattern statistici</span>
                            </li>
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#5B4A8A' }}>✓</span>
                              <span className="text-dark">Genera output plausibili per il contesto</span>
                            </li>
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#5B4A8A' }}>✓</span>
                              <span className="text-dark">Ottimizza una funzione obiettivo</span>
                            </li>
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#5B4A8A' }}>✓</span>
                              <span className="text-dark">Esegue istruzioni in modo sofisticato</span>
                            </li>
                            <li className="d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#5B4A8A' }}>✓</span>
                              <span className="text-dark">Produce output linguisticamente coerenti</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Colonna Agency */}
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: 'rgba(224, 122, 58, 0.05)', border: '2px solid #E07A3A' }}>
                        <div className="p-3 text-center text-white" style={{ backgroundColor: '#E07A3A' }}>
                          <h3 className="h6 fw-bold mb-0">COSA MANCA ALL'IA</h3>
                          <span className="small opacity-75">(intenzionalità e semantica)</span>
                        </div>
                        <div className="card-body p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#E07A3A' }}>✗</span>
                              <span className="text-dark">Comprendere il significato di ciò che genera</span>
                            </li>
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#E07A3A' }}>✗</span>
                              <span className="text-dark">Avere intenzioni o obiettivi propri</span>
                            </li>
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#E07A3A' }}>✗</span>
                              <span className="text-dark">Sapere che sta producendo del testo</span>
                            </li>
                            <li className="mb-3 pb-3 border-bottom border-secondary border-opacity-25 d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#E07A3A' }}>✗</span>
                              <span className="text-dark">Avere consapevolezza di sé</span>
                            </li>
                            <li className="d-flex align-items-start gap-3">
                              <span className="fw-bold" style={{ color: '#E07A3A' }}>✗</span>
                              <span className="text-dark">Decidere per ragioni morali genuine</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-muted small mt-3 fst-italic">
                    La distinzione fondamentale tra l'agency artificiale (agire con successo senza capire) e l'intenzionalità umana (comprendere e avere scopi propri). Fonte: elaborazione da Floridi (2023), Bender et al. (2021).
                  </p>
                </section>

                {/* Section 2: I tre criteri di Floridi */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">L'agency senza intelligenza secondo Floridi</h2>
                  <p className="fs-5 text-secondary mb-4">
                    Luciano Floridi propone la <strong>"tesi della molteplice realizzabilità dell'agency" (MRA)</strong>. L'agency non è un'esclusiva umana, ma può manifestarsi in diverse forme, inclusa quella artificiale. L'IA è a tutti gli effetti un agente, basato su tre criteri, anche in totale assenza di stati mentali o cognizione:
                  </p>

                  <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                    <div className="col">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderTop: '4px solid #5B4A8A' }}>
                        <div className="card-body p-4">
                          <div className="display-4 fw-bold mb-2" style={{ color: '#5B4A8A', opacity: 0.3, fontFamily: 'Georgia, serif' }}>01</div>
                          <h3 className="h5 fw-bold mb-3" style={{ color: '#5B4A8A' }}>Interattività</h3>
                          <p className="text-dark small mb-0">
                            L'agente e il suo ambiente possono agire l'uno sull'altro. L'IA riceve input (prompt, dati) e produce output che modificano l'ambiente digitale o le decisioni umane.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderTop: '4px solid #5B4A8A' }}>
                        <div className="card-body p-4">
                          <div className="display-4 fw-bold mb-2" style={{ color: '#5B4A8A', opacity: 0.3, fontFamily: 'Georgia, serif' }}>02</div>
                          <h3 className="h5 fw-bold mb-3" style={{ color: '#5B4A8A' }}>Autonomia</h3>
                          <p className="text-dark small mb-0">
                            L'agente può cambiare il proprio stato senza stimoli diretti, basandosi su regole interne. L'IA opera autonomamente per raggiungere gli obiettivi programmati nel suo design.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderTop: '4px solid #5B4A8A' }}>
                        <div className="card-body p-4">
                          <div className="display-4 fw-bold mb-2" style={{ color: '#5B4A8A', opacity: 0.3, fontFamily: 'Georgia, serif' }}>03</div>
                          <h3 className="h5 fw-bold mb-3" style={{ color: '#5B4A8A' }}>Adattività</h3>
                          <p className="text-dark small mb-0">
                            L'agente modifica le proprie regole di transizione in base all'interazione. Attraverso il Machine Learning, l'IA "impara" e si adatta ai dati di addestramento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="fs-5 text-secondary">
                    L'IA è quindi una <strong>nuova forma di agency senza intelligenza</strong>. Separa in modo inedito la capacità di agire con successo dalla necessità di capire cosa si stia facendo. Risolve problemi complessi "a intelligenza zero", poiché i suoi scopi non sono scelti autonomamente, ma imposti esternamente dal design umano.
                  </p>
                </section>

                {/* Section 3: Il pappagallo stocastico */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Il "pappagallo stocastico" (Bender et al., 2021)</h2>
                  <p className="fs-5 text-secondary">
                    Nel 2021, Emily Bender, Timnit Gebru e colleghi hanno pubblicato <em>"On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?"</em> — uno degli articoli più influenti e controversi nella storia recente dell'IA, che costò il licenziamento di Timnit Gebru da Google.
                  </p>

                  <div className="p-4 p-md-5 my-5 rounded-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderLeft: '6px solid #5B4A8A' }}>
                    <p className="fs-4 fst-italic mb-3 text-dark" style={{ fontFamily: 'Georgia, serif', lineHeight: 1.6 }}>
                      "Un modello linguistico di grandi dimensioni è, per definizione, un sistema che cuce insieme forme linguistiche in modo statisticamente plausibile rispetto al testo di addestramento, senza alcun riferimento al significato."
                    </p>
                    <footer className="text-muted">
                      — Bender, Gebru, McMillan-Major, Shmitchell (2021), <em>On the Dangers of Stochastic Parrots</em>
                    </footer>
                  </div>

                  <p className="fs-5 text-secondary">
                    La metafora del "pappagallo stocastico" è potente: un pappagallo ripete suoni che ha sentito in modo convincente, ma senza capire cosa sta dicendo. Allo stesso modo, un LLM produce testo statisticamente coerente con il suo training, senza alcuna comprensione semantica del contenuto. Il termine <em>stocastico</em> aggiunge la componente della casualità probabilistica: l'output non è deterministico, ma campionato da una distribuzione.
                  </p>

                  {/* Infografica: Il pappagallo stocastico (Ridisegnata) */}
                  <div className="rounded-4 p-4 p-md-5 shadow-sm border mt-5" style={{ backgroundColor: '#faf9f8' }}>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-5">
                      
                      {/* Left: The Model */}
                      <div className="text-center position-relative">
                        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '110px', height: '110px', background: 'linear-gradient(135deg, #5B4A8A 0%, #3A2E5D 100%)', border: '4px solid white', zIndex: 2, position: 'relative' }}>
                          <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Body */}
                            <path d="M24 60 C 24 30, 28 12, 42 12 C 52 12, 56 22, 52 32 C 48 42, 38 60, 24 60 Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                            {/* Upper Beak */}
                            <path d="M52 24 C 64 24, 66 38, 58 46 C 54 40, 50 36, 48 36 Z" fill="#E07A3A" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                            {/* Lower Beak */}
                            <path d="M48 36 C 54 44, 50 52, 44 48 Z" fill="#E07A3A" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                            {/* Eye */}
                            <circle cx="40" cy="24" r="4" fill="white"/>
                            <circle cx="42" cy="24" r="1.5" fill="#3A2E5D"/>
                            {/* Wing */}
                            <path d="M28 36 C 38 36, 42 48, 36 58 C 28 52, 24 44, 28 36 Z" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h4 className="h5 fw-bold mb-1" style={{ color: '#5B4A8A' }}>LLM</h4>
                        <span className="badge rounded-pill bg-white text-dark border shadow-sm px-3 py-2 fst-italic">"Pappagallo stocastico"</span>
                      </div>

                      {/* Middle: Arrow */}
                      <div className="d-flex flex-column align-items-center text-muted">
                        <span className="small text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#888' }}>Output</span>
                        <div className="d-none d-md-flex align-items-center">
                          <div style={{ height: '2px', width: '60px', backgroundColor: '#ccc' }}></div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '-4px' }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                        <div className="d-flex d-md-none flex-column align-items-center my-2">
                          <div style={{ width: '2px', height: '40px', backgroundColor: '#ccc' }}></div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '-4px' }}>
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>

                      {/* Right: Output */}
                      <div className="position-relative">
                        <div className="bg-white rounded-4 p-4 shadow-sm border position-relative" style={{ maxWidth: '380px', borderColor: 'rgba(224, 122, 58, 0.3) !important' }}>
                          {/* Speech bubble tail (desktop) */}
                          <div className="d-none d-md-block position-absolute" style={{ left: '-10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', backgroundColor: 'white', borderLeft: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6', rotate: '45deg' }}></div>
                          {/* Speech bubble tail (mobile) */}
                          <div className="d-block d-md-none position-absolute" style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', backgroundColor: 'white', borderTop: '1px solid #dee2e6', borderLeft: '1px solid #dee2e6', rotate: '45deg' }}></div>
                          
                          <p className="fs-5 text-dark mb-4 position-relative z-1" style={{ fontFamily: 'Georgia, serif', lineHeight: 1.6 }}>
                            "L'intelligenza è un processo cognitivo che integra…"
                          </p>
                          
                          <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center position-relative z-1">
                            <span className="badge rounded-pill d-flex align-items-center gap-1 px-3 py-2" style={{ backgroundColor: 'rgba(224, 122, 58, 0.1)', color: '#E07A3A', border: '1px solid rgba(224, 122, 58, 0.2)' }}>
                              <span className="opacity-75 small fw-normal">p=</span><span className="fs-6">0.72</span>
                            </span>
                            <span className="badge rounded-pill d-flex align-items-center gap-1 px-3 py-2" style={{ backgroundColor: 'rgba(224, 122, 58, 0.1)', color: '#E07A3A', border: '1px solid rgba(224, 122, 58, 0.2)' }}>
                              <span className="opacity-75 small fw-normal">p=</span><span className="fs-6">0.68</span>
                            </span>
                            <span className="badge rounded-pill d-flex align-items-center gap-1 px-3 py-2" style={{ backgroundColor: 'rgba(224, 122, 58, 0.1)', color: '#E07A3A', border: '1px solid rgba(224, 122, 58, 0.2)' }}>
                              <span className="opacity-75 small fw-normal">p=</span><span className="fs-6">0.81</span>
                            </span>
                          </div>

                          <div className="text-center border-top pt-3 mt-2 position-relative z-1">
                            <span className="d-block small text-muted fst-italic">Forma plausibile,</span>
                            <span className="d-block small" style={{ color: '#E07A3A', fontWeight: 'bold' }}>nessun significato interno</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <p className="text-center text-muted small mt-5 fst-italic mb-0 px-md-5">
                      Il "pappagallo stocastico": il modello linguistico produce testo statisticamente plausibile (indicato dai valori di probabilità) senza alcuna comprensione del significato. Ispirato a Bender et al. (2021).
                    </p>
                  </div>
                </section>

                {/* Section 4: Il capitale semantico */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Motore sintattico e capitale semantico</h2>
                  <p className="fs-5 text-secondary">
                    L'IA viene definita come un <strong>"motore sintattico"</strong>. Essa opera attraverso il riconoscimento di pattern statistici e la manipolazione di simboli, senza mai accedere al livello della comprensione semantica o del significato genuino.
                  </p>
                  <p className="fs-5 text-secondary">
                    Floridi usa il concetto di <strong>capitale semantico</strong> per descrivere ciò che gli esseri umani fanno e che gli LLM non fanno: creare e gestire <em>significato</em>. Un LLM può produrre un testo su neurochirurgia indistinguibile da quello di un esperto, ma lo fa "a intelligenza zero", senza alcuna relazione con la disciplina incarnata in professionisti, pratiche e responsabilità reali.
                  </p>
                  <p className="fs-5 text-secondary">
                    Questa è la radice del fenomeno delle <strong>allucinazioni</strong>: il modello produce testo statisticamente coerente anche quando i fatti che "descrive" non esistono. Non può controllare l'accuratezza dei propri output perché non ha accesso alla realtà — solo ai pattern del testo di addestramento.
                  </p>

                  {/* Callout attenzione */}
                  <div className="alert alert-danger shadow-sm border-0 border-start border-danger border-4 mt-4 mb-5" role="alert">
                    <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill text-danger" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                      Il rischio pedagogico
                    </h2>
                    <p className="mb-0 text-dark">
                      Se gli studenti trattano l'output di un LLM come "conoscenza verificata", perdono la capacità di distinguere tra forma linguistica e contenuto semantico. Questa distinzione è fondamentale per il pensiero critico: saper riconoscere che qualcosa <em>suona bene</em> non significa che sia <em>vero</em> o <em>fondato</em>.
                    </p>
                  </div>
                </section>

                {/* Section 5: Giorgio Parisi */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Giorgio Parisi: l'assenza di pensiero critico genuino</h2>
                  <p className="fs-5 text-secondary">
                    Il Premio Nobel per la Fisica 2021 Giorgio Parisi ha più volte sottolineato che gli LLM, per quanto impressionanti nelle prestazioni su compiti linguistici, mancano di due capacità fondamentali: l'astrazione genuina e la critica del proprio output.
                  </p>

                  <div className="p-4 p-md-5 my-5 rounded-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', borderLeft: '6px solid #5B4A8A' }}>
                    <p className="fs-4 fst-italic mb-3 text-dark" style={{ fontFamily: 'Georgia, serif', lineHeight: 1.6 }}>
                      "L'intelligenza artificiale attuale è molto brava a fare cose per cui ha visto tanti esempi. Ma non sa astrarre in senso profondo, non sa trovare connessioni tra domini lontani che non ha visto connessi, non sa mettere in discussione le proprie assunzioni."
                    </p>
                    <footer className="text-muted">
                      — Giorgio Parisi <span className="fst-italic">(parafrasato da interviste pubbliche)</span>
                    </footer>
                  </div>

                  <p className="fs-5 text-secondary">
                    Parisi fa riferimento a una distinzione importante: la differenza tra <strong>competenza statistica</strong> (fare bene ciò per cui si hanno molti esempi di addestramento) e <strong>comprensione strutturale</strong> (capire i principi profondi che permettono di generalizzare a situazioni nuove, mai viste). I modelli eccellono nel primo, ma non hanno il secondo.
                  </p>
                  <p className="fs-5 text-secondary">
                    Questo ha conseguenze dirette per l'educazione: le domande di comprensione profonda, di sintesi creativa tra domini diversi, di valutazione critica delle fonti — rimangono competenze irreducibilmente umane che la scuola deve continuare a coltivare.
                  </p>
                </section>

                {/* Section 6: Allora cosa fa l'IA? */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Allora cosa è, e cosa fa?</h2>
                  <p className="fs-5 text-secondary mb-4">
                    Chiarire cosa non è l'IA non è una critica nichilistica: è il presupposto per un uso realmente intelligente. Sapere i limiti di uno strumento è condizione necessaria per usarlo bene. Un LLM è uno strumento potente per alcune cose — e del tutto inappropriato per altre.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: 'rgba(25, 135, 84, 0.05)', border: '2px solid #198754' }}>
                        <div className="p-3 text-center text-white" style={{ backgroundColor: '#198754' }}>
                          <h3 className="h6 fw-bold mb-0 text-uppercase">Usi appropriati</h3>
                        </div>
                        <div className="card-body p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-success">✓</span>
                              <span className="text-dark">Generare bozze e testi da rivedere criticamente</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-success">✓</span>
                              <span className="text-dark">Sintetizzare grandi quantità di testo</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-success">✓</span>
                              <span className="text-dark">Supportare il brainstorming e l'ideazione</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-success">✓</span>
                              <span className="text-dark">Assistere nella ricerca bibliografica (con verifica fonti)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-success">✓</span>
                              <span className="text-dark">Creare materiali didattici (da validare con cura)</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                              <span className="fw-bold text-success">✓</span>
                              <span className="text-dark">Spiegare concetti in termini semplici (da controllare)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: 'rgba(220, 53, 69, 0.05)', border: '2px solid #dc3545' }}>
                        <div className="p-3 text-center text-white" style={{ backgroundColor: '#dc3545' }}>
                          <h3 className="h6 fw-bold mb-0 text-uppercase">Usi non appropriati</h3>
                        </div>
                        <div className="card-body p-4">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-danger">✗</span>
                              <span className="text-dark">Delegare il pensiero critico</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-danger">✗</span>
                              <span className="text-dark">Verificare fatti (gli LLM allucinano)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-danger">✗</span>
                              <span className="text-dark">Sostituire la lettura diretta delle fonti primarie</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-danger">✗</span>
                              <span className="text-dark">Formulare giudizi etici autonomi</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span className="fw-bold text-danger">✗</span>
                              <span className="text-dark">Valutare lavori degli studenti senza supervisione critica</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                              <span className="fw-bold text-danger">✗</span>
                              <span className="text-dark">Sostituire il docente come presenza educativa</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Callout sintesi */}
                <div className="alert alert-success shadow-sm border-0 border-start border-success border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stars text-success" viewBox="0 0 16 16">
                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg>
                    Consapevolezza costruita
                  </h2>
                  <p className="mb-0 text-dark">
                    L'IA generativa è un <strong>agente straordinariamente efficace ma del tutto stupido</strong>. Possiede una propria forma di <em>agency</em>, ma è priva di coscienza, intenzionalità e comprensione. La distinzione non è accademica: cambia radicalmente come, quando e perché dovremmo usarla nel contesto educativo. Riconoscere la differenza tra l'agire con successo e il comprendere genuinamente è il primo passo della literacy critica sull'IA.
                  </p>
                </div>

                {/* Callout ponte */}
                <div className="card border-primary mb-5 shadow-sm text-center rounded-4">
                  <div className="card-body py-5">
                    <h2 className="h4 card-title text-primary d-flex align-items-center justify-content-center gap-2 fw-bold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg>
                      Per andare oltre
                    </h2>
                    <p className="card-text fs-5 text-secondary mb-4">
                      Se i modelli non capiscono davvero ciò che generano, cosa succede quando vengono addestrati su dati distorti? L'output riflette le distorsioni del mondo — amplificate su scala industriale.
                    </p>
                    <Link to="/step6" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                      Tappa 6: Se non è intelligente, cosa produce? →
                    </Link>
                  </div>
                </div>

                {/* Page navigation */}
                <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                  <Link to="/step4" className="btn btn-outline-secondary rounded-pill px-4">
                    ← Come funzionano davvero?
                  </Link>
                  <Link to="/step6" className="btn btn-outline-primary rounded-pill px-4">
                    Se non è intelligente, cosa produce? →
                  </Link>
                </nav>

              </div>
            </div>
          </div>
        </section>
      </main>
      <PeppeFooter />
    </div>
  );
}
