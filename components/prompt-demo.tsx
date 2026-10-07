'use client';
import { useState } from 'react';
import { DemoFrame, Label } from './ui';

export function PromptComparison() {
  const [clear, setClear] = useState(false);
  const [show, setShow] = useState(false);
  function choose(value: boolean) { setClear(value); setShow(false); }
  return <DemoFrame id="comparacion" title="La misma tarea, dos peticiones" kicker="Preparar un mensaje a un cliente sobre un pedido retrasado. Compara lo que le estás dando al modelo.">
    <p className="demo-explanation">Nuestro objetivo es comunicar un retraso. Primero veremos qué ocurre si solo pedimos «algo para un cliente». Después añadiremos los datos que hacen falta para preparar ese mensaje.</p>
    <div className="recording-controls prompt-switch" role="group" aria-label="Tipo de petición">
      <button className="prompt-choice" aria-pressed={!clear} onClick={() => choose(false)}>Petición vaga</button>
      <button className="prompt-choice" aria-pressed={clear} onClick={() => choose(true)}>Petición con información</button>
    </div>
    <div className="prompt-example" aria-live="polite" aria-atomic="true">{clear ? <dl className="prompt-ingredients">
      <div><dt>Objetivo</dt><dd>Redacta un mensaje para avisar a un cliente del retraso de su pedido.</dd></div>
      <div><dt>Contexto</dt><dd>El pedido debía salir hoy. Aún no ha salido y no tenemos una nueva fecha confirmada.</dd></div>
      <div><dt>Restricciones</dt><dd>Máximo 60 palabras, tono cercano y profesional. No inventes fechas ni compensaciones. Indica que avisaremos cuando haya una fecha confirmada.</dd></div>
      <div><dt>Ejemplo de tono</dt><dd>«Hola, te escribimos para mantenerte al tanto de tu pedido».</dd></div>
    </dl> : <><Label>Petición</Label><p>«Escribe algo para un cliente».</p><p className="demo-explanation">Esta petición no explica qué ha ocurrido ni qué queremos comunicar. Tampoco define el tono o los límites. Al mostrar el ejemplo, veremos un mensaje genérico que podría servir para muchas situaciones.</p></>}</div>
    {clear && <p className="demo-explanation">Ahora sí hemos definido la tarea. El dato que sigue faltando es la nueva fecha: por eso pedimos que no la invente. El ejemplo de tono ayuda a concretar qué significa «cercano».</p>}
    <button className="text-button" aria-expanded={show} aria-controls="comparison-response" onClick={() => setShow(value => !value)}>{show ? 'Ocultar respuesta de ejemplo' : 'Mostrar respuesta de ejemplo'}</button>
    {show && <div className="prepared-response" id="comparison-response"><Label>Respuesta escrita de antemano · ejemplo ilustrativo</Label><p>{clear ? 'Hola, tu pedido debía salir hoy, pero aún no ha salido. Sentimos el retraso. Todavía no tenemos una nueva fecha confirmada; te avisaremos en cuanto la tengamos. Gracias por tu paciencia.' : 'Estimado cliente: gracias por confiar en nosotros. Estamos a su disposición para cualquier consulta. Reciba un cordial saludo.'}</p><p className="demo-explanation response-explanation">{clear ? 'Este borrador ya comunica el retraso, usa los hechos aportados y reconoce que falta una fecha. Hemos reducido la ambigüedad sin inventar información. Antes de enviarlo, revisaríamos que coincide con la situación real.' : 'El mensaje suena educado, pero no avisa del retraso. El problema es que no habíamos explicado esa tarea. Cambia a «Petición con información» para ver qué cambia cuando aportamos objetivo, contexto, restricciones y un ejemplo.'}</p></div>}
    <p className="fine-print">Simulación local: ambas respuestas están preparadas. La comparación no ejecuta un LLM ni garantiza que un modelo responda así.</p>
    <button className="text-button" onClick={() => { setClear(false); setShow(false); }}>Restablecer comparación ↺</button>
  </DemoFrame>;
}

export function PromptExercise() {
  const [request, setRequest] = useState('');
  const [missing, setMissing] = useState('');
  const [show, setShow] = useState(false);
  return <div className="prompt-exercise" id="ejercicio-final">
    <h3>Tu turno · mejora la petición</h3>
    <p className="exercise-request">«Responde a este cliente y dile si puede devolverlo».</p>
    <p>Antes de responder, pensemos: ¿qué quiere devolver?, ¿cuándo lo compró?, ¿en qué estado está?, ¿qué dice la política vigente? No tenemos esos datos ni el mensaje original del cliente.</p>
    <p>Podemos mejorar la petición sin inventarlos: pedimos primero la información necesaria y explicamos cómo preparar el borrador cuando la tengamos. Escribe tu versión o abre la guía para ver una posible solución.</p>
    <label className="field-label" htmlFor="exercise-request">Tu petición mejorada</label>
    <textarea id="exercise-request" rows={4} maxLength={1500} value={request} onChange={e => setRequest(e.target.value)} placeholder="Objetivo, contexto, restricciones y ejemplo de tono…"/>
    <label className="field-label" htmlFor="exercise-missing">¿Qué datos faltan?</label>
    <textarea id="exercise-missing" rows={2} maxLength={800} value={missing} onChange={e => setMissing(e.target.value)} placeholder="¿Qué preguntarías antes de responder?"/>
    <div className="recording-controls"><button className="primary-button" aria-expanded={show} aria-controls="exercise-guide" onClick={() => setShow(value => !value)}>{show ? 'Ocultar guía' : 'Ver una posible mejora'}</button><button className="text-button" onClick={() => { setRequest(''); setMissing(''); setShow(false); }}>Restablecer ejercicio ↺</button></div>
    {show && <div className="prepared-response" id="exercise-guide"><Label>Una posible mejora · sin evaluación automática</Label><p>Ayúdame a redactar una respuesta sobre una devolución. Primero pídeme el mensaje del cliente, el producto, la fecha de compra, su estado y la política vigente. Cuando te los dé, prepara un borrador breve y amable. No prometas una devolución si no está respaldada por la política; señala las dudas. Ejemplo de tono: «Hola, gracias por escribirnos. Vamos a revisar tu caso».</p><p><strong>Falta:</strong> el mensaje original, qué quiere devolver, cuándo lo compró, en qué estado está y qué condiciones se aplican.</p><p><strong>Por qué mejora:</strong> define la tarea, pide los datos que faltan, limita lo que se puede prometer y da un ejemplo de tono. Todavía no decide si la devolución está permitida: primero necesita la política y los datos del caso.</p><p><strong>Antes de enviarlo:</strong> comprueba que la respuesta coincide con el caso y con la política vigente.</p></div>}
    <p className="fine-print">Práctica local: lo que escribes no se envía a ningún modelo ni se guarda al recargar.</p>
  </div>;
}
