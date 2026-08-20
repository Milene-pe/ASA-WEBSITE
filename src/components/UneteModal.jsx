import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Users, X } from "lucide-react";

export default function UneteModal({ open, onClose }) {

  // 🔗 AQUÍ PONDRÁS EL LINK REAL DE TU GRUPO
  const whatsappLink = "https://chat.whatsapp.com/F5JaiNZgGpcLp39Koy8wOI";

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
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors z-10"
            >
              <X size={21} />
            </button>

            <div className="p-6 sm:p-8 text-center">

              {/* ICONO */}
              <div className="mx-auto w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center mb-4">
                <Users
                  size={28}
                  className="text-brand-black"
                />
              </div>

              {/* TÍTULO */}
              <h2 className="text-brand-red font-display font-extrabold text-2xl sm:text-3xl">
                ¡Únete a nuestro equipo!
              </h2>

              {/* FRASE */}
              <p className="mt-3 text-brand-black/70 text-sm sm:text-base leading-relaxed">
                Sé parte de nuestra comunidad y mantente informado sobre
                nuestras actividades, propuestas y novedades para
                Alto Selva Alegre.
              </p>

              {/* QR */}
              <div className="mt-6">

                <p className="font-bold text-sm text-brand-black mb-3">
                  Escanea el código QR
                </p>

               <div className="mt-2 flex justify-center">
  <div className="bg-white p-3 rounded-2xl shadow-lg">
    <img
      src="/qr/qr.jpeg"
      alt="Código QR del grupo de WhatsApp"
      className="w-52 h-52 object-contain rounded-lg"
    />
  </div>
</div>

                <p className="mt-3 text-xs text-brand-black/50">
                  Tambien puedes ingresar usando el boton inferior para ingresar directamente a nuestro grupo de WhatsApp.
                </p>

              </div>

              {/* BOTÓN */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold text-sm py-4 rounded-full shadow-xl transition-colors"
              >
                <MessageCircle size={19} />
                UNIRME AL GRUPO
              </motion.a>


            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}