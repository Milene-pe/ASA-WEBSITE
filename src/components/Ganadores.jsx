import { Trophy, Gift } from "lucide-react";
import ganadores from "../data/ganadores.json";

export default function Ganadores() {
  if (!ganadores.length) return null;

  const ultimoSorteo = ganadores[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-10">
          <span className="text-brand-red font-bold text-sm uppercase tracking-wider">
            Nuestros ganadores
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-brand-black">
            🏆 Ganadores del sorteo
          </h2>

          <p className="mt-3 text-brand-black/60">
            Conoce a quienes se llevaron nuestros premios esta semana.
          </p>
        </div>

        {/* TARJETA DEL ÚLTIMO SORTEO */}
        <div className="max-w-4xl mx-auto">

          <div className="bg-brand-yellow/10 rounded-3xl p-6 sm:p-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

              <div>
                <p className="text-sm text-brand-black/50">
                  Sorteo realizado
                </p>

                <h3 className="text-xl font-bold text-brand-black">
                  {ultimoSorteo.fecha}
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full font-bold text-sm w-fit">
                <Trophy size={17} />
                {ultimoSorteo.cantidad} ganadores
              </div>

            </div>

            {/* GANADORES */}
            <div className="grid sm:grid-cols-2 gap-3">

              {ultimoSorteo.ganadores.map((ganador, index) => (
                <div
                  key={`${ganador.nombre}-${index}`}
                  className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm"
                >

                  {/* NÚMERO */}
                  <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-black text-brand-black shrink-0">
                    {index + 1}
                  </div>

                  {/* DATOS */}
                  <div className="min-w-0">
                    <p className="font-bold text-brand-black truncate">
                      {ganador.nombre}
                    </p>

                    <p className="text-sm text-brand-black/60 flex items-center gap-1">
                      <Gift size={14} className="text-brand-red" />
                      {ganador.premio}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}