import { PresentationLink as Link, Shell } from '@/components/shell';
import { lessons } from '@/lib/lessons';

export default function Home() {
  return (
    <Shell>
      <div className="home flight-manual">
        <section className="flight-hero" aria-labelledby="hero-title">
          <div className="flight-topline">
            <span>CUADERNO 001</span>
            <span>INTELIGENCIA ARTIFICIAL / SISTEMAS</span>
            <span>01 — 05</span>
          </div>
          <div className="flight-title-row">
            <h1 id="hero-title"><span>IA</span><span>APLICADA</span></h1>
            <div className="flight-annotation">
              <span className="annotation-cross" aria-hidden="true">+</span>
              <p>Comprender el modelo.<br/>Construir el sistema.</p>
              <span className="annotation-ref">FORMACIÓN TÉCNICA<br/>LA NUEVA INDUSTRIA</span>
            </div>
          </div>
          <div className="flight-baseline"><span>CONOCIMIENTO QUE SE CONSTRUYE</span><span>DESPLAZA PARA EXPLORAR <b aria-hidden="true">↓</b></span></div>
          <div className="flight-intro">
            <div className="intro-number" aria-hidden="true">[ 001 ]</div>
            <p>De la primera pregunta<br/>a un sistema que funciona.</p>
            <div className="intro-action"><p>Cinco lecciones para entender modelos, conectar conocimiento y construir con herramientas.</p><Link href="/lecciones/01-fundamentos-ia/" className="primary-button">Iniciar recorrido <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="curriculum" id="recorrido" aria-labelledby="curriculum-title">
          <div className="curriculum-heading"><div><span className="label">PROGRAMA / 5 LECCIONES</span><h2 id="curriculum-title">DEL MODELO<br/>AL SISTEMA.</h2></div><p>Una idea. Una arquitectura.<br/>Una prueba que puedes ejecutar.</p></div>
          <div className="curriculum-columns" aria-hidden="true"><span>N.º</span><span>ÁREA DE CONOCIMIENTO</span><span>RECORRIDO</span></div>
          {lessons.map((lesson,index)=>(
            <Link className="lesson-row" key={lesson.slug} href={'/lecciones/'+lesson.slug+'/'}>
              <span className="lesson-number">0{index+1}</span>
              <div className="lesson-row-copy"><span className="label lesson-tag">{lesson.tag}</span><h3>{lesson.short}</h3><p>{lesson.description}</p></div>
              <span className="row-meta"><span>{lesson.duration}<br/>+ laboratorio</span><span className="row-arrow" aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </section>
        <div className="flight-closing"><span className="label">LA NUEVA INDUSTRIA</span><p>ENTENDER.<br/>CONSTRUIR.<br/><span>COMPROBAR.</span></p><span className="closing-ref">IA APLICADA<br/>CUADERNO 001<br/>5 LECCIONES</span></div>
      </div>
    </Shell>
  );
}
