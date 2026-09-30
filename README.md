# La Nueva Industria — IA aplicada

Web educativa completa en español: cinco lecciones independientes, cinco laboratorios locales, diagramas HTML/CSS, navegación secuencial y modo presentación.

- **Web de producción:** https://la-nueva-industria.vercel.app/
- **Repositorio:** https://github.com/lnioliverarmando-wq/fundamentos-y-sistemas-IA

## Ejecutar

Requisitos: Node.js 22 o superior y npm.

```bash
npm ci
npm run dev
```

Abrir `http://localhost:3000`.

## Producción

```bash
npm run typecheck
npm run build
npm start
```

`build` genera una exportación estática en `out/`. `npm start` sirve esa exportación en `http://localhost:3000`; admite `PORT=8080 npm start`. No utiliza `next start`, que no sirve exportaciones estáticas.

El ZIP incluye una exportación ya compilada: después de extraerlo, también puedes ejecutar directamente `node scripts/serve.mjs` para navegar por la versión entregada sin instalar dependencias. No abras `out/index.html` con `file://`: necesita un servidor HTTP para resolver los assets y rutas.

## Vercel

El proyecto `la-nueva-industria` está en el espacio `lni` de Vercel. Usa raíz `.`, preset Next.js y `npm run build`. `next.config.ts` exporta las páginas estáticas. El directorio `out/` se genera durante la compilación. No necesita variables de entorno ni base de datos.

Para publicar desde esta carpeta con la CLI autenticada:

```bash
npm ci
npm run typecheck
npm run build
vercel link --yes --project la-nueva-industria
vercel deploy --prod --yes
```

El repositorio GitHub principal es `lnioliverarmando-wq/fundamentos-y-sistemas-IA`, rama `main`.

## Rutas

- `/`
- `/lecciones/`
- `/lecciones/01-fundamentos-ia/`
- `/lecciones/02-rag/`
- `/lecciones/03-sistemas-fiables/`
- `/lecciones/04-tools-mcp/`
- `/lecciones/05-agentes-arquitectura/`

Las rutas incluyen slash final; Next redirige las variantes sin slash durante desarrollo. Existe una página 404 específica.

## Grabar una lección

Abre cualquier lección y añade `?present=true`, o pulsa «Modo presentación». Se reducen navegación y elementos secundarios y se amplía el contenido. El modo se conserva en los enlaces al índice, inicio, lección siguiente y footer. «Salir de presentación» lo desactiva. El recorrido sigue siendo vertical; no se convierte en diapositivas.

Las duraciones indicadas son estimaciones para recorrer cada lección con explicación y laboratorio, no la duración de vídeos publicados. No se incluyen archivos de vídeo.

## Contenido y demos

1. **Fundamentos:** división de texto ilustrativa y distribución de probabilidades según tres contextos. No es un tokenizer real.
2. **RAG:** cuatro temas de una tienda ficticia, búsqueda por palabras clave, fragmentos recuperados, respuesta con referencias y abstención para preguntas desconocidas. No hay embeddings ni generación real.
3. **Fiabilidad:** presets A/B, chunk size, top-k y reranking. La métrica es ilustrativa y determinista, no un benchmark.
4. **Tools:** consulta de cliente, dos facturas pendientes y creación de tarea confirmada. Incluye fallo de consulta y bloqueo de escritura. «Mañana» se resuelve con la fecha y zona horaria del navegador.
5. **Agentes:** workflow secuencial sobre tres empresas ficticias. Se distinguen hechos, hipótesis y preguntas. La revisión es local a la sesión.

Todos los datos son ficticios. Las URLs `.example` no se visitan. Ninguna interacción envía mensajes, llama a APIs externas ni modifica sistemas reales. Los estados se reinician al recargar. No hay analítica, cuentas ni almacenamiento de preguntas.

## Estructura

```text
app/
  page.tsx                       Inicio e índice visual
  lecciones/page.tsx             Índice /lecciones
  lecciones/[slug]/page.tsx       Rutas estáticas de las lecciones
  layout.tsx                     Idioma, metadatos y favicon
  globals.css                    Componentes e interacciones
  aerospace.css                  Dirección visual aeroespacial y responsive
components/
  shell.tsx                      Header, presentación, enlaces y footer
  ui.tsx                         Bloques, diagramas, código y laboratorio
  lesson-content.tsx             Contenido editorial de las cinco lecciones
  fundamentals-demo.tsx          Tokenización y probabilidades
  rag-demo.tsx                   Recuperación y respuesta
  reliability-demo.tsx           Parámetros y contexto
  execution-demo.tsx             Tools y workflow
lib/
  lessons.ts                     Índice, títulos y metadatos
  retrieval.ts                   Corpus y lógica de la simulación RAG
scripts/
  dev.mjs                        Lanzador de desarrollo
  serve.mjs                      Servidor local de la exportación estática
public/favicon.svg               Identidad visual
```

## Decisiones técnicas

- Next.js App Router, TypeScript estricto, React y Tailwind CSS 4.
- CSS específico para diagramas, composición editorial y estados; sin librerías de animación ni componentes adicionales.
- Exportación estática: sin backend, secrets ni servicios de pago.
- Tipografía Archivo variable (ancho y peso) + IBM Plex Mono, alojadas localmente en formato WOFF. Sus licencias SIL OFL están incluidas en `public/fonts/`. No se descargan fuentes de terceros durante la navegación.
- Etiquetas y controles accesibles, navegación por teclado, enlace de salto y `prefers-reduced-motion`.
- Los temporizadores se cancelan al reiniciar o desmontar el laboratorio.
- El wrapper de desarrollo acepta argumentos de Next. En la previsualización supervisada (`--strictPort`), si existe `out/`, sirve la exportación compilada para comprobar exactamente la entrega; `npm run dev` conserva el servidor habitual de Next.
- `reactDebugChannel: false` evita que la hidratación del entorno de desarrollo dependa del canal de depuración remoto. No desactiva las validaciones TypeScript ni altera la producción.

## Personalización

Edita `lib/lessons.ts` para metadatos y `components/lesson-content.tsx` para textos. Los colores están en `:root` dentro de `app/globals.css`. El corpus simulado se cambia en `lib/retrieval.ts`.

Para añadir APIs reales en una versión futura, retira `output: 'export'` si necesitas endpoints de servidor, guarda las claves en el servidor y añade autorización, validación y evaluación antes de activar acciones externas.

## Dirección visual 02

Composición inspirada en documentación aeroespacial: titulares extendidos, retícula asimétrica, grandes índices de capítulo, papel frío y diagramas en gris acero. Identidad propia sin logotipos ni imágenes de SpaceX. Se mantienen las cinco lecciones y demos.

Fuentes originales: https://github.com/google/fonts/tree/main/ofl/archivo y https://github.com/google/fonts/tree/main/ofl/ibmplexmono. Se incluyen sus licencias.
