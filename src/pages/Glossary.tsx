import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Glossary() {
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
    <div className="min-vh-100 d-flex flex-column bg-light">
      <PeppeHeader />

      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-4 shadow-sm overflow-hidden"
              >
                <div className="bg-primary text-white p-4 p-md-5">
                  <h1 className="display-5 fw-bold mb-3 d-flex align-items-center gap-3">
                    <MessageSquare size={40} />
                    Glossario completo
                  </h1>
                  <p className="lead mb-0 opacity-75">
                    Tutti i termini tecnici usati nel sito, con definizioni accessibili e non tecnicistiche.
                  </p>
                </div>

                <div className="p-4 p-md-5 bg-light">
                  <div className="row g-4">
                    {glossary.map((item, index) => (
                      <div key={index} className="col-12">
                        <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition-all bg-white">
                          <div className="card-body p-4">
                            <h3 className="h5 fw-bold text-primary mb-3">{item.term}</h3>
                            <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                              {item.definition}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le sezioni">
                    <Link to="/sources" className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all hover-scale">
                      <ArrowLeft size={20} />
                      <span>Fonti principali</span>
                    </Link>
                    <Link to="/credits" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all hover-scale shadow-sm">
                      <span>Crediti e Licenza</span>
                      <ArrowRight size={20} />
                    </Link>
                  </nav>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <PeppeFooter />
    </div>
  );
}
