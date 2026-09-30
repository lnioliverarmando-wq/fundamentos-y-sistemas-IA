import { notFound } from 'next/navigation';
import { lessons } from '@/lib/lessons';
import { Shell,LessonFooter } from '@/components/shell';
import { LessonContent } from '@/components/lesson-content';
export function generateStaticParams(){return lessons.map(l=>({slug:l.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const lesson=lessons.find(l=>l.slug===slug);return {title:lesson?.title,description:lesson?.description}}
export default async function LessonPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const index=lessons.findIndex(l=>l.slug===slug);if(index<0)notFound();const lesson=lessons[index];return <Shell index={index}><article className="lesson"><header className="lesson-hero"><p className="lesson-position">Lección {index+1} de 5</p><h1>{lesson.title}</h1><p className="lesson-description">{lesson.description}</p><div className="lesson-hero-bottom"><span>{lesson.duration} de recorrido estimado</span><a className="text-link" href="#laboratorio">Ir al ejercicio <span aria-hidden="true">↓</span></a></div></header><LessonContent index={index}/><LessonFooter index={index}/></article></Shell>}
