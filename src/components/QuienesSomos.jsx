import { motion } from 'framer-motion'
import { Eye, HeartHandshake, ShieldCheck, Target } from 'lucide-react'

const CARDS = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Trabajar con honestidad y transparencia para mejorar la calidad de vida de todas las familias de Alto Selva Alegre.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Alto Selva Alegre será un distrito seguro, ordenado, inclusivo, moderno y sostenible',
  },
  {
    icon: HeartHandshake,
    title: 'Valores',
    text: 'Honestidad, compromiso, respeto, unidad y trabajo en equipo con cada vecino del distrito.',
  },
  {
    icon: ShieldCheck,
    title: 'Nuestro compromiso',
    text: 'Escuchar primero, proponer con responsabilidad y actuar junto a la comunidad en cada decisión.',
  },
]

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-red font-bold text-sm tracking-wide uppercase">Somos Arequipa Avancemos</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-brand-black">¿Quiénes somos?</h2>
          <p className="mt-5 text-brand-black/70 leading-relaxed">
             Somos un movimiento que nace del compromiso con Alto Selva Alegre y de 
             la convicción de que un mejor distrito se construye escuchando a los 
             vecinos. Creemos en una política cercana, transparente e innovadora, que 
             combine la experiencia de nuestros profesionales con el liderazgo de 
             nuestros dirigentes, la energía de los jóvenes y la participación activa de la 
             ciudadanía. Juntos impulsamos el desarrollo, fortalecemos la seguridad y 
             construimos más oportunidades para todas las familias del distrito.
          </p>
          <div className="mt-6 h-1.5 w-20 bg-brand-yellow rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-black/5 rounded-2xl p-6 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center mb-4">
                <Icon size={24} className="text-brand-red" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-black">{title}</h3>
              <p className="mt-2 text-sm text-brand-black/65 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
