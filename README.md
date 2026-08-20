# Arequipa Avancemos — Landing Page

Landing page moderna para el movimiento político "Arequipa Avancemos", construida con **React + Vite + TailwindCSS + Framer Motion**.

## 🚀 Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

Para generar la versión de producción:

```bash
npm run build
```

Los archivos listos para publicar quedarán en la carpeta `dist/`.

## ✏️ Cómo editar el contenido (sin tocar código)

Toda la información editable vive en `src/data/`:

- **`candidatos.json`** — los 10 candidatos: foto, nombre, cargo, biografía, formación, experiencia, propuestas, galería y redes sociales.
- **`noticias.json`** — las noticias que aparecen en la sección Noticias.
- **`galeria.json`** — las fotos de la sección "Nuestra Gente".
- **`sorteo.json`** — título, pasos, premios y fecha del sorteo (el modal "Participar Ahora").

Solo edita los valores de texto/URL dentro de esas comillas `" "` y guarda el archivo — no necesitas tocar ningún componente.

### Imágenes
Actualmente las fotos usan servicios de placeholder (`i.pravatar.cc`, `picsum.photos`) para que puedas ver el diseño funcionando de inmediato. Para usar tus propias fotos:

1. Coloca tus imágenes en `src/assets/` (o súbelas donde prefieras alojarlas).
2. Reemplaza las URLs correspondientes en los archivos `.json` por la ruta o el link a tu imagen.

### Logo y mascota
El mascota (pollito) del Hero está construido como un SVG editable en `src/components/Mascota.jsx`. El logo circular "YM" del header/footer es texto + color de fondo — puedes reemplazarlo por tu logo real en `src/components/Header.jsx` y `src/components/Footer.jsx`.

### Código QR del sorteo
En el modal de sorteo hay un espacio reservado (recuadro punteado) para el QR. Cuando tengas el código QR final, reemplaza ese bloque en `src/components/SorteoModal.jsx` por una etiqueta `<img src="/ruta-a-tu-qr.png" />`.

### Formulario de contacto
El formulario en `src/components/Contacto.jsx` está listo visualmente; para que envíe datos de verdad conéctalo a tu backend, a un servicio como Formspree/EmailJS, o a Google Sheets vía Apps Script.

## 🎨 Paleta de marca

| Color | Hex |
|---|---|
| Amarillo | `#FFD400` |
| Rojo | `#D71920` |
| Negro (solo texto) | `#141414` |
| Blanco | `#FFFFFF` |

Definida en `tailwind.config.js` bajo `theme.extend.colors.brand`.

## 📱 Responsive

- **Candidatos:** 4 visibles en desktop, 2 en tablet, 1 en celular (carrusel deslizable con flechas).
- **Header:** menú hamburguesa animado en móvil.
- Diseño mobile-first, probado en breakpoints `sm`, `lg`, `xl` de Tailwind.

## 🛠️ Estructura

```
src/
  components/   → Header, Hero, SorteoModal, QuienesSomos, Candidatos,
                  CandidatoModal, PorQueElegirnos, NuestraGente, Stats,
                  Noticias, Contacto, Footer, Mascota
  data/         → candidatos.json, noticias.json, galeria.json, sorteo.json
  App.jsx       → ensambla todas las secciones
  index.css     → estilos globales y utilidades (shine, scrollbar, etc.)
```
