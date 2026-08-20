import { useState } from "react";

import CandidatoModal from "./components/CandidatoModal.jsx";
import Candidatos from "./components/Candidatos.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import NuestraGente from "./components/NuestraGente.jsx";
import PorQueElegirnos from "./components/PorQueElegirnos.jsx";
import QuienesSomos from "./components/QuienesSomos.jsx";
import SorteoModal from "./components/SorteoModal.jsx";
import Stats from "./components/Stats.jsx";
import UneteModal from "./components/UneteModal.jsx";
import Ganadores from "./components/Ganadores.jsx";

export default function App() {
  // Modal de sorteos
  const [sorteoOpen, setSorteoOpen] = useState(false);

  // Modal del candidato
  const [candidatoActivo, setCandidatoActivo] = useState(null);

  // Modal de Únete / WhatsApp
  const [showUnete, setShowUnete] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* HEADER */}
      <Header
        onParticipar={() => setSorteoOpen(true)}
        onUnete={() => setShowUnete(true)}
      />

      {/* HERO */}
      <Hero
        onParticipar={() => setSorteoOpen(true)}
        onUnete={() => setShowUnete(true)}
      />

      {/* SECCIONES */}
      <QuienesSomos />

      <Candidatos
        onVerPerfil={setCandidatoActivo}
      />

      <PorQueElegirnos />

      <NuestraGente />

      <Stats />

      <Footer />

      {/* MODAL DE ÚNETE */}
      <UneteModal
        open={showUnete}
        onClose={() => setShowUnete(false)}
      />

      {/* MODAL DE SORTEOS */}
      <SorteoModal
        open={sorteoOpen}
        onClose={() => setSorteoOpen(false)}
      />

      {/* MODAL DE CANDIDATO */}
      <CandidatoModal
        candidato={candidatoActivo}
        onClose={() => setCandidatoActivo(null)}
      />

    </div>
  );
}