'use client';

import React, { useState, useEffect } from 'react';

// ============================================
// 🏥 MÓDULO: SALA DE ESPERA VIRTUAL
// ============================================
// Funcionalidades:
// - Check-in de pacientes (QR o manual)
// - Cola de espera en tiempo real
// - Notificación al paciente (WhatsApp/SMS/Push)
// - Vista secretaria vs vista doctor
// - Tiempos de espera estimados
// ============================================

// Iconos
const Icons = {
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  MessageCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  UserPlus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  ),
  QrCode: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
    </svg>
  ),
  Play: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  ),
  Pause: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
    </svg>
  ),
  Skip: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>
    </svg>
  ),
  Volume: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Monitor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
};

// Tema
const theme = {
  primary: '#A67C52',
  primaryDark: '#8B6544',
  primaryLight: '#C4A484',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
};

// Datos de ejemplo - pacientes en espera
const initialQueue = [
  {
    id: 1,
    name: 'María García López',
    phone: '+52 55 1234 5678',
    appointmentTime: '10:00',
    checkInTime: '09:45',
    status: 'waiting', // waiting, called, in_consultation, completed, no_show
    priority: 'normal', // normal, urgent, vip
    reason: 'Consulta de seguimiento - Várices',
    estimatedWait: 15,
    position: 1,
    notificationSent: false,
  },
  {
    id: 2,
    name: 'Roberto Sánchez Pérez',
    phone: '+52 55 9876 5432',
    appointmentTime: '10:30',
    checkInTime: '10:15',
    status: 'waiting',
    priority: 'urgent',
    reason: 'Dolor agudo en pierna',
    estimatedWait: 30,
    position: 2,
    notificationSent: false,
  },
  {
    id: 3,
    name: 'Ana Martínez Ruiz',
    phone: '+52 55 5555 1234',
    appointmentTime: '11:00',
    checkInTime: '10:50',
    status: 'waiting',
    priority: 'normal',
    reason: 'Primera consulta - Evaluación vascular',
    estimatedWait: 45,
    position: 3,
    notificationSent: false,
  },
  {
    id: 4,
    name: 'Carlos Hernández Villa',
    phone: '+52 55 4444 5678',
    appointmentTime: '11:30',
    checkInTime: null,
    status: 'scheduled',
    priority: 'vip',
    reason: 'Post-operatorio cirugía vascular',
    estimatedWait: 60,
    position: 4,
    notificationSent: false,
  },
];

// Componente de Tarjeta de Paciente en Cola
const PatientQueueCard = ({ patient, onCall, onComplete, onNoShow, onSkip, isSecretary, hasSecretary }) => {
  const [isSending, setIsSending] = useState(false);
  
  const statusColors = {
    scheduled: { bg: '#F3F4F6', text: '#6B7280', label: 'Programado' },
    waiting: { bg: '#FEF3C7', text: '#D97706', label: 'En espera' },
    called: { bg: '#DBEAFE', text: '#2563EB', label: 'Llamado' },
    in_consultation: { bg: '#D1FAE5', text: '#059669', label: 'En consulta' },
    completed: { bg: '#E5E7EB', text: '#6B7280', label: 'Completado' },
    no_show: { bg: '#FEE2E2', text: '#DC2626', label: 'No se presentó' },
  };

  const priorityColors = {
    normal: { bg: '#E5E7EB', text: '#374151' },
    urgent: { bg: '#FEE2E2', text: '#DC2626' },
    vip: { bg: '#FEF3C7', text: '#D97706' },
  };

  const handleNotify = async () => {
    setIsSending(true);
    // Simular envío de notificación
    await new Promise(resolve => setTimeout(resolve, 1500));
    onCall(patient.id);
    setIsSending(false);
  };

  const status = statusColors[patient.status];
  const priority = priorityColors[patient.priority];

  return (
    <div 
      className={`bg-white rounded-xl border-2 p-4 transition-all ${
        patient.status === 'called' ? 'border-blue-400 shadow-lg shadow-blue-100' :
        patient.status === 'in_consultation' ? 'border-green-400 shadow-lg shadow-green-100' :
        'border-gray-100 hover:border-gray-200'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Posición en cola */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: patient.status === 'waiting' ? theme.primary : '#9CA3AF' }}
          >
            {patient.position}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{patient.name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Icons.Clock />
              Cita: {patient.appointmentTime}
              {patient.checkInTime && ` • Check-in: ${patient.checkInTime}`}
            </p>
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex gap-2">
          {patient.priority !== 'normal' && (
            <span 
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: priority.bg, color: priority.text }}
            >
              {patient.priority === 'urgent' ? '🚨 Urgente' : '⭐ VIP'}
            </span>
          )}
          <span 
            className="px-2 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: status.bg, color: status.text }}
          >
            {status.label}
          </span>
        </div>
      </div>

      {/* Razón de consulta */}
      <p className="text-sm text-gray-600 mb-3 pl-13">
        📋 {patient.reason}
      </p>

      {/* Info de espera */}
      {patient.status === 'waiting' && (
        <div className="bg-gray-50 rounded-lg p-3 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">
              ⏱️ Tiempo estimado: <strong className="text-gray-700">{patient.estimatedWait} min</strong>
            </span>
            <span className="text-gray-500">
              📱 {patient.phone}
            </span>
          </div>
          {patient.notificationSent && (
            <span className="text-green-600 text-sm flex items-center gap-1">
              <Icons.Check /> Notificado
            </span>
          )}
        </div>
      )}

      {/* Acciones */}
      <div className="flex gap-2 pt-2 border-t border-gray-100">
        {patient.status === 'waiting' && (
          <>
            <button
              onClick={handleNotify}
              disabled={isSending}
              className="flex-1 py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              style={{ backgroundColor: theme.primary }}
            >
              {isSending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Icons.Bell />
                  {hasSecretary && isSecretary ? 'Llamar Paciente' : 'Notificar Turno'}
                </>
              )}
            </button>
            <button
              onClick={() => onSkip(patient.id)}
              className="py-2 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
              title="Saltar turno"
            >
              <Icons.Skip />
            </button>
            <button
              onClick={() => onNoShow(patient.id)}
              className="py-2 px-4 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-all"
              title="No se presentó"
            >
              <Icons.X />
            </button>
          </>
        )}

        {patient.status === 'called' && (
          <>
            <button
              onClick={() => onComplete(patient.id, 'in_consultation')}
              className="flex-1 py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2"
              style={{ backgroundColor: theme.success }}
            >
              <Icons.Play />
              Iniciar Consulta
            </button>
            <button
              onClick={handleNotify}
              className="py-2 px-4 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Icons.Bell />
              Re-notificar
            </button>
          </>
        )}

        {patient.status === 'in_consultation' && (
          <button
            onClick={() => onComplete(patient.id, 'completed')}
            className="flex-1 py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2"
            style={{ backgroundColor: theme.success }}
          >
            <Icons.Check />
            Finalizar Consulta
          </button>
        )}
      </div>
    </div>
  );
};

// Componente de Check-in
const CheckInForm = ({ onCheckIn, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Pacientes de ejemplo para buscar
  const availablePatients = [
    { id: 5, name: 'Laura Pérez González', phone: '+52 55 1111 2222', appointmentTime: '12:00' },
    { id: 6, name: 'Miguel Torres Díaz', phone: '+52 55 3333 4444', appointmentTime: '12:30' },
    { id: 7, name: 'Patricia Flores Luna', phone: '+52 55 5555 6666', appointmentTime: '13:00' },
  ];

  const filteredPatients = availablePatients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.phone.includes(searchTerm)
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Check-in de Paciente</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <Icons.X />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Búsqueda */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar paciente por nombre o teléfono
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ej: María García o 55 1234..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none"
            />
          </div>

          {/* Lista de pacientes */}
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {filteredPatients.map(patient => (
              <button
                key={patient.id}
                onClick={() => setSelectedPatient(patient)}
                className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                  selectedPatient?.id === patient.id 
                    ? 'border-amber-400 bg-amber-50' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <p className="font-medium text-gray-900">{patient.name}</p>
                <p className="text-sm text-gray-500">
                  {patient.phone} • Cita: {patient.appointmentTime}
                </p>
              </button>
            ))}
          </div>

          {/* Opción QR */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full py-3 px-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-gray-300 hover:text-gray-600 flex items-center justify-center gap-2">
              <Icons.QrCode />
              Escanear código QR del paciente
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <button
            onClick={() => selectedPatient && onCheckIn(selectedPatient)}
            disabled={!selectedPatient}
            className="w-full py-3 px-4 rounded-xl text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            style={{ backgroundColor: theme.primary }}
          >
            Confirmar Check-in
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente de Configuración
const SettingsPanel = ({ settings, onUpdate, onClose }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSave = () => {
    onUpdate(localSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">⚙️ Configuración de Sala de Espera</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <Icons.X />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* ¿Tiene secretaria? */}
          <div className="bg-amber-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">👩‍💼 ¿El consultorio tiene secretaria?</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {localSettings.hasSecretary 
                    ? 'La secretaria llamará verbalmente al paciente'
                    : 'El sistema notificará automáticamente por WhatsApp/SMS'
                  }
                </p>
              </div>
              <button
                onClick={() => setLocalSettings(s => ({ ...s, hasSecretary: !s.hasSecretary }))}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  localSettings.hasSecretary ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                    localSettings.hasSecretary ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Canal de notificación */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">📱 Canal de notificación al paciente</h3>
            <div className="space-y-2">
              {[
                { id: 'whatsapp', label: 'WhatsApp', icon: '💬', desc: 'Mensaje instantáneo' },
                { id: 'sms', label: 'SMS', icon: '📱', desc: 'Para cualquier teléfono' },
                { id: 'both', label: 'Ambos', icon: '📲', desc: 'WhatsApp + SMS de respaldo' },
              ].map(option => (
                <button
                  key={option.id}
                  onClick={() => setLocalSettings(s => ({ ...s, notificationChannel: option.id }))}
                  className={`w-full p-3 rounded-xl border-2 text-left flex items-center gap-3 transition-all ${
                    localSettings.notificationChannel === option.id
                      ? 'border-amber-400 bg-amber-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-500">{option.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mensaje personalizado */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">✉️ Mensaje de notificación</h3>
            <textarea
              value={localSettings.notificationMessage}
              onChange={(e) => setLocalSettings(s => ({ ...s, notificationMessage: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none resize-none"
            />
            <p className="text-xs text-gray-400 mt-2">
              Variables: {'{nombre}'}, {'{consultorio}'}, {'{doctor}'}
            </p>
          </div>

          {/* Tiempo promedio por consulta */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">⏱️ Tiempo promedio por consulta</h3>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={localSettings.avgConsultTime}
                onChange={(e) => setLocalSettings(s => ({ ...s, avgConsultTime: parseInt(e.target.value) }))}
                className="flex-1"
              />
              <span className="font-bold text-gray-700 w-20 text-right">
                {localSettings.avgConsultTime} min
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-4 rounded-xl text-white font-medium transition-all"
            style={{ backgroundColor: theme.primary }}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

// Pantalla TV para sala de espera
const TVDisplay = ({ queue, onClose }) => {
  const waitingPatients = queue.filter(p => p.status === 'waiting' || p.status === 'called');
  const currentPatient = queue.find(p => p.status === 'called');

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-50 p-8">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/50 hover:text-white"
      >
        <Icons.X />
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🏥 Consultorio Dr. Bartolomé Hernández
        </h1>
        <p className="text-xl text-white/60">Cirugía Vascular y Angiología</p>
      </div>

      <div className="grid grid-cols-3 gap-8 h-[calc(100vh-200px)]">
        {/* Paciente actual */}
        <div className="col-span-1 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 flex flex-col justify-center items-center text-white">
          <p className="text-xl mb-4 opacity-80">PASANDO A CONSULTORIO</p>
          {currentPatient ? (
            <>
              <h2 className="text-5xl font-bold text-center mb-4">{currentPatient.name}</h2>
              <div className="text-3xl animate-pulse">🔔</div>
            </>
          ) : (
            <p className="text-2xl opacity-60">En espera...</p>
          )}
        </div>

        {/* Cola de espera */}
        <div className="col-span-2 bg-white/10 backdrop-blur rounded-3xl p-6 overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Icons.Users />
            Próximos Pacientes
          </h2>
          
          <div className="space-y-4">
            {waitingPatients.slice(0, 6).map((patient, index) => (
              <div 
                key={patient.id}
                className={`p-4 rounded-2xl flex items-center gap-4 ${
                  patient.status === 'called' 
                    ? 'bg-green-500 text-white animate-pulse' 
                    : 'bg-white/20 text-white'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold">{patient.name}</p>
                  <p className="opacity-70">Cita: {patient.appointmentTime}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">~{patient.estimatedWait} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hora actual */}
      <div className="absolute bottom-8 right-8 text-white/60 text-xl">
        {new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

// Componente Principal
export default function SalaEsperaModule() {
  const [queue, setQueue] = useState(initialQueue);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showTV, setShowTV] = useState(false);
  const [settings, setSettings] = useState({
    hasSecretary: false, // Por defecto sin secretaria
    notificationChannel: 'whatsapp',
    notificationMessage: '¡Hola {nombre}! Es tu turno de pasar al consultorio del Dr. Hernández. Por favor acércate a recepción. 🏥',
    avgConsultTime: 20,
  });

  // Calcular estadísticas
  const stats = {
    waiting: queue.filter(p => p.status === 'waiting').length,
    inConsultation: queue.filter(p => p.status === 'in_consultation').length,
    completed: queue.filter(p => p.status === 'completed').length,
    avgWait: Math.round(queue.filter(p => p.status === 'waiting').reduce((a, b) => a + b.estimatedWait, 0) / Math.max(queue.filter(p => p.status === 'waiting').length, 1)),
  };

  // Llamar paciente
  const handleCall = (patientId) => {
    setQueue(prev => prev.map(p => {
      if (p.id === patientId) {
        // Simular envío de notificación
        if (!settings.hasSecretary) {
          console.log(`📱 Enviando notificación por ${settings.notificationChannel} a ${p.phone}`);
          console.log(`Mensaje: ${settings.notificationMessage.replace('{nombre}', p.name.split(' ')[0])}`);
        }
        return { ...p, status: 'called', notificationSent: true };
      }
      return p;
    }));
  };

  // Cambiar estado
  const handleStatusChange = (patientId, newStatus) => {
    setQueue(prev => prev.map(p => 
      p.id === patientId ? { ...p, status: newStatus } : p
    ));
  };

  // No show
  const handleNoShow = (patientId) => {
    setQueue(prev => prev.map(p => 
      p.id === patientId ? { ...p, status: 'no_show' } : p
    ));
  };

  // Saltar turno
  const handleSkip = (patientId) => {
    setQueue(prev => {
      const patient = prev.find(p => p.id === patientId);
      const waitingPatients = prev.filter(p => p.status === 'waiting' && p.id !== patientId);
      const lastPosition = Math.max(...waitingPatients.map(p => p.position), 0);
      
      return prev.map(p => {
        if (p.id === patientId) {
          return { ...p, position: lastPosition + 1 };
        }
        if (p.status === 'waiting' && p.position > patient.position) {
          return { ...p, position: p.position - 1 };
        }
        return p;
      });
    });
  };

  // Check-in
  const handleCheckIn = (patient) => {
    const now = new Date();
    const checkInTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const waitingCount = queue.filter(p => p.status === 'waiting').length;
    
    setQueue(prev => [...prev, {
      ...patient,
      checkInTime,
      status: 'waiting',
      priority: 'normal',
      reason: 'Consulta general',
      estimatedWait: (waitingCount + 1) * settings.avgConsultTime,
      position: waitingCount + 1,
      notificationSent: false,
    }]);
    
    setShowCheckIn(false);
  };

  // Filtrar por estado
  const waitingPatients = queue
    .filter(p => ['waiting', 'called', 'in_consultation'].includes(p.status))
    .sort((a, b) => a.position - b.position);

  const completedPatients = queue.filter(p => ['completed', 'no_show'].includes(p.status));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🏥 Sala de Espera Virtual</h1>
            <p className="text-gray-500">
              {settings.hasSecretary ? '👩‍💼 Modo con secretaria' : '🤖 Modo automático (sin secretaria)'}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTV(true)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2"
            >
              <Icons.Monitor />
              Pantalla TV
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2"
            >
              <Icons.Settings />
              Configuración
            </button>
            <button
              onClick={() => setShowCheckIn(true)}
              className="px-4 py-2 rounded-lg text-white flex items-center gap-2"
              style={{ backgroundColor: theme.primary }}
            >
              <Icons.UserPlus />
              Nuevo Check-in
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">En espera</p>
            <p className="text-3xl font-bold text-amber-600">{stats.waiting}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">En consulta</p>
            <p className="text-3xl font-bold text-green-600">{stats.inConsultation}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Completados hoy</p>
            <p className="text-3xl font-bold text-gray-700">{stats.completed}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-gray-500 text-sm">Espera promedio</p>
            <p className="text-3xl font-bold text-blue-600">{stats.avgWait} min</p>
          </div>
        </div>
      </div>

      {/* Cola de espera */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Cola de Espera ({waitingPatients.length} pacientes)
        </h2>
        
        <div className="space-y-4">
          {waitingPatients.map(patient => (
            <PatientQueueCard
              key={patient.id}
              patient={patient}
              onCall={handleCall}
              onComplete={handleStatusChange}
              onNoShow={handleNoShow}
              onSkip={handleSkip}
              isSecretary={settings.hasSecretary}
              hasSecretary={settings.hasSecretary}
            />
          ))}

          {waitingPatients.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-gray-900">No hay pacientes en espera</h3>
              <p className="text-gray-500 mt-2">La sala de espera está vacía</p>
            </div>
          )}
        </div>
      </div>

      {/* Historial del día */}
      {completedPatients.length > 0 && (
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Historial del Día ({completedPatients.length})
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Paciente</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Cita</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Check-in</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Estado</th>
                </tr>
              </thead>
              <tbody>
                {completedPatients.map(patient => (
                  <tr key={patient.id} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{patient.name}</td>
                    <td className="px-4 py-3 text-gray-500">{patient.appointmentTime}</td>
                    <td className="px-4 py-3 text-gray-500">{patient.checkInTime || '-'}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {patient.status === 'completed' ? '✓ Completado' : '✗ No se presentó'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modals */}
      {showCheckIn && (
        <CheckInForm 
          onCheckIn={handleCheckIn} 
          onClose={() => setShowCheckIn(false)} 
        />
      )}

      {showSettings && (
        <SettingsPanel
          settings={settings}
          onUpdate={setSettings}
          onClose={() => setShowSettings(false)}
        />
      )}

      {showTV && (
        <TVDisplay
          queue={queue}
          onClose={() => setShowTV(false)}
        />
      )}
    </div>
  );
}
