import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:{default:'Fundamentos y sistemas de IA · La Nueva Industria',template:'%s · La Nueva Industria'},description:'Cinco lecciones interactivas para entender y construir sistemas de inteligencia artificial. Demos locales, diagramas y ejemplos prácticos.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><head><link rel="preload" href="/fonts/Archivo-Variable.woff" as="font" type="font/woff" crossOrigin="anonymous"/></head><body>{children}</body></html>}
