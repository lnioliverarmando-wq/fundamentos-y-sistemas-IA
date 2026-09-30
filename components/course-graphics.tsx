/** Small, code-native diagrams: each mark represents a lesson's central idea. */
export function LessonGlyph({ index }: { index: number }) {
  return <svg className="lesson-glyph" viewBox="0 0 80 64" fill="none" aria-hidden="true">
    {index === 0 && <>
      <path d="M10 18h60M10 32h60M10 46h60" stroke="currentColor" opacity=".15" />
      {[0, 1, 2].map(row => [0, 1, 2, 3, 4].map(col => <rect key={`${row}-${col}`} x={10 + col * 13} y={12 + row * 14} width="8" height="10" rx="1" fill="currentColor" opacity={col === row + 1 ? 1 : .15 + (col % 3) * .1} />))}
      <path d="M65 53h6m-2-2 2 2-2 2" stroke="currentColor" />
    </>}
    {index === 1 && <>
      <circle cx="31" cy="29" r="21" stroke="currentColor" opacity=".2" />
      <circle cx="31" cy="29" r="13" stroke="currentColor" opacity=".45" />
      <path d="m46 44 16 13" stroke="currentColor" strokeWidth="2" />
      {[[26,23],[36,30],[25,35],[41,17],[56,16],[65,31],[10,49]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r={i<3?3:2} fill="currentColor" opacity={i<3?1:.3}/>)}
    </>}
    {index === 2 && <>
      <path d="M12 16h56M12 32h56M12 48h56" stroke="currentColor" opacity=".35" />
      <circle cx="28" cy="16" r="5" fill="currentColor" /><circle cx="53" cy="32" r="5" fill="currentColor" /><circle cx="38" cy="48" r="5" fill="currentColor" />
      <path d="M28 16h40M53 32h15M38 48h30" stroke="currentColor" opacity=".15" />
    </>}
    {index === 3 && <>
      <rect x="9" y="22" width="21" height="21" rx="3" stroke="currentColor" />
      <path d="M15 32h9m-5-4 4 4-4 4M30 32h14m0 0V13h9M44 32h9M44 32v19h9" stroke="currentColor" />
      {[6,25,44].map(y=><rect key={y} x="53" y={y} width="16" height="14" rx="2" fill="currentColor" opacity={y===25?1:.2}/>)}
    </>}
    {index === 4 && <>
      <path d="m15 32 25-20 25 20-25 20-25-20h50M40 12v40" stroke="currentColor" opacity=".4" />
      {[[15,32],[40,12],[65,32],[40,52]].map(([cx,cy])=><circle key={cx+cy} cx={cx} cy={cy} r="5" fill="var(--paper)" stroke="currentColor"/>)}
      <circle cx="40" cy="32" r="7" fill="currentColor" />
    </>}
  </svg>;
}

export function SystemOverview() {
  return <figure className="system-overview">
    <figcaption>Del modelo al sistema <span>Una vista de conjunto</span></figcaption>
    <div className="overview-flow">
      <div className="overview-node"><span className="overview-document" aria-hidden="true"><i/><i/><i/></span><strong>Tu pregunta</strong><small>Define el objetivo</small></div>
      <span className="overview-arrow" aria-hidden="true">→</span>
      <div className="overview-node overview-model"><LessonGlyph index={0}/><strong>Modelo de lenguaje</strong><small>Interpreta y genera</small></div>
      <span className="overview-arrow" aria-hidden="true">→</span>
      <div className="overview-node"><span className="overview-document overview-answer" aria-hidden="true"><i/><i/><i/></span><strong>Una respuesta útil</strong><small>Se comprueba y revisa</small></div>
    </div>
    <div className="overview-support"><span>Conocimiento</span><span>Herramientas</span><span>Controles</span></div>
    <p>La aplicación conecta estas piezas y controla lo que se ejecuta.</p>
  </figure>;
}
