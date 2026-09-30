'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { lessons } from '@/lib/lessons';

function usePresentation() {
  const [present, setPresent] = useState(false);
  useEffect(() => {
    const sync = () => setPresent(new URLSearchParams(window.location.search).get('present') === 'true');
    sync();
    window.addEventListener('popstate', sync);
    window.addEventListener('presentationchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('presentationchange', sync);
    };
  }, []);
  return present;
}

export function PresentationLink({ href, children, ...props }: { href: string; children: React.ReactNode; className?: string }) {
  const present = usePresentation();
  return <Link {...props} href={href + (present ? '?present=true' : '')}>{children}</Link>;
}

export function Shell({ children, index }: { children: React.ReactNode; index?: number }) {
  const present = usePresentation();
  const suffix = present ? '?present=true' : '';
  function toggle() {
    const url = new URL(window.location.href);
    if (present) url.searchParams.delete('present');
    else url.searchParams.set('present', 'true');
    window.history.replaceState(null, '', url);
    window.dispatchEvent(new Event('presentationchange'));
  }
  return (
    <div className={present ? 'site presentation' : 'site'}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <Link href={'/' + suffix} className="brand" aria-label="La Nueva Industria, inicio"><span className="brand-symbol" aria-hidden="true"><i/><i/><i/></span><span className="brand-wordmark">La Nueva<br/><strong>Industria</strong></span></Link>
        <nav aria-label="Navegación principal">
          <Link className="index-link" href={'/lecciones/' + suffix}>Índice</Link>
          {index !== undefined && <>
            {index > 0 && <Link className="header-step" href={'/lecciones/' + lessons[index - 1].slug + '/' + suffix}>Anterior</Link>}
            {index < lessons.length - 1 && <Link className="header-step" href={'/lecciones/' + lessons[index + 1].slug + '/' + suffix}>Siguiente <span aria-hidden="true">→</span></Link>}
          </>}
          <button className="present-button" onClick={toggle} aria-pressed={present}>{present ? 'Salir de presentación' : 'Modo presentación'}</button>
        </nav>
      </header>
      <main id="contenido">{children}</main>
      <footer className="site-footer secondary"><span className="footer-brand">La Nueva Industria<span className="footer-dot" aria-hidden="true">.</span></span><span>Fundamentos y sistemas de IA</span></footer>
    </div>
  );
}

export function LessonFooter({ index }: { index: number }) {
  const present = usePresentation();
  const suffix = present ? '?present=true' : '';
  const next = lessons[index + 1];
  const previous = lessons[index - 1];
  return (
    <nav className="lesson-footer" aria-label="Navegación entre lecciones">
      {next ? <Link className="next-lesson" href={'/lecciones/' + next.slug + '/' + suffix}><span><small>Siguiente · Lección {index + 2} de 5</small>{next.short}</span><span aria-hidden="true">→</span></Link>
        : <p className="course-complete">Has llegado al final de las cinco lecciones. Puedes volver al índice para repasar cualquier tema.</p>}
      <div className="lesson-footer-links">{previous && <Link className="text-link" href={'/lecciones/' + previous.slug + '/' + suffix}>← Lección anterior</Link>}<Link className="text-link" href={'/lecciones/' + suffix}>Volver al índice</Link></div>
    </nav>
  );
}

export function LessonProgress({ index }: { index: number }) {
  const present = usePresentation();
  return <nav className="lesson-progress" aria-label="Posición en el módulo">{lessons.map((lesson, i) => <Link key={lesson.slug} href={'/lecciones/' + lesson.slug + '/' + (present ? '?present=true' : '')} aria-label={'Lección ' + (i + 1) + ': ' + lesson.short} aria-current={i === index ? 'page' : undefined} title={lesson.short}><span>{i + 1}</span></Link>)}</nav>;
}
