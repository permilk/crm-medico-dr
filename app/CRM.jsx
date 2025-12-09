'use client';
import React, { useState } from 'react';

// =====================================================
// MEDICFLOW - CRM PARA CLÍNICAS Y CONSULTORIOS
// =====================================================

const theme = {
  primary: '#A67C52', primaryDark: '#8B6544', primaryLight: '#C4A484', primaryBg: '#A67C5215',
  bg: '#FAFAF9', surface: '#FFFFFF', text: '#1F1F1F', textMuted: '#6B6B6B', border: '#E5E5E5',
  success: '#10B981', warning: '#F59E0B', error: '#EF4444', info: '#3B82F6',
  whatsapp: '#25D366', facebook: '#1877F2', instagram: '#E4405F', doctoralia: '#00B8A9',
};

const Icons = {
  Logo: () => <svg viewBox="0 0 40 40" className="w-10 h-10"><rect width="40" height="40" rx="8" fill={theme.primary}/><path d="M12 14h16M12 20h16M12 26h10" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="28" cy="26" r="3" fill="white" opacity="0.8"/></svg>,
  Dashboard: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Inbox: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>,
  Users: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  Pipeline: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  Receipt: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M8 10h8M8 14h4"/></svg>,
  Settings: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8l1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>,
  Bot: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h0M16 16h0"/></svg>,
  BarChart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Star: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  CreditCard: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
  FileText: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  Layout: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  UserCircle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662"/></svg>,
  Send: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>,
  X: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Plus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 5v14M5 12h14"/></svg>,
  Search: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  Bell: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>,
  LogOut: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>,
  Eye: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  EyeOff: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>,
  ChevronLeft: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="15 18 9 12 15 6"/></svg>,
  ChevronRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>,
  Download: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Edit: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Copy: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
  Link: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  Clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  MessageCircle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
  MoreVertical: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>,
  Printer: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  Globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  Play: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Filter: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
};

const PlatformIcon = ({ platform, size = 16 }) => {
  const colors = { whatsapp: '#25D366', facebook: '#1877F2', instagram: '#E4405F', tiktok: '#000', doctoralia: '#00B8A9' };
  return <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors[platform] || '#6B7280' }} />;
};

// Sample Data
const conversations = [
  { id: 1, name: 'María García', platform: 'whatsapp', lastMessage: 'Hola, quisiera agendar una cita', time: '10:30', unread: 2 },
  { id: 2, name: 'Roberto López', platform: 'facebook', lastMessage: '¿Cuál es el costo?', time: '09:45', unread: 1 },
  { id: 3, name: 'Ana Martínez', platform: 'instagram', lastMessage: 'Gracias!', time: 'Ayer', unread: 0 },
  { id: 4, name: 'Carlos Sánchez', platform: 'doctoralia', lastMessage: 'Confirmo mi cita', time: 'Ayer', unread: 0 },
  { id: 5, name: 'Laura Pérez', platform: 'whatsapp', lastMessage: '¿Tienen disponibilidad?', time: '08:15', unread: 3 },
];

const patients = [
  { id: 1, name: 'María García López', email: 'maria@email.com', phone: '+52 55 1234 5678', lastVisit: '2024-01-10', diagnosis: 'Várices grado II', status: 'active' },
  { id: 2, name: 'Roberto Sánchez', email: 'roberto@email.com', phone: '+52 55 9876 5432', lastVisit: '2024-01-08', diagnosis: 'Insuficiencia venosa', status: 'active' },
  { id: 3, name: 'Ana Martínez', email: 'ana@email.com', phone: '+52 55 5555 1234', lastVisit: '2023-12-15', diagnosis: 'Evaluación preventiva', status: 'inactive' },
  { id: 4, name: 'Carlos Hernández', email: 'carlos@email.com', phone: '+52 55 4444 5678', lastVisit: '2024-01-12', diagnosis: 'Post-cirugía', status: 'active' },
];

const appointments = [
  { id: 1, patient: 'María García', time: '09:00', type: 'Consulta', status: 'confirmed' },
  { id: 2, patient: 'Roberto Sánchez', time: '09:30', type: 'Seguimiento', status: 'confirmed' },
  { id: 3, patient: 'Laura Pérez', time: '10:30', type: 'Primera vez', status: 'pending' },
  { id: 4, patient: 'Carlos Hernández', time: '11:30', type: 'Post-op', status: 'confirmed' },
  { id: 5, patient: 'Ana Martínez', time: '14:00', type: 'Consulta', status: 'cancelled' },
];

const leads = [
  { id: 1, name: 'Patricia Flores', source: 'whatsapp', stage: 'new', value: 5000 },
  { id: 2, name: 'Miguel Torres', source: 'facebook', stage: 'contacted', value: 8000 },
  { id: 3, name: 'Sandra Díaz', source: 'instagram', stage: 'qualified', value: 12000 },
  { id: 4, name: 'Fernando Ruiz', source: 'doctoralia', stage: 'proposal', value: 15000 },
  { id: 5, name: 'Carmen Luna', source: 'whatsapp', stage: 'won', value: 10000 },
];

const notifications = [
  { id: 1, type: 'appointment', title: 'Nueva cita', message: 'María García agendó cita', time: '5 min', read: false },
  { id: 2, type: 'message', title: 'Mensaje nuevo', message: 'Roberto López por WhatsApp', time: '15 min', read: false },
  { id: 3, type: 'payment', title: 'Pago recibido', message: 'Carlos Hernández - $3,500', time: '1 hora', read: false },
  { id: 4, type: 'review', title: 'Nueva reseña', message: '5 estrellas de Laura Pérez', time: '2 horas', read: true },
];

const automations = [
  { id: 1, name: 'Bienvenida automática', trigger: 'Nuevo lead', action: 'WhatsApp', status: 'active', runs: 156 },
  { id: 2, name: 'Recordatorio 24h', trigger: 'Antes de cita', action: 'SMS + WhatsApp', status: 'active', runs: 89 },
  { id: 3, name: 'Seguimiento post-consulta', trigger: '3 días después', action: 'Email', status: 'active', runs: 45 },
  { id: 4, name: 'Reactivación', trigger: '90 días sin visita', action: 'Email promocional', status: 'paused', runs: 23 },
];

const landings = [
  { id: 1, name: 'Tratamiento Várices', url: 'varices.medicflow.com', visits: 1250, conversions: 89, status: 'published' },
  { id: 2, name: 'Consulta Gratuita', url: 'consulta.medicflow.com', visits: 890, conversions: 56, status: 'published' },
  { id: 3, name: 'Promo Enero', url: 'promo.medicflow.com', visits: 456, conversions: 34, status: 'draft' },
];

const invoices = [
  { id: 'INV-001', patient: 'María García', amount: 3500, status: 'paid', date: '2024-01-10', concept: 'Consulta + Ultrasonido' },
  { id: 'INV-002', patient: 'Roberto Sánchez', amount: 8500, status: 'paid', date: '2024-01-08', concept: 'Escleroterapia' },
  { id: 'INV-003', patient: 'Carlos Hernández', amount: 25000, status: 'pending', date: '2024-01-12', concept: 'Cirugía vascular' },
];

const paymentLinks = [
  { id: 1, name: 'Consulta General', amount: 1500, uses: 45, url: 'pay.medicflow.com/consulta' },
  { id: 2, name: 'Ultrasonido Doppler', amount: 2500, uses: 23, url: 'pay.medicflow.com/doppler' },
  { id: 3, name: 'Paquete Várices', amount: 15000, uses: 12, url: 'pay.medicflow.com/varices' },
];

const integrations = [
  { id: 'meta', name: 'Meta Business', desc: 'WhatsApp, Facebook, Instagram', status: 'connected', icon: '📱' },
  { id: 'tiktok', name: 'TikTok Business', desc: 'Leads de TikTok', status: 'connected', icon: '🎵' },
  { id: 'doctoralia', name: 'Doctoralia', desc: 'Citas sincronizadas', status: 'connected', icon: '🏥' },
  { id: 'google', name: 'Google Calendar', desc: 'Calendario', status: 'connected', icon: '📅' },
  { id: 'stripe', name: 'Stripe', desc: 'Pagos tarjeta', status: 'connected', icon: '💳' },
  { id: 'mercadopago', name: 'MercadoPago', desc: 'Pagos locales', status: 'pending', icon: '💰' },
];

// UI Components
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: theme.border }}>
          <h2 className="text-lg font-bold" style={{ color: theme.text }}>{title}</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100"><Icons.X /></button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[70vh]">{children}</div>
      </div>
    </div>
  );
};

const Badge = ({ status }) => {
  const styles = {
    active: 'bg-green-100 text-green-700', inactive: 'bg-gray-100 text-gray-600', pending: 'bg-yellow-100 text-yellow-700',
    confirmed: 'bg-blue-100 text-blue-700', cancelled: 'bg-red-100 text-red-700', paid: 'bg-green-100 text-green-700',
    published: 'bg-green-100 text-green-700', draft: 'bg-gray-100 text-gray-600', paused: 'bg-yellow-100 text-yellow-700',
    connected: 'bg-green-100 text-green-700', new: 'bg-blue-100 text-blue-700', contacted: 'bg-purple-100 text-purple-700',
    qualified: 'bg-yellow-100 text-yellow-700', proposal: 'bg-pink-100 text-pink-700', won: 'bg-green-100 text-green-700',
    waiting: 'bg-yellow-100 text-yellow-700', called: 'bg-blue-100 text-blue-700', in_consultation: 'bg-green-100 text-green-700',
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${styles[status] || 'bg-gray-100 text-gray-600'}`}>{status}</span>;
};

// =====================================================
// VIEWS
// =====================================================

// DASHBOARD
const DashboardView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-1" style={{ color: theme.text }}>Dashboard</h1>
    <p className="mb-6" style={{ color: theme.textMuted }}>Resumen de tu consultorio</p>
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[{ label: 'Citas Hoy', value: '12', icon: '📅', color: theme.primary }, { label: 'Pacientes Nuevos', value: '28', icon: '👥', color: theme.success }, { label: 'Mensajes', value: '6', icon: '💬', color: theme.info }, { label: 'Ingresos Mes', value: '$185K', icon: '💰', color: theme.warning }].map((s, i) => (
        <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <span className="text-2xl">{s.icon}</span>
          <p className="text-2xl font-bold mt-2" style={{ color: s.color }}>{s.value}</p>
          <p className="text-sm" style={{ color: theme.textMuted }}>{s.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <h2 className="font-semibold mb-4">Citas de Hoy</h2>
        <div className="space-y-3">
          {appointments.slice(0, 4).map(apt => (
            <div key={apt.id} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: theme.primary }}>{apt.patient[0]}</div>
                <div><p className="font-medium">{apt.patient}</p><p className="text-sm" style={{ color: theme.textMuted }}>{apt.type}</p></div>
              </div>
              <div className="flex items-center gap-3"><span className="font-medium">{apt.time}</span><Badge status={apt.status} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <h2 className="font-semibold mb-4">Actividad Reciente</h2>
        <div className="space-y-4">
          {notifications.slice(0, 4).map(n => (
            <div key={n.id} className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: theme.primaryBg }}>{n.type === 'appointment' ? '📅' : n.type === 'payment' ? '💰' : n.type === 'message' ? '💬' : '⭐'}</div>
              <div><p className="text-sm">{n.message}</p><p className="text-xs" style={{ color: theme.textMuted }}>{n.time}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// INBOX
const InboxView = () => {
  const [selected, setSelected] = useState(conversations[0]);
  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState([
    { id: 1, from: 'patient', text: 'Hola, quisiera agendar una cita para la próxima semana', time: '10:28' },
    { id: 2, from: 'clinic', text: '¡Hola María! Con gusto te ayudo. ¿Qué día te funcionaría?', time: '10:29' },
    { id: 3, from: 'patient', text: 'Preferiblemente martes o miércoles en la mañana', time: '10:30' },
  ]);
  const send = () => { if (msg.trim()) { setMsgs([...msgs, { id: msgs.length + 1, from: 'clinic', text: msg, time: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }) }]); setMsg(''); } };
  return (
    <div className="flex h-full">
      <div className="w-80 border-r flex flex-col" style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
        <div className="p-4 border-b" style={{ borderColor: theme.border }}><h2 className="font-semibold">Inbox Unificado</h2><p className="text-sm" style={{ color: theme.textMuted }}>WhatsApp, FB, IG, TikTok, Doctoralia</p></div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map(c => (
            <div key={c.id} onClick={() => setSelected(c)} className={`p-4 cursor-pointer border-b ${selected?.id === c.id ? 'bg-amber-50' : 'hover:bg-gray-50'}`} style={{ borderColor: theme.border }}>
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>{c.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className="absolute -bottom-1 -right-1"><PlatformIcon platform={c.platform} /></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between"><p className="font-medium truncate">{c.name}</p><span className="text-xs" style={{ color: theme.textMuted }}>{c.time}</span></div>
                  <p className="text-sm truncate" style={{ color: theme.textMuted }}>{c.lastMessage}</p>
                </div>
                {c.unread > 0 && <span className="w-5 h-5 rounded-full text-white text-xs flex items-center justify-center" style={{ backgroundColor: theme.primary }}>{c.unread}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col" style={{ backgroundColor: theme.bg }}>
        <div className="p-4 border-b flex items-center justify-between" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>{selected?.name[0]}</div>
            <div><p className="font-medium">{selected?.name}</p><p className="text-sm flex items-center gap-2" style={{ color: theme.textMuted }}><PlatformIcon platform={selected?.platform} /> {selected?.platform}</p></div>
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100"><Icons.MoreVertical /></button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {msgs.map(m => (
              <div key={m.id} className={`flex ${m.from === 'clinic' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md px-4 py-2 rounded-2xl ${m.from === 'clinic' ? 'rounded-br-md text-white' : 'rounded-bl-md'}`} style={{ backgroundColor: m.from === 'clinic' ? theme.primary : theme.surface }}>
                  <p>{m.text}</p><p className={`text-xs mt-1 ${m.from === 'clinic' ? 'text-white/70' : ''}`} style={{ color: m.from === 'patient' ? theme.textMuted : undefined }}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
          <div className="flex gap-3">
            <input value={msg} onChange={e => setMsg(e.target.value)} onKeyPress={e => e.key === 'Enter' && send()} placeholder="Escribe un mensaje..." className="flex-1 px-4 py-3 rounded-xl border outline-none" style={{ borderColor: theme.border }} />
            <button onClick={send} className="px-6 py-3 rounded-xl text-white" style={{ backgroundColor: theme.primary }}><Icons.Send /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PATIENTS
const PatientsView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Gestión de Pacientes</h1><p style={{ color: theme.textMuted }}>Base de datos con perfil 360°</p></div>
        <button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nuevo Paciente</button>
      </div>
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <table className="w-full">
          <thead style={{ backgroundColor: theme.bg }}><tr>{['Paciente', 'Contacto', 'Última Visita', 'Diagnóstico', 'Estado', 'Acciones'].map(h => <th key={h} className="px-4 py-3 text-left text-sm font-medium" style={{ color: theme.textMuted }}>{h}</th>)}</tr></thead>
          <tbody>
            {patients.map(p => (
              <tr key={p.id} className="border-t hover:bg-gray-50" style={{ borderColor: theme.border }}>
                <td className="px-4 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>{p.name.split(' ').slice(0, 2).map(n => n[0]).join('')}</div><div><p className="font-medium">{p.name}</p><p className="text-sm" style={{ color: theme.textMuted }}>ID: {String(p.id).padStart(5, '0')}</p></div></div></td>
                <td className="px-4 py-4"><p className="text-sm">{p.phone}</p><p className="text-sm" style={{ color: theme.textMuted }}>{p.email}</p></td>
                <td className="px-4 py-4 text-sm">{p.lastVisit}</td>
                <td className="px-4 py-4 text-sm">{p.diagnosis}</td>
                <td className="px-4 py-4"><Badge status={p.status} /></td>
                <td className="px-4 py-4"><div className="flex gap-2"><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Eye /></button><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Edit /></button><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.MessageCircle /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Nuevo Paciente">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Nombre</label><input type="text" placeholder="Nombre completo" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div><div><label className="block text-sm font-medium mb-1">Teléfono</label><input type="tel" placeholder="+52 55 1234 5678" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div></div>
          <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" placeholder="email@ejemplo.com" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Guardar</button></div>
        </div>
      </Modal>
    </div>
  );
};

// CALENDAR
const CalendarView = () => {
  const days = Array.from({ length: 35 }, (_, i) => i < 3 ? null : i - 2);
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Calendario</h1><p style={{ color: theme.textMuted }}>Sincronizado con Google Calendar, Doctoralia y Cronofy</p></div>
        <button className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nueva Cita</button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="flex items-center justify-between mb-6"><h2 className="text-xl font-semibold">Enero 2024</h2><div className="flex gap-2"><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.ChevronLeft /></button><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.ChevronRight /></button></div></div>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map(d => <div key={d} className="text-center py-2 text-sm font-medium" style={{ color: theme.textMuted }}>{d}</div>)}
            {days.map((d, i) => <div key={i} className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer ${d === 15 ? 'text-white' : d ? 'hover:bg-gray-100' : ''}`} style={{ backgroundColor: d === 15 ? theme.primary : 'transparent', color: d === 15 ? 'white' : d ? theme.text : 'transparent' }}>{d}</div>)}
          </div>
        </div>
        <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h2 className="font-semibold mb-4">Citas del 15 de Enero</h2>
          <div className="space-y-3">
            {appointments.map(apt => (
              <div key={apt.id} className="p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
                <div className="flex items-center justify-between mb-1"><span className="font-medium">{apt.time}</span><Badge status={apt.status} /></div>
                <p className="font-medium">{apt.patient}</p><p className="text-sm" style={{ color: theme.textMuted }}>{apt.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PIPELINE
const PipelineView = () => {
  const stages = [{ id: 'new', name: 'Nuevos', color: '#3B82F6' }, { id: 'contacted', name: 'Contactados', color: '#8B5CF6' }, { id: 'qualified', name: 'Calificados', color: '#F59E0B' }, { id: 'proposal', name: 'Propuesta', color: '#EC4899' }, { id: 'won', name: 'Ganados', color: '#10B981' }];
  return (
    <div className="p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Pipeline de Ventas</h1><p style={{ color: theme.textMuted }}>Vista Kanban con seguimiento de leads</p></div>
        <button className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nuevo Lead</button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map(stage => {
          const stageLeads = leads.filter(l => l.stage === stage.id);
          return (
            <div key={stage.id} className="flex-shrink-0 w-72">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }} /><span className="font-medium">{stage.name}</span><span className="text-sm px-2 py-0.5 rounded-full" style={{ backgroundColor: theme.bg }}>{stageLeads.length}</span></div><span className="text-sm font-medium" style={{ color: stage.color }}>${stageLeads.reduce((a, l) => a + l.value, 0).toLocaleString()}</span></div>
              <div className="space-y-3">
                {stageLeads.map(lead => (
                  <div key={lead.id} className="p-4 rounded-xl cursor-pointer hover:shadow-md transition-shadow" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
                    <div className="flex items-center justify-between mb-2"><span className="font-medium">{lead.name}</span><PlatformIcon platform={lead.source} /></div>
                    <span className="text-sm font-medium" style={{ color: theme.primary }}>${lead.value.toLocaleString()}</span>
                  </div>
                ))}
                <button className="w-full py-3 rounded-xl border-2 border-dashed text-sm flex items-center justify-center gap-2 hover:bg-gray-50" style={{ borderColor: theme.border, color: theme.textMuted }}><Icons.Plus /> Agregar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// CHATBOT
const ChatbotView = () => {
  const [testMsg, setTestMsg] = useState('');
  const [response, setResponse] = useState('');
  const [typing, setTyping] = useState(false);
  const test = () => {
    if (!testMsg.trim()) return;
    setTyping(true);
    setTimeout(() => {
      const responses = { hola: '¡Hola! 👋 Soy el asistente virtual. ¿En qué puedo ayudarte?\n\n• Agendar cita\n• Precios\n• Horarios\n• Ubicación', cita: '¡Perfecto! Para agendar necesito:\n1. ¿Primera consulta?\n2. ¿Qué día prefieres?\n\nO agenda en: calendly.com/dr', precios: '💊 Consulta: $1,500\n🔬 Ultrasonido: $2,500\n💉 Escleroterapia: desde $3,500\n\n¿Agendamos valoración?', horario: '📅 Lun-Vie: 9:00-19:00\n📅 Sábados: 9:00-14:00\n📅 Domingos: Cerrado' };
      const key = Object.keys(responses).find(k => testMsg.toLowerCase().includes(k));
      setResponse(responses[key] || 'Gracias por tu mensaje. Te comunico con nuestro equipo. 🏥');
      setTyping(false);
    }, 1500);
  };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Chatbot IA</h1><p style={{ color: theme.textMuted }}>Asistente virtual 24/7</p></div><button className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Zap /> Entrenar Bot</button></div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <h3 className="font-semibold mb-4">📊 Estadísticas</h3>
            <div className="grid grid-cols-2 gap-4">
              {[{ label: 'Conversaciones', value: '1,245', color: theme.primary }, { label: 'Resolución', value: '89%', color: theme.success }, { label: 'Citas agendadas', value: '156', color: theme.info }, { label: 'Tiempo respuesta', value: '23s', color: theme.warning }].map((s, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: theme.bg }}><p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p><p className="text-sm" style={{ color: theme.textMuted }}>{s.label}</p></div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4">🤖 Probar Bot</h3>
          <div className="h-64 mb-4 p-4 rounded-lg overflow-y-auto" style={{ backgroundColor: theme.bg }}>
            {response && (
              <div className="space-y-4">
                <div className="flex justify-end"><div className="max-w-xs px-4 py-2 rounded-2xl rounded-br-md text-white" style={{ backgroundColor: theme.primary }}>{testMsg}</div></div>
                <div className="flex justify-start"><div className="max-w-xs px-4 py-2 rounded-2xl rounded-bl-md whitespace-pre-line" style={{ backgroundColor: theme.surface }}>{response}</div></div>
              </div>
            )}
            {typing && <div className="flex justify-start mt-4"><div className="px-4 py-2 rounded-2xl" style={{ backgroundColor: theme.surface }}>...</div></div>}
            {!response && !typing && <div className="h-full flex items-center justify-center text-sm" style={{ color: theme.textMuted }}>Escribe: hola, cita, precios, horario</div>}
          </div>
          <div className="flex gap-3">
            <input value={testMsg} onChange={e => setTestMsg(e.target.value)} onKeyPress={e => e.key === 'Enter' && test()} placeholder="Escribe un mensaje..." className="flex-1 px-4 py-3 rounded-xl border outline-none" style={{ borderColor: theme.border }} />
            <button onClick={test} className="px-6 py-3 rounded-xl text-white font-medium" style={{ backgroundColor: theme.primary }}>Probar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// AUTOMATIONS
const AutomationsView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Automatizaciones</h1><p style={{ color: theme.textMuted }}>Flujos automáticos de marketing</p></div><button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nueva Automatización</button></div>
      <div className="grid grid-cols-2 gap-4">
        {automations.map(a => (
          <div key={a.id} className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <div className="flex items-start justify-between mb-4"><div><h3 className="font-semibold">{a.name}</h3><p className="text-sm" style={{ color: theme.textMuted }}>Trigger: {a.trigger}</p></div><Badge status={a.status} /></div>
            <div className="flex items-center gap-4 mb-4 p-3 rounded-lg" style={{ backgroundColor: theme.bg }}><div className="flex-1"><p className="text-sm" style={{ color: theme.textMuted }}>Acción</p><p className="font-medium">{a.action}</p></div><div><p className="text-sm" style={{ color: theme.textMuted }}>Ejecuciones</p><p className="font-medium" style={{ color: theme.primary }}>{a.runs}</p></div></div>
            <div className="flex gap-2"><button className="flex-1 py-2 rounded-lg border text-sm" style={{ borderColor: theme.border }}>Editar</button><button className="flex-1 py-2 rounded-lg text-sm text-white" style={{ backgroundColor: a.status === 'active' ? theme.warning : theme.success }}>{a.status === 'active' ? 'Pausar' : 'Activar'}</button></div>
          </div>
        ))}
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Nueva Automatización">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Nombre</label><input type="text" placeholder="Ej: Bienvenida" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div><label className="block text-sm font-medium mb-1">Trigger</label><select className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}><option>Nuevo lead</option><option>24h antes de cita</option><option>Después de consulta</option><option>Sin visita 90 días</option></select></div>
          <div><label className="block text-sm font-medium mb-1">Acción</label><select className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}><option>Enviar WhatsApp</option><option>Enviar SMS</option><option>Enviar Email</option></select></div>
          <div><label className="block text-sm font-medium mb-1">Mensaje</label><textarea rows={3} placeholder="Mensaje a enviar..." className="w-full px-4 py-2 rounded-lg border resize-none" style={{ borderColor: theme.border }} /></div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Crear</button></div>
        </div>
      </Modal>
    </div>
  );
};

// ANALYTICS
const AnalyticsView = () => (
  <div className="p-6">
    <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Analytics & ROI</h1><p style={{ color: theme.textMuted }}>Métricas de rendimiento</p></div><button className="px-4 py-2 rounded-lg border flex items-center gap-2" style={{ borderColor: theme.border }}><Icons.Download /> Exportar</button></div>
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[{ label: 'Leads', value: '456', change: '+23%' }, { label: 'Conversión', value: '18.5%', change: '+2.3%' }, { label: 'Costo/Lead', value: '$125', change: '-15%' }, { label: 'ROI', value: '340%', change: '+45%' }].map((k, i) => (
        <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}><p className="text-2xl font-bold" style={{ color: theme.primary }}>{k.value}</p><p className="text-sm" style={{ color: theme.textMuted }}>{k.label}</p><span className={`text-sm ${k.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{k.change}</span></div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <h3 className="font-semibold mb-4">Leads por Plataforma</h3>
        {[{ name: 'WhatsApp', leads: 189, pct: 41, color: theme.whatsapp }, { name: 'Facebook', leads: 98, pct: 21, color: theme.facebook }, { name: 'Instagram', leads: 78, pct: 17, color: theme.instagram }, { name: 'Doctoralia', leads: 56, pct: 12, color: theme.doctoralia }].map(p => (
          <div key={p.name} className="mb-3"><div className="flex justify-between mb-1"><span className="text-sm">{p.name}</span><span className="text-sm" style={{ color: theme.textMuted }}>{p.leads}</span></div><div className="h-2 rounded-full" style={{ backgroundColor: theme.bg }}><div className="h-full rounded-full" style={{ width: `${p.pct}%`, backgroundColor: p.color }} /></div></div>
        ))}
      </div>
      <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <h3 className="font-semibold mb-4">ROI por Campaña</h3>
        <table className="w-full"><thead><tr>{['Campaña', 'Inversión', 'Ingresos', 'ROI'].map(h => <th key={h} className="text-left text-sm pb-3" style={{ color: theme.textMuted }}>{h}</th>)}</tr></thead><tbody>
          {[{ name: 'Meta Ads', inv: 15000, rev: 85000 }, { name: 'Google Ads', inv: 12000, rev: 52000 }, { name: 'TikTok', inv: 8000, rev: 28000 }].map(c => (
            <tr key={c.name} className="border-t" style={{ borderColor: theme.border }}><td className="py-3 text-sm">{c.name}</td><td className="py-3 text-sm" style={{ color: theme.textMuted }}>${c.inv.toLocaleString()}</td><td className="py-3 text-sm text-green-600">${c.rev.toLocaleString()}</td><td className="py-3 text-sm font-medium" style={{ color: theme.primary }}>{Math.round((c.rev - c.inv) / c.inv * 100)}%</td></tr>
          ))}
        </tbody></table>
      </div>
    </div>
  </div>
);

// REPUTATION
const ReputationView = () => {
  const reviews = [{ id: 1, name: 'María García', platform: 'google', rating: 5, text: 'Excelente atención, muy profesional.' }, { id: 2, name: 'Roberto López', platform: 'doctoralia', rating: 5, text: 'El mejor angiólogo. Muy recomendado.' }, { id: 3, name: 'Ana Martínez', platform: 'google', rating: 4, text: 'Buena atención, aunque esperé un poco.' }];
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Gestión de Reputación</h1><p style={{ color: theme.textMuted }}>Reseñas de todas las plataformas</p></div><button className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Link /> Solicitar Reseña</button></div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[{ label: 'Calificación', value: '4.9', sub: '⭐⭐⭐⭐⭐' }, { label: 'Total Reseñas', value: '156' }, { label: 'Positivas', value: '98%' }, { label: 'Nuevas/mes', value: '12' }].map((s, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}><p className="text-2xl font-bold" style={{ color: theme.primary }}>{s.value}</p>{s.sub && <p className="text-sm">{s.sub}</p>}<p className="text-sm" style={{ color: theme.textMuted }}>{s.label}</p></div>
        ))}
      </div>
      <div className="rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <div className="p-4 border-b" style={{ borderColor: theme.border }}><h3 className="font-semibold">Reseñas Recientes</h3></div>
        {reviews.map(r => (
          <div key={r.id} className="p-4 border-b" style={{ borderColor: theme.border }}>
            <div className="flex items-start justify-between mb-2"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>{r.name[0]}</div><div><p className="font-medium">{r.name}</p><p className="text-sm" style={{ color: theme.textMuted }}>{r.platform}</p></div></div><div className="flex">{[1,2,3,4,5].map(i => <span key={i} className={i <= r.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>)}</div></div>
            <p className="text-sm mb-2">{r.text}</p><button className="text-sm font-medium" style={{ color: theme.primary }}>Responder</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// LANDING PAGES
const LandingPagesView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Landing Pages</h1><p style={{ color: theme.textMuted }}>Páginas de captura optimizadas</p></div><button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nueva Landing Page</button></div>
      <div className="grid grid-cols-3 gap-4">
        {landings.map(l => (
          <div key={l.id} className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <div className="h-32 flex items-center justify-center" style={{ backgroundColor: theme.primaryBg }}><Icons.Globe /></div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2"><h3 className="font-semibold">{l.name}</h3><Badge status={l.status} /></div>
              <p className="text-sm mb-3" style={{ color: theme.textMuted }}>{l.url}</p>
              <div className="flex gap-4 mb-4">{[{ label: 'Visitas', value: l.visits }, { label: 'Conversiones', value: l.conversions }, { label: 'CVR', value: `${((l.conversions/l.visits)*100).toFixed(1)}%` }].map((m, i) => <div key={i}><p className="text-lg font-bold" style={{ color: theme.primary }}>{m.value}</p><p className="text-xs" style={{ color: theme.textMuted }}>{m.label}</p></div>)}</div>
              <div className="flex gap-2"><button className="flex-1 py-2 rounded-lg border text-sm" style={{ borderColor: theme.border }}>Editar</button><button className="flex-1 py-2 rounded-lg text-sm text-white" style={{ backgroundColor: theme.primary }}>Ver</button></div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Nueva Landing Page">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Nombre</label><input type="text" placeholder="Ej: Promoción Febrero" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div><label className="block text-sm font-medium mb-1">URL</label><div className="flex"><span className="px-4 py-2 rounded-l-lg border border-r-0 bg-gray-50" style={{ borderColor: theme.border }}>medicflow.com/</span><input type="text" placeholder="mi-landing" className="flex-1 px-4 py-2 rounded-r-lg border" style={{ borderColor: theme.border }} /></div></div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Crear</button></div>
        </div>
      </Modal>
    </div>
  );
};

// WAITING ROOM
const WaitingRoomView = () => {
  const [queue, setQueue] = useState([
    { id: 1, name: 'María García', time: '10:00', checkIn: '09:45', status: 'waiting', priority: 'normal', reason: 'Seguimiento', wait: 15, pos: 1 },
    { id: 2, name: 'Roberto Sánchez', time: '10:30', checkIn: '10:15', status: 'waiting', priority: 'urgent', reason: 'Dolor agudo', wait: 30, pos: 2 },
    { id: 3, name: 'Ana Martínez', time: '11:00', checkIn: '10:50', status: 'waiting', priority: 'normal', reason: 'Primera vez', wait: 45, pos: 3 },
  ]);
  const [settings, setSettings] = useState({ hasSecretary: false });
  const [showSettings, setShowSettings] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const call = id => setQueue(q => q.map(p => p.id === id ? { ...p, status: 'called', notified: true } : p));
  const start = id => setQueue(q => q.map(p => p.id === id ? { ...p, status: 'in_consultation' } : p));
  const complete = id => setQueue(q => q.map(p => p.id === id ? { ...p, status: 'completed' } : p));
  const stats = { waiting: queue.filter(p => p.status === 'waiting').length, inConsult: queue.filter(p => p.status === 'in_consultation').length, done: queue.filter(p => p.status === 'completed').length };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>🏥 Sala de Espera Virtual</h1><p style={{ color: theme.textMuted }}>{settings.hasSecretary ? '👩‍💼 Modo con secretaria' : '🤖 Modo automático (notifica por WhatsApp)'}</p></div>
        <div className="flex gap-3"><button onClick={() => setShowSettings(!showSettings)} className="px-4 py-2 rounded-lg border flex items-center gap-2" style={{ borderColor: theme.border }}><Icons.Settings /> Configuración</button><button onClick={() => setShowCheckIn(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nuevo Check-in</button></div>
      </div>
      {showSettings && <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: theme.primaryBg }}><div className="flex items-center gap-6"><span className="text-sm font-medium">👩‍💼 ¿Tiene secretaria?</span><button onClick={() => setSettings(s => ({ ...s, hasSecretary: !s.hasSecretary }))} className={`relative w-12 h-6 rounded-full transition-colors ${settings.hasSecretary ? 'bg-green-500' : 'bg-gray-300'}`}><span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.hasSecretary ? 'left-7' : 'left-1'}`}/></button><span className="text-sm" style={{ color: theme.textMuted }}>{settings.hasSecretary ? 'Llamará verbalmente' : 'Notifica por WhatsApp'}</span></div></div>}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[{ label: 'En espera', value: stats.waiting, color: theme.warning }, { label: 'En consulta', value: stats.inConsult, color: theme.success }, { label: 'Completados', value: stats.done, color: theme.textMuted }, { label: 'Espera prom.', value: '25 min', color: theme.info }].map((s, i) => <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}><p className="text-sm" style={{ color: theme.textMuted }}>{s.label}</p><p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p></div>)}
      </div>
      <div className="space-y-4">
        {queue.filter(p => ['waiting', 'called', 'in_consultation'].includes(p.status)).map(p => (
          <div key={p.id} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: p.status === 'called' ? `2px solid ${theme.info}` : `1px solid ${theme.border}` }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme.primary }}>{p.pos}</div><div><h3 className="font-semibold">{p.name}</h3><p className="text-sm" style={{ color: theme.textMuted }}>🕐 Cita: {p.time} • Check-in: {p.checkIn}</p></div></div>
              <div className="flex gap-2">{p.priority === 'urgent' && <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">🚨 Urgente</span>}<Badge status={p.status} /></div>
            </div>
            <p className="text-sm mb-3" style={{ color: theme.textMuted }}>📋 {p.reason}</p>
            {p.status === 'waiting' && <div className="p-3 rounded-lg mb-3 flex items-center justify-between" style={{ backgroundColor: theme.bg }}><span className="text-sm">⏱️ Espera: <strong>{p.wait} min</strong></span>{p.notified && <span className="text-sm text-green-600">✓ Notificado</span>}</div>}
            <div className="flex gap-2 pt-2" style={{ borderTop: `1px solid ${theme.border}` }}>
              {p.status === 'waiting' && <><button onClick={() => call(p.id)} className="flex-1 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>🔔 {settings.hasSecretary ? 'Llamar' : 'Notificar'}</button><button className="py-2 px-4 rounded-lg border" style={{ borderColor: theme.border }}>⏭️</button></>}
              {p.status === 'called' && <button onClick={() => start(p.id)} className="flex-1 py-2 rounded-lg text-white" style={{ backgroundColor: theme.success }}>▶️ Iniciar Consulta</button>}
              {p.status === 'in_consultation' && <button onClick={() => complete(p.id)} className="flex-1 py-2 rounded-lg text-white" style={{ backgroundColor: theme.success }}>✓ Finalizar</button>}
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={showCheckIn} onClose={() => setShowCheckIn(false)} title="Nuevo Check-in">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Buscar paciente</label><input type="text" placeholder="Nombre o teléfono..." className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div className="space-y-2">{['Laura Pérez - 12:00', 'José Torres - 12:30', 'Carmen Ruiz - 13:00'].map((p, i) => <button key={i} className="w-full p-3 rounded-lg border text-left hover:border-amber-400" style={{ borderColor: theme.border }}>{p}</button>)}</div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowCheckIn(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowCheckIn(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Confirmar</button></div>
        </div>
      </Modal>
    </div>
  );
};

// BILLING
const BillingView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Facturación</h1><p style={{ color: theme.textMuted }}>Genera boletas y facturas</p></div><button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nueva Factura</button></div>
      <div className="grid grid-cols-4 gap-4 mb-6">{[{ label: 'Facturado mes', value: '$185,000', icon: '📊' }, { label: 'Pendiente', value: '$42,500', icon: '⏳' }, { label: 'Facturas', value: '45', icon: '📄' }, { label: 'Tasa cobro', value: '92%', icon: '✅' }].map((s, i) => <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}><span className="text-2xl">{s.icon}</span><p className="text-2xl font-bold mt-2" style={{ color: theme.primary }}>{s.value}</p><p className="text-sm" style={{ color: theme.textMuted }}>{s.label}</p></div>)}</div>
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <table className="w-full"><thead style={{ backgroundColor: theme.bg }}><tr>{['Folio', 'Paciente', 'Concepto', 'Fecha', 'Monto', 'Estado', 'Acciones'].map(h => <th key={h} className="px-4 py-3 text-left text-sm font-medium" style={{ color: theme.textMuted }}>{h}</th>)}</tr></thead><tbody>
          {invoices.map(inv => <tr key={inv.id} className="border-t hover:bg-gray-50" style={{ borderColor: theme.border }}><td className="px-4 py-4 font-medium" style={{ color: theme.primary }}>{inv.id}</td><td className="px-4 py-4">{inv.patient}</td><td className="px-4 py-4">{inv.concept}</td><td className="px-4 py-4" style={{ color: theme.textMuted }}>{inv.date}</td><td className="px-4 py-4 font-medium">${inv.amount.toLocaleString()}</td><td className="px-4 py-4"><Badge status={inv.status} /></td><td className="px-4 py-4"><div className="flex gap-2"><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Eye /></button><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Download /></button><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Printer /></button></div></td></tr>)}
        </tbody></table>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Nueva Factura">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Paciente</label><select className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}><option>Seleccionar...</option>{patients.map(p => <option key={p.id}>{p.name}</option>)}</select></div>
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium mb-1">Concepto</label><input type="text" placeholder="Consulta general" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div><div><label className="block text-sm font-medium mb-1">Monto</label><input type="number" placeholder="0.00" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div></div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Generar</button></div>
        </div>
      </Modal>
    </div>
  );
};

// PAYMENTS
const PaymentsView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Pagos Integrados</h1><p style={{ color: theme.textMuted }}>Cobra en línea con Stripe y MercadoPago</p></div><button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Link /> Crear Link de Pago</button></div>
      <div className="grid grid-cols-4 gap-4 mb-6">{[{ label: 'Cobrado mes', value: '$145,000', color: theme.success }, { label: 'Pendiente', value: '$28,500', color: theme.warning }, { label: 'Transacciones', value: '67', color: theme.info }, { label: 'Links activos', value: '12', color: theme.primary }].map((s, i) => <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}><p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p><p className="text-sm" style={{ color: theme.textMuted }}>{s.label}</p></div>)}</div>
      <div className="rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}><div className="p-4 border-b" style={{ borderColor: theme.border }}><h3 className="font-semibold">Links de Pago</h3></div>
        {paymentLinks.map(l => <div key={l.id} className="p-4 flex items-center justify-between border-b" style={{ borderColor: theme.border }}><div><p className="font-medium">{l.name}</p><p className="text-sm" style={{ color: theme.textMuted }}>{l.url}</p></div><div className="flex items-center gap-6"><div className="text-right"><p className="font-bold" style={{ color: theme.primary }}>${l.amount.toLocaleString()} MXN</p><p className="text-sm" style={{ color: theme.textMuted }}>{l.uses} usos</p></div><div className="flex gap-2"><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Copy /></button><button className="p-2 rounded-lg hover:bg-gray-100"><Icons.Edit /></button></div></div></div>)}
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Crear Link de Pago">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Nombre</label><input type="text" placeholder="Consulta de valoración" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div><label className="block text-sm font-medium mb-1">Monto (MXN)</label><input type="number" placeholder="0.00" className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Crear Link</button></div>
        </div>
      </Modal>
    </div>
  );
};

// MEDICAL RECORDS
const MedicalRecordsView = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Expediente Clínico</h1><p style={{ color: theme.textMuted }}>Gestión de expedientes digitales</p></div><button onClick={() => setShowModal(true)} className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Plus /> Nuevo Expediente</button></div>
      <div className="grid grid-cols-2 gap-4">
        {patients.map(p => (
          <div key={p.id} className="p-4 rounded-xl cursor-pointer hover:shadow-md transition-shadow" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>{p.name.split(' ').slice(0, 2).map(n => n[0]).join('')}</div><div className="flex-1"><h3 className="font-semibold">{p.name}</h3><p className="text-sm" style={{ color: theme.textMuted }}>ID: {String(p.id).padStart(5, '0')}</p></div><div className="text-right"><p className="text-sm font-medium">Última visita</p><p className="text-sm" style={{ color: theme.textMuted }}>{p.lastVisit}</p></div></div>
            <div className="mt-3 pt-3 border-t" style={{ borderColor: theme.border }}><p className="text-sm" style={{ color: theme.textMuted }}><strong>Diagnóstico:</strong> {p.diagnosis}</p></div>
          </div>
        ))}
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Nuevo Expediente">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium mb-1">Paciente</label><select className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}><option>Seleccionar...</option>{patients.map(p => <option key={p.id}>{p.name}</option>)}</select></div>
          <div><label className="block text-sm font-medium mb-1">Motivo de consulta</label><input type="text" placeholder="Describe el motivo..." className="w-full px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }} /></div>
          <div><label className="block text-sm font-medium mb-1">Diagnóstico</label><textarea rows={3} placeholder="Diagnóstico inicial..." className="w-full px-4 py-2 rounded-lg border resize-none" style={{ borderColor: theme.border }} /></div>
          <div className="flex justify-end gap-3 pt-4"><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}>Cancelar</button><button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg text-white" style={{ backgroundColor: theme.primary }}>Crear</button></div>
        </div>
      </Modal>
    </div>
  );
};

// PATIENT PORTAL
const PatientPortalView = () => {
  const [settings, setSettings] = useState({ reschedule: true, history: true, docs: true, invoices: true, chat: false, payment: true });
  const toggle = key => setSettings(s => ({ ...s, [key]: !s[key] }));
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Portal del Paciente</h1><p style={{ color: theme.textMuted }}>Configura el acceso para tus pacientes</p></div><button className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}><Icons.Eye /> Vista Previa</button></div>
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4">Configuración del Portal</h3>
          <div className="space-y-4">
            {[{ key: 'reschedule', label: 'Permitir reagendar citas', desc: 'Pacientes pueden cambiar citas' }, { key: 'history', label: 'Mostrar historial', desc: 'Ver citas pasadas y futuras' }, { key: 'docs', label: 'Descargar documentos', desc: 'Acceso a recetas y estudios' }, { key: 'invoices', label: 'Ver facturas', desc: 'Historial de pagos' }, { key: 'chat', label: 'Chat con consultorio', desc: 'Mensajería directa' }, { key: 'payment', label: 'Pagar en línea', desc: 'Pagos desde el portal' }].map(s => (
              <div key={s.key} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: theme.bg }}>
                <div><p className="font-medium">{s.label}</p><p className="text-sm" style={{ color: theme.textMuted }}>{s.desc}</p></div>
                <button onClick={() => toggle(s.key)} className={`relative w-12 h-6 rounded-full transition-colors ${settings[s.key] ? 'bg-green-500' : 'bg-gray-300'}`}><span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings[s.key] ? 'left-7' : 'left-1'}`}/></button>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t" style={{ borderColor: theme.border }}><label className="block text-sm font-medium mb-2">URL del Portal</label><div className="flex gap-2"><input type="text" value="portal.medicflow.com/mi-clinica" readOnly className="flex-1 px-4 py-2 rounded-lg border bg-gray-50" style={{ borderColor: theme.border }} /><button className="px-4 py-2 rounded-lg border" style={{ borderColor: theme.border }}><Icons.Copy /></button></div></div>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${theme.border}` }}>
          <div className="p-4 text-white" style={{ backgroundColor: theme.primary }}><h3 className="font-semibold">Vista Previa</h3></div>
          <div className="p-6" style={{ backgroundColor: theme.surface }}>
            <div className="text-center mb-6"><div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: theme.primary }}>MG</div><h4 className="font-semibold">María García</h4><p className="text-sm" style={{ color: theme.textMuted }}>Paciente desde 2023</p></div>
            <div className="space-y-3">
              {settings.reschedule && <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: theme.bg }}><Icons.Calendar /><span className="text-sm">Mis Citas</span></div>}
              {settings.history && <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: theme.bg }}><Icons.Clock /><span className="text-sm">Historial</span></div>}
              {settings.docs && <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: theme.bg }}><Icons.FileText /><span className="text-sm">Documentos</span></div>}
              {settings.invoices && <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: theme.bg }}><Icons.Receipt /><span className="text-sm">Facturas</span></div>}
              {settings.payment && <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: theme.bg }}><Icons.CreditCard /><span className="text-sm">Pagar</span></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// INTEGRATIONS
const IntegrationsView = () => (
  <div className="p-6">
    <div className="flex items-center justify-between mb-6"><div><h1 className="text-2xl font-bold" style={{ color: theme.text }}>Integraciones</h1><p style={{ color: theme.textMuted }}>Meta, TikTok, Doctoralia, Google Calendar, Stripe y más</p></div></div>
    <div className="grid grid-cols-2 gap-4">
      {integrations.map(int => (
        <div key={int.id} className="p-4 rounded-xl flex items-center justify-between" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: theme.primaryBg }}>{int.icon}</div><div><h3 className="font-semibold">{int.name}</h3><p className="text-sm" style={{ color: theme.textMuted }}>{int.desc}</p></div></div>
          <div className="flex items-center gap-3"><Badge status={int.status} /><button className="px-4 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: int.status === 'connected' ? theme.bg : theme.primary, color: int.status === 'connected' ? theme.text : 'white', border: int.status === 'connected' ? `1px solid ${theme.border}` : 'none' }}>{int.status === 'connected' ? 'Configurar' : 'Conectar'}</button></div>
        </div>
      ))}
    </div>
  </div>
);

// =====================================================
// LOGIN & NOTIFICATIONS
// =====================================================

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const submit = e => { e.preventDefault(); onLogin({ email, name: 'Asistente' }); };
  const demo = () => onLogin({ email: 'demo@medicflow.com', name: 'Asistente' });
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: theme.bg }}>
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12" style={{ backgroundColor: theme.primary }}>
        <div className="text-center text-white"><div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center"><Icons.Logo /></div><h1 className="text-4xl font-bold mb-4">MedicFlow</h1><p className="text-xl opacity-90 mb-2">CRM para Clínicas y Consultorios</p><p className="opacity-70">Gestiona pacientes, citas y marketing en un solo lugar</p></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden"><Icons.Logo /><h1 className="text-2xl font-bold mt-4">MedicFlow</h1></div>
          <h2 className="text-2xl font-bold mb-2">Bienvenido</h2><p className="mb-8" style={{ color: theme.textMuted }}>Inicia sesión para continuar</p>
          <form onSubmit={submit} className="space-y-4">
            <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" className="w-full px-4 py-3 rounded-xl border outline-none" style={{ borderColor: theme.border }} /></div>
            <div><label className="block text-sm font-medium mb-1">Contraseña</label><div className="relative"><input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border outline-none" style={{ borderColor: theme.border }} /><button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: theme.textMuted }}>{showPw ? <Icons.EyeOff /> : <Icons.Eye />}</button></div></div>
            <button type="submit" className="w-full py-3 rounded-xl text-white font-medium" style={{ backgroundColor: theme.primary }}>Iniciar Sesión</button>
          </form>
          <div className="mt-6"><div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t" style={{ borderColor: theme.border }} /></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white" style={{ color: theme.textMuted }}>o</span></div></div><button onClick={demo} className="w-full mt-4 py-3 rounded-xl border font-medium flex items-center justify-center gap-2" style={{ borderColor: theme.border }}>🚀 Acceso Demo Rápido</button></div>
        </div>
      </div>
    </div>
  );
};

const NotificationsPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 top-12 w-96 rounded-xl shadow-2xl z-50" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
      <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: theme.border }}><h3 className="font-semibold">Notificaciones</h3><button onClick={onClose} className="text-sm" style={{ color: theme.primary }}>Marcar leídas</button></div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map(n => (
          <div key={n.id} className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${!n.read ? 'bg-amber-50' : ''}`} style={{ borderColor: theme.border }}>
            <div className="flex gap-3"><div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: theme.primaryBg }}>{n.type === 'appointment' ? '📅' : n.type === 'payment' ? '💰' : n.type === 'message' ? '💬' : '⭐'}</div><div className="flex-1"><p className="font-medium text-sm">{n.title}</p><p className="text-sm" style={{ color: theme.textMuted }}>{n.message}</p><p className="text-xs mt-1" style={{ color: theme.textMuted }}>{n.time}</p></div>{!n.read && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }} />}</div>
          </div>
        ))}
      </div>
      <div className="p-3 text-center border-t" style={{ borderColor: theme.border }}><button className="text-sm font-medium" style={{ color: theme.primary }}>Ver todas</button></div>
    </div>
  );
};

// =====================================================
// MAIN APP
// =====================================================

export default function MedicFlowCRM() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('dashboard');
  const [notifs, setNotifs] = useState(false);

  const login = u => { setUser(u); setAuth(true); };
  const logout = () => { setUser(null); setAuth(false); };

  if (!auth) return <LoginScreen onLogin={login} />;

  const menu = [
    { title: 'Principal', items: [{ id: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard }, { id: 'inbox', label: 'Inbox', icon: Icons.Inbox, badge: 6 }, { id: 'patients', label: 'Pacientes', icon: Icons.Users }, { id: 'calendar', label: 'Calendario', icon: Icons.Calendar }, { id: 'pipeline', label: 'Pipeline', icon: Icons.Pipeline }] },
    { title: 'IA', items: [{ id: 'chatbot', label: 'Chatbot IA', icon: Icons.Bot }, { id: 'automations', label: 'Automatizaciones', icon: Icons.Zap }] },
    { title: 'Marketing', items: [{ id: 'analytics', label: 'Analytics & ROI', icon: Icons.BarChart }, { id: 'reputation', label: 'Reputación', icon: Icons.Star }, { id: 'landings', label: 'Landing Pages', icon: Icons.Layout }] },
    { title: 'Operaciones', items: [{ id: 'waitingroom', label: 'Sala de Espera', icon: Icons.Clock, badge: 3 }, { id: 'billing', label: 'Facturación', icon: Icons.Receipt }, { id: 'payments', label: 'Pagos', icon: Icons.CreditCard }, { id: 'records', label: 'Expediente', icon: Icons.FileText }, { id: 'portal', label: 'Portal Paciente', icon: Icons.UserCircle }] },
    { title: 'Config', items: [{ id: 'integrations', label: 'Integraciones', icon: Icons.Settings }] },
  ];

  const views = { dashboard: DashboardView, inbox: InboxView, patients: PatientsView, calendar: CalendarView, pipeline: PipelineView, chatbot: ChatbotView, automations: AutomationsView, analytics: AnalyticsView, reputation: ReputationView, landings: LandingPagesView, waitingroom: WaitingRoomView, billing: BillingView, payments: PaymentsView, records: MedicalRecordsView, portal: PatientPortalView, integrations: IntegrationsView };
  const View = views[tab] || DashboardView;

  return (
    <div className="flex h-screen" style={{ backgroundColor: theme.bg }}>
      <aside className="w-64 flex flex-col overflow-y-auto" style={{ backgroundColor: theme.surface, borderRight: `1px solid ${theme.border}` }}>
        <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}><div className="flex items-center gap-3"><Icons.Logo /><div><h1 className="font-semibold text-sm">MedicFlow</h1><p className="text-xs" style={{ color: theme.primary }}>CRM Médico</p></div></div></div>
        <nav className="flex-1 p-4 space-y-6">
          {menu.map((sec, i) => (
            <div key={i}><p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: theme.textMuted }}>{sec.title}</p><div className="space-y-1">
              {sec.items.map(item => <button key={item.id} onClick={() => setTab(item.id)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors" style={{ backgroundColor: tab === item.id ? theme.primaryBg : 'transparent', color: tab === item.id ? theme.primary : theme.textMuted }}><div className="flex items-center gap-3"><item.icon /><span>{item.label}</span></div>{item.badge && <span className="px-2 py-0.5 rounded-full text-xs text-white" style={{ backgroundColor: theme.primary }}>{item.badge}</span>}</button>)}
            </div></div>
          ))}
        </nav>
        <div className="p-4" style={{ borderTop: `1px solid ${theme.border}` }}><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{ backgroundColor: theme.primary }}>{user?.name?.[0] || 'A'}</div><div><p className="font-medium text-sm">{user?.name || 'Usuario'}</p><p className="text-xs" style={{ color: theme.textMuted }}>{user?.email}</p></div></div><button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-gray-100" style={{ color: theme.textMuted }}><Icons.LogOut /><span>Cerrar Sesión</span></button></div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6" style={{ backgroundColor: theme.surface, borderBottom: `1px solid ${theme.border}` }}>
          <div className="relative flex items-center"><span className="absolute left-3" style={{ color: theme.textMuted }}><Icons.Search /></span><input type="text" placeholder="Buscar..." className="pl-10 pr-4 py-2 rounded-lg border outline-none w-64" style={{ borderColor: theme.border }} /></div>
          <div className="relative"><button onClick={() => setNotifs(!notifs)} className="relative p-2 rounded-lg hover:bg-gray-100"><Icons.Bell /><span className="absolute top-0 right-0 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center" style={{ backgroundColor: theme.error }}>{notifications.filter(n => !n.read).length}</span></button><NotificationsPanel isOpen={notifs} onClose={() => setNotifs(false)} /></div>
        </header>
        <div className="flex-1 overflow-y-auto"><View /></div>
      </main>
    </div>
  );
}
