import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Globe, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeFooter from '../components/PeppeFooter';

export default function Sources() {
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
                  <h1 className="display-5 fw-bold mb-3">Fonti principali</h1>
                  <p className="lead mb-0 opacity-75">
                    Bibliografia, report e strumenti utilizzati per la realizzazione di questo materiale.
                  </p>
                </div>

                <div className="p-4 p-md-5">
                  <section className="mb-5">
                    <div className="d-flex flex-column gap-4">
                      {/* Articoli scientifici */}
                      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-2 px-4 px-md-5">
                          <h2 className="h4 fw-bold mb-0 text-primary d-flex align-items-center gap-2">
                            <BookOpen size={24} />
                            Articoli scientifici
                          </h2>
                        </div>
                        <div className="card-body p-4 p-md-5 bg-light">
                          <ul className="list-unstyled mb-0 d-flex flex-column gap-4">
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Bastani, H., Bastani, O., Sungu, A., et al. (2024). <em className="text-dark fw-medium">Generative AI Can Harm Learning</em>. The Wharton School, University of Pennsylvania. Working paper.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? <em className="text-dark fw-medium">FAccT '21</em>. ACM.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Brown, T., Mann, B., Ryder, N., et al. (2020). Language Models are Few-Shot Learners (GPT-3). <em className="text-dark fw-medium">arXiv:2005.14165</em>.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Floridi, L. (2019). <em className="text-dark fw-medium">The Logic of Information</em>. Oxford University Press.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Kosmyna, N., Arnold, C., Sanz Morales, C., et al. (2025). Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI-Based Tool for Writing. <em className="text-dark fw-medium">MIT Media Lab</em>.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Patterson, D., Gonzalez, J., Le, Q., et al. (2021). Carbon Considerations for Large Language Model Training at Google. <em className="text-dark fw-medium">arXiv:2104.10350</em>.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <FileText className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Vaswani, A., Shazeer, N., Parikh, N., et al. (2017). Attention Is All You Need (L'attenzione è tutto ciò che serve). <em className="text-dark fw-medium">NeurIPS 2017</em>.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Report e fonti istituzionali */}
                      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-2 px-4 px-md-5">
                          <h2 className="h4 fw-bold mb-0 text-primary d-flex align-items-center gap-2">
                            <Globe size={24} />
                            Report e fonti istituzionali
                          </h2>
                        </div>
                        <div className="card-body p-4 p-md-5 bg-light">
                          <ul className="list-unstyled mb-0 d-flex flex-column gap-4">
                            <li className="d-flex gap-3">
                              <Globe className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Google (2024). <em className="text-dark fw-medium">Google 2024 Environmental Report</em>. Google LLC.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <Globe className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>International Energy Agency (2024). <em className="text-dark fw-medium">Electricity 2024: Analysis and Forecast to 2026</em>. IEA.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <Globe className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>Li, P., Yang, J., Islam, M. A., & Ren, S. (2023). Making AI Less "Thirsty" (Rendere l'IA meno "assetata"). <em className="text-dark fw-medium">arXiv:2304.03271</em>.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <Globe className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>TIME Magazine (2023). <em className="text-dark fw-medium">OpenAI Used Kenyan Workers on Less Than $2 Per Hour</em>. January 18, 2023.</span>
                            </li>
                            <li className="d-flex gap-3">
                              <Globe className="text-muted flex-shrink-0 mt-1" size={20} />
                              <span className="text-secondary" style={{ lineHeight: '1.6' }}>UNESCO (2024). <em className="text-dark fw-medium">AI Competency Framework for Teachers</em>. UNESCO.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Piattaforme e strumenti */}
                      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-header bg-white border-bottom-0 pt-4 pb-2 px-4 px-md-5">
                          <h2 className="h4 fw-bold mb-0 text-primary d-flex align-items-center gap-2">
                            <ExternalLink size={24} />
                            Piattaforme e strumenti
                          </h2>
                        </div>
                        <div className="card-body p-4 p-md-5 bg-light">
                          <ul className="list-unstyled mb-0 d-flex flex-column gap-4">
                            <li>
                              <a href="https://artificialanalysis.ai" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-primary fs-5">
                                ArtificialAnalysis.ai <ExternalLink size={18} />
                              </a>
                              <p className="text-secondary mb-0 mt-2" style={{ lineHeight: '1.6' }}>Benchmarking indipendente dei modelli IA. Fornisce analisi dettagliate su performance, costi e velocità dei principali modelli linguistici.</p>
                            </li>
                            <li>
                              <a href="https://lmsys.org/projects/chatbot-arena/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-primary fs-5">
                                Arena.ai (Chatbot Arena, LMSYS) <ExternalLink size={18} />
                              </a>
                              <p className="text-secondary mb-0 mt-2" style={{ lineHeight: '1.6' }}>Valutazione partecipativa (crowdsourced) dei modelli. Permette di confrontare le risposte di diversi modelli alla cieca per stabilire una classifica basata sulle preferenze umane.</p>
                            </li>
                            <li>
                              <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2 text-decoration-none fw-bold text-primary fs-5">
                                Hugging Face Hub <ExternalLink size={18} />
                              </a>
                              <p className="text-secondary mb-0 mt-2" style={{ lineHeight: '1.6' }}>La principale piattaforma open source per modelli di machine learning e dataset. Un punto di riferimento fondamentale per la comunità IA.</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Navigation */}
                  <nav className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top" aria-label="Navigazione tra le sezioni">
                    <Link to="/step10" className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all hover-scale">
                      <ArrowLeft size={20} />
                      <span>Precedente</span>
                    </Link>
                    <Link to="/glossary" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all hover-scale shadow-sm">
                      <span>Glossario completo</span>
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
