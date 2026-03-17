import React from 'react';
import { Link } from 'react-router-dom';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step3() {
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
                      <li className="breadcrumb-item active" aria-current="page">Non sono tutti la stessa cosa</li>
                    </ol>
                  </nav>
                  
                  <div className="d-flex justify-content-between mb-2 small text-muted fw-bold">
                    <span>Percorso</span>
                    <span>Tappa 3 di 10</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                {/* Hero */}
                <header className="mb-5 border-bottom pb-4">
                  <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">Movimento 1 — Tappa 2</span>
                  <h1 className="display-4 fw-bold text-dark mb-3">Non sono tutti la stessa cosa</h1>
                  <p className="lead text-secondary">IA, Machine Learning, Deep Learning, IA Generativa: termini spesso usati come sinonimi. Non lo sono. Comprenderli è fondamentale per non farsi confondere.</p>
                </header>

                {/* Callout: Senso Comune */}
                <div className="alert alert-warning shadow-sm border-0 border-start border-warning border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-quote-fill text-warning" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293M12.5 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 11.04 6c-.958 0-1.734.746-1.734 1.667 0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293"/>
                    </svg>
                    Il senso comune dice…
                  </h2>
                  <p className="mb-0 text-dark">"IA" è un termine omnicomprensivo. ChatGPT, un algoritmo di raccomandazione Netflix e un robot industriale fanno tutti "IA" — è la stessa cosa.</p>
                </div>

                {/* Section 1: La gerarchia */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Una gerarchia, non dei sinonimi</h2>
                  <p className="fs-5 text-secondary">
                    IA, ML, DL e IA Generativa sono concetti in relazione <strong>gerarchica</strong>: ogni livello
                    è un sottoinsieme del precedente. Confonderli porta a incomprensioni profonde sulla natura
                    e i limiti di ciascuna tecnologia — e soprattutto sulle responsabilità di chi li usa o chi li regolamenta.
                  </p>
                  <p className="fs-5 text-secondary">
                    Un algoritmo di raccomandazione (Netflix, TikTok) usa Machine Learning ma non è IA Generativa.
                    Un sistema di riconoscimento facciale usa Deep Learning ma non genera testo.
                    ChatGPT è IA Generativa, che è Deep Learning, che è Machine Learning, che è IA.
                    Non viceversa.
                  </p>
                </section>

                {/* Tassonomia Unificata: Grafico + Spiegazioni */}
                <section className="mb-5">
                  <h2 className="visually-hidden">I quattro livelli dell'IA</h2>
                  <div className="bg-light rounded-4 p-4 shadow-sm border">
                    <div className="row align-items-center g-4">
                      
                      {/* Left Column: Explanatory Cards */}
                      <div className="col-12 col-lg-6 d-flex flex-column gap-3">
                        {/* IA */}
                        <div className="card border-0 shadow-sm" style={{ borderLeft: '6px solid #3A6B7A' }}>
                          <div className="card-body p-3">
                            <h3 className="h5 fw-bold mb-2" style={{ color: '#3A6B7A' }}>Intelligenza Artificiale</h3>
                            <p className="text-secondary small mb-2">
                              Campo dell'informatica che studia sistemi in grado di svolgere compiti che normalmente
                              richiedono intelligenza umana. Il termine fu coniato da <strong>John McCarthy</strong> nel 1956.
                            </p>
                            <p className="mb-0 text-dark small">
                              <strong>Include:</strong> sistemi esperti, algoritmi di ricerca, pianificazione, ML e molto altro.
                            </p>
                          </div>
                        </div>

                        {/* ML */}
                        <div className="card border-0 shadow-sm" style={{ borderLeft: '6px solid #5B4A8A' }}>
                          <div className="card-body p-3">
                            <h3 className="h5 fw-bold mb-2" style={{ color: '#5B4A8A' }}>Machine Learning</h3>
                            <p className="text-secondary small mb-2">
                              Sottoinsieme dell'IA che usa algoritmi per apprendere dai dati senza essere
                              esplicitamente programmato. Il modello migliora con l'esperienza.
                            </p>
                            <p className="mb-0 text-dark small">
                              <strong>Esempi:</strong> raccomandazioni Netflix, filtri antispam, rilevamento frodi.
                            </p>
                          </div>
                        </div>

                        {/* DL */}
                        <div className="card border-0 shadow-sm" style={{ borderLeft: '6px solid #C87D2A' }}>
                          <div className="card-body p-3">
                            <h3 className="h5 fw-bold mb-2" style={{ color: '#C87D2A' }}>Deep Learning</h3>
                            <p className="text-secondary small mb-2">
                              Sottoinsieme del ML che usa <em>reti neurali artificiali</em> con molti strati ("profondi"). 
                              Ha rivoluzionato il riconoscimento di immagini, audio e testo.
                            </p>
                            <p className="mb-0 text-dark small">
                              <strong>Esempi:</strong> riconoscimento vocale (Siri, Alexa), traduzione automatica.
                            </p>
                          </div>
                        </div>

                        {/* GenAI */}
                        <div className="card border-0 shadow-sm" style={{ borderLeft: '6px solid #E07A3A' }}>
                          <div className="card-body p-3">
                            <h3 className="h5 fw-bold mb-2" style={{ color: '#E07A3A' }}>IA Generativa</h3>
                            <p className="text-secondary small mb-2">
                              Sottoinsieme del DL specializzato nel <em>generare</em> nuovi contenuti: testo,
                              immagini, audio, video. I <strong>LLM</strong> ne sono l'esempio più noto.
                            </p>
                            <p className="mb-0 text-dark small">
                              <strong>Esempi:</strong> ChatGPT, Gemini, DALL-E 3, Stable Diffusion, Suno.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Clean Concentric SVG */}
                      <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <svg
                          viewBox="0 0 400 400"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Diagramma a cerchi concentrici della tassonomia dell'IA"
                          className="w-100 h-auto"
                          style={{ maxWidth: '400px' }}
                        >
                          {/* AI */}
                          <circle cx="200" cy="200" r="190" fill="#3A6B7A" fillOpacity="0.08" stroke="#3A6B7A" strokeWidth="2"/>
                          <text x="200" y="45" textAnchor="middle" fill="#3A6B7A" fontWeight="bold" fontSize="18">Intelligenza Artificiale</text>

                          {/* ML */}
                          <circle cx="200" cy="245" r="145" fill="#5B4A8A" fillOpacity="0.12" stroke="#5B4A8A" strokeWidth="2"/>
                          <text x="200" y="135" textAnchor="middle" fill="#5B4A8A" fontWeight="bold" fontSize="16">Machine Learning</text>

                          {/* DL */}
                          <circle cx="200" cy="290" r="100" fill="#C87D2A" fillOpacity="0.15" stroke="#C87D2A" strokeWidth="2"/>
                          <text x="200" y="225" textAnchor="middle" fill="#C87D2A" fontWeight="bold" fontSize="15">Deep Learning</text>

                          {/* GenAI */}
                          <circle cx="200" cy="335" r="55" fill="#E07A3A" fillOpacity="0.25" stroke="#E07A3A" strokeWidth="2"/>
                          <text x="200" y="340" textAnchor="middle" fill="#b35a22" fontWeight="bold" fontSize="13">IA Generativa</text>
                        </svg>
                      </div>

                    </div>
                  </div>
                </section>

                {/* Section 3: Un po' di storia */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Un campo con 70 anni di storia</h2>
                  <p className="fs-5 text-secondary mb-5">
                    L'IA non è nata ieri. I punti cardine del suo sviluppo mostrano continuità e discontinuità,
                    stagioni di entusiasmo e "inverni" di stagnazione. Conoscere questa storia aiuta a
                    contestualizzare il clamore attuale.
                  </p>

                  <div className="position-relative ps-4 ms-2 border-start border-2 border-primary">
                    {[
                      { year: '1943', title: 'McCulloch & Pitts', desc: 'Primo modello matematico di neurone artificiale — le basi concettuali delle reti neurali.' },
                      { year: '1950', title: 'Alan Turing — Computing Machinery and Intelligence', desc: 'Propone il Test di Turing: se una macchina può ingannare un umano in una conversazione testuale, si comporta in modo intelligente.' },
                      { year: '1956', title: "Conferenza di Dartmouth — nasce l'IA", desc: 'John McCarthy conia il termine "Artificial Intelligence". È l\'atto di nascita ufficiale del campo.', highlight: true },
                      { year: '1969', title: 'Minsky & Papert — Perceptrons', desc: 'Dimostrano i limiti matematici dei singoli strati neurali. Inizia il primo "inverno dell\'IA".' },
                      { year: '1986', title: 'Rumelhart, Hinton, Williams — backpropagation', desc: 'L\'algoritmo di retropropagazione dell\'errore rende addestrabile il Deep Learning multi-strato. Rinascita teorica.' },
                      { year: '1997', title: 'Deep Blue batte Kasparov', desc: 'Il computer di IBM sconfigge il campione del mondo di scacchi. Ma usava algoritmi di ricerca, non ML moderno.' },
                      { year: '2006', title: 'Hinton — deep belief networks', desc: 'Rinascita del Deep Learning. Hinton dimostra che reti molto profonde possono essere addestrate efficacemente.' },
                      { year: '2012', title: 'AlexNet — rivoluzione della visione artificiale', desc: 'Una rete neurale profonda domina ImageNet con un margine enorme. Inizia l\'era moderna del Deep Learning.', highlight: true },
                      { year: '2017', title: '"Attention Is All You Need" — architettura Transformer', desc: 'Vaswani et al. (Google Brain) propongono il Transformer. Tutta l\'IA generativa moderna nasce da questo articolo.', highlight: true },
                      { year: '2020', title: 'GPT-3 — 175 miliardi di parametri', desc: 'OpenAI rilascia GPT-3. Emergono capacità sorprendenti non progettate esplicitamente. Cambio di paradigma.' },
                      { year: '2022', title: 'ChatGPT — 100 milioni di utenti in 2 mesi', desc: 'Novembre 2022: il record assoluto di adozione nella storia di internet. L\'IA generativa entra nella vita quotidiana.', highlight: true }
                    ].map((item, index) => (
                      <div key={index} className="position-relative mb-4">
                        <div 
                          className={`position-absolute rounded-circle ${item.highlight ? 'bg-primary border-white' : 'bg-white border-primary'}`}
                          style={{ 
                            width: item.highlight ? '16px' : '12px', 
                            height: item.highlight ? '16px' : '12px', 
                            left: item.highlight ? '-33px' : '-31px', 
                            top: '6px',
                            border: '2px solid'
                          }}
                        ></div>
                        <div className="d-flex flex-column flex-md-row gap-2 gap-md-4">
                          <div className="fw-bold text-primary font-monospace" style={{ minWidth: '60px' }}>
                            {item.year}
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-1">{item.title}</h4>
                            <p className="text-secondary small mb-0">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Callout fatto */}
                <div className="alert alert-info shadow-sm border-0 border-start border-info border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bar-chart-fill text-info" viewBox="0 0 16 16">
                      <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                    </svg>
                    Fatto
                  </h2>
                  <p className="mb-0 text-dark">
                    L'architettura alla base di ChatGPT, Gemini e Claude si chiama <strong>Transformer</strong>.
                    È stata proposta nel 2017 da ricercatori di Google in un articolo intitolato
                    <em>"Attention Is All You Need"</em>. Tutto ciò che è emerso nell'IA degli ultimi
                    anni — da GPT-4 a Stable Diffusion a Suno — si basa su questa singola innovazione architetturale.
                  </p>
                </div>

                {/* Section 4: Open/Closed nella tassonomia */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Dove si inserisce la distinzione Open/Closed?</h2>
                  <p className="fs-5 text-secondary">
                    Nella tassonomia, Open/Closed <strong>non è un livello</strong> ma una dimensione
                    trasversale: può applicarsi a qualunque tipo di sistema IA. La distinzione riguarda
                    l'accessibilità ai pesi del modello, al codice sorgente e ai dati di addestramento.
                  </p>
                  <p className="fs-5 text-secondary">
                    <strong>Hugging Face</strong> e <strong>GitHub</strong> sono le piattaforme dove questa
                    distinzione è più visibile: raccolgono decine di migliaia di modelli open weight che
                    chiunque può scaricare, modificare, sperimentare — a volte anche su hardware consumer.
                    La barriera tecnica si è abbassata enormemente dal 2022 in poi.
                  </p>
                  <p className="fs-5 text-secondary">
                    Attenzione però: accessibilità tecnica non equivale a trasparenza etica. Un modello open
                    weight può essere addestrato su dati problematici senza che questo sia dichiarato.
                  </p>
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
                    La tassonomia conta perché ogni livello ha implicazioni diverse per la comprensione critica.
                    Quando si parla di "rischi dell'IA", di quale livello stiamo parlando? Gli algoritmi di
                    raccomandazione di TikTok, un LLM generativo e un sistema di riconoscimento facciale
                    sono fenomeni radicalmente diversi: implicano rischi diversi, richiedono risposte
                    pedagogiche e normative diverse, e non possono essere discussi con le stesse categorie.
                  </p>
                </div>

                {/* Callout ponte */}
                <div className="card border-primary mb-5 shadow-sm text-center rounded-4">
                  <div className="card-body py-5">
                    <h2 className="h4 card-title text-primary d-flex align-items-center justify-content-center gap-2 fw-bold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                      </svg>
                      Domanda ponte
                    </h2>
                    <p className="card-text fs-5 text-secondary mb-4">
                      Ma come funzionano concretamente questi LLM che generano testo? Cosa succede davvero
                      quando ChatGPT risponde a una domanda?
                    </p>
                    <Link to="/step4" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                      Tappa 3: Come funzionano davvero? →
                    </Link>
                  </div>
                </div>

                {/* Page navigation */}
                <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                  <Link to="/step2" className="btn btn-outline-secondary rounded-pill px-4">
                    ← Chi controlla i modelli?
                  </Link>
                  <Link to="/step4" className="btn btn-outline-primary rounded-pill px-4">
                    Come funzionano davvero? →
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
