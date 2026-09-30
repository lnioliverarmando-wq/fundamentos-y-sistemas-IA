import Link from 'next/link';
import { Shell } from '@/components/shell';
export default function NotFound(){return <Shell><div className="lesson"><header className="lesson-hero"><div className="label">404 · PÁGINA NO ENCONTRADA</div><h1>Este camino no está en el recorrido.</h1><p>Vuelve al índice para encontrar las cinco lecciones de IA aplicada.</p><Link href="/lecciones/" className="primary-button" style={{marginTop:30}}>Volver al índice</Link></header></div></Shell>}
