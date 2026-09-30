import { PresentationLink as Link, Shell } from '@/components/shell';
import { LessonGlyph, SystemOverview } from '@/components/course-graphics';
import { lessons } from '@/lib/lessons';

export default function Home() {
  return (
    <Shell>
      <div className="home">
        <section className="course-hero" aria-labelledby="hero-title">
          <p className="course-meta">Formación en inteligencia artificial</p>
          <h1 id="hero-title">Fundamentos<br/><span>y sistemas de IA</span></h1>
          <p className="course-description">Aprende cómo funciona un modelo de lenguaje, cómo conectarlo a tus documentos y cómo construir sistemas con herramientas, evaluación y control humano.</p>
          <div className="course-actions"><Link href="/lecciones/01-fundamentos-ia/" className="primary-button">Empezar la primera lección <span aria-hidden="true">→</span></Link><span>5 lecciones · 5 ejercicios</span></div>
          <SystemOverview/>
        </section>
        <section className="curriculum" id="recorrido" aria-labelledby="curriculum-title">
          <div className="curriculum-heading"><h2 id="curriculum-title">Las cinco lecciones</h2><p>Sigue el orden o ve directamente a un tema.</p></div>
          <ol className="lesson-list">
            {lessons.map((lesson, index) => (
              <li key={lesson.slug}>
                <Link className="lesson-row" href={'/lecciones/' + lesson.slug + '/'}>
                  <span className="lesson-number" aria-hidden="true">0{index + 1}</span>
                  <div><h3>{lesson.short}</h3><p>{lesson.description}</p></div>
                  <span className="lesson-row-art"><LessonGlyph index={index}/></span><span className="row-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </Shell>
  );
}
