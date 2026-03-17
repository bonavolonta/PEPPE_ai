import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';
import { motion } from 'motion/react';

export default function Step1() {
  const [showTools, setShowTools] = useState(false);

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
                      <li className="breadcrumb-item active" aria-current="page">Cosa conosci già?</li>
                    </ol>
                  </nav>
                  
                  <div className="d-flex justify-content-between mb-2 small text-muted fw-bold">
                    <span>Percorso</span>
                    <span>Tappa 1 di 10</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                {/* Hero */}
                <header className="mb-5 border-bottom pb-4">
                  <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">Movimento 1 — Tappa 0</span>
                  <h1 className="display-4 fw-bold text-dark mb-3">Cosa conosci già?</h1>
                  <p className="lead text-secondary">Partiamo dall'esperienza quotidiana. Quali strumenti di IA usi già? E quanti altri esistono di cui non sai niente?</p>
                </header>

                {/* Callout: Senso Comune */}
                <div className="alert alert-warning shadow-sm border-0 border-start border-warning border-4 mb-5" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-quote-fill text-warning" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293M12.5 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 11.04 6c-.958 0-1.734.746-1.734 1.667 0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .277.716c1.528 0 2.986-1.4 3.168-3.675a.4.4 0 0 0-.106-.293"/>
                    </svg>
                    Il senso comune dice…
                  </h2>
                  <p className="mb-0 text-dark">L'IA sono ChatGPT, Gemini e pochi altri strumenti. Li uso già, quindi so più o meno di cosa si tratta.</p>
                </div>

                {/* Section 1 */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Gli strumenti che probabilmente già conosci</h2>
                  <p className="fs-5 text-secondary">
                    <strong>ChatGPT</strong> (OpenAI), <strong>Gemini</strong> (Google), <strong>Copilot</strong> (Microsoft) e <strong>Claude</strong> (Anthropic)
                    sono i sistemi di IA generativa più diffusi in Italia tra i docenti. Sono accessibili, spesso gratuiti nelle versioni base,
                    e hanno avuto un impatto mediatico enorme a partire dal novembre 2022, quando ChatGPT raggiunse 100 milioni di utenti in
                    soli due mesi — un record nella storia di internet.
                  </p>
                  <p className="fs-5 text-secondary">
                    Ma il panorama reale dell'IA è vastamente più ampio di questi pochi nomi. Conoscere solo questi strumenti significa
                    avere una mappa parziale di un territorio che si estende molto oltre.
                  </p>
                </section>

                {/* Reveal interactive section */}
                <section className="my-5 py-4 bg-light rounded-4 px-4 px-md-5 text-center shadow-sm border">
                  <h2 className="visually-hidden">Scopri il panorama completo</h2>
                  {!showTools ? (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <button 
                        className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow" 
                        onClick={() => setShowTools(true)}
                      >
                        Quanti altri strumenti esistono? Scoprilo →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-start">
                      <h2 className="h3 fw-bold mb-3">Il panorama reale degli strumenti IA</h2>
                      <p className="text-secondary mb-5">
                        Ecco una selezione degli strumenti disponibili oggi, raggruppati per tipo. Non è una lista esaustiva:
                        nuovi modelli e applicazioni emergono ogni settimana.
                      </p>

                      <h3 className="h5 fw-bold text-primary mb-3 border-bottom pb-2">Strumenti Google per l'educazione</h3>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
                        {[
                          { name: 'Gemini', desc: 'Google — chatbot multimodale' },
                          { name: 'NotebookLM', desc: 'Google — analisi documenti' },
                          { name: 'LearnLM', desc: 'Google — tutoring adattivo' },
                          { name: 'Gemini in Classroom', desc: 'Google Workspace — supporto studenti' },
                          { name: 'Gemini in Meet', desc: 'Google — trascrizioni riunioni' },
                          { name: 'Project Mariner', desc: 'Google DeepMind — navigazione web' }
                        ].map(tool => (
                          <div className="col" key={tool.name}>
                            <div className="card h-100 border-0 shadow-sm rounded-3">
                              <div className="card-body">
                                <h5 className="card-title h6 fw-bold">{tool.name}</h5>
                                <p className="card-text small text-muted mb-0">{tool.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h3 className="h5 fw-bold text-primary mb-3 border-bottom pb-2">Strumenti di altre aziende</h3>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {[
                          { name: 'ChatGPT', desc: 'OpenAI — USA' },
                          { name: 'Claude', desc: 'Anthropic — USA' },
                          { name: 'Copilot', desc: 'Microsoft / OpenAI' },
                          { name: 'DeepSeek', desc: 'DeepSeek AI — Cina' },
                          { name: 'Kimi', desc: 'Moonshot AI — Cina' },
                          { name: 'Qwen', desc: 'Alibaba — Cina' },
                          { name: 'Mistral', desc: 'Mistral AI — Francia' },
                          { name: 'Llama', desc: 'Meta — USA (open weight)' },
                          { name: 'Perplexity', desc: 'Perplexity AI — motore AI' },
                          { name: 'Midjourney', desc: 'Midjourney — immagini' },
                          { name: 'DALL-E 3', desc: 'OpenAI — immagini' },
                          { name: 'Stable Diffusion', desc: 'Stability AI — immagini open' },
                          { name: 'Suno', desc: 'Suno — musica generativa' },
                          { name: 'ElevenLabs', desc: 'ElevenLabs — sintesi vocale' },
                          { name: 'Runway', desc: 'Runway — video generativi' },
                          { name: 'Pika', desc: 'Pika Labs — video da testo' }
                        ].map(tool => (
                          <div className="col" key={tool.name}>
                            <div className="card h-100 border-0 shadow-sm rounded-3">
                              <div className="card-body">
                                <h5 className="card-title h6 fw-bold">{tool.name}</h5>
                                <p className="card-text small text-muted mb-0">{tool.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </section>

                {/* SVG Infographic */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Una mappa visiva del panorama</h2>
                  <p className="fs-5 text-secondary mb-4">
                    La visualizzazione seguente mostra i principali strumenti IA raggruppati per area geografica e tipo.
                    La dimensione delle bolle riflette approssimativamente la diffusione globale degli strumenti.
                  </p>

                  <div className="row g-4 mb-4">
                    {/* Google */}
                    <div className="col-12 col-lg-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#f0f7ff' }}>
                        <div className="card-body p-4 position-relative">
                          <h4 className="fw-bold mb-4" style={{ color: '#0066cc' }}>Google</h4>
                          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ minHeight: '200px' }}>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '110px', height: '110px', backgroundColor: '#0066cc', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold">Gemini</span>
                              <span className="opacity-75" style={{ fontSize: '0.7rem' }}>chatbot</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '85px', height: '85px', backgroundColor: '#0066cc', opacity: 0.9, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">NotebookLM</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '75px', height: '75px', backgroundColor: '#0066cc', opacity: 0.8, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">LearnLM</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '65px', height: '65px', backgroundColor: '#0066cc', opacity: 0.7, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.75rem' }}>Mariner</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* USA Big Tech */}
                    <div className="col-12 col-lg-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#f5f3fa' }}>
                        <div className="card-body p-4 position-relative">
                          <h4 className="fw-bold mb-4" style={{ color: '#5B4A8A' }}>USA Big Tech</h4>
                          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ minHeight: '200px' }}>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '120px', height: '120px', backgroundColor: '#5B4A8A', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold">ChatGPT</span>
                              <span className="opacity-75" style={{ fontSize: '0.7rem' }}>OpenAI</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '95px', height: '95px', backgroundColor: '#5B4A8A', opacity: 0.9, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold">Claude</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '85px', height: '85px', backgroundColor: '#5B4A8A', opacity: 0.85, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">Copilot</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '75px', height: '75px', backgroundColor: '#5B4A8A', opacity: 0.8, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.75rem' }}>Perplexity</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '70px', height: '70px', backgroundColor: '#5B4A8A', opacity: 0.75, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.75rem' }}>Llama</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cina */}
                    <div className="col-12 col-lg-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#fff8f0' }}>
                        <div className="card-body p-4 position-relative">
                          <h4 className="fw-bold mb-4" style={{ color: '#C87D2A' }}>Cina</h4>
                          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ minHeight: '200px' }}>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '110px', height: '110px', backgroundColor: '#C87D2A', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold">DeepSeek</span>
                              <span className="opacity-75" style={{ fontSize: '0.7rem' }}>DeepSeek AI</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '90px', height: '90px', backgroundColor: '#C87D2A', opacity: 0.9, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold">Kimi</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '85px', height: '85px', backgroundColor: '#C87D2A', opacity: 0.85, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">Qwen</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '75px', height: '75px', backgroundColor: '#C87D2A', opacity: 0.8, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">ERNIE</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '70px', height: '70px', backgroundColor: '#C87D2A', opacity: 0.75, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.75rem' }}>Doubao</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Creazione / Open */}
                    <div className="col-12 col-lg-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#f2f7f0' }}>
                        <div className="card-body p-4 position-relative">
                          <h4 className="fw-bold mb-4" style={{ color: '#4A6B3A' }}>Creazione / Open</h4>
                          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ minHeight: '200px' }}>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '105px', height: '105px', backgroundColor: '#4A6B3A', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.85rem' }}>Midjourney</span>
                              <span className="opacity-75" style={{ fontSize: '0.7rem' }}>immagini</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm text-center" style={{ width: '90px', height: '90px', backgroundColor: '#4A6B3A', opacity: 0.9, lineHeight: '1.1', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.8rem' }}>Stable<br/>Diffusion</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '85px', height: '85px', backgroundColor: '#4A6B3A', opacity: 0.85, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">Suno</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '80px', height: '80px', backgroundColor: '#4A6B3A', opacity: 0.8, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold small">Runway</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '75px', height: '75px', backgroundColor: '#4A6B3A', opacity: 0.75, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.75rem' }}>Mistral</span>
                            </div>
                            <div className="rounded-circle d-flex flex-column justify-content-center align-items-center text-white shadow-sm" style={{ width: '65px', height: '65px', backgroundColor: '#4A6B3A', opacity: 0.7, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                              <span className="fw-bold" style={{ fontSize: '0.65rem' }}>ElevenLabs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-end text-muted small fst-italic">
                    La dimensione delle bolle riflette approssimativamente la diffusione globale degli strumenti. Dati 2024–2025. Il panorama evolve rapidamente.
                  </div>
                </section>

                {/* Section: cosa ci insegna */}
                <section className="mb-5">
                  <h2 className="h3 fw-bold mb-4">Cosa ci insegna questo panorama?</h2>
                  <p className="fs-5 text-secondary mb-3">
                    La proliferazione di strumenti IA non è casuale: rispecchia una corsa tecnologica con forti implicazioni
                    geopolitiche, economiche e culturali. Ogni strumento porta con sé le scelte dei suoi creatori:
                    quali dati usare, quale lingua privilegiare, quale visione del mondo incorporare.
                  </p>
                  <p className="fs-5 text-secondary">
                    Usare uno strumento IA senza sapere chi l'ha fatto, dove, con quali dati e con quali obiettivi,
                    equivale a leggere un libro senza sapere nulla dell'autore né del contesto in cui è stato scritto.
                  </p>
                </section>

                {/* Callout evidenza */}
                <div className="alert alert-info shadow-sm border-0 border-start border-info border-4 mb-4" role="alert">
                  <h2 className="h5 alert-heading d-flex align-items-center gap-2 fw-bold text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bar-chart-fill text-info" viewBox="0 0 16 16">
                      <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                    </svg>
                    Dati
                  </h2>
                  <p className="mb-0 text-dark">
                    Nel 2024 Hugging Face Hub ospita oltre <strong>500.000 modelli</strong> pubblicamente accessibili.
                    Il numero raddoppia ogni anno circa.
                    <small className="d-block text-muted mt-1">(Hugging Face, 2024)</small>
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
                    L'IA non è un singolo strumento ma un ecosistema globale in rapida evoluzione, frammentato
                    geograficamente e ideologicamente. Conoscerne l'ampiezza è il primo passo per usarla criticamente.
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
                      Ma chi controlla davvero questi strumenti? E cosa significa scegliere uno piuttosto che un altro?
                    </p>
                    <Link to="/step2" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm">
                      Tappa 1: Chi controlla i modelli? →
                    </Link>
                  </div>
                </div>

                {/* Page navigation */}
                <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le tappe">
                  <Link to="/" className="btn btn-outline-secondary rounded-pill px-4">
                    ← Home
                  </Link>
                  <Link to="/step2" className="btn btn-outline-primary rounded-pill px-4">
                    Chi controlla i modelli? →
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
