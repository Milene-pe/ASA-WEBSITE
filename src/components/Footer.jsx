import { Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

const ENLACES = [
  { label: "Inicio", href: "#inicio" },
  { label: "Candidatos", href: "#candidatos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Sorteos", href: "#sorteos" },
  { label: "Galería", href: "#galeria" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href) =>
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <footer className="bg-brand-black text-white/70 pt-16 pb-8">
      <div className="w-full max-w-7xl mx-auto px-12">

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2.5fr_1fr_1fr_1fr] gap-20 xl:ml-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3">

              <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center font-display font-extrabold text-brand-black">
                MRAA
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                  Movimiento Regional
                </p>

                <h3 className="font-display font-bold text-white text-2xl leading-tight">
                  Arequipa
                  <br />
                  Avancemos
                </h3>
              </div>
            </div>

            <p className="mt-6 text-sm leading-8 max-w-md mx-auto lg:mx-0">
              Creemos que el verdadero cambio se construye escuchando a la
              ciudadanía y trabajando en equipo. Nuestro compromiso es impulsar
              un Alto Selva Alegre más seguro, moderno, inclusivo e innovador,
              donde cada vecino tenga más oportunidades para crecer y mejorar
              su calidad de vida.
            </p>
          </div>

          {/* Enlaces */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <h4 className="font-display font-bold text-white text-lg mb-5">
    Enlaces rápidos
  </h4>

  <ul className="space-y-3 text-sm">
    {ENLACES.map((e) => (
      <li key={e.href}>
        <button
          onClick={() => handleNav(e.href)}
          className="hover:text-brand-yellow transition-colors"
        >
          {e.label}
        </button>
      </li>
    ))}
  </ul>
</div>

{/* Contacto */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <h4 className="font-display font-bold text-white text-lg mb-5">
    Contacto
  </h4>

  <ul className="space-y-3 text-sm">
    <li>987 654 321</li>
    <li>Alto Selva Alegre, Arequipa</li>
  </ul>
</div>

{/* Redes */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <h4 className="font-display font-bold text-white text-lg mb-5">
    Síguenos
  </h4>

  <div className="flex gap-4 justify-center lg:justify-start">
    <a
      href="https://www.facebook.com/share/1BvGF3Bn5V/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red transition flex items-center justify-center"
    >
      <Facebook size={18} />
    </a>

    <a
      href="https://www.tiktok.com/@pollitos.asa1?_r=1&_t=ZS-98jGGhZwz8a"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red transition flex items-center justify-center"
    >
      <FaTiktok size={18} />
    </a>
  </div>
</div>

        </div>

        {/* Línea inferior */}

        <div className="mt-14 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          © {year} Arequipa Avancemos. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}