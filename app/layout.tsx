import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'mecapacitoenlinea.cl | Cursos Online de Inteligencia Emocional',
  description:
    'Desarrolla tus habilidades emocionales con cursos online en formato participativo. Talleres de Inteligencia Emocional para tu crecimiento personal y profesional. Plataforma chilena de capacitación online.',
  keywords: 'inteligencia emocional, cursos online, talleres online, capacitación, Chile, mecapacitoenlinea',
  openGraph: {
    title: 'mecapacitoenlinea.cl | Cursos de Inteligencia Emocional',
    description: 'Desarrolla tus habilidades emocionales con cursos online en formato participativo.',
    url: 'https://mecapacitoenlinea.cl',
    siteName: 'mecapacitoenlinea.cl',
    locale: 'es_CL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
