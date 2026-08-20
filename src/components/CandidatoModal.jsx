import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, CheckCircle2, Facebook, GraduationCap, Instagram, MessageCircle, X } from 'lucide-react'

export default function CandidatoModal({ candidato, onClose }) {
  return (
    <AnimatePresence>
      {candidato && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow transition-colors"
            >
              <X size={18} />
            </button>

            <div className="grid sm:grid-cols-[240px_1fr]">
              <div className="relative">
                <img src={candidato.foto} alt={candidato.nombre} className="w-full h-56 sm:h-full object-cover" />
                <span className="absolute top-4 left-4 w-9 h-9 rounded-full bg-brand-red text-white font-bold flex items-center justify-center shadow">
                  {candidato.numero}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="font-display font-extrabold text-2xl text-brand-black">{candidato.nombre}</h2>
                <p className="text-brand-red font-bold text-sm uppercase tracking-wide mt-1">{candidato.cargo}</p>

                <div className="mt-5">
                  <p className="font-bold text-sm text-brand-black mb-1">Biografía</p>
                  <p className="text-sm text-brand-black/70 leading-relaxed">{candidato.biografia}</p>
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-sm text-brand-black mb-1 flex items-center gap-1.5">
                      <GraduationCap size={16} className="text-brand-red" /> Formación
                    </p>
                    <p className="text-sm text-brand-black/70"><ul className="list-disc pl-5 space-y-1">
                        {candidato.formacion.map((item, index) => (<li key={index}>{item}</li>))}</ul></p>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-brand-black mb-1 flex items-center gap-1.5">
                      <Briefcase size={16} className="text-brand-red" /> Experiencia
                    </p>
                    <p className="text-sm text-brand-black/70">{candidato.experiencia.map((item, index) => (<li key={index}>{item}</li>))}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-bold text-sm text-brand-black mb-2">Propuestas principales</p>
                  <ul className="space-y-1.5">
                    {candidato.propuestas.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-brand-black/75">
                        <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {candidato.galeria?.length > 0 && (
                  <div className="mt-5">
                    <p className="font-bold text-sm text-brand-black mb-2">Galería</p>
                    <div className="grid grid-cols-4 gap-2">
                      {candidato.galeria.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full aspect-square object-cover rounded-lg" />
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center gap-3">
                  <p className="text-xs font-bold text-brand-black/60 uppercase">Sígueme</p>
                  {candidato.redes?.facebook && (
                    <a href={candidato.redes.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                      <Facebook size={15} />
                    </a>
                  )}
                  {candidato.redes?.instagram && (
                    <a href={candidato.redes.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                      <Instagram size={15} />
                    </a>
                  )}
                  {candidato.redes?.whatsapp && (
                    <a href={candidato.redes.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                      <MessageCircle size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
