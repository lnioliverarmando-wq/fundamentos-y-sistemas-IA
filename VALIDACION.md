# Validación de la entrega

Fecha: 30 de septiembre de 2026.

## Compilación y rutas

- `npm run build`: correcto. Next.js generó las cinco lecciones, inicio, índice y página 404.
- `npm run typecheck`: correcto, sin errores de TypeScript.
- Las siete rutas solicitadas devuelven HTTP 200 en el servidor de la exportación.
- Ruta inexistente: HTTP 404 y página personalizada.
- 158 referencias locales de los HTML exportados comprobadas: ninguna rota.
- La página temporal de comprobación responsive se ha eliminado.
- No hay TODOs, lorem ipsum ni menciones de las marcas excluidas en el contenido.

## Navegador e interacciones

Comprobación sobre la web renderizada:

- Tokenización ilustrativa: modificación de texto y cambio de distribución de probabilidades.
- RAG: devoluciones, envíos, garantía, pagos y pregunta sin conocimiento disponible.
- Fiabilidad: presets A/B, valores 6/10 y 9/10; top-k y chunk size mediante teclado; reinicio.
- Tools: consultas, confirmación de tarea, resultado final, reinicio y fallo de facturas que bloquea la creación.
- Workflow: tres empresas, briefings diferentes, revisión humana y cambio de empresa.
- Modo presentación: cambio de vista y propagación de `?present=true` entre lecciones.
- Navegación desde inicio a fundamentos y entre lecciones.
- Verificación adicional sobre la exportación de producción: navegación, hidratación de la demo de fundamentos, presentación y respuesta RAG con fuentes.

## Responsive

- Inspección visual de portada en escritorio, móvil de 390 px y tablet de 768 px.
- Lecciones 01–05 comprobadas a 390 y 768 px mediante marcos de navegador reales.
- Tras corregir la cabecera y el ancho mínimo de los bloques de código, ninguna lección presenta desbordamiento horizontal del documento: 375/375 px y 753/753 px de ancho útil/contenido, respectivamente (los 15 px restantes corresponden a la barra vertical).
- Los bloques de código largos conservan desplazamiento interno.

## Alcance de la verificación

Pruebas funcionales e inspección visual realizadas en Chromium. No se afirma certificación WCAG, auditoría de seguridad ni compatibilidad comprobada en todos los navegadores. Las simulaciones usan datos ficticios y no invocan modelos o servicios externos.

## Revisión visual 02 · dirección aeroespacial

- Compilación de producción y TypeScript correctos tras el rediseño.
- Archivo variable e IBM Plex Mono alojadas localmente, con licencias incluidas.
- Portada inspeccionada en escritorio, móvil de 390 px y tablet de 768 px.
- Cabecera y contenido de RAG inspeccionados en móvil y tablet: ancho de documento igual al ancho útil (375/375 y 753/753), sin desbordamiento horizontal.
- Consulta de devoluciones ejecutada en el laboratorio RAG móvil: recuperación, contexto y respuesta con citas correctos.
- Estilos compartidos aplicados a las cinco lecciones; la lógica de las simulaciones no se ha modificado.
- Captura de portada actualizada.

## Producción en Vercel · 30 de septiembre de 2026

- Proyecto: `lni/la-nueva-industria`. URL: https://la-nueva-industria.vercel.app/.
- Inicio, índice y cinco lecciones: HTTP 200. Ruta inexistente: HTTP 404 y página propia.
- Archivo, IBM Plex Mono y favicon servidos correctamente. Navegación y modo presentación comprobados.
- Demos ejecutadas en producción: fundamentos, RAG, fiabilidad, herramientas y agentes.
- Portada y lección 01 revisadas en escritorio de 1440 px y móvil de 390 px. Sin desbordamiento horizontal ni errores de página.
- Capturas en `docs/captura-produccion-*.png`.

## M2 · Vídeo 1 · 7 de octubre de 2026

- `npm ci`, `npm run typecheck` y `npm run build`: correctos. Exportación estática generada.
- Chromium/Chrome sobre la exportación local: edición de texto, entrada vacía y signos; tres contextos y nueve avances; distribuciones intermedias suman 100; final desactiva el botón; reinicios de secuencia y laboratorio correctos.
- Comparación de peticiones: alternancia, respuestas preparadas, ocultación al cambiar y reinicio correctos.
- Ejercicio final: escritura, guía revelable y reinicio de ambos campos correctos.
- Notas desplegadas antes de presentar: ocultas al activar presentación. Acceso directo con `?present=true` correcto. Navegación a RAG y vuelta conserva el modo; salir devuelve las notas.
- Demos y guía utilizables también en presentación. IDs únicos y sin errores de página.
- Comprobadas anchuras 390, 768 y 1440 px: sin desbordamiento del documento. Portada y demos inspeccionadas visualmente.
- Inicio, índice y cinco lecciones: HTTP 200; ruta inexistente: HTTP 404.
- Capturas: `docs/m2-*-presentacion.png`. Revisión de contenido y guion: `docs/M2-video-01.md`.
- El navegador integrado no pudo iniciar por un error de metadatos del entorno. La comprobación se realizó con Playwright y Chrome local en modo headless.
