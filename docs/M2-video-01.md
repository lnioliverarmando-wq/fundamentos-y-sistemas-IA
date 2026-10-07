# M2 · Vídeo 1 — Qué es realmente un LLM y cómo trabajar con él

Preparado el 7 de octubre de 2026. Recorrido estimado: 12–15 minutos, con un guion central de 13:30 y margen para la práctica.

## Revisión del punto de partida

Se revisaron la primera lección, su tokenización ilustrativa, las tres distribuciones de probabilidades, las lecciones posteriores, el README y VALIDACION.md. El proyecto no incluía documentos de temario adicionales. Las búsquedas en Drive por M2 y La Nueva Industria no devolvieron referencias del módulo; la búsqueda por Prompting devolvió materiales de otros proyectos, que no se trasladaron a esta web.

| Concepto | Estado anterior | Ajuste |
| --- | --- | --- |
| LLM y modelo frente a aplicación | Ya explicado, repartido entre inicio y cierre | Definición breve y contraste al principio |
| Tokens | Ya explicado y simulado | Se conserva la división ilustrativa y se explicita su regla y la omisión de espacios |
| Generación y probabilidades | Texto y distribución del primer paso | Tres pasos manuales por contexto, con secuencia y distribuciones nuevas |
| Entrenamiento frente a uso | Faltaba explicación específica | Nuevo contraste y ejemplo de corrección dentro del contexto |
| Memoria | Poco explícita en la primera lección | Separar contexto, historial guardado, preferencias y entrenamiento posterior |
| Contexto y límites | Ya explicado | Ejemplos cotidianos y consecuencias de resumir o perder partes |
| Errores convincentes | Ya explicado | Se conserva el caso del horario y se añade cuándo contrastar y cuándo preguntar |
| Petición vaga frente a precisa | Faltaba | Objetivo, contexto, restricciones y ejemplo, con dos respuestas preparadas |
| Cierre y práctica | Faltaba | Tres ideas y ejercicio de devolución con campos y guía revelable |

## Guion de grabación

| Tiempo | Sección | Acción |
| --- | --- | --- |
| 0:00–1:30 | Modelo y aplicación | Comparar las dos definiciones |
| 1:30–4:30 | Tokens y generación | Escribir una frase, comparar cielo/tormenta y avanzar tres piezas |
| 4:30–6:00 | Entrenamiento y conversación | Explicar la corrección en contexto, sin demo adicional |
| 6:00–7:30 | Contexto | Mesa de trabajo, información relevante y límites |
| 7:30–9:00 | Verificación | Horario inventado frente a datos que faltan |
| 9:00–11:30 | Petición clara | Revelar borrador vago, cambiar petición, revelar borrador informado |
| 11:30–13:30 | Cierre y ejercicio | Tres ideas, mejorar petición, identificar faltantes y revelar guía |
| Hasta 15:00 | Margen | Pausa y explicación de la práctica |

Cada sección contiene notas desplegables. El modo presentación las oculta, incluso si estaban abiertas. Los controles de los ejercicios siguen activos. Para grabar, usa el botón «Modo presentación» o abre `/lecciones/01-fundamentos-ia/?present=true`.

## Alcance

Se mantiene fondo gris claro, marca discreta, columna vertical, navegación sin sidebar, fuentes locales y modo presentación. El detalle sobre Transformer y attention queda en un bloque opcional. Se retiran de esta lección el pseudocódigo y los adelantos sobre búsqueda e integraciones. RAG, agentes, MCP, JSON y Structured Outputs quedan fuera de este vídeo; las otras cuatro lecciones conservan sus contenidos.

No se conecta un modelo real. La división del texto, las probabilidades y las respuestas comparadas son ilustrativas y están marcadas como simulaciones. La guía del ejercicio no evalúa automáticamente el texto. Los campos no se envían ni persisten al recargar.

## Referencias técnicas contrastadas

- [Tokenización · Hugging Face](https://huggingface.co/learn/llm-course/en/chapter2/4).
- [Modelos, entrenamiento y generación · Hugging Face](https://huggingface.co/learn/llm-course/en/chapter1/4).
- [Contexto · Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).
- [Peticiones claras, contexto y ejemplos · Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices).

Estas referencias apoyan las explicaciones conceptuales. Las cifras y los borradores de las demos son propios y no son mediciones tomadas de las fuentes.

## Lectura guiada · revisión del 7 de octubre de 2026

La explicación que antes requería desarrollar oralmente las notas pasa al contenido visible de la lección. Incluye apertura, analogías del motor/coche y de estudiar/utilizar lo aprendido, diálogo de Ana, mesa de trabajo del contexto, dos respuestas al horario y transiciones entre secciones. El contenido se puede leer durante la grabación y repasar después desde el mismo enlace.

Las notas del presentador siguen ocultas en presentación y solo orientan el ritmo. Los términos se explican antes de usarlos. No se incluyen afirmaciones sobre haber creado el modelo o sus tecnologías: las demos se identifican como simulaciones pedagógicas.

El laboratorio de generación explica cada estado: contexto inicial, cambio a tormenta o bebidas, pieza incorporada, cálculo siguiente y final del ejemplo. La comparación de peticiones explica por qué el primer borrador es genérico y por qué el segundo reconoce la fecha que falta. El ejercicio permite leer directamente la guía sin tener que escribir o memorizar una solución.
