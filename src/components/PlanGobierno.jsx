import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function PlanGobierno() {
  return (
    <section
      id="plan-gobierno"
      className="py-10 sm:py-14 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#C91C24]
            shadow-xl
          "
        >
          {/* CÍRCULO DECORATIVO DERECHO */}
          <div
            className="
              absolute
              -right-20
              -top-24
              w-64
              h-64
              rounded-full
              bg-white/5
              pointer-events-none
            "
          />

          {/* CÍRCULO DECORATIVO IZQUIERDO */}
          <div
            className="
              absolute
              -left-24
              -bottom-28
              w-72
              h-72
              rounded-full
              bg-black/5
              pointer-events-none
            "
          />

          {/* CONTENIDO */}
          <div
            className="
              relative
              flex
              flex-row
              items-center
              gap-5
              sm:gap-7
              lg:gap-10
              px-5
              py-6
              sm:px-8
              sm:py-8
              lg:px-10
              lg:py-9
            "
          >
            {/* ========================= */}
            {/* PORTADA DEL PLAN */}
            {/* ========================= */}

            <div className="shrink-0 flex items-center justify-center">
              <img
                src="/documentos/portada.png"
                alt="Plan de Gobierno - Alto Selva Alegre"
                className="
                  w-28
                  sm:w-36
                  lg:w-48
                  h-auto
                  object-contain
                  rounded-lg
                  shadow-xl
                "
              />
            </div>

            {/* ========================= */}
            {/* TEXTO */}
            {/* ========================= */}

            <div className="min-w-0 flex-1 text-white">
              <p
                className="
                  text-brand-yellow
                  font-bold
                  text-[10px]
                  sm:text-xs
                  lg:text-sm
                  uppercase
                  tracking-wide
                "
              >
                Conoce nuestras propuestas
              </p>

              <h2
                className="
                  mt-1
                  font-display
                  font-extrabold
                  text-xl
                  sm:text-3xl
                  lg:text-5xl
                  leading-tight
                "
              >
                Plan de Gobierno
              </h2>

              <p
                className="
                  mt-2
                  text-white/85
                  text-xs
                  sm:text-sm
                  lg:text-base
                  leading-relaxed
                  max-w-2xl
                "
              >
                Conoce nuestras propuestas y el compromiso que asumimos
                para construir un mejor Alto Selva Alegre.
              </p>
            </div>

            {/* ========================= */}
            {/* DESCARGAR */}
            {/* ========================= */}

            <div
              className="
                shrink-0
                flex
                flex-col
                items-center
                justify-center
                border-l
                border-white/20
                pl-4
                sm:pl-7
                lg:pl-10
              "
            >
              {/* ICONO */}

              <div
                className="
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  lg:w-14
                  lg:h-14
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <FileText
                  size={22}
                  className="text-brand-red sm:w-6 sm:h-6"
                />
              </div>

              {/* TEXTO */}

              <p
                className="
                  mt-2
                  text-white
                  font-bold
                  text-[9px]
                  sm:text-xs
                  lg:text-sm
                  uppercase
                  text-center
                  leading-tight
                "
              >
                Descargar
                <br />
                Plan de Gobierno
              </p>

              {/* BOTÓN */}

              <a
                href="/documentos/PlanGobiernoASA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3
                  inline-flex
                  items-center
                  justify-center
                  gap-1.5
                  bg-brand-yellow
                  text-brand-black
                  font-bold
                  text-[10px]
                  sm:text-xs
                  lg:text-sm
                  px-3
                  sm:px-5
                  lg:px-6
                  py-2
                  sm:py-2.5
                  lg:py-3
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  transition-transform
                  whitespace-nowrap
                "
              >
                <Download size={15} />
                Descargar PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}