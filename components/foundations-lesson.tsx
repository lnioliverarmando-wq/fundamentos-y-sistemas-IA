import type { ReactNode } from 'react';
import { ArchitectureFlow, Block, Callout, ConceptGrid } from './ui';
import { FundamentalsDemo } from './fundamentals-demo';
import { PromptComparison, PromptExercise } from './prompt-demo';

function PresenterNotes({ time, children }: { time: string; children: ReactNode }) {
  return <details className="presenter-notes"><summary>Notas para el presentador · {time}</summary><div>{children}</div></details>;
}

export function Foundations() {
  return <>
    <Block title="1. El modelo y la aplicación" id="modelo">
      <p className="label">M2 · IA Aplicada &amp; Prompting · Vídeo 1</p>
      <p>Un <strong>LLM</strong> (Large Language Model) es un modelo de lenguaje de gran tamaño: aprende patrones durante su entrenamiento y los usa para generar texto a partir de la información que recibe.</p>
      <ConceptGrid items={[
        { name: 'Modelo', text: 'Recibe información y calcula posibles continuaciones. Puede redactar, resumir o explicar.' },
        { name: 'Aplicación', text: 'Es el producto que utilizas: la pantalla del chat, el historial, los archivos y los ajustes. Decide qué información enviar al modelo y cómo mostrar la respuesta.' },
      ]}/>
      <Callout>Dos aplicaciones pueden usar el mismo modelo y dar resultados distintos: pueden enviarle instrucciones e información diferentes.</Callout>
      <PresenterNotes time="0:00–1:30"><p>Abre con «¿Estoy hablando con un modelo o usando una aplicación?». Señala las dos definiciones. Explica que guardar un chat es una función del producto, no una prueba de memoria permanente del modelo. Sin demo en este tramo.</p></PresenterNotes>
    </Block>

    <Block title="2. Una respuesta, pieza a pieza" id="tokens">
      <p>El texto se divide en <strong>tokens</strong>: unidades que pueden ser palabras, partes de palabras, espacios o signos. <strong>Un token no siempre equivale a una palabra.</strong></p>
      <ArchitectureFlow label="GENERACIÓN · EL CICLO SE REPITE" steps={[
        { name: 'Contexto', detail: 'Información disponible' },
        { name: 'Probabilidades', detail: 'Posibles tokens siguientes' },
        { name: 'Elegir y añadir', detail: 'La pieza pasa al contexto' },
        { name: 'Repetir', detail: 'Hasta terminar la respuesta' },
      ]}/>
      <p>En cada paso se calcula una nueva distribución. Cambiar el contexto o una pieza ya generada puede cambiar lo que viene después. Esas probabilidades describen continuaciones, no la certeza de un hecho.</p>
      <FundamentalsDemo/>
      <details className="optional-detail"><summary>Opcional · qué hay dentro del modelo</summary><p>Muchos LLM usan una arquitectura Transformer. Trabajan con representaciones numéricas de tokens y relacionan posiciones del contexto mediante mecanismos como attention. El dibujo muestra el ciclo de generación, no todas esas operaciones internas.</p><p>En un modelo real, la selección depende de la configuración y puede incluir muestreo: no siempre se elige el token más probable.</p></details>
      <PresenterNotes time="1:30–4:30"><p>Escribe «La inteligencia artificial» y señala las partes de palabras. Cambia de cielo a tormenta y compara las barras antes de avanzar. Pulsa «Añadir siguiente pieza» tres veces: en cada paso señala la secuencia y la distribución nueva. Reinicia. Aclara que las piezas, cifras y elecciones son pedagógicas; no se está ejecutando un LLM. Omite el bloque técnico en la grabación principal.</p></PresenterNotes>
    </Block>

    <Block title="3. Entrenar y conversar son momentos distintos" id="entrenamiento">
      <ConceptGrid items={[
        { name: 'Entrenamiento · aprende patrones', text: 'Se ajustan los parámetros del modelo usando datos. Es un proceso separado de esta conversación.' },
        { name: 'Uso · aplica esos patrones', text: 'El modelo genera una respuesta con sus parámetros y el contexto recibido. Es lo que ocurre cuando envías una petición.' },
      ]}/>
      <p>Si corriges una respuesta y el modelo se adapta en el siguiente mensaje, puede estar usando esa corrección dentro del contexto. <strong>Eso no significa que se haya reentrenado.</strong></p>
      <Callout title="HISTORIAL, MEMORIA Y ENTRENAMIENTO">La aplicación puede guardar chats o preferencias y volver a incluirlos. Eso no significa que el modelo recuerde todo permanentemente. El posible uso posterior de conversaciones para entrenar depende del servicio y de sus ajustes; es otro proceso.</Callout>
      <PresenterNotes time="4:30–6:00"><p>Ejemplo oral: «Me llamo Ana» → «¿Cómo me llamo?». Puede responder si ese dato sigue en el contexto. No prometas que desaparecerá de todos los sistemas al cerrar el chat: distingue contexto, almacenamiento de la aplicación y entrenamiento posterior. Sin demo.</p></PresenterNotes>
    </Block>

    <Block title="4. El contexto es su mesa de trabajo" id="contexto">
      <p>El <strong>contexto</strong> es la información disponible para generar esta respuesta. Tu último mensaje es solo una parte.</p>
      <ConceptGrid items={[
        { name: 'Qué puede incluir', text: 'Instrucciones de la aplicación, tu petición, mensajes anteriores seleccionados, texto de archivos, datos que aportas y ejemplos. También las piezas que se van generando.' },
        { name: 'Por qué el límite importa', text: 'La ventana de contexto tiene un límite de tokens. La entrada y la generación comparten un presupuesto, con límites adicionales según el modelo. Una conversación larga puede resumirse o perder partes.' },
      ]}/>
      <Callout title="UN DATO CLAVE TIENE QUE ESTAR DISPONIBLE">«Te pasé el horario hace cien mensajes» no asegura que siga en el contexto. Repite los datos importantes y aporta solo la información relevante. Que algo quepa tampoco garantiza que se use bien.</Callout>
      <PresenterNotes time="6:00–7:30"><p>Usa la metáfora de una mesa con espacio limitado. Señala petición, historial, archivo y ejemplo. Recupera verbalmente el cambio de cielo a tormenta de la demo: misma tarea, contexto diferente. No abras otra demo.</p></PresenterNotes>
    </Block>

    <Block title="5. Sonar convincente no es comprobar" id="verificacion">
      <p>Preguntas «¿A qué hora cierra hoy la tienda?» sin indicar qué tienda ni aportar su horario. Una respuesta como «A las 20:00» puede sonar natural y ser inventada.</p>
      <p>Un modelo puede producir afirmaciones falsas, mezclar datos o inventar fuentes: se suele llamar <strong>alucinación</strong>. Generar texto no garantiza verificar hechos, aunque la redacción sea segura.</p>
      <ConceptGrid items={[
        { name: 'Comprueba antes de usar', text: 'Fechas, cifras, citas, horarios, datos actuales y cualquier respuesta que vaya a guiar una decisión importante. Contrasta con la fuente original o una comprobación independiente; pedirle que confirme no basta.' },
        { name: 'Si faltan datos, pregunta primero', text: 'Para el horario faltan la tienda, la ubicación, la fecha y una fuente vigente. Lo útil es pedirlos o declarar el límite; no completar los huecos con hechos inventados.' },
        { name: 'Para un borrador creativo', text: 'Revisa si sirve a tu objetivo y respeta las instrucciones. Si incluye hechos, verifica esos hechos también.' },
      ]}/>
      <PresenterNotes time="7:30–9:00"><p>Lee «A las 20:00» con seguridad y pregunta al espectador qué evidencia tiene. Contrasta con «¿De qué tienda y de qué día hablamos?». No llames al modelo para comprobarse a sí mismo. Sin demo.</p></PresenterNotes>
    </Block>

    <Block title="6. Una petición que permite trabajar" id="peticiones">
      <p>Un <strong>prompt</strong> es la petición que das al modelo. Para reducir ambigüedad, indica <strong>objetivo, contexto, restricciones y un ejemplo</strong>. No es una fórmula mágica: ayuda a definir lo que necesitas.</p>
      <PromptComparison/>
      <Callout>Una petición más clara orienta la respuesta, pero no convierte datos inventados en datos verdaderos.</Callout>
      <PresenterNotes time="9:00–11:30"><p>Lee la petición vaga y muestra su respuesta preparada. Cambia a «Petición con información». Señala los cuatro ingredientes y muestra el segundo borrador. Haz notar que no se promete una fecha de entrega. Son ejemplos escritos de antemano, no resultados medidos de un modelo.</p></PresenterNotes>
    </Block>

    <Block title="7. Tres ideas para llevarte" id="cierre">
      <ol className="key-takeaways">
        <li><strong>El modelo genera paso a paso.</strong> La aplicación decide qué contexto le llega.</li>
        <li><strong>Contexto no es reentrenamiento ni memoria ilimitada.</strong> Aporta los datos que necesita esta respuesta.</li>
        <li><strong>Claridad y verificación van juntas.</strong> Define la petición, reconoce lo que falta y comprueba los hechos.</li>
      </ol>
      <PromptExercise/>
      <PresenterNotes time="11:30–13:30 · margen hasta 15:00"><p>Recapitula las tres ideas. Lee el ejercicio, deja una pausa y escribe una mejora en el campo. Pregunta qué datos faltan antes de abrir «Ver una posible mejora». La guía propone preguntas; no inventa las condiciones de devolución. Dedica el margen a la respuesta del espectador.</p><p>Referencias técnicas: <a href="https://huggingface.co/learn/llm-course/en/chapter2/4" target="_blank" rel="noreferrer">Tokens · Hugging Face</a>, <a href="https://huggingface.co/learn/llm-course/en/chapter1/4" target="_blank" rel="noreferrer">Entrenamiento y generación · Hugging Face</a>, <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" target="_blank" rel="noreferrer">Contexto · Anthropic</a> y <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices" target="_blank" rel="noreferrer">Peticiones claras y ejemplos · Anthropic</a>.</p></PresenterNotes>
    </Block>
  </>;
}
