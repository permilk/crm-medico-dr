import './globals.css'

export const metadata = {
  title: 'CRM Médico - Dr. Bartolomé Hernández',
  description: 'Sistema de gestión de pacientes y marketing médico',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
