import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'
import galeria from '../data/galeria.json'

export default function NuestraGente() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-photo]')
    const w = card ? card.getBoundingClientRect().width + 16 : el.clientWidth
    el.scrollBy({ left: dir * w, behavior: 'smooth' })
  }

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-red font-bold text-sm tracking-wide uppercase">Compartiendo con</span>
            <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-black">Nuestra Gente</h2>
          </motion.div>

          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full border-2 border-brand-black/10 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full border-2 border-brand-black/10 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-6 pb-4">
        {galeria.slice().reverse().map((g, i) => (
          <motion.div
            key={g.id}
            data-photo
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
            className="snap-start shrink-0 w-[60%] xs:w-[45%] sm:w-[32%] lg:w-[19%] relative group rounded-2xl overflow-hidden"
          >
            <img src={g.imagen} alt={g.descripcion} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-xs font-medium">{g.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
