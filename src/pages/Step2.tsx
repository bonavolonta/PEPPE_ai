import React from 'react';
import { Link } from 'react-router-dom';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Step2() {
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
                      <li className="breadcrumb-item active" aria-current="page">Chi controlla i modelli?</li>
                    </ol>
                  </nav>
                  
                  <div className="d-flex justify-content-between mb-2 small text-muted fw-bold">
                    <span>Percorso</span>
                    <span>Tappa 2 di 10</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                {/* Hero */}
                <header className="mb-5 border-bottom pb-4">
                  <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">Movimento 1 — Tappa 1</span>
                  <h1 className="display-4 fw-bold text-dark mb-3">Chi controlla i modelli?</h1>
                  <p className="lead text-secondary">La scelta di uno strumento IA è anche una scelta politica. L'IA è un fatto geopolitico, prima ancora che tecnologico.</p>
                </header>

                {/* Callout: Senso Comune */}
                <div className="alert alert-warning shadow-sm border-0 border-start border-warning border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-quote-fill text-warning" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293M12.5 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 11.04 6c-.958 0-1.734.746-1.734 1.667 0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293"/>
                    </svg>
                    Il senso comune dice…
                  </h2>
                  <p className="mb-0 text-dark">L'IA è una tecnologia neutrale e universale. Gli strumenti sono tutti equivalenti: conta solo la qualità del risultato.</p>
                </div>

                {/* Section 1: La geografia dell'IA */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">La geografia dell'IA</h2>
                  <p className="fs-5 text-secondary">
                    I modelli di IA che usiamo quotidianamente non sono prodotti astratti: vengono da luoghi precisi,
                    da aziende con interessi precisi, finanziate da capitali con strategie precise. La mappa
                    dell'<em>IA frontier</em> — i modelli più avanzati e capaci — è sorprendentemente concentrata
                    in pochi poli geografici: gli Stati Uniti, la Cina, e in misura molto minore l'Europa.
                  </p>
                  <p className="fs-5 text-secondary">
                    Questa concentrazione non è neutrale: riflette disparità di risorse computazionali,
                    di accesso ai dati, di investimenti pubblici e privati. Chi controlla i modelli più
                    potenti esercita un'influenza enorme sulle rappresentazioni del mondo, del linguaggio
                    e della conoscenza che miliardi di persone riceveranno come output.
                  </p>
                </section>

                {/* Mappa geopolitica (Bento Box) */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Chi controlla i modelli frontier? (2024–2025)</h2>
                  
                  <div className="row g-4 mb-4">
                    {/* USA */}
                    <div className="col-12 col-md-4">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#f5f3fa' }}>
                        <div className="card-header border-0 py-3 text-center" style={{ backgroundColor: '#5B4A8A' }}>
                          <h4 className="fw-bold mb-0 text-white">🇺🇸 USA</h4>
                          <span className="small text-white opacity-75">Polo dominante</span>
                        </div>
                        <div className="card-body p-4 d-flex flex-column gap-3">
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(91, 74, 138, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#5B4A8A', fontSize: '1rem' }}>OpenAI</h5>
                            <p className="mb-0 small text-dark">GPT-4o · o3 · Sora</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(91, 74, 138, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#5B4A8A', fontSize: '1rem' }}>Anthropic</h5>
                            <p className="mb-0 small text-dark">Claude 3.5 · Claude 3.7</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(91, 74, 138, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#5B4A8A', fontSize: '1rem' }}>Google DeepMind</h5>
                            <p className="mb-0 small text-dark">Gemini Ultra · Gemma</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(91, 74, 138, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#5B4A8A', fontSize: '1rem' }}>Meta</h5>
                            <p className="mb-0 small text-dark">Llama 3 (open weight)</p>
                          </div>
                          <div className="mt-auto pt-3 text-center">
                            <p className="small text-muted fst-italic mb-1">+ Microsoft/Copilot (partner OpenAI)</p>
                            <p className="small text-muted fst-italic mb-0">+ xAI/Grok (Elon Musk)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cina */}
                    <div className="col-12 col-md-4">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#fff8f0' }}>
                        <div className="card-header border-0 py-3 text-center" style={{ backgroundColor: '#C87D2A' }}>
                          <h4 className="fw-bold mb-0 text-white">🇨🇳 Cina</h4>
                          <span className="small text-white opacity-75">In rapida ascesa</span>
                        </div>
                        <div className="card-body p-4 d-flex flex-column gap-3">
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(200, 125, 42, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#C87D2A', fontSize: '1rem' }}>DeepSeek AI</h5>
                            <p className="mb-0 small text-dark">DeepSeek-V3 · R1</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(200, 125, 42, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#C87D2A', fontSize: '1rem' }}>Alibaba (DAMO)</h5>
                            <p className="mb-0 small text-dark">Qwen 2.5</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(200, 125, 42, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#C87D2A', fontSize: '1rem' }}>Moonshot AI</h5>
                            <p className="mb-0 small text-dark">Kimi · Kimi k1.5</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(200, 125, 42, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#C87D2A', fontSize: '1rem' }}>Baidu</h5>
                            <p className="mb-0 small text-dark">ERNIE Bot 4.0</p>
                          </div>
                          <div className="mt-auto pt-3 text-center">
                            <p className="small text-muted fst-italic mb-1">+ ByteDance/Doubao · Zhipu AI</p>
                            <p className="small text-muted fst-italic mb-0">+ Huawei/Pangu · 01.AI</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Europa */}
                    <div className="col-12 col-md-4">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#f2f7f0' }}>
                        <div className="card-header border-0 py-3 text-center" style={{ backgroundColor: '#4A6B3A' }}>
                          <h4 className="fw-bold mb-0 text-white">🇪🇺 Europa</h4>
                          <span className="small text-white opacity-75">In ritardo strutturale</span>
                        </div>
                        <div className="card-body p-4 d-flex flex-column gap-3">
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(74, 107, 58, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#4A6B3A', fontSize: '1rem' }}>Mistral AI 🇫🇷</h5>
                            <p className="mb-0 small text-dark">Mistral Large · Mixtral</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(74, 107, 58, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#4A6B3A', fontSize: '1rem' }}>Aleph Alpha 🇩🇪</h5>
                            <p className="mb-0 small text-dark">Luminous · Pharia</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(74, 107, 58, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#4A6B3A', fontSize: '1rem' }}>LAION / BigScience 🌍</h5>
                            <p className="mb-0 small text-dark">BLOOM (multilingual)</p>
                          </div>
                          <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(74, 107, 58, 0.1)' }}>
                            <h5 className="fw-bold mb-1" style={{ color: '#4A6B3A', fontSize: '1rem' }}>Labs universitari</h5>
                            <p className="mb-0 small text-dark">Ricerca accademica sparsa</p>
                          </div>
                          <div className="mt-auto pt-3 text-center">
                            <p className="small text-muted fst-italic mb-1">Iniziativa EU: AI Act (2024)</p>
                            <p className="small text-muted fst-italic mb-0">Manca un campione europeo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-end text-muted small fst-italic">
                    Dati 2024–2025. Il panorama evolve rapidamente.
                  </div>
                </section>

                {/* Section 2: Il caso DeepSeek */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Il caso DeepSeek: quando l'Oriente sfida l'Occidente</h2>
                  <p className="fs-5 text-secondary">
                    Nel gennaio 2025, la release di <strong>DeepSeek-R1</strong> — sviluppato da un'azienda cinese
                    fondata nel 2023 — ha provocato un crollo delle azioni Nvidia del 17% in un solo giorno e ha
                    aperto un dibattito globale. Un modello cinese, addestrato con meno risorse e costi
                    notevolmente inferiori rispetto ai modelli americani equivalenti, raggiungeva le performance
                    di GPT-4 su benchmark standard.
                    <span className="text-muted d-block mt-1 fst-italic">(Bloomberg, gennaio 2025)</span>
                  </p>
                  <p className="fs-5 text-secondary mb-4">
                    L'episodio ha rivelato tre cose: (1) il vantaggio competitivo degli USA non è incolmabile;
                    (2) l'efficienza computazionale può sostituire la potenza bruta; (3) le scelte geopolitiche
                    su export di chip e sanzioni tecnologiche non fermano, ma riorientano lo sviluppo.
                  </p>

                  <div className="p-4 p-md-5 bg-light rounded-4 border-start border-primary border-4 shadow-sm my-5">
                    <p className="fs-4 fst-italic text-dark mb-0" style={{ lineHeight: '1.6' }}>
                      "La corsa all'IA non è solo tecnologica — è una competizione per definire quali valori,
                      quali linguaggi e quali visioni del mondo verranno incorporati nei sistemi che miliardi
                      di persone useranno ogni giorno."
                    </p>
                  </div>
                </section>

                {/* Section 3: Open Source, Open Weight, Closed */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Tre tipi di accesso ai modelli</h2>
                  <p className="fs-5 text-secondary mb-4">
                    Non tutti i modelli sono uguali anche sul piano della trasparenza e dell'accessibilità.
                    La distinzione tra <em>open source</em>, <em>open weight</em> e <em>closed</em>
                    è cruciale per capire quanto si sa — e quanto non si sa — su come funzionano i modelli che usiamo.
                  </p>

                  <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                    <div className="col">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ borderTop: '4px solid #4A6B3A !important' }}>
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-3">Open Source</h3>
                          <p className="text-secondary">
                            Codice sorgente <em>e</em> pesi del modello sono pubblici. Chiunque può eseguirlo,
                            modificarlo e ridistribuirlo liberamente, incluso per uso commerciale (a seconda della licenza).
                          </p>
                          <p className="mb-0 text-dark">
                            <strong>Esempi:</strong> BLOOM, alcuni modelli Mistral (Apache 2.0), Falcon
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ borderTop: '4px solid #C87D2A !important' }}>
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-3">Open Weight</h3>
                          <p className="text-secondary">
                            I pesi (parametri) del modello sono scaricabili, ma il codice di addestramento
                            e i dati possono essere chiusi. L'uso è libero ma spesso con restrizioni commerciali.
                            Il termine "open source" viene impropriamente usato per questi modelli.
                          </p>
                          <p className="mb-0 text-dark">
                            <strong>Esempi:</strong> Llama 3 (Meta), Qwen (Alibaba), DeepSeek
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 shadow-sm rounded-4" style={{ borderTop: '4px solid #5B4A8A !important' }}>
                        <div className="card-body p-4">
                          <h3 className="h5 fw-bold mb-3">Closed / Proprietario</h3>
                          <p className="text-secondary">
                            Accesso solo tramite API o interfaccia web.
                            I pesi non sono pubblici. Totale opacità sull'architettura, i dati di addestramento
                            e le scelte di allineamento.
                          </p>
                          <p className="mb-0 text-dark">
                            <strong>Esempi:</strong> GPT-4o (OpenAI), Claude 3.5 (Anthropic), Gemini Ultra (Google)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Callout Attenzione */}
                <div className="alert alert-danger shadow-sm border-0 border-start border-danger border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill text-danger" viewBox="0 0 16 16">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Attenzione
                  </h2>
                  <p className="mb-0 text-dark">
                    I termini "open source" vengono spesso usati impropriamente nel settore IA. "Open weight"
                    non è equivalente a "open source": la trasparenza sui dati di addestramento è spesso assente
                    anche nei modelli più "aperti". Meta, ad esempio, chiama Llama "open source" ma non pubblica
                    i dati di addestramento né il codice completo del processo.
                  </p>
                </div>

                {/* Section 4: HuggingFace */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Hugging Face: l'infrastruttura dell'IA aperta</h2>
                  <p className="fs-5 text-secondary">
                    <strong>Hugging Face</strong> è diventata la piattaforma di riferimento per condividere modelli,
                    dataset e applicazioni IA. Con oltre <strong>500.000 modelli pubblici</strong> (2024), è come
                    una "GitHub dell'IA": permette di vedere cosa esiste, confrontare, scaricare e usare modelli
                    in autonomia, spesso senza competenze di programmazione avanzate.
                  </p>
                  <p className="fs-5 text-secondary">
                    Le librerie open source di Hugging Face (<em>Transformers</em>, <em>Datasets</em>,
                    <em>Diffusers</em>) sono utilizzate da milioni di ricercatori e sviluppatori in tutto il mondo.
                    L'azienda ha sede tra San Francisco e Parigi — una curiosa posizione tra i due poli geopolitici
                    dell'IA occidentale.
                  </p>
                  <p className="fs-5 text-secondary">
                    La sua esistenza è la prova concreta che l'IA non appartiene solo alle grandi aziende:
                    chiunque può contribuire, scaricare e utilizzare modelli anche di alta qualità.
                    Ma "accessibile" non significa "privo di bias" o "neutrale".
                  </p>
                </section>

                {/* Callout evidenza */}
                <div className="alert alert-info shadow-sm border-0 border-start border-info border-4 mb-4" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bar-chart-fill text-info" viewBox="0 0 16 16">
                      <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                    </svg>
                    Evidenza empirica
                  </h2>
                  <p className="mb-0 text-dark">
                    Strumenti come <strong>Artificial Analysis</strong> e <strong>Chatbot Arena</strong> (Arena.ai)
                    raccolgono benchmark indipendenti e preferenze degli utenti per confrontare i modelli in modo
                    sistematico. Sono risorse utili per chi vuole scegliere consapevolmente uno strumento,
                    basandosi su dati e non su pubblicità.
                    <small className="d-block text-muted mt-1">(ArtificialAnalysis.ai, 2024)</small>
                  </p>
                </div>

                {/* Callout sintesi */}
                <div className="alert alert-success shadow-sm border-0 border-start border-success border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stars text-success" viewBox="0 0 16 16">
                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg>
                    Consapevolezza costruita
                  </h2>
                  <p className="mb-0 text-dark">
                    La scelta di uno strumento IA è una scelta con implicazioni politiche, culturali e di privacy.
                    Sapere chi controlla un modello — e con quali dati, valori e interessi è stato addestrato —
                    è parte essenziale dell'<em>AI literacy</em>. Non scegliere è comunque una scelta: quella
                    di delegare ad altri la scelta per noi.
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
                      Ma tutti questi modelli così diversi, come sono classificabili? Non è tutto "IA"?
                    </p>
                    <Link to="/step3" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                      Tappa 2: Non sono tutti la stessa cosa →
                    </Link>
                  </div>
                </div>

                {/* Page navigation */}
                <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                  <Link to="/step1" className="btn btn-outline-secondary rounded-pill px-4">
                    ← Cosa conosci già?
                  </Link>
                  <Link to="/step3" className="btn btn-outline-primary rounded-pill px-4">
                    Non sono tutti la stessa cosa →
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
