import { AnimatePresence, motion } from "framer-motion";
import { Menu, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import UneteModal from "./UneteModal";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Candidatos", href: "#candidatos" },
  { label: "Plan de Gobierno", href: "#plan-gobierno" },
  { label: "Galería", href: "#galeria" },
  { label: "Sorteos", href: "#sorteos" },
];

export default function Header({ onParticipar }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Modal de Únete
  const [showUnete, setShowUnete] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);

    // Sorteos sigue funcionando como antes
    if (href === "#sorteos") {
      onParticipar();
      return;
    }

    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-soft py-2"
            : "bg-white/70 backdrop-blur py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#inicio");
            }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Arequipa Avancemos"
              className="w-12 h-12 object-contain"
            />

            <div className="leading-tight">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gray-600 font-semibold">
                Movimiento Regional
              </p>

              <p className="font-display font-bold text-sm sm:text-base text-brand-black">
                Arequipa Avancemos
              </p>

              <p className="text-[10px] sm:text-xs text-brand-red font-semibold tracking-wide">
                ALTO SELVA ALEGRE
              </p>
            </div>
          </a>

          {/* MENÚ DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-semibold text-brand-black/80 hover:text-brand-red transition-colors relative group"
              >
                {l.label}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* BOTÓN ÚNETE DESKTOP */}
          <div className="hidden lg:block">
            <button
              onClick={() => setShowUnete(true)}
              className="btn-shine inline-flex items-center gap-2 bg-brand-red text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-card hover:scale-105 transition-transform"
            >
              <Users size={16} />
              Únete
            </button>
          </div>

          {/* MENÚ MÓVIL */}
          <button
            className="lg:hidden text-brand-black"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENÚ MÓVIL ABIERTO */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-black/5"
            >
              <div className="flex flex-col px-6 py-4 gap-1">

                {LINKS.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => handleNav(l.href)}
                    className="text-left py-2.5 font-semibold text-brand-black/85 border-b border-black/5 last:border-0"
                  >
                    {l.label}
                  </button>
                ))}

                {/* ÚNETE MÓVIL */}
                <button
                  onClick={() => {
                    setOpen(false);
                    setShowUnete(true);
                  }}
                  className="mt-3 bg-brand-red text-white font-bold text-sm px-5 py-3 rounded-full text-center"
                >
                  Únete al movimiento
                </button>

              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* MODAL DE ÚNETE */}
      <UneteModal
        open={showUnete}
        onClose={() => setShowUnete(false)}
      />
    </>
  );
}