# 🏥 CRM Médico - Dr. Bartolomé Hernández

Sistema de gestión de pacientes y marketing médico desarrollado por **ITKAP Consulting**.

## 🚀 Deploy Rápido en Vercel (5 minutos)

### Opción A: Deploy desde GitHub (Recomendado)

1. **Sube este proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "CRM Médico MVP"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/crm-medico.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Crea una cuenta con tu GitHub
   - Click en "New Project"
   - Selecciona el repositorio `crm-medico`
   - Click en "Deploy"
   - ¡Listo! Tendrás una URL como `crm-medico.vercel.app`

### Opción B: Deploy directo con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# En la carpeta del proyecto
vercel

# Sigue las instrucciones en pantalla
```

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 📁 Estructura del Proyecto

```
crm-deploy/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.js        # Layout principal
│   ├── page.js          # Página principal
│   └── CRM.jsx          # Componente del CRM
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🔐 Credenciales de Demo

| Campo | Valor |
|-------|-------|
| **Email** | `demo@drhernandez.com` |
| **Password** | `demo123` |

O simplemente haz clic en **"🚀 Acceso Demo Rápido"**

## ✨ Funcionalidades Incluidas

- 📊 Dashboard con KPIs y analytics
- 📥 Inbox unificado (WhatsApp, FB, IG, TikTok, Doctoralia)
- 👥 Gestión de pacientes
- 📅 Calendario con sincronización
- 📈 Pipeline de ventas (Kanban)
- 🤖 Chatbot IA
- ⚡ Automatizaciones
- ⭐ Gestión de reputación
- 💳 Pagos integrados
- 📋 Expediente clínico
- 🏥 Portal del paciente

## 🎨 Personalización

El tema se puede personalizar en `app/CRM.jsx`:

```javascript
const theme = {
  primary: '#A67C52',        // Color principal (cobre)
  primaryDark: '#8B6544',    // Hover
  primaryLight: '#C4A484',   // Backgrounds
  // ... más colores
};
```

## 📞 Soporte

Desarrollado por **ITKAP Consulting**
- Website: [itkap.com](https://itkap.com)
- Email: contacto@itkap.com

---

© 2025 CRM Médico Enterprise. Todos los derechos reservados.
