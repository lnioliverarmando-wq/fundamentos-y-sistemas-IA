import type { ReactNode } from 'react';
import { ArchitectureFlow, Block, Callout, ConceptGrid } from './ui';
import { FundamentalsDemo } from './fundamentals-demo';
import { PromptComparison, PromptExercise } from './prompt-demo';

function PresenterNotes({ time, children }: { time: string; children: ReactNode }) {
  return <details className="presenter-notes"><summary>Notas para el presentador · {time}</summary><div>{children}</div></details>;
}
function Bridge({ children }: { children: ReactNode }) {
  return <p className="lesson-bridge">{children}</p>;
}
function Example({ title, children }: { title: string; children: ReactNode }) {
  return <figure className="lesson-example"><figcaption>{title}</figcaption>{children}</figure>;
}

export function Foundations() {
  return <>
    <div className="lesson-opening">
      <p>Antes de pedirle cosas a una IA, vamos a entender qué estamos usando. Veremos cómo construye una respuesta, por qué puede equivocarse y cómo darle una petición que pueda resolver mejor.</p>
      <p>Vamos a seguir un recorrido sencillo: <strong>entender el modelo, darle información útil y revisar lo que responde.</strong></p>
    </div>
    <Block title="1. El modelo y la aplicación" id="modelo">
      <p>Un <strong>LLM</strong> es un modelo de lenguaje de gran tamaño. Las siglas vienen del inglés: Large Language Model. Durante su entrenamiento aprende patrones a partir de muchos textos. Después utiliza lo aprendido para generar respuestas con la información que recibe.</p>
      <p>¿Qué significa aprender patrones? Aprender relaciones: cómo se construyen las frases, cómo se explica un concepto o cómo suele redactarse un mensaje. Eso permite que el modelo redacte, resuma y responda preguntas.</p>
      <Example title="Una comparación sencilla · el motor y el coche">
        <p>Podemos pensar en el <strong>modelo como el motor</strong> y en la <strong>aplicación como el coche completo</strong>. El motor aporta una capacidad; el coche añade los controles y la forma de utilizarla.</p>
      </Example>
      <ConceptGrid items={[
        { name: 'Modelo · genera la respuesta', text: 'Recibe información y calcula cómo continuar. Es la pieza que produce el texto.' },
        { name: 'Aplicación · organiza la experiencia', text: 'Es el producto que utilizamos: la pantalla, los botones, el historial, los archivos y los ajustes. Decide qué enviar al modelo y qué mostrarnos.' },
      ]}/>
      <p>Por eso, dos aplicaciones que utilizan el mismo modelo pueden dar respuestas distintas. Una puede enviarle instrucciones o información que la otra no le envía.</p>
      <Callout>Cuando usamos un chat de IA, usamos una aplicación que se comunica con un modelo. El modelo y el producto completo son cosas diferentes.</Callout>
      <Bridge>Ahora que distinguimos las dos piezas, vamos a mirar cómo el modelo construye una respuesta.</Bridge>
      <PresenterNotes time="0:00–1:30"><p>Lee la apertura y la comparación del motor. Señala las dos definiciones. El texto visible contiene toda la explicación; las notas solo organizan el ritmo.</p></PresenterNotes>
    </Block>

    <Block title="2. Una respuesta, pieza a pieza" id="tokens">
      <p>Para trabajar con el texto, el modelo lo divide en pequeñas unidades llamadas <strong>tokens</strong>. Un token puede ser una palabra, una parte de palabra o un signo. Algunos también incluyen espacios.</p>
      <p>Así que <strong>una palabra no siempre equivale a un token</strong>. En el ejemplo de abajo veremos palabras divididas en varias piezas. Es una representación simplificada para entender la idea.</p>
      <p>Después, la respuesta se construye paso a paso. A partir de lo que tiene delante, el modelo calcula distintas continuaciones y sus probabilidades. Se elige una pieza, se añade a la secuencia y se vuelve a calcular qué puede venir después.</p>
      <ArchitectureFlow label="CÓMO SE CONSTRUYE LA RESPUESTA" steps={[
        { name: 'Leer el contexto', detail: 'Qué información tiene delante' },
        { name: 'Calcular opciones', detail: 'Qué piezas podrían venir después' },
        { name: 'Añadir una pieza', detail: 'La secuencia cambia' },
        { name: 'Volver a calcular', detail: 'El ciclo se repite hasta terminar' },
      ]}/>
      <FundamentalsDemo/>
      <Callout title="QUÉ SIGNIFICAN LAS PROBABILIDADES">Las probabilidades indican posibles continuaciones. No indican cuánto podemos confiar en que un hecho sea verdadero. Una frase puede encajar muy bien y contener un dato equivocado.</Callout>
      <details className="optional-detail"><summary>Opcional · qué hay dentro del modelo</summary><p>Muchos LLM usan una arquitectura Transformer. Trabajan con representaciones numéricas de tokens y relacionan posiciones del contexto mediante mecanismos como attention. El dibujo muestra el ciclo de generación, no todas esas operaciones internas.</p><p>En un modelo real, la selección depende de la configuración y puede incluir muestreo: no siempre se elige el token más probable, como hace esta demo.</p></details>
      <Bridge>Hemos visto cómo genera texto. Pero utilizar lo que ha aprendido no es lo mismo que estar aprendiendo de nuevo en cada conversación.</Bridge>
      <PresenterNotes time="1:30–4:30"><p>Señala las piezas del texto que ya está cargado. Compara cielo y tormenta antes de avanzar. Pulsa «Añadir siguiente pieza» tres veces y lee la explicación que cambia en cada paso. Omite el bloque técnico durante el recorrido principal.</p></PresenterNotes>
    </Block>

    <Block title="3. Entrenar y conversar son momentos distintos" id="entrenamiento">
      <p>Pensemos en la diferencia entre <strong>estudiar y utilizar lo que hemos estudiado</strong>. Es una comparación útil para separar dos momentos del modelo.</p>
      <ConceptGrid items={[
        { name: 'Durante el entrenamiento · aprende patrones', text: 'Se ajusta el modelo usando datos. Es el proceso con el que adquiere capacidades antes de esta conversación.' },
        { name: 'Durante el uso · aplica lo aprendido', text: 'Recibe nuestra petición y la información disponible. Con eso genera una respuesta. Enviar un mensaje no implica reentrenarlo en ese instante.' },
      ]}/>
      <Example title="Ejemplo · recordar un dato dentro de la conversación">
        <p><strong>Tú:</strong> «Me llamo Ana».</p>
        <p><strong>Tú, un mensaje después:</strong> «¿Cómo me llamo?».</p>
        <p><strong>Respuesta posible:</strong> «Te llamas Ana».</p>
      </Example>
      <p>Puede responder porque el nombre sigue en la información que recibe. Eso demuestra que ha usado un dato de la conversación; <strong>no demuestra que se haya reentrenado ni que vaya a recordarlo para siempre.</strong></p>
      <p>Lo mismo ocurre si corregimos una respuesta y la siguiente sale mejor. Puede estar usando esa corrección dentro de la conversación.</p>
      <Callout title="TRES COSAS QUE CONVIENE DISTINGUIR">El contexto es lo que recibe para responder ahora. El historial o la memoria de la aplicación pueden guardar información y volver a proporcionársela. El entrenamiento modifica el modelo y es otro proceso. El uso posterior de conversaciones para entrenar depende del servicio y de sus ajustes.</Callout>
      <Bridge>Entonces, si la conversación no es una memoria ilimitada, ¿qué información tiene disponible al responder? Eso es el contexto.</Bridge>
      <PresenterNotes time="4:30–6:00"><p>Lee el diálogo de Ana. Detente en la diferencia entre usar el dato y aprenderlo permanentemente. No hace falta abrir otro chat ni ejecutar otra demo.</p></PresenterNotes>
    </Block>

    <Block title="4. El contexto es su mesa de trabajo" id="contexto">
      <p>El <strong>contexto</strong> es la información que el modelo tiene disponible para generar esta respuesta. Podemos imaginarlo como una <strong>mesa de trabajo</strong>: para resolver una tarea, necesitamos tener delante las instrucciones y los materiales adecuados.</p>
      <p>Tu último mensaje es una parte de esa mesa. La aplicación también puede incluir otras piezas:</p>
      <ul className="context-desk" aria-label="Información que puede formar parte del contexto">
        <li><strong>Instrucciones</strong><span>Qué debe hacer y qué límites respetar.</span></li>
        <li><strong>Petición e historial</strong><span>Tu pregunta y los mensajes anteriores seleccionados.</span></li>
        <li><strong>Datos y archivos</strong><span>El texto relevante que aportas para la tarea.</span></li>
        <li><strong>Ejemplos</strong><span>Una muestra del tono o del resultado que buscas.</span></li>
      </ul>
      <p>Las piezas que va generando también se incorporan a la secuencia. Lo hemos visto en la demo: lo que ya ha escrito influye en lo que viene después.</p>
      <p>Pero esa mesa tiene un tamaño limitado. La <strong>ventana de contexto</strong> tiene un límite de tokens. La entrada y la generación comparten un presupuesto, con límites adicionales según el modelo.</p>
      <Example title="Ejemplo · un horario que enviamos hace mucho">
        <p>«Te pasé el horario hace cien mensajes». Que siga apareciendo en la pantalla no garantiza que siga llegando al modelo. Una conversación larga puede resumirse o perder partes.</p>
        <p>Para esta tarea, lo útil es volver a aportar <strong>el horario vigente y la tienda concreta</strong>.</p>
      </Example>
      <Callout>Da la información importante para la tarea actual. Añadir más texto no siempre ayuda: puede introducir ruido, y que algo quepa no garantiza que el modelo lo use bien.</Callout>
      <Bridge>Ya sabemos por qué puede faltarle información. Ahora vamos a ver qué ocurre cuando responde con seguridad a pesar de que le faltan datos.</Bridge>
      <PresenterNotes time="6:00–7:30"><p>Señala las cuatro piezas de la mesa. Lee el ejemplo del horario y conecta con la sección siguiente. La analogía es una ayuda, no una descripción literal del interior del modelo.</p></PresenterNotes>
    </Block>

    <Block title="5. Sonar convincente no es comprobar" id="verificacion">
      <p>Imaginemos que preguntamos: <strong>«¿A qué hora cierra hoy la tienda?»</strong>. No hemos dicho qué tienda es, dónde está ni hemos aportado su horario.</p>
      <Example title="Dos respuestas ilustrativas · ¿cuál tiene información suficiente?">
        <p><strong>Un dato inventado:</strong> «Hoy cierra a las 20:00».</p>
        <p><strong>Una respuesta que reconoce lo que falta:</strong> «¿De qué tienda y ubicación hablamos? Necesito el horario vigente para confirmarlo».</p>
      </Example>
      <p>La primera suena clara, pero no tenemos una base para confiar en ese horario. <strong>La seguridad del tono no es una prueba.</strong></p>
      <p>El modelo puede producir afirmaciones falsas, mezclar datos o inventar fuentes. A ese tipo de error se le suele llamar <strong>alucinación</strong>. Generar texto no garantiza verificar hechos.</p>
      <ConceptGrid items={[
        { name: 'Si hay hechos importantes · comprobar', text: 'Fechas, cifras, horarios, citas y datos actuales necesitan contraste. También cualquier respuesta que vaya a guiar una decisión importante. Busca la fuente original o una comprobación independiente.' },
        { name: 'Si faltan datos · pedirlos', text: 'Para confirmar el horario faltan la tienda, la ubicación, la fecha y una fuente vigente. Lo útil es conseguirlos o reconocer el límite.' },
        { name: 'Si es un borrador creativo · revisar si sirve', text: 'Comprueba si cumple el objetivo, el tono y las instrucciones. Si ese borrador incluye hechos, verifica esos hechos también.' },
      ]}/>
      <Callout title="PREGUNTAR «¿SEGURO?» NO BASTA">El mismo modelo puede repetir el error con más seguridad. Pedirle que revise puede ayudar, pero no sustituye contrastar el dato con una fuente independiente.</Callout>
      <Bridge>Una parte del trabajo está en revisar la respuesta. Otra empieza antes: explicar bien lo que queremos pedir.</Bridge>
      <PresenterNotes time="7:30–9:00"><p>Lee las dos respuestas y señala qué falta para confirmar el horario. El contraste está escrito en pantalla; no hace falta inventar un ejemplo durante la grabación.</p></PresenterNotes>
    </Block>

    <Block title="6. Una petición que permite trabajar" id="peticiones">
      <p>Un <strong>prompt</strong> es la petición que damos al modelo. Si la petición es vaga, tiene que resolver muchas ambigüedades. Cuanto mejor definamos la tarea, más fácil será orientar y revisar la respuesta.</p>
      <p>Podemos apoyarnos en cuatro ingredientes:</p>
      <ConceptGrid items={[
        { name: 'Objetivo · qué quiero conseguir', text: 'Por ejemplo: avisar a un cliente de que su pedido se ha retrasado.' },
        { name: 'Contexto · qué necesita saber', text: 'El pedido debía salir hoy, aún no ha salido y no hay una fecha nueva confirmada.' },
        { name: 'Restricciones · qué límites debe respetar', text: 'Un mensaje breve, tono cercano y ninguna fecha ni compensación inventada.' },
        { name: 'Ejemplo · cómo quiero que suene', text: 'Una frase de referencia, como «Hola, te escribimos para mantenerte al tanto de tu pedido».' },
      ]}/>
      <p>Vamos a comparar dos peticiones para esa misma tarea. Las respuestas están escritas de antemano para que podamos ver la diferencia con calma.</p>
      <PromptComparison/>
      <Callout>La mejora consiste en definir el trabajo y aportar información útil. Una petición más clara orienta la respuesta, pero sus hechos siguen necesitando revisión.</Callout>
      <Bridge>Vamos a terminar reuniendo las tres ideas más útiles y poniéndolas en práctica con una petición incompleta.</Bridge>
      <PresenterNotes time="9:00–11:30"><p>Lee los cuatro ingredientes. Revela el borrador vago, cambia a la petición con información y revela el segundo. Lee la explicación visible debajo de cada resultado.</p></PresenterNotes>
    </Block>

    <Block title="7. Tres ideas para llevarte" id="cierre">
      <ol className="key-takeaways">
        <li><strong>El modelo genera paso a paso.</strong> La aplicación decide qué información le llega. Por eso importa tanto lo que le damos para trabajar.</li>
        <li><strong>Conversar no implica reentrenar ni recordar todo para siempre.</strong> Aporta los datos que necesita para esta respuesta.</li>
        <li><strong>Una petición clara y una respuesta revisada van juntas.</strong> Explica el objetivo, identifica lo que falta y comprueba los hechos.</li>
      </ol>
      <PromptExercise/>
      <p className="lesson-closing">Trabajar mejor con una IA empieza por definir la tarea, darle información útil y reconocer sus límites. Con esas tres cosas podemos pedir mejor y decidir con más criterio qué hacer con la respuesta.</p>
      <PresenterNotes time="11:30–13:30 · margen hasta 15:00"><p>Lee las tres ideas y el ejercicio. Deja una pausa para identificar los datos que faltan. Puedes escribir una mejora o abrir directamente la guía y leerla. Cierra con el párrafo final.</p><p>Referencias técnicas: <a href="https://huggingface.co/learn/llm-course/en/chapter2/4" target="_blank" rel="noreferrer">Tokens · Hugging Face</a>, <a href="https://huggingface.co/learn/llm-course/en/chapter1/4" target="_blank" rel="noreferrer">Entrenamiento y generación · Hugging Face</a>, <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" target="_blank" rel="noreferrer">Contexto · Anthropic</a> y <a href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices" target="_blank" rel="noreferrer">Peticiones claras y ejemplos · Anthropic</a>.</p></PresenterNotes>
    </Block>
  </>;
}
