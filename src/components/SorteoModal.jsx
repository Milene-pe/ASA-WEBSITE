import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Gift, Shirt, X } from "lucide-react";
import sorteo from "../data/sorteo.json";
import ganadores from "../data/ganadores.json";

const ICONS = {
  Gift,
  Shirt,
};

export default function SorteoModal({ open, onClose }) {
  const ultimoSorteo = ganadores?.[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >

            {/* BOTÓN CERRAR */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8 text-center">

              {/* TÍTULO */}
              <span className="inline-block text-brand-red font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                {sorteo.titulo}
              </span>

              <p className="mt-2 text-brand-black/70 text-sm leading-relaxed">
                {sorteo.descripcion}
              </p>

              {/* CANTIDAD DE GANADORES */}
              <div className="mt-5 inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-black px-4 py-2 rounded-full">
                <Gift size={18} className="text-brand-red" />

                <span className="font-bold text-sm">
                  {sorteo.cantidadGanadores} ganadores esta semana
                </span>
              </div>

              {/* FRASE DE LA SEMANA */}
              <div className="mt-6 bg-brand-red rounded-2xl p-5 text-white">

                <p className="text-xs uppercase tracking-wider font-bold opacity-80">
                  Frase de la semana
                </p>

                <p className="mt-2 text-xl sm:text-2xl font-black">
                  “{sorteo.frase}”
                </p>

              </div>

              {/* PASOS */}
              <div className="mt-6 text-left bg-brand-yellow/10 rounded-2xl p-4">

                <p className="font-bold text-sm text-brand-black mb-3">
                  Para participar:
                </p>

                <ul className="space-y-2">
                  {sorteo.pasos.map((paso, index) => (
                    <li
                      key={paso}
                      className="flex items-start gap-2 text-sm text-brand-black/80"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-brand-red shrink-0 mt-0.5"
                      />

                      <span>
                        {paso}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
                            {/* BOTÓN TIKTOK */}
              <motion.a
                href={sorteo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine mt-7 inline-flex w-full items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold text-sm py-4 rounded-full shadow-card transition-colors"
              >
                🎵 QUIERO PARTICIPAR
              </motion.a>

              {/* PREMIOS */}
              <div className="mt-6">

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Gift size={19} className="text-brand-red" />

                  <p className="font-bold text-sm text-brand-black">
                    ¿Qué sortearemos?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">

                  {sorteo.premios.map((premio) => {
                    const Icon = ICONS[premio.icono] || Gift;

                    return (
                      <div
                        key={premio.nombre}
                        className="bg-black/[0.03] rounded-2xl py-4 px-3 flex flex-col items-center"
                      >

                        <Icon
                          size={28}
                          className="text-brand-red mb-2"
                        />

                        <span className="text-sm font-bold text-brand-black">
                          {premio.nombre}
                        </span>

                        <span className="mt-1 text-xs text-brand-black/50">
                          {premio.cantidad} ganador
                          {premio.cantidad !== 1 ? "es" : ""}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>


              {/* GANADORES ANTERIORES */}
              {ultimoSorteo && (
                <div className="mt-8 pt-6 border-t border-black/10">

                  <div className="flex items-center justify-center gap-2">

                    <span className="text-xl">
                      🏆
                    </span>

                    <p className="font-bold text-brand-black">
                      Ganadores del último sorteo
                    </p>

                  </div>

                  <p className="mt-1 text-xs text-brand-black/50">
                    Sorteo realizado el {ultimoSorteo.fecha}
                  </p>

                  <div className="mt-4 space-y-2 text-left">

                    {ultimoSorteo.ganadores.map((ganador, index) => (
                      <div
                        key={`${ganador.nombre}-${index}`}
                        className="flex items-center gap-3 bg-black/[0.03] rounded-xl px-3 py-2.5"
                      >

                        <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-black text-sm shrink-0">
                          {index + 1}
                        </div>

                        <div className="min-w-0">
                          <p className="font-bold text-sm text-brand-black truncate">
                            {ganador.nombre}
                          </p>

                          <p className="text-[11px] text-brand-black/50">
                            🎁 {ganador.premio}
                          </p>
                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}