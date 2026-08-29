import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function PlanGobierno() {
  return (
    <section
      id="plan-gobierno"
      className="py-10 sm:py-14 bg-white"
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
              flex-col
              lg:flex-row
              items-center
              gap-7
              lg:gap-10
              px-6
              py-8
              sm:px-10
              sm:py-10
              lg:px-12
              lg:py-10
            "
          >

            {/* ========================= */}
            {/* PORTADA */}
            {/* ========================= */}

            <div
              className="
                shrink-0
                flex
                items-center
                justify-center
                w-full
                lg:w-auto
              "
            >
              <img
                src="/documentos/portada.png"
                alt="Plan de Gobierno de Alto Selva Alegre"
                className="
                  w-44
                  sm:w-52
                  lg:w-56
                  h-auto
                  object-contain
                  shadow-xl
                "
              />
            </div>


            {/* ========================= */}
            {/* TEXTO */}
            {/* ========================= */}

            <div
              className="
                min-w-0
                flex-1
                text-white
                text-center
                lg:text-left
                w-full
              "
            >

              <p
                className="
                  text-brand-yellow
                  font-bold
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-wide
                "
              >
                Conoce nuestras propuestas
              </p>

              <h2
                className="
                  mt-2
                  font-display
                  font-extrabold
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  leading-tight
                "
              >
                Plan de Gobierno
              </h2>

              <p
                className="
                  mt-3
                  text-white/90
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                  lg:mx-0
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
                w-full
                lg:w-auto
                lg:border-l
                lg:border-white/20
                lg:pl-10
              "
            >

              {/* ICONO */}

              <div
                className="
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <FileText
                  size={26}
                  className="text-brand-red"
                />
              </div>


              {/* TEXTO */}

              <p
                className="
                  mt-3
                  text-white
                  font-bold
                  text-xs
                  sm:text-sm
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
                  mt-4
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-brand-yellow
                  text-brand-black
                  font-bold
                  text-sm
                  px-6
                  py-3
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  transition-transform
                  whitespace-nowrap
                "
              >
                <Download size={18} />
                Descargar PDF
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}