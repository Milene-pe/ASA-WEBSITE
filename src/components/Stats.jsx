import { motion, useInView } from 'framer-motion'
import { Flag, Gift, HeartHandshake, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { icon: Flag, value: 20, suffix: '+', label: 'Propuestas en desarrollo' },
  { icon: Users, value: 1000, suffix: '+', label: 'Vecinos comprometidos', format: (n) => `${n}+` },
  { icon: HeartHandshake, value: 5, suffix: '+', label: 'Años de experiencia' },
  { icon: Gift, value: 100, suffix: '%', label: 'Comprometidos contigo' },
]

function Counter({ value, suffix, format }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl text-white">
      {format ? format(display) : `${display}${suffix}`}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-brand-red py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {STATS.map(({ icon: Icon, value, suffix, label, format }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-2"
          >
            <Icon size={26} className="text-white/80" />
            <Counter value={value} suffix={suffix} format={format} />
            <p className="text-white/80 text-xs sm:text-sm font-medium">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
