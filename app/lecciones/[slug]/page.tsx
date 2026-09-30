import { notFound } from 'next/navigation';
import { lessons } from '@/lib/lessons';
import { Shell,LessonFooter } from '@/components/shell';
import { Label } from '@/components/ui';
import { LessonContent } from '@/components/lesson-content';
export function generateStaticParams(){return lessons.map(l=>({slug:l.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const lesson=lessons.find(l=>l.slug===slug);return {title:lesson?.title,description:lesson?.description}}
export default async function LessonPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const index=lessons.findIndex(l=>l.slug===slug);if(index<0)notFound();const lesson=lessons[index];return <Shell index={index}><article className="lesson"><header className="lesson-hero" data-lesson={String(index+1).padStart(2,'0')}><div className="lesson-hero-top"><Label>LECCIÓN 0{index+1} / 05 · IA APLICADA</Label><Label>LA NUEVA INDUSTRIA</Label></div><h1>{lesson.title}<span className="accent">.</span></h1><p>{lesson.description}</p><div className="lesson-hero-bottom"><span>{lesson.duration} de recorrido · 1 laboratorio</span><a className="text-link secondary" href="#laboratorio">Ir al laboratorio ↓</a></div></header><LessonContent index={index}/><LessonFooter index={index}/></article></Shell>}
