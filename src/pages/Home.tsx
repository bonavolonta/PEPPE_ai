import React from 'react';
import PeppeHeader from '../components/PeppeHeader';
import PeppeHero from '../components/PeppeHero';
import PeppeContent from '../components/PeppeContent';
import PeppeFooter from '../components/PeppeFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PeppeHeader />
      <main>
        <PeppeHero />
        <PeppeContent />
      </main>
      <PeppeFooter />
    </div>
  );
}
