import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import candidatos from "../data/candidatos.json";

export default function Candidatos({ onVerPerfil }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;

    if (!el) return;

    const card = el.querySelector("[data-card]");

    const cardWidth = card
      ? card.getBoundingClientRect().width + 20
      : el.clientWidth;

    el.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="candidatos"
      className="py-20 sm:py-28 bg-[#FAFAF8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ENCABEZADO */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-red font-bold text-sm tracking-wide uppercase">
              Conoce a nuestros
            </span>

            <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-black">
              Candidatos
            </h2>
          </motion.div>

          {/* BOTONES DEL CARRUSEL */}
          <div className="flex gap-2">

            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full border-2 border-brand-black/10 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full border-2 border-brand-black/10 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>


        {/* CARRUSEL */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-1 px-1"
        >

          {candidatos.map((c, i) => (

            <motion.div
              key={c.id}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: (i % 4) * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="
                snap-start
                shrink-0
                w-[78%]
                xs:w-[70%]
                sm:w-[46%]
                lg:w-[23.5%]
                bg-white
                rounded-2xl
                shadow-card
                border
                border-black/5
                overflow-hidden
              "
            >

              {/* FOTO CUADRADA */}
              <div className="relative">

                <img
                  src={c.foto}
                  alt={c.nombre}
                  className="w-full aspect-square object-cover"
                />

                {/* NÚMERO DEL CANDIDATO */}
                <span
                  className="
                    absolute
                    top-3
                    left-3
                    w-8
                    h-8
                    rounded-full
                    bg-brand-red
                    text-white
                    font-bold
                    text-sm
                    flex
                    items-center
                    justify-center
                    shadow
                  "
                >
                  {c.numero}
                </span>

              </div>


              {/* INFORMACIÓN */}
              <div className="p-4 text-center">

                <h3 className="font-display font-bold text-base text-brand-black">
                  {c.nombre}
                </h3>

                <p className="text-xs text-brand-red font-semibold uppercase tracking-wide mt-0.5">
                  {c.cargo}
                </p>

                {/* BOTÓN */}
                <button
                  onClick={() => onVerPerfil(c)}
                  className="
                    mt-4
                    w-full
                    bg-brand-yellow
                    text-brand-black
                    font-bold
                    text-sm
                    py-2.5
                    rounded-full
                    hover:bg-brand-yellow-dark
                    transition-colors
                  "
                >
                  Ver Perfil
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}