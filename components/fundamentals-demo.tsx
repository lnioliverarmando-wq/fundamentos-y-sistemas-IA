'use client';
import { useState } from 'react';
import { DemoFrame, Label } from './ui';

const defaults = 'La inteligencia artificial está cambiando empresas';
function tokenize(text: string) {
  return (text.match(/\s+|[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu) || [])
    .flatMap(word => word.trim().length > 6 ? [word.slice(0, 4), word.slice(4)] : [word])
    .filter(x => x.trim());
}
type Scenario = { label: string; prefix: string; pieces: string[]; probabilities: [string, number][][] };
const scenarios: Record<string, Scenario> = {
  cielo: { label: 'El cielo es de color…', prefix: 'El cielo es de color', pieces: [' azul', ' claro', '.'], probabilities: [
    [[' azul', 73], [' gris', 11], [' blanco', 6], ['otros', 10]],
    [[' claro', 55], [' intenso', 25], ['.', 12], ['otros', 8]],
    [['.', 70], [' hoy', 15], [',', 10], ['otros', 5]],
  ] },
  nublado: { label: 'Hay nubes de tormenta. El cielo es…', prefix: 'Hay nubes de tormenta. El cielo es', pieces: [' gris', ' oscuro', '.'], probabilities: [
    [[' gris', 61], [' azul', 17], [' blanco', 14], ['otros', 8]],
    [[' oscuro', 66], [' claro', 12], ['.', 15], ['otros', 7]],
    [['.', 75], [' hoy', 10], [',', 10], ['otros', 5]],
  ] },
  sed: { label: 'Tengo sed. Voy a beber…', prefix: 'Tengo sed. Voy a beber', pieces: [' agua', ' fresca', '.'], probabilities: [
    [[' agua', 68], [' café', 15], [' té', 9], ['otros', 8]],
    [[' fresca', 52], [' fría', 28], ['.', 15], ['otros', 5]],
    [['.', 80], [' ahora', 10], [',', 5], ['otros', 5]],
  ] },
};

export function FundamentalsDemo() {
  const [input, setInput] = useState(defaults);
  const [prompt, setPrompt] = useState('cielo');
  const [step, setStep] = useState(0);
  const tokens = tokenize(input);
  const scenario = scenarios[prompt];
  const done = step === scenario.pieces.length;
  function reset() { setInput(defaults); setPrompt('cielo'); setStep(0); }
  return <DemoFrame title="Del texto a las probabilidades" kicker="Divide una frase en piezas ilustrativas. Después, construye una continuación a tu ritmo.">
    <label className="field-label" htmlFor="token-input">Tu texto</label>
    <textarea id="token-input" value={input} maxLength={240} onChange={e => setInput(e.target.value)} rows={2}/>
    <div className="token-meta"><Label>Piezas ilustrativas</Label><span>{tokens.length} piezas · {input.length}/240 caracteres</span></div>
    <div className="tokens" aria-live="polite">{tokens.length ? tokens.map((x, i) => <span key={i}>{x}<small>{String(i + 1).padStart(2, '0')}</small></span>) : <p>Escribe una frase para ver cómo se divide.</p>}</div>
    <p className="fine-print">División pedagógica, no un tokenizer real. Omite espacios y corta palabras largas con una regla simple. Los tokens reales dependen del modelo y pueden incluir espacios, signos o partes de palabras.</p>
    <div className="demo-divider"/>
    <label className="field-label" htmlFor="prompt-context">Contexto disponible</label>
    <select id="prompt-context" value={prompt} onChange={e => { setPrompt(e.target.value); setStep(0); }}>
      {Object.entries(scenarios).map(([key, item]) => <option value={key} key={key}>{item.label}</option>)}
    </select>
    <div className="generation-sequence" aria-live="polite" aria-atomic="true"><Label>Secuencia · {step} de 3 piezas añadidas</Label><p>{scenario.prefix}<strong>{scenario.pieces.slice(0, step).join('')}</strong><span className="generation-cursor" aria-hidden="true">▍</span></p></div>
    <div className="prediction-grid">
      <div><Label>{done ? 'Fin del ejemplo' : `Siguiente pieza · paso ${step + 1}`}</Label><h4>{done ? 'La continuación está completa.' : 'El contexto cambia las probabilidades.'}</h4><p>{done ? 'Estas tres piezas son una continuación preparada. Un modelo real puede producir otras y detenerse de otra forma.' : 'Añadir una pieza cambia la secuencia disponible. El siguiente paso usa también lo que ya se ha generado.'}</p></div>
      <div className="probabilities" aria-live="polite" aria-atomic="true">{!done && scenario.probabilities[step].map(([word, probability]) => <div className="prob-row" key={word}><div><span>{word}</span><span>{probability}%</span></div><div className="prob-track"><span style={{ width: `${probability}%` }}/></div></div>)}{done && <p className="generation-complete">{scenario.pieces.join('')} <span aria-hidden="true">✓</span></p>}</div>
    </div>
    <div className="recording-controls"><button className="primary-button" disabled={done} onClick={() => setStep(s => Math.min(s + 1, 3))}>Añadir siguiente pieza →</button><button className="text-button" onClick={() => setStep(0)}>Reiniciar secuencia ↺</button></div>
    <p className="fine-print">Simulación: piezas y probabilidades inventadas, sin conexión a un modelo. Aquí siempre elegimos la opción más probable y terminamos tras tres pasos; en un LLM real la selección y la parada pueden variar.</p>
    <button className="text-button" onClick={reset}>Restablecer laboratorio ↺</button>
  </DemoFrame>;
}
