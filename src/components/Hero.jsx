import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import pollitoVideo from "../assets/video.mp4";

export default function Hero({ onUnete }) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFE766] via-[#FFD633] to-[#FFC107] min-h-[70vh] flex items-center pt-24 pb-16"
    >

      {/* CONTENIDO PRINCIPAL */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* =========================
              VIDEO DEL POLLITO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-72 sm:w-80 lg:w-[420px] h-auto object-contain drop-shadow-2xl"
            >
              <source src={pollitoVideo} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </motion.div>


          {/* =========================
              TEXTO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col items-center text-center"
          >

            {/* TÍTULO */}
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-black leading-tight text-brand-black">
              ¡Únete a
              <span className="block text-brand-red">
                este gran equipo!
              </span>
            </h1>


            {/* DESCRIPCIÓN */}
            <p className="mt-6 text-lg text-black/70 max-w-xl leading-relaxed">
              Conoce a nuestros candidatos, participa en nuestras actividades
              y sorteos, y forma parte del cambio que impulsamos para construir
              un mejor Alto Selva Alegre.
            </p>


            {/* BOTÓN */}
            <div className="w-full flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onUnete}
                className="bg-brand-red hover:bg-red-700 text-white px-9 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
              >
                Únete Ahora
                <Gift size={18} />
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>


      {/* OLA INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
        </svg>
      </div>

    </section>
  );
}