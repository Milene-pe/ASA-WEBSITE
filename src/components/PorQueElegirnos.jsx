import { motion } from 'framer-motion'
import { BookOpen, HandHeart, HardHat, HeartPulse, Leaf, ShieldCheck, Siren, Sparkle } from 'lucide-react'

const ITEMS = [
  { icon: ShieldCheck, title: 'Honestidad', text: 'Actuamos con transparencia' },
  { icon: HandHeart, title: 'Compromiso', text: 'Trabajamos con pasión por ti' },
  { icon: HardHat, title: 'Obras', text: 'Desarrollo y progreso para todos' },
  { icon: Siren, title: 'Seguridad', text: 'Un distrito seguro para tu familia' },
  { icon: Sparkle, title: 'Juventud', text: 'Apoyo y oportunidades para los jóvenes' },
  { icon: BookOpen, title: 'Educación', text: 'Impulsamos el aprendizaje de todos' },
  { icon: HeartPulse, title: 'Salud', text: 'Bienestar cerca de cada familia' },
  { icon: Leaf, title: 'Medio ambiente', text: 'Cuidamos nuestro distrito' },
]

export default function PorQueElegirnos() {
  return (
    <section className="mt-3 bg-red-700 text-white font-bold text-sm px-5 py-3 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
<span className="text-brand-yellow font-bold text- tracking-wide uppercase"> Nuestros pilares </span>
          <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-white">¿Por qué elegirnos?</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6, backgroundColor: '#eeca12' }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 text-center transition-colors"
            >
              <div className="w-11 h-11 mx-auto rounded-xl bg-brand-yellow/15 group-hover:bg-brand-black/10 flex items-center justify-center mb-3 transition-colors">
                <Icon size={22} className="text-brand-yellow group-hover:text-brand-black transition-colors" />
              </div>
              <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-black transition-colors">{title}</h3>
              <p className="mt-1 text-xs text-white/50 group-hover:text-brand-black/70 transition-colors leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
