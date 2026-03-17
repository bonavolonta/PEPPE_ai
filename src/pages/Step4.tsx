import React from 'react';
import { Link } from 'react-router-dom';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step4() {
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
                      <li className="breadcrumb-item active" aria-current="page">Come funzionano davvero?</li>
                    </ol>
                  </nav>
                  
                  <div className="d-flex justify-content-between mb-2 small text-muted fw-bold">
                    <span>Percorso</span>
                    <span>Tappa 4 di 10</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                {/* Hero */}
                <header className="mb-5 border-bottom pb-4">
                  <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">Movimento 2 — Tappa 3</span>
                  <h1 className="display-4 fw-bold text-dark mb-3">Come funzionano davvero?</h1>
                  <p className="lead text-secondary">I modelli linguistici non comprendono il testo. Predicono la parola più probabile in una sequenza. Capire questo meccanismo è essenziale per usarli consapevolmente.</p>
                </header>

                {/* Callout: Senso Comune */}
                <div className="alert alert-warning shadow-sm border-0 border-start border-warning border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-quote-fill text-warning" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293M12.5 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 11.04 6c-.958 0-1.734.746-1.734 1.667 0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293"/>
                    </svg>
                    Il senso comune dice…
                  </h2>
                  <p className="mb-0 text-dark">"ChatGPT capisce le domande e vi risponde in modo intelligente, come farebbe un esperto umano."</p>
                </div>

                {/* Section 1: Il meccanismo fondamentale */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Il meccanismo fondamentale: predizione del prossimo token</h2>
                  <p className="fs-5 text-secondary">
                    Un <strong>Large Language Model (LLM)</strong> è, nella sua essenza, una macchina che predice il <strong>token</strong> successivo in una sequenza. Dato un testo in input, calcola una distribuzione di probabilità su tutti i possibili token successivi e ne seleziona uno.
                  </p>
                  <p className="fs-5 text-secondary">
                    Non c'è comprensione nel senso umano del termine. Non c'è intenzione, non c'è un "significato interno" che il modello sta cercando di esprimere. C'è un'operazione matematica molto sofisticata che, su scala sufficiente, produce output sorprendentemente coerenti.
                  </p>
                </section>

                {/* INFOGRAFICA: Flusso di predizione token */}
                <section className="mb-5">
                  <h2 className="visually-hidden">Flusso di predizione del token</h2>
                  <div className="bg-light rounded-4 p-4 shadow-sm border d-flex flex-column align-items-center overflow-x-auto">
                    <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: '800px', minWidth: '600px' }} focusable="false">
                      <title>Flusso di predizione del token</title>
                      <desc>Diagramma in quattro fasi: il testo di input viene tokenizzato, poi viene calcolata una distribuzione di probabilità sui possibili token successivi, infine viene selezionato il token più probabile ("Roma").</desc>

                      {/* ── STEP 1: Testo input ── */}
                      <g>
                        <rect x="10" y="90" width="130" height="80" rx="10" fill="#5B4A8A" fillOpacity="0.12" stroke="#5B4A8A" strokeWidth="2"/>
                        <text x="75" y="120" textAnchor="middle" fontFamily="inherit" fontSize="11" fontWeight="700" fill="#5B4A8A">TESTO INPUT</text>
                        <text x="75" y="142" textAnchor="middle" fontFamily="inherit" fontSize="11" fill="#1A1A2E">"La capitale</text>
                        <text x="75" y="157" textAnchor="middle" fontFamily="inherit" fontSize="11" fill="#1A1A2E">d'Italia è"</text>
                      </g>

                      {/* Freccia 1→2 */}
                      <g aria-hidden="true">
                        <line x1="142" y1="130" x2="168" y2="130" stroke="#5B4A8A" strokeWidth="2"/>
                        <polygon points="168,125 178,130 168,135" fill="#5B4A8A"/>
                      </g>

                      {/* ── STEP 2: Tokenizzazione ── */}
                      <g>
                        <rect x="180" y="70" width="140" height="120" rx="10" fill="#5B4A8A" fillOpacity="0.12" stroke="#5B4A8A" strokeWidth="2"/>
                        <text x="250" y="98" textAnchor="middle" fontFamily="inherit" fontSize="11" fontWeight="700" fill="#5B4A8A">TOKENIZZAZIONE</text>
                        
                        {/* Token pills */}
                        <rect x="194" y="108" width="26" height="18" rx="4" fill="#5B4A8A" fillOpacity="0.25"/>
                        <text x="207" y="121" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#1A1A2E">La</text>

                        <rect x="224" y="108" width="46" height="18" rx="4" fill="#5B4A8A" fillOpacity="0.25"/>
                        <text x="247" y="121" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#1A1A2E">capitale</text>

                        <rect x="194" y="132" width="26" height="18" rx="4" fill="#5B4A8A" fillOpacity="0.25"/>
                        <text x="207" y="145" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#1A1A2E">d'</text>

                        <rect x="224" y="132" width="36" height="18" rx="4" fill="#5B4A8A" fillOpacity="0.25"/>
                        <text x="242" y="145" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#1A1A2E">Italia</text>

                        <rect x="264" y="132" width="18" height="18" rx="4" fill="#5B4A8A" fillOpacity="0.25"/>
                        <text x="273" y="145" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#1A1A2E">è</text>

                        <text x="250" y="177" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#5B4A8A" fontStyle="italic">5 token identificati</text>
                      </g>

                      {/* Freccia 2→3 */}
                      <g aria-hidden="true">
                        <line x1="322" y1="130" x2="348" y2="130" stroke="#5B4A8A" strokeWidth="2"/>
                        <polygon points="348,125 358,130 348,135" fill="#5B4A8A"/>
                      </g>

                      {/* ── STEP 3: Calcolo probabilità ── */}
                      <g>
                        <rect x="360" y="50" width="170" height="175" rx="10" fill="#5B4A8A" fillOpacity="0.12" stroke="#5B4A8A" strokeWidth="2"/>
                        <text x="445" y="78" textAnchor="middle" fontFamily="inherit" fontSize="11" fontWeight="700" fill="#5B4A8A">PROBABILITÀ</text>
                        <text x="445" y="93" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#5B4A8A">token successivo</text>

                        {/* Barra Roma 85% */}
                        <text x="375" y="115" fontFamily="inherit" fontSize="11" fill="#1A1A2E">Roma</text>
                        <rect x="415" y="104" width="85" height="14" rx="3" fill="#E07A3A"/>
                        <text x="504" y="115" fontFamily="inherit" fontSize="10" fill="#1A1A2E" fontWeight="700">85%</text>

                        {/* Barra Milano 8% */}
                        <text x="375" y="136" fontFamily="inherit" fontSize="11" fill="#1A1A2E">Milano</text>
                        <rect x="415" y="125" width="8" height="14" rx="3" fill="#5B4A8A" fillOpacity="0.5"/>
                        <text x="426" y="136" fontFamily="inherit" fontSize="10" fill="#5B4A8A"> 8%</text>

                        {/* Barra Napoli 3% */}
                        <text x="375" y="157" fontFamily="inherit" fontSize="11" fill="#1A1A2E">Napoli</text>
                        <rect x="415" y="146" width="3" height="14" rx="2" fill="#5B4A8A" fillOpacity="0.4"/>
                        <text x="421" y="157" fontFamily="inherit" fontSize="10" fill="#5B4A8A">  3%</text>

                        {/* Barra Venezia 2% */}
                        <text x="375" y="178" fontFamily="inherit" fontSize="11" fill="#1A1A2E">Venezia</text>
                        <rect x="415" y="167" width="2" height="14" rx="2" fill="#5B4A8A" fillOpacity="0.3"/>
                        <text x="420" y="178" fontFamily="inherit" fontSize="10" fill="#5B4A8A">  2%</text>

                        {/* Altro */}
                        <text x="375" y="199" fontFamily="inherit" fontSize="10" fill="#888">altro…</text>
                        <text x="415" y="199" fontFamily="inherit" fontSize="10" fill="#888"> 2%</text>
                      </g>

                      {/* Freccia 3→4 */}
                      <g aria-hidden="true">
                        <line x1="532" y1="130" x2="558" y2="130" stroke="#E07A3A" strokeWidth="2.5"/>
                        <polygon points="558,124 570,130 558,136" fill="#E07A3A"/>
                      </g>

                      {/* ── STEP 4: Token selezionato ── */}
                      <g>
                        <rect x="572" y="90" width="118" height="80" rx="10" fill="#E07A3A" fillOpacity="0.15" stroke="#E07A3A" strokeWidth="2.5"/>
                        <text x="631" y="118" textAnchor="middle" fontFamily="inherit" fontSize="11" fontWeight="700" fill="#E07A3A">SELEZIONATO</text>
                        <text x="631" y="140" textAnchor="middle" fontFamily="inherit" fontSize="18" fontWeight="700" fill="#1A1A2E">Roma</text>
                        <text x="631" y="160" textAnchor="middle" fontFamily="inherit" fontSize="10" fill="#E07A3A">p = 0.85</text>
                      </g>

                      {/* Etichetta processo */}
                      <text x="350" y="268" textAnchor="middle" fontFamily="inherit" fontSize="11" fill="#888" fontStyle="italic">
                        Questo processo si ripete per ogni token generato
                      </text>
                    </svg>
                    <p className="text-center text-muted small mt-3 fst-italic mb-0">
                      Il ciclo di predizione del prossimo token: dal testo di input alla tokenizzazione, al calcolo della distribuzione di probabilità, alla selezione dell'output.
                    </p>
                  </div>
                </section>

                {/* Section 2: Architettura Transformer */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">L'architettura che ha cambiato tutto: il Transformer</h2>
                  <p className="fs-5 text-secondary">
                    Dal 2017, quasi tutti i modelli di linguaggio avanzati si basano sull'architettura <strong>Transformer</strong>, descritta nel paper <em>"Attention Is All You Need"</em> (Vaswani et al., Google Brain, 2017).
                  </p>
                  <p className="fs-5 text-secondary">
                    Il meccanismo chiave è l'<strong>attenzione</strong> (<em>attention</em>): il modello impara a "prestare attenzione" a parti diverse della sequenza di input quando genera ciascun token di output. Questo permette di catturare dipendenze a lungo raggio nel testo — per esempio, capire che il pronome "lui" in fondo a un paragrafo si riferisce a un soggetto citato all'inizio.
                  </p>
                  <p className="fs-5 text-secondary">
                    Un LLM moderno come GPT-4 ha centinaia di miliardi di <strong>parametri</strong> — ovvero pesi numerici — aggiustati durante un processo di addestramento su enormi quantità di testo. Ogni peso rappresenta una correlazione statistica appresa dai dati, non una regola esplicita scritta da un programmatore.
                  </p>
                </section>

                {/* Section 3: Il processo di addestramento */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Come viene addestrato un LLM</h2>
                  <p className="fs-5 text-secondary mb-4">Il processo ha tre fasi principali:</p>

                  <div className="row g-4 mb-5">
                    <div className="col-12">
                      <div className="d-flex align-items-start gap-3 p-4 bg-light rounded-4 border">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold' }}>1</div>
                        <div>
                          <h3 className="h5 fw-bold text-primary mb-2">Pre-training</h3>
                          <p className="text-secondary mb-0">
                            Il modello viene esposto a enormi quantità di testo (gran parte di Internet, libri, articoli scientifici, codice sorgente). Impara la struttura statistica del linguaggio: quali parole si seguono, quali concetti sono correlati, quali strutture grammaticali ricorrono. Costo stimato: decine di milioni di dollari in energia e calcolo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start gap-3 p-4 bg-light rounded-4 border">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold' }}>2</div>
                        <div>
                          <h3 className="h5 fw-bold text-primary mb-2">Fine-tuning supervisionato (Supervised Fine-Tuning)</h3>
                          <p className="text-secondary mb-0">
                            Il modello viene ulteriormente addestrato su esempi curati da umani per rispondere in modo utile, pertinente e sicuro alle domande degli utenti. Riduce le risposte problematiche e orienta il modello verso comportamenti desiderati.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-start gap-3 p-4 bg-light rounded-4 border">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold' }}>3</div>
                        <div>
                          <h3 className="h5 fw-bold text-primary mb-2">RLHF — Apprendimento per rinforzo da feedback umano</h3>
                          <p className="text-secondary mb-0">
                            Valutatori umani comparano coppie di risposte e indicano quale è preferibile. Questo segnale viene usato per allenare un modello di ricompensa che guida ulteriori aggiustamenti. È la fase che rende il modello più "utile" e meno tendente a risposte dannose o incoerenti.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Callout evidenza empirica */}
                  <div className="alert alert-info shadow-sm border-0 border-start border-info border-4 mb-5" role="alert">
                    <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bar-chart-fill text-info" viewBox="0 0 16 16">
                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                      </svg>
                      Dato empirico
                    </h2>
                    <p className="mb-0 text-dark">
                      GPT-3 (2020) è stato addestrato su 570 GB di testo — equivalente a circa 300 miliardi di parole. L'addestramento ha richiesto circa 3,14 × 10²³ FLOP (operazioni in virgola mobile). Per confronto, l'intero archivio di Wikipedia in inglese rappresenta meno dell'1% dei dati di addestramento usati. <span className="text-muted fst-italic">(Brown et al., 2020)</span>
                    </p>
                  </div>
                </section>

                {/* Section 4: Cervello vs LLM */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Il cervello umano e i modelli linguistici: differenze fondamentali</h2>
                  <p className="fs-5 text-secondary mb-4">
                    È comune antropomorfizzare i modelli linguistici. Le metafore che usiamo — "capisce", "pensa", "sa" — traggono in inganno. Le differenze con il cervello biologico sono profonde e riguardano non solo la struttura, ma la natura stessa del funzionamento.
                  </p>

                  <div className="row g-4 mb-5">
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(58, 107, 122, 0.05)', border: '2px solid #3A6B7A' }}>
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#3A6B7A' }}>
                            <span style={{ fontSize: '1.5rem' }}>🧠</span> Cervello umano
                          </h3>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#3A6B7A' }}>▸</span>
                              <span>Elabora ~86 miliardi di neuroni con connessioni chimiche ed elettriche</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#3A6B7A' }}>▸</span>
                              <span>Apprende da poca esperienza diretta (apprendimento <em>few-shot</em> biologico)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#3A6B7A' }}>▸</span>
                              <span>Ha intenzionalità: stati mentali con contenuto diretto verso il mondo</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#3A6B7A' }}>▸</span>
                              <span>Dorme, consolida memorie, prova emozioni</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#3A6B7A' }}>▸</span>
                              <span>Incorporato nel corpo (<em>embodiment</em>): esperienza sensoriale diretta</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                              <span style={{ color: '#3A6B7A' }}>▸</span>
                              <span>Consuma circa 20 watt</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(91, 74, 138, 0.05)', border: '2px solid #5B4A8A' }}>
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#5B4A8A' }}>
                            <span style={{ fontSize: '1.5rem' }}>🤖</span> LLM
                          </h3>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#5B4A8A' }}>▸</span>
                              <span>Elabora statistiche su token (pattern puramente linguistici)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#5B4A8A' }}>▸</span>
                              <span>Richiede miliardi di esempi testuali per apprendere</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#5B4A8A' }}>▸</span>
                              <span>Nessuna intenzionalità: nessuno stato interno orientato verso il mondo</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#5B4A8A' }}>▸</span>
                              <span>Nessuna memoria persistente tra sessioni (salvo architetture apposite)</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                              <span style={{ color: '#5B4A8A' }}>▸</span>
                              <span>Disincorporato: nessun corpo, nessuna esperienza sensoriale diretta</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                              <span style={{ color: '#5B4A8A' }}>▸</span>
                              <span>Consuma centinaia di kilowatt durante l'addestramento</span>
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
                    Un LLM non "sa" nulla nel senso in cui lo sa un essere umano. È un sistema di predizione statistica del testo molto sofisticato. Questa non è una critica: è la descrizione precisa di cosa fa. Capirlo evita aspettative mal calibrate e aiuta a usarlo correttamente — scegliendo quando è utile e quando è inappropriato delegargli un compito.
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
                      Se i modelli linguistici sono macchine di predizione statistica, possono davvero essere "intelligenti"? Cosa intendiamo per intelligenza? E perché questa distinzione conta nel contesto educativo?
                    </p>
                    <Link to="/step5" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                      Tappa 4: Ma allora è intelligente? →
                    </Link>
                  </div>
                </div>

                {/* Page navigation */}
                <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                  <Link to="/step3" className="btn btn-outline-secondary rounded-pill px-4">
                    ← Non sono tutti la stessa cosa
                  </Link>
                  <Link to="/step5" className="btn btn-outline-primary rounded-pill px-4">
                    Ma allora è intelligente? →
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
