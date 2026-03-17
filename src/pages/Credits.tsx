import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Shield, Users, BookOpen, ExternalLink, Code, Database, Cpu, MessageSquare, Zap, Globe, Lock, FileCode } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Credits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glossary = [
    {
      term: "Agency",
      definition: "Capacità di agire nel mondo in modo intenzionale, per raggiungere obiettivi propri, con consapevolezza delle proprie azioni. I LLM non hanno agency: producono output in risposta a input, ma non hanno intenzioni, obiettivi o consapevolezza. (Floridi, 2019)"
    },
    {
      term: "Bias (algoritmico)",
      definition: "Distorsione sistematica nell'output di un sistema IA dovuta a squilibri nei dati di addestramento o nelle scelte di progettazione. Un modello addestrato principalmente su testi in inglese avrà performance inferiori nelle altre lingue. Un modello addestrato su dati storici che rispecchiano disuguaglianze di genere le perpetuerà."
    },
    {
      term: "Data center",
      definition: "Struttura fisica che ospita server e hardware per elaborazione, archiviazione e distribuzione di dati e servizi digitali. Consuma grandi quantità di energia elettrica e acqua per il raffreddamento. L'espansione dell'IA ha accelerato la costruzione di nuovi data center globalmente."
    },
    {
      term: "Fine-tuning",
      definition: "Processo di adattamento di un modello pre-addestrato a un compito specifico, usando un dataset più piccolo e mirato. Permette di specializzare un modello generico (es. GPT) per applicazioni particolari (es. assistenza medica, diritto) senza dover riaddestrare tutto da zero."
    },
    {
      term: "GIGO (Garbage In, Garbage Out)",
      definition: "Principio per cui la qualità dell'output di un sistema dipende dalla qualità dell'input. Dati distorti producono output distorti. Nell'IA generativa: se i dati di addestramento contengono bias, stereotipi o disinformazione, il modello li riprodurrà e potenzialmente li amplificherà."
    },
    {
      term: "GPU (Graphics Processing Unit)",
      definition: "Processore specializzato nell'elaborazione parallela, essenziale per addestrare e eseguire modelli di deep learning. Originariamente progettate per la grafica videoludica, le GPU si sono rivelate ideali per le operazioni matematiche massive richieste dall'addestramento di reti neurali."
    },
    {
      term: "Hallucination (allucinazione)",
      definition: "Fenomeno per cui un LLM genera informazioni false, inesistenti o non verificabili con la stessa fluidità con cui genera informazioni vere. È una conseguenza diretta del meccanismo di predizione probabilistica: il modello \"completa\" pattern linguistici anche quando non ha informazioni corrette."
    },
    {
      term: "Inferenza",
      definition: "Fase in cui un modello già addestrato genera output da nuovi input. Contrapposta al training (addestramento). La maggior parte dell'uso quotidiano dell'IA (inviare un prompt, ricevere una risposta) avviene in fase di inferenza."
    },
    {
      term: "Intentional stance",
      definition: "Termine del filosofo Daniel Dennett: la strategia di trattare un sistema come se avesse credenze, desideri e intenzioni per predirne il comportamento — anche quando non li ha davvero. Usiamo naturalmente l'intentional stance con i modelli IA (\"ChatGPT pensa che…\", \"Gemini vuole…\"), ma questa è una proiezione cognitiva nostra, non una proprietà del sistema."
    },
    {
      term: "LLM (Large Language Model)",
      definition: "Modello linguistico di grandi dimensioni addestrato su enormi quantità di testo per generare e comprendere linguaggio naturale. Esempi: GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta). La \"grandezza\" si misura in miliardi di parametri."
    },
    {
      term: "Neural debt (debito neurale) / Cognitive debt",
      definition: "Erosione progressiva di capacità cognitive per mancato esercizio, causata dalla delega sistematica a strumenti tecnologici. Come i muscoli atrofizzano senza allenamento, alcune funzioni cognitive (scrittura, argomentazione, memoria di lavoro) si indeboliscono se delegate sistematicamente a strumenti IA. (Kosmyna et al., 2025; Bastani et al., 2024)"
    },
    {
      term: "Open source / Open weight / Closed",
      definition: "Tre tipologie di accesso ai modelli IA. Open source: sia il codice che i pesi del modello sono pubblici (es. BLOOM). Open weight: solo i pesi sono pubblici, il codice di addestramento no (es. Llama di Meta). Closed: accesso solo tramite API, nessuna trasparenza su codice o pesi (es. GPT-4, Claude, Gemini)."
    },
    {
      term: "Parametri",
      definition: "I valori numerici (pesi) che vengono modificati durante l'addestramento di una rete neurale. Più parametri = maggiore capacità del modello di rappresentare pattern complessi. GPT-3 ha 175 miliardi di parametri; GPT-4 si stima ne abbia oltre 1.000 miliardi."
    },
    {
      term: "Pappagallo stocastico",
      definition: "Metafora di Bender et al. (2021): un LLM cuce forme linguistiche in modo statisticamente plausibile senza alcun riferimento al significato. Come un pappagallo che ripete sequenze di suoni senza comprenderne il contenuto, ma con sofisticazione statistica. La metafora sottolinea l'assenza di comprensione semantica genuina."
    },
    {
      term: "Prompt",
      definition: "Testo di input fornito a un modello linguistico per generare una risposta o un output. La qualità del prompt influenza significativamente la qualità dell'output. Il \"prompt engineering\" è la pratica di ottimizzare i prompt per ottenere risposte migliori."
    },
    {
      term: "RLHF (Reinforcement Learning from Human Feedback)",
      definition: "Tecnica di addestramento in cui feedback umani vengono usati per affinare il comportamento di un modello verso risposte più utili e sicure. Valutatori umani classificano le risposte del modello; queste classificazioni vengono usate per aggiornare il modello. È il meccanismo principale usato per rendere i modelli \"allineati\" con i valori umani."
    },
    {
      term: "Token",
      definition: "Unità base del testo per i modelli linguistici. Può essere una parola intera, parte di una parola o un segno di punteggiatura. La parola \"intelligenza\" potrebbe essere un singolo token; \"ChatGPT\" potrebbe essere due token (\"Chat\" + \"GPT\"). Gli LLM elaborano e generano token, non caratteri singoli. Circa 1.000 token corrispondono a ~750 parole in italiano."
    },
    {
      term: "Transformer",
      definition: "Architettura di rete neurale introdotta nel 2017 da Vaswani et al. nel paper Attention Is All You Need. Usa un meccanismo di attenzione che permette di relazionare ogni token con tutti gli altri nella sequenza, catturando dipendenze a lungo raggio nel testo. È alla base di quasi tutti gli LLM moderni."
    }
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
                  {/* Breadcrumb */}
                  <div className="mb-5">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Crediti e Licenza</li>
                      </ol>
                    </nav>
                  </div>

                  {/* Header */}
                  <header className="mb-5 border-bottom pb-4">
                    <h1 className="display-4 fw-bold text-dark mb-3">Crediti e Licenza</h1>
                    <p className="lead text-secondary">Questo sito è materiale didattico open access per la formazione docenti sull'IA critica.</p>
                  </header>

                  {/* Licenza */}
                  <section className="mb-5">
                    <h2 className="h3 fw-bold mb-4 d-flex align-items-center gap-2">
                      <Shield className="text-primary" />
                      Licenza Creative Commons
                    </h2>
                    
                    <div className="card border-0 shadow-sm bg-light mb-4 rounded-4">
                      <div className="card-body p-4">
                        <div className="d-flex flex-column flex-md-row gap-4 align-items-start">
                          <div className="bg-dark text-white px-3 py-2 rounded fw-bold fs-5 d-inline-block">
                            CC BY 4.0
                          </div>
                          <div>
                            <h3 className="h5 fw-bold mb-2">Creative Commons Attribution 4.0 International</h3>
                            <p className="text-secondary mb-3">
                              Sei libero di condividere e adattare i contenuti, anche per fini commerciali, a condizione di attribuire l'autore e indicare eventuali modifiche.
                            </p>
                            <a href="https://creativecommons.org/licenses/by/4.0/deed.it" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2">
                              Leggi la licenza completa <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-4 p-4">
                      <p className="fw-medium mb-2">Per attribuire correttamente questo materiale, usa la seguente citazione:</p>
                      <blockquote className="border-start border-primary border-4 ps-3 mb-0 text-secondary fst-italic">
                        Oltre il Senso Comune sull'IA. Materiale didattico per la formazione docenti. Progetto PEPPE AI, Università di Cagliari. Disponibile sotto licenza CC BY 4.0.
                      </blockquote>
                    </div>
                  </section>

                  {/* Navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le sezioni">
                    <Link to="/glossary" className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all hover-scale">
                      <span aria-hidden="true">←</span>
                      <span className="d-none d-sm-inline">Glossario completo</span>
                    </Link>
                    <Link to="/" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all hover-scale shadow-sm">
                      <span aria-hidden="true">🏠</span>
                      <span>Torna alla Home</span>
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
