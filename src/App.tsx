import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import Step7 from './pages/Step7';
import Step8 from './pages/Step8';
import Step9 from './pages/Step9';
import Step10 from './pages/Step10';
import Credits from './pages/Credits';
import Sources from './pages/Sources';
import Glossary from './pages/Glossary';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
        <Route path="/step8" element={<Step8 />} />
        <Route path="/step9" element={<Step9 />} />
        <Route path="/step10" element={<Step10 />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}



