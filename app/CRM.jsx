'use client';

import React, { useState, useEffect } from 'react';

// =====================================================
// CRM MÉDICO ENTERPRISE - MVP COMPLETO
// Dr. Bartolomé Hernández
// TODAS LAS FUNCIONALIDADES
// =====================================================

// Brand Colors
const theme = {
  primary: '#A67C52',
  primaryDark: '#8B6544',
  primaryLight: '#C4A484',
  primaryBg: '#A67C5215',
  bg: '#FAFAF9',
  surface: '#FFFFFF',
  text: '#1F1F1F',
  textMuted: '#6B6B6B',
  border: '#E5E5E5',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  purple: '#8B5CF6',
  pink: '#EC4899',
  // Platform colors
  whatsapp: '#25D366',
  facebook: '#1877F2',
  instagram: '#E4405F',
  tiktok: '#000000',
  doctoralia: '#00B8A9',
  messenger: '#0084FF',
  google: '#4285F4',
};

// =====================================================
// ICONS
// =====================================================
const Icons = {
  Logo: () => (
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <rect width="40" height="40" rx="8" fill={theme.primary}/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="serif">BH</text>
    </svg>
  ),
  Dashboard: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Inbox: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>,
  Users: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  Pipeline: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  Receipt: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M8 10h8M8 14h4"/></svg>,
  Settings: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  Bot: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h0M16 16h0"/></svg>,
  Smartphone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h0"/></svg>,
  BarChart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Star: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  CreditCard: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
  FileText: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  Layout: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  UserCircle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662"/></svg>,
  Send: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>,
  CheckCircle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  X: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Plus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 5v14M5 12h14"/></svg>,
  Search: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  Bell: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>,
  LogOut: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>,
  Eye: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  EyeOff: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>,
  ChevronRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>,
  ChevronDown: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="6 9 12 15 18 9"/></svg>,
  Download: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Upload: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>,
  Printer: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  Play: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Pause: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  Mic: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>,
  Camera: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  Link: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  ExternalLink: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>,
  Copy: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
  Trash: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>,
  Edit: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  ArrowUp: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>,
  ArrowDown: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>,
  TrendingUp: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  TrendingDown: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>,
  Clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Mail: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  Heart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  MessageCircle: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
  Repeat: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
  RefreshCw: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
  Filter: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  MoreVertical: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>,
  // Platform Icons
  WhatsApp: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  TikTok: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>,
  Doctoralia: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
  Google: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
};

// Platform badge component
const PlatformBadge = ({ platform, size = 'sm' }) => {
  const config = {
    whatsapp: { icon: Icons.WhatsApp, color: theme.whatsapp, label: 'WhatsApp' },
    facebook: { icon: Icons.Facebook, color: theme.facebook, label: 'Facebook' },
    instagram: { icon: Icons.Instagram, color: theme.instagram, label: 'Instagram' },
    tiktok: { icon: Icons.TikTok, color: theme.tiktok, label: 'TikTok' },
    doctoralia: { icon: Icons.Doctoralia, color: theme.doctoralia, label: 'Doctoralia' },
    google: { icon: Icons.Google, color: theme.google, label: 'Google' },
  };
  const { icon: Icon, color, label } = config[platform] || config.whatsapp;
  
  return (
    <div 
      className={`inline-flex items-center gap-1 rounded-full font-medium ${size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}`}
      style={{ backgroundColor: `${color}18`, color }}
    >
      <Icon />
      <span>{label}</span>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, label, value, change, positive, color }) => (
  <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm" style={{ color: theme.textMuted }}>{label}</p>
        <p className="text-2xl font-bold mt-1" style={{ color: theme.text }}>{value}</p>
      </div>
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color || theme.primary}15`, color: color || theme.primary }}>
        {icon}
      </div>
    </div>
    {change && (
      <div className="flex items-center gap-1 mt-2">
        {positive ? <Icons.TrendingUp /> : <Icons.TrendingDown />}
        <span className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>{change}</span>
      </div>
    )}
  </div>
);

// =====================================================
// LOGIN SCREEN
// =====================================================
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin({ email: email || 'demo@drhernandez.com', name: 'Asistente', role: 'assistant' });
    }, 1000);
  };

  const handleDemoAccess = () => {
    setEmail('demo@drhernandez.com');
    setPassword('demo123');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin({ email: 'demo@drhernandez.com', name: 'Asistente', role: 'assistant' });
    }, 800);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: theme.bg }}>
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: theme.primary }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full" style={{ backgroundColor: 'white' }} />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ backgroundColor: 'white' }} />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <div className="mb-8">
            <svg viewBox="0 0 120 120" className="w-32 h-32">
              <circle cx="60" cy="60" r="55" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="48" fontWeight="bold" fontFamily="Georgia, serif">BH</text>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-center" style={{ fontFamily: 'Georgia, serif' }}>CRM Médico Enterprise</h1>
          <p className="text-xl opacity-90 mb-4">Dr. Bartolomé Hernández</p>
          <p className="opacity-75 mb-8">Angiología, Cirugía Vascular y Endovascular</p>
          
          <div className="grid grid-cols-3 gap-4 mt-4 w-full max-w-md">
            {[
              { icon: '🤖', label: 'Chatbot IA' },
              { icon: '📊', label: 'Analytics' },
              { icon: '💳', label: 'Pagos' },
              { icon: '⭐', label: 'Reputación' },
              { icon: '📱', label: 'App Móvil' },
              { icon: '🏥', label: 'Expediente' },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 text-center">
                <span className="text-2xl">{f.icon}</span>
                <p className="text-xs mt-1 opacity-90">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Icons.Logo />
            <h2 className="text-2xl font-bold mt-4" style={{ color: theme.text }}>CRM Médico</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: `1px solid ${theme.border}` }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>Bienvenido</h2>
            <p className="mb-6" style={{ color: theme.textMuted }}>Ingresa tus credenciales para continuar</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme.text }}>Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                  style={{ backgroundColor: theme.bg, border: `2px solid ${theme.border}` }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme.text }}>Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all pr-12"
                    style={{ backgroundColor: theme.bg, border: `2px solid ${theme.border}` }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                    style={{ color: theme.textMuted }}
                  >
                    {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ backgroundColor: theme.primary }}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Iniciar Sesión</>
                )}
              </button>

              <button
                type="button"
                onClick={handleDemoAccess}
                disabled={isLoading}
                className="w-full py-3 rounded-xl font-semibold transition-all hover:opacity-80 disabled:opacity-50 flex items-center justify-center gap-2 mt-3"
                style={{ backgroundColor: theme.primaryBg, color: theme.primary, border: `2px solid ${theme.primary}` }}
              >
                🚀 Acceso Demo Rápido
              </button>
            </form>
          </div>

          <p className="text-center mt-6 text-sm" style={{ color: theme.textMuted }}>
            © 2025 CRM Médico Enterprise. Desarrollado por ITKAP Consulting
          </p>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// DASHBOARD VIEW
// =====================================================
const DashboardView = () => {
  const stats = [
    { icon: <Icons.Users />, label: 'Leads Nuevos', value: '47', change: '+23%', positive: true, color: theme.info },
    { icon: <Icons.Calendar />, label: 'Citas Hoy', value: '8', change: '2 pendientes', positive: null, color: theme.warning },
    { icon: <Icons.MessageCircle />, label: 'Mensajes', value: '156', change: '+18%', positive: true, color: theme.whatsapp },
    { icon: <Icons.CreditCard />, label: 'Ingresos Mes', value: '$248,500', change: '+32%', positive: true, color: theme.success },
  ];

  const leadsByPlatform = [
    { platform: 'WhatsApp', count: 45, percentage: 35, color: theme.whatsapp },
    { platform: 'TikTok', count: 32, percentage: 25, color: theme.tiktok },
    { platform: 'Instagram', count: 28, percentage: 22, color: theme.instagram },
    { platform: 'Facebook', count: 15, percentage: 12, color: theme.facebook },
    { platform: 'Doctoralia', count: 8, percentage: 6, color: theme.doctoralia },
  ];

  const recentActivity = [
    { icon: '🤖', text: 'Chatbot respondió a María González', time: '2 min', platform: 'whatsapp' },
    { icon: '📅', text: 'Nueva cita agendada - Carlos Ruiz', time: '5 min', platform: 'tiktok' },
    { icon: '⭐', text: 'Nueva reseña 5 estrellas en Google', time: '15 min', platform: 'google' },
    { icon: '💰', text: 'Pago recibido - $3,500', time: '30 min', platform: 'whatsapp' },
    { icon: '🧾', text: 'Factura #0048 generada', time: '1h', platform: 'doctoralia' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Dashboard</h1>
          <p style={{ color: theme.textMuted }}>Bienvenido de vuelta, aquí está el resumen de hoy</p>
        </div>
        <select className="px-4 py-2 rounded-lg text-sm" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <option>Hoy</option>
          <option>Esta semana</option>
          <option>Este mes</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads by Platform */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Leads por Plataforma</h3>
          <div className="space-y-4">
            {leadsByPlatform.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm" style={{ color: theme.text }}>{item.platform}</span>
                  <span className="text-sm font-semibold" style={{ color: theme.text }}>{item.count}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
                  <div 
                    className="h-full rounded-full transition-all" 
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Embudo de Conversión</h3>
          <div className="space-y-3">
            {[
              { stage: 'Leads', count: 128, width: '100%', color: theme.info },
              { stage: 'Contactados', count: 89, width: '70%', color: theme.purple },
              { stage: 'Interesados', count: 45, width: '35%', color: theme.warning },
              { stage: 'Cita Agendada', count: 28, width: '22%', color: theme.primary },
              { stage: 'Convertidos', count: 12, width: '9%', color: theme.success },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-24 text-sm" style={{ color: theme.textMuted }}>{item.stage}</div>
                <div className="flex-1 h-8 rounded-lg overflow-hidden" style={{ backgroundColor: theme.bg }}>
                  <div 
                    className="h-full rounded-lg flex items-center justify-end pr-2"
                    style={{ width: item.width, backgroundColor: item.color }}
                  >
                    <span className="text-xs font-bold text-white">{item.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-sm" style={{ color: theme.success }}>
            Tasa de conversión: <strong>9.4%</strong>
          </p>
        </div>

        {/* Recent Activity */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Actividad Reciente</h3>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: theme.text }}>{item.text}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs" style={{ color: theme.textMuted }}>{item.time}</span>
                    <PlatformBadge platform={item.platform} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI by Campaign */}
      <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <h3 className="font-semibold mb-4" style={{ color: theme.text }}>ROI por Campaña de Ads</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                <th className="text-left p-3 text-sm font-medium" style={{ color: theme.textMuted }}>Campaña</th>
                <th className="text-left p-3 text-sm font-medium" style={{ color: theme.textMuted }}>Plataforma</th>
                <th className="text-right p-3 text-sm font-medium" style={{ color: theme.textMuted }}>Inversión</th>
                <th className="text-right p-3 text-sm font-medium" style={{ color: theme.textMuted }}>Leads</th>
                <th className="text-right p-3 text-sm font-medium" style={{ color: theme.textMuted }}>Conversiones</th>
                <th className="text-right p-3 text-sm font-medium" style={{ color: theme.textMuted }}>Ingresos</th>
                <th className="text-right p-3 text-sm font-medium" style={{ color: theme.textMuted }}>ROI</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Várices - Video', platform: 'tiktok', investment: 5000, leads: 32, conversions: 4, revenue: 48000, roi: 860 },
                { name: 'Consulta General', platform: 'facebook', investment: 3000, leads: 18, conversions: 3, revenue: 28500, roi: 850 },
                { name: 'Cirugía Vascular', platform: 'instagram', investment: 4500, leads: 15, conversions: 2, revenue: 70000, roi: 1456 },
                { name: 'Retargeting', platform: 'facebook', investment: 1500, leads: 8, conversions: 2, revenue: 15000, roi: 900 },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td className="p-3 font-medium" style={{ color: theme.text }}>{row.name}</td>
                  <td className="p-3"><PlatformBadge platform={row.platform} /></td>
                  <td className="p-3 text-right" style={{ color: theme.text }}>${row.investment.toLocaleString()}</td>
                  <td className="p-3 text-right" style={{ color: theme.text }}>{row.leads}</td>
                  <td className="p-3 text-right" style={{ color: theme.text }}>{row.conversions}</td>
                  <td className="p-3 text-right font-semibold" style={{ color: theme.success }}>${row.revenue.toLocaleString()}</td>
                  <td className="p-3 text-right">
                    <span className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: theme.success + '20', color: theme.success }}>
                      {row.roi}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// CHATBOT IA VIEW
// =====================================================
const ChatbotView = () => {
  const [testMessage, setTestMessage] = useState('');
  
  const conversations = [
    { 
      patient: 'María González', 
      platform: 'whatsapp',
      status: 'resolved',
      messages: [
        { from: 'patient', text: 'Hola, quisiera información sobre el tratamiento de várices' },
        { from: 'bot', text: '¡Hola María! Gracias por contactarnos. Con gusto te ayudo con información sobre nuestros tratamientos de várices. 🩺\n\nOfrecemos:\n• Escleroterapia ($3,500)\n• Láser endovenoso ($15,000-25,000)\n• Cirugía de várices ($25,000-35,000)\n\n¿Te gustaría agendar una consulta de valoración? El costo es de $1,500 y se aplica al tratamiento.' },
        { from: 'patient', text: 'Sí, me interesa la consulta' },
        { from: 'bot', text: 'Perfecto María. Tenemos disponibilidad:\n\n📅 Jueves 12 de Dic - 10:00 AM\n📅 Viernes 13 de Dic - 3:00 PM\n📅 Lunes 16 de Dic - 11:00 AM\n\n¿Cuál te acomoda mejor?' },
      ]
    }
  ];

  const botStats = [
    { label: 'Conversaciones Hoy', value: '47', icon: '💬' },
    { label: 'Tasa de Resolución', value: '78%', icon: '✅' },
    { label: 'Citas Agendadas por Bot', value: '12', icon: '📅' },
    { label: 'Tiempo Promedio Respuesta', value: '8 seg', icon: '⚡' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Asistente IA (Chatbot)</h1>
          <p style={{ color: theme.textMuted }}>Responde automáticamente 24/7 y agenda citas</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1.5 rounded-full text-sm flex items-center gap-2" style={{ backgroundColor: theme.success + '20', color: theme.success }}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" /> Bot Activo
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {botStats.map((stat, i) => (
          <div key={i} className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <p className="text-2xl font-bold" style={{ color: theme.text }}>{stat.value}</p>
              <p className="text-sm" style={{ color: theme.textMuted }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversation Preview */}
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <h3 className="font-semibold" style={{ color: theme.text }}>Vista Previa de Conversación</h3>
          </div>
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto" style={{ backgroundColor: '#F0F0F0' }}>
            {conversations[0].messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div 
                  className={`max-w-xs px-4 py-2 rounded-2xl ${msg.from === 'bot' ? 'rounded-tl-none' : 'rounded-tr-none'}`}
                  style={{ 
                    backgroundColor: msg.from === 'bot' ? 'white' : theme.whatsapp,
                    color: msg.from === 'bot' ? theme.text : 'white'
                  }}
                >
                  {msg.from === 'bot' && <span className="text-xs font-medium" style={{ color: theme.primary }}>🤖 Bot</span>}
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bot Configuration */}
        <div className="rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <h3 className="font-semibold" style={{ color: theme.text }}>Configuración del Bot</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
              <div>
                <p className="font-medium" style={{ color: theme.text }}>Respuesta Automática</p>
                <p className="text-sm" style={{ color: theme.textMuted }}>Responder mensajes entrantes automáticamente</p>
              </div>
              <div className="w-12 h-6 rounded-full p-1 cursor-pointer" style={{ backgroundColor: theme.success }}>
                <div className="w-4 h-4 rounded-full bg-white ml-auto" />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
              <div>
                <p className="font-medium" style={{ color: theme.text }}>Calificación de Leads</p>
                <p className="text-sm" style={{ color: theme.textMuted }}>Hacer preguntas para filtrar pacientes</p>
              </div>
              <div className="w-12 h-6 rounded-full p-1 cursor-pointer" style={{ backgroundColor: theme.success }}>
                <div className="w-4 h-4 rounded-full bg-white ml-auto" />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
              <div>
                <p className="font-medium" style={{ color: theme.text }}>Agendar Citas</p>
                <p className="text-sm" style={{ color: theme.textMuted }}>Permitir al bot agendar citas</p>
              </div>
              <div className="w-12 h-6 rounded-full p-1 cursor-pointer" style={{ backgroundColor: theme.success }}>
                <div className="w-4 h-4 rounded-full bg-white ml-auto" />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
              <div>
                <p className="font-medium" style={{ color: theme.text }}>Horario del Bot</p>
                <p className="text-sm" style={{ color: theme.textMuted }}>24/7 o solo fuera de horario</p>
              </div>
              <select className="px-3 py-1.5 rounded-lg text-sm" style={{ border: `1px solid ${theme.border}` }}>
                <option>24/7</option>
                <option>Solo fuera de horario</option>
                <option>Personalizado</option>
              </select>
            </div>

            <div className="p-3 rounded-lg" style={{ backgroundColor: theme.primaryBg }}>
              <p className="font-medium mb-2" style={{ color: theme.primary }}>Probar el Bot</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={testMessage}
                  onChange={(e) => setTestMessage(e.target.value)}
                  placeholder="Escribe un mensaje de prueba..."
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ border: `1px solid ${theme.border}` }}
                />
                <button className="px-4 py-2 rounded-lg text-white text-sm" style={{ backgroundColor: theme.primary }}>
                  Probar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// ANALYTICS VIEW
// =====================================================
const AnalyticsView = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Analytics & ROI</h1>
          <p style={{ color: theme.textMuted }}>Métricas detalladas de marketing y conversión</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 rounded-lg text-sm" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <option>Últimos 30 días</option>
            <option>Últimos 7 días</option>
            <option>Este mes</option>
          </select>
          <button className="px-4 py-2 rounded-lg text-sm flex items-center gap-2" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <Icons.Download /> Exportar
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: 'Inversión Ads', value: '$14,000', change: '+5%', icon: '💰' },
          { label: 'CPL Promedio', value: '$109', change: '-12%', positive: true, icon: '📊' },
          { label: 'CPA', value: '$1,273', change: '-8%', positive: true, icon: '🎯' },
          { label: 'ROAS', value: '11.5x', change: '+23%', positive: true, icon: '📈' },
          { label: 'LTV Paciente', value: '$8,500', change: '+15%', positive: true, icon: '💎' },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              {stat.positive !== undefined && (
                <span className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</span>
              )}
            </div>
            <p className="text-2xl font-bold" style={{ color: theme.text }}>{stat.value}</p>
            <p className="text-sm" style={{ color: theme.textMuted }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attribution */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Atribución Multicanal</h3>
          <p className="text-sm mb-4" style={{ color: theme.textMuted }}>Último paciente convertido:</p>
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { step: 'Vio anuncio', platform: 'tiktok' },
              { step: 'Buscó en', platform: 'google' },
              { step: 'Visitó perfil', platform: 'instagram' },
              { step: 'Agendó por', platform: 'whatsapp' },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: theme.bg }}>
                  <span className="text-xs" style={{ color: theme.textMuted }}>{item.step}</span>
                  <PlatformBadge platform={item.platform} />
                </div>
                {i < 3 && <Icons.ChevronRight />}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: theme.primaryBg }}>
            <p className="text-sm" style={{ color: theme.primary }}>
              <strong>Insight:</strong> TikTok genera awareness pero la conversión ocurre en WhatsApp
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Tiempo de Respuesta</h3>
          <div className="space-y-4">
            {[
              { channel: 'WhatsApp (Bot)', time: '8 seg', benchmark: '< 1 min', status: 'excellent' },
              { channel: 'WhatsApp (Humano)', time: '4 min', benchmark: '< 5 min', status: 'good' },
              { channel: 'Instagram DM', time: '12 min', benchmark: '< 15 min', status: 'good' },
              { channel: 'Facebook', time: '23 min', benchmark: '< 30 min', status: 'warning' },
              { channel: 'TikTok', time: '45 min', benchmark: '< 1 hora', status: 'warning' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm" style={{ color: theme.text }}>{item.channel}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold" style={{ color: theme.text }}>{item.time}</span>
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.status === 'excellent' ? theme.success : item.status === 'good' ? theme.info : theme.warning }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// AUTOMATIONS VIEW
// =====================================================
const AutomationsView = () => {
  const automations = [
    { name: 'Bienvenida Nuevo Lead', trigger: 'Nuevo contacto', action: 'Enviar mensaje de bienvenida', status: 'active', runs: 234 },
    { name: 'Recordatorio 24h', trigger: '24h antes de cita', action: 'WhatsApp + SMS', status: 'active', runs: 156 },
    { name: 'Recordatorio 2h', trigger: '2h antes de cita', action: 'WhatsApp', status: 'active', runs: 148 },
    { name: 'Post-Consulta', trigger: 'Cita completada', action: 'Encuesta + Solicitar reseña', status: 'active', runs: 89 },
    { name: 'Reactivación 30 días', trigger: 'Sin contacto 30 días', action: 'Mensaje de seguimiento', status: 'active', runs: 45 },
    { name: 'Cumpleaños', trigger: 'Fecha de nacimiento', action: 'Felicitación + Promoción', status: 'paused', runs: 12 },
    { name: 'Cotización sin respuesta', trigger: '3 días sin agendar', action: 'Recordatorio', status: 'active', runs: 67 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Automatizaciones</h1>
          <p style={{ color: theme.textMuted }}>Flujos automáticos de comunicación con pacientes</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}>
          <Icons.Plus /> Nueva Automatización
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Automatizaciones Activas', value: '6', icon: '⚡' },
          { label: 'Mensajes Enviados Hoy', value: '47', icon: '📤' },
          { label: 'Tasa de Apertura', value: '89%', icon: '👁️' },
          { label: 'Citas Confirmadas', value: '92%', icon: '✅' },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <p className="text-2xl font-bold" style={{ color: theme.text }}>{stat.value}</p>
              <p className="text-sm" style={{ color: theme.textMuted }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Automations List */}
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold" style={{ color: theme.text }}>Flujos Configurados</h3>
        </div>
        <div className="divide-y" style={{ borderColor: theme.border }}>
          {automations.map((auto, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme.primaryBg, color: theme.primary }}>
                  <Icons.Zap />
                </div>
                <div>
                  <p className="font-medium" style={{ color: theme.text }}>{auto.name}</p>
                  <p className="text-sm" style={{ color: theme.textMuted }}>
                    <span className="font-medium">Trigger:</span> {auto.trigger} → <span className="font-medium">Acción:</span> {auto.action}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm" style={{ color: theme.textMuted }}>{auto.runs} ejecuciones</span>
                <span 
                  className={`px-2 py-1 rounded text-xs font-medium`}
                  style={{ 
                    backgroundColor: auto.status === 'active' ? theme.success + '20' : theme.warning + '20',
                    color: auto.status === 'active' ? theme.success : theme.warning
                  }}
                >
                  {auto.status === 'active' ? 'Activo' : 'Pausado'}
                </span>
                <button style={{ color: theme.textMuted }}><Icons.MoreVertical /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =====================================================
// REPUTATION VIEW
// =====================================================
const ReputationView = () => {
  const reviews = [
    { platform: 'google', name: 'Patricia M.', rating: 5, text: 'Excelente atención del Dr. Hernández. Muy profesional y explicó todo el procedimiento.', date: 'Hace 2 días', responded: true },
    { platform: 'doctoralia', name: 'Roberto L.', rating: 5, text: 'Mi experiencia fue muy buena. El tratamiento de várices funcionó perfectamente.', date: 'Hace 5 días', responded: true },
    { platform: 'google', name: 'María G.', rating: 4, text: 'Buen doctor, aunque la espera fue un poco larga.', date: 'Hace 1 semana', responded: false },
    { platform: 'doctoralia', name: 'Carlos R.', rating: 5, text: 'Totalmente recomendado. Los resultados superaron mis expectativas.', date: 'Hace 2 semanas', responded: true },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Gestión de Reputación</h1>
          <p style={{ color: theme.textMuted }}>Monitorea y responde reseñas de todas las plataformas</p>
        </div>
      </div>

      {/* Ratings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { platform: 'Google', rating: 4.9, reviews: 127, icon: <Icons.Google /> },
          { platform: 'Doctoralia', rating: 4.8, reviews: 89, icon: <Icons.Doctoralia /> },
          { platform: 'Facebook', rating: 4.7, reviews: 34, icon: <Icons.Facebook /> },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium" style={{ color: theme.text }}>{item.platform}</span>
              {item.icon}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold" style={{ color: theme.text }}>{item.rating}</span>
              <div className="flex">
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: s <= Math.round(item.rating) ? theme.warning : theme.border }}>★</span>
                ))}
              </div>
            </div>
            <p className="text-sm mt-1" style={{ color: theme.textMuted }}>{item.reviews} reseñas</p>
          </div>
        ))}
      </div>

      {/* Recent Reviews */}
      <div className="rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <div className="p-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold" style={{ color: theme.text }}>Reseñas Recientes</h3>
          <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: theme.error + '20', color: theme.error }}>1 sin responder</span>
        </div>
        <div className="divide-y" style={{ borderColor: theme.border }}>
          {reviews.map((review, i) => (
            <div key={i} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium" style={{ color: theme.text }}>{review.name}</span>
                      <PlatformBadge platform={review.platform} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1,2,3,4,5].map(s => (
                          <span key={s} className="text-sm" style={{ color: s <= review.rating ? theme.warning : theme.border }}>★</span>
                        ))}
                      </div>
                      <span className="text-xs" style={{ color: theme.textMuted }}>{review.date}</span>
                    </div>
                  </div>
                </div>
                {review.responded ? (
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: theme.success + '20', color: theme.success }}>
                    ✓ Respondido
                  </span>
                ) : (
                  <button className="px-3 py-1.5 rounded-lg text-sm text-white" style={{ backgroundColor: theme.primary }}>
                    Responder
                  </button>
                )}
              </div>
              <p className="mt-3 text-sm" style={{ color: theme.text }}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =====================================================
// PAYMENTS VIEW
// =====================================================
const PaymentsView = () => {
  const transactions = [
    { id: 'PAY-001', patient: 'Patricia Mora', amount: 35000, method: 'Tarjeta', status: 'completed', date: '09/12/2025' },
    { id: 'PAY-002', patient: 'Juan Pérez', amount: 1500, method: 'Link de pago', status: 'completed', date: '09/12/2025' },
    { id: 'PAY-003', patient: 'María García', amount: 2500, method: 'Transferencia', status: 'pending', date: '08/12/2025' },
    { id: 'PAY-004', patient: 'Carlos Ruiz', amount: 15000, method: 'Mensualidades', status: 'partial', date: '07/12/2025' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Pagos Integrados</h1>
          <p style={{ color: theme.textMuted }}>Cobra en línea y gestiona pagos</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}>
          <Icons.Link /> Crear Link de Pago
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Cobrado Hoy', value: '$36,500', icon: '💰', color: theme.success },
          { label: 'Este Mes', value: '$248,500', icon: '📈', color: theme.info },
          { label: 'Por Cobrar', value: '$45,000', icon: '⏳', color: theme.warning },
          { label: 'En Mensualidades', value: '$89,000', icon: '📅', color: theme.purple },
        ].map((stat, i) => (
          <StatCard key={i} icon={<span className="text-xl">{stat.icon}</span>} label={stat.label} value={stat.value} color={stat.color} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods */}
        <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Métodos de Pago</h3>
          <div className="space-y-3">
            {[
              { name: 'Stripe', status: 'Conectado', icon: '💳' },
              { name: 'MercadoPago', status: 'Conectado', icon: '🟡' },
              { name: 'Transferencia SPEI', status: 'Activo', icon: '🏦' },
              { name: 'Efectivo', status: 'Activo', icon: '💵' },
            ].map((method, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{method.icon}</span>
                  <span style={{ color: theme.text }}>{method.name}</span>
                </div>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: theme.success + '20', color: theme.success }}>
                  {method.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="lg:col-span-2 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <h3 className="font-semibold" style={{ color: theme.text }}>Transacciones Recientes</h3>
          </div>
          <div className="divide-y" style={{ borderColor: theme.border }}>
            {transactions.map((tx, i) => (
              <div key={i} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium" style={{ color: theme.text }}>{tx.patient}</p>
                  <p className="text-sm" style={{ color: theme.textMuted }}>{tx.id} • {tx.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold" style={{ color: theme.text }}>${tx.amount.toLocaleString()}</p>
                  <span 
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ 
                      backgroundColor: tx.status === 'completed' ? theme.success + '20' : tx.status === 'pending' ? theme.warning + '20' : theme.info + '20',
                      color: tx.status === 'completed' ? theme.success : tx.status === 'pending' ? theme.warning : theme.info
                    }}
                  >
                    {tx.status === 'completed' ? 'Pagado' : tx.status === 'pending' ? 'Pendiente' : 'Parcial'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// MEDICAL RECORDS VIEW
// =====================================================
const MedicalRecordsView = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  const patients = [
    { id: 1, name: 'Patricia Mora', lastVisit: '09/12/2025', nextVisit: '23/12/2025', condition: 'Várices grado II' },
    { id: 2, name: 'Juan Pérez', lastVisit: '08/12/2025', nextVisit: '22/12/2025', condition: 'Insuficiencia venosa' },
    { id: 3, name: 'María García', lastVisit: '05/12/2025', nextVisit: '19/12/2025', condition: 'Post-escleroterapia' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Expediente Clínico</h1>
          <p style={{ color: theme.textMuted }}>Historial médico y documentos del paciente</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}>
          <Icons.Plus /> Nuevo Expediente
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient List */}
        <div className="rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <div className="relative">
              <Icons.Search />
              <input 
                type="text" 
                placeholder="Buscar paciente..."
                className="w-full pl-10 pr-4 py-2 rounded-lg text-sm outline-none"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              />
            </div>
          </div>
          <div className="divide-y" style={{ borderColor: theme.border }}>
            {patients.map(patient => (
              <div 
                key={patient.id}
                onClick={() => setSelectedPatient(patient)}
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                style={{ backgroundColor: selectedPatient?.id === patient.id ? theme.primaryBg : 'transparent' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: theme.text }}>{patient.name}</p>
                    <p className="text-xs" style={{ color: theme.textMuted }}>{patient.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Detail */}
        <div className="lg:col-span-2 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          {selectedPatient ? (
            <>
              <div className="p-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${theme.border}` }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg" style={{ backgroundColor: theme.primary }}>
                    {selectedPatient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: theme.text }}>{selectedPatient.name}</h3>
                    <p className="text-sm" style={{ color: theme.textMuted }}>{selectedPatient.condition}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg text-sm" style={{ backgroundColor: theme.bg }}>
                    <Icons.Printer />
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-sm" style={{ backgroundColor: theme.bg }}>
                    <Icons.Download />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
                    <p className="text-xs" style={{ color: theme.textMuted }}>Última visita</p>
                    <p className="font-medium" style={{ color: theme.text }}>{selectedPatient.lastVisit}</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
                    <p className="text-xs" style={{ color: theme.textMuted }}>Próxima cita</p>
                    <p className="font-medium" style={{ color: theme.text }}>{selectedPatient.nextVisit}</p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
                    <p className="text-xs" style={{ color: theme.textMuted }}>Total consultas</p>
                    <p className="font-medium" style={{ color: theme.text }}>5</p>
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-3">
                  {[
                    { title: 'Historia Clínica', icon: <Icons.FileText />, items: 3 },
                    { title: 'Notas de Consulta', icon: <Icons.Edit />, items: 5 },
                    { title: 'Fotografías de Evolución', icon: <Icons.Camera />, items: 8 },
                    { title: 'Estudios y Resultados', icon: <Icons.FileText />, items: 2 },
                    { title: 'Recetas', icon: <Icons.Receipt />, items: 3 },
                    { title: 'Consentimientos Firmados', icon: <Icons.CheckCircle />, items: 2 },
                  ].map((section, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-50" style={{ backgroundColor: theme.bg }}>
                      <div className="flex items-center gap-3">
                        <span style={{ color: theme.primary }}>{section.icon}</span>
                        <span style={{ color: theme.text }}>{section.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm" style={{ color: theme.textMuted }}>{section.items} archivos</span>
                        <Icons.ChevronRight />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p style={{ color: theme.textMuted }}>Selecciona un paciente para ver su expediente</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// =====================================================
// LANDING PAGES VIEW
// =====================================================
const LandingPagesView = () => {
  const landingPages = [
    { name: 'Tratamiento de Várices', url: 'varices.drhernandez.com', visits: 1234, conversions: 89, rate: '7.2%', status: 'active' },
    { name: 'Consulta de Valoración', url: 'consulta.drhernandez.com', visits: 856, conversions: 67, rate: '7.8%', status: 'active' },
    { name: 'Cirugía Vascular', url: 'cirugia.drhernandez.com', visits: 432, conversions: 23, rate: '5.3%', status: 'active' },
    { name: 'Promo Navidad', url: 'navidad.drhernandez.com', visits: 0, conversions: 0, rate: '0%', status: 'draft' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Landing Pages</h1>
          <p style={{ color: theme.textMuted }}>Crea páginas de captura para tus campañas</p>
        </div>
        <button className="px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}>
          <Icons.Plus /> Nueva Landing Page
        </button>
      </div>

      {/* Templates */}
      <div className="p-5 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <h3 className="font-semibold mb-4" style={{ color: theme.text }}>Templates Disponibles</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Consulta General', icon: '🩺' },
            { name: 'Tratamiento Estético', icon: '✨' },
            { name: 'Cirugía', icon: '🏥' },
            { name: 'Promoción', icon: '🎉' },
          ].map((template, i) => (
            <div key={i} className="p-4 rounded-xl text-center cursor-pointer hover:shadow-md transition-all" style={{ backgroundColor: theme.bg }}>
              <span className="text-4xl">{template.icon}</span>
              <p className="mt-2 text-sm font-medium" style={{ color: theme.text }}>{template.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Existing Pages */}
      <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <h3 className="font-semibold" style={{ color: theme.text }}>Mis Landing Pages</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: theme.bg }}>
              <th className="text-left p-4 text-sm font-medium" style={{ color: theme.textMuted }}>Nombre</th>
              <th className="text-left p-4 text-sm font-medium" style={{ color: theme.textMuted }}>URL</th>
              <th className="text-right p-4 text-sm font-medium" style={{ color: theme.textMuted }}>Visitas</th>
              <th className="text-right p-4 text-sm font-medium" style={{ color: theme.textMuted }}>Conversiones</th>
              <th className="text-right p-4 text-sm font-medium" style={{ color: theme.textMuted }}>Tasa</th>
              <th className="text-center p-4 text-sm font-medium" style={{ color: theme.textMuted }}>Estado</th>
              <th className="text-center p-4 text-sm font-medium" style={{ color: theme.textMuted }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {landingPages.map((page, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${theme.border}` }}>
                <td className="p-4 font-medium" style={{ color: theme.text }}>{page.name}</td>
                <td className="p-4">
                  <a href="#" className="text-sm flex items-center gap-1" style={{ color: theme.info }}>
                    {page.url} <Icons.ExternalLink />
                  </a>
                </td>
                <td className="p-4 text-right" style={{ color: theme.text }}>{page.visits.toLocaleString()}</td>
                <td className="p-4 text-right" style={{ color: theme.text }}>{page.conversions}</td>
                <td className="p-4 text-right font-semibold" style={{ color: theme.success }}>{page.rate}</td>
                <td className="p-4 text-center">
                  <span 
                    className="px-2 py-1 rounded text-xs"
                    style={{ 
                      backgroundColor: page.status === 'active' ? theme.success + '20' : theme.warning + '20',
                      color: page.status === 'active' ? theme.success : theme.warning
                    }}
                  >
                    {page.status === 'active' ? 'Activa' : 'Borrador'}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="p-1.5 rounded" style={{ backgroundColor: theme.bg }}><Icons.Edit /></button>
                    <button className="p-1.5 rounded" style={{ backgroundColor: theme.bg }}><Icons.Copy /></button>
                    <button className="p-1.5 rounded" style={{ backgroundColor: theme.bg }}><Icons.BarChart /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// =====================================================
// PATIENT PORTAL VIEW
// =====================================================
const PatientPortalView = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>Portal del Paciente</h1>
          <p style={{ color: theme.textMuted }}>Autoservicio para tus pacientes</p>
        </div>
        <span className="px-3 py-1.5 rounded-full text-sm" style={{ backgroundColor: theme.success + '20', color: theme.success }}>
          ✓ Portal Activo
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portal Preview */}
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.primary }}>
            <div className="flex items-center gap-3">
              <Icons.Logo />
              <span className="text-white font-semibold">Portal del Paciente</span>
            </div>
          </div>
          <div className="p-6 space-y-4" style={{ backgroundColor: theme.bg }}>
            <p className="text-center" style={{ color: theme.textMuted }}>Vista previa del portal</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '📅', label: 'Mis Citas' },
                { icon: '📋', label: 'Historial' },
                { icon: '📄', label: 'Documentos' },
                { icon: '🧾', label: 'Facturas' },
                { icon: '💬', label: 'Mensajes' },
                { icon: '⚙️', label: 'Mi Perfil' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl text-center" style={{ backgroundColor: theme.surface }}>
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm mt-2" style={{ color: theme.text }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portal Settings */}
        <div className="rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
            <h3 className="font-semibold" style={{ color: theme.text }}>Configuración del Portal</h3>
          </div>
          <div className="p-4 space-y-4">
            {[
              { label: 'Permitir reagendar citas', enabled: true },
              { label: 'Mostrar historial de citas', enabled: true },
              { label: 'Descargar documentos', enabled: true },
              { label: 'Ver facturas', enabled: true },
              { label: 'Chat con consultorio', enabled: false },
              { label: 'Pagar en línea', enabled: true },
            ].map((setting, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.bg }}>
                <span style={{ color: theme.text }}>{setting.label}</span>
                <div 
                  className="w-12 h-6 rounded-full p-1 cursor-pointer"
                  style={{ backgroundColor: setting.enabled ? theme.success : theme.border }}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-all ${setting.enabled ? 'ml-auto' : ''}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="p-4" style={{ borderTop: `1px solid ${theme.border}` }}>
            <p className="text-sm mb-2" style={{ color: theme.textMuted }}>URL del Portal:</p>
            <div className="flex gap-2">
              <input 
                type="text" 
                value="portal.drhernandez.com"
                readOnly
                className="flex-1 px-3 py-2 rounded-lg text-sm"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              />
              <button className="px-3 py-2 rounded-lg" style={{ backgroundColor: theme.bg }}>
                <Icons.Copy />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Pacientes Registrados', value: '234', icon: '👥' },
          { label: 'Accesos este Mes', value: '567', icon: '🔐' },
          { label: 'Citas Reagendadas', value: '23', icon: '📅' },
          { label: 'Documentos Descargados', value: '89', icon: '📄' },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <p className="text-2xl font-bold" style={{ color: theme.text }}>{stat.value}</p>
              <p className="text-sm" style={{ color: theme.textMuted }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// =====================================================
// SIMPLE PLACEHOLDER VIEWS
// =====================================================
// =====================================================
// SALA DE ESPERA VIRTUAL
// =====================================================
const WaitingRoomView = () => {
  const [queue, setQueue] = useState([
    { id: 1, name: 'María García López', phone: '+52 55 1234 5678', appointmentTime: '10:00', checkInTime: '09:45', status: 'waiting', priority: 'normal', reason: 'Consulta de seguimiento - Várices', estimatedWait: 15, position: 1, notificationSent: false },
    { id: 2, name: 'Roberto Sánchez Pérez', phone: '+52 55 9876 5432', appointmentTime: '10:30', checkInTime: '10:15', status: 'waiting', priority: 'urgent', reason: 'Dolor agudo en pierna', estimatedWait: 30, position: 2, notificationSent: false },
    { id: 3, name: 'Ana Martínez Ruiz', phone: '+52 55 5555 1234', appointmentTime: '11:00', checkInTime: '10:50', status: 'waiting', priority: 'normal', reason: 'Primera consulta - Evaluación vascular', estimatedWait: 45, position: 3, notificationSent: false },
    { id: 4, name: 'Carlos Hernández Villa', phone: '+52 55 4444 5678', appointmentTime: '11:30', checkInTime: null, status: 'scheduled', priority: 'vip', reason: 'Post-operatorio cirugía vascular', estimatedWait: 60, position: 4, notificationSent: false },
  ]);
  const [settings, setSettings] = useState({ hasSecretary: false, notificationChannel: 'whatsapp', avgConsultTime: 20 });
  const [showSettings, setShowSettings] = useState(false);

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

  const stats = {
    waiting: queue.filter(p => p.status === 'waiting').length,
    inConsultation: queue.filter(p => p.status === 'in_consultation').length,
    completed: queue.filter(p => p.status === 'completed').length,
    avgWait: Math.round(queue.filter(p => p.status === 'waiting').reduce((a, b) => a + b.estimatedWait, 0) / Math.max(queue.filter(p => p.status === 'waiting').length, 1)),
  };

  const handleCall = (patientId) => {
    setQueue(prev => prev.map(p => p.id === patientId ? { ...p, status: 'called', notificationSent: true } : p));
    // En producción: enviar WhatsApp/SMS aquí
  };

  const handleStatusChange = (patientId, newStatus) => {
    setQueue(prev => prev.map(p => p.id === patientId ? { ...p, status: newStatus } : p));
  };

  const handleNoShow = (patientId) => {
    setQueue(prev => prev.map(p => p.id === patientId ? { ...p, status: 'no_show' } : p));
  };

  const handleSkip = (patientId) => {
    setQueue(prev => {
      const patient = prev.find(p => p.id === patientId);
      const waitingPatients = prev.filter(p => p.status === 'waiting' && p.id !== patientId);
      const lastPosition = Math.max(...waitingPatients.map(p => p.position), 0);
      return prev.map(p => {
        if (p.id === patientId) return { ...p, position: lastPosition + 1 };
        if (p.status === 'waiting' && p.position > patient.position) return { ...p, position: p.position - 1 };
        return p;
      });
    });
  };

  const waitingPatients = queue.filter(p => ['waiting', 'called', 'in_consultation'].includes(p.status)).sort((a, b) => a.position - b.position);
  const completedPatients = queue.filter(p => ['completed', 'no_show'].includes(p.status));

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: theme.text }}>🏥 Sala de Espera Virtual</h1>
          <p className="text-sm" style={{ color: theme.textMuted }}>
            {settings.hasSecretary ? '👩‍💼 Modo con secretaria' : '🤖 Modo automático (notifica por WhatsApp)'}
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setShowSettings(!showSettings)} className="px-4 py-2 border rounded-lg flex items-center gap-2" style={{ borderColor: theme.border, color: theme.textMuted }}>
            <Icons.Settings /> Configuración
          </button>
          <button className="px-4 py-2 rounded-lg text-white flex items-center gap-2" style={{ backgroundColor: theme.primary }}>
            <Icons.Plus /> Nuevo Check-in
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: theme.primaryBg }}>
          <h3 className="font-semibold mb-4">⚙️ Configuración</h3>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <span className="text-sm">👩‍💼 ¿Tiene secretaria?</span>
              <button
                onClick={() => setSettings(s => ({ ...s, hasSecretary: !s.hasSecretary }))}
                className={`relative w-12 h-6 rounded-full transition-colors ${settings.hasSecretary ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.hasSecretary ? 'left-7' : 'left-1'}`}/>
              </button>
            </label>
            <span className="text-sm" style={{ color: theme.textMuted }}>
              {settings.hasSecretary ? 'La secretaria llamará al paciente verbalmente' : 'Se enviará notificación automática por WhatsApp'}
            </span>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'En espera', value: stats.waiting, color: theme.warning },
          { label: 'En consulta', value: stats.inConsultation, color: theme.success },
          { label: 'Completados hoy', value: stats.completed, color: theme.textMuted },
          { label: 'Espera promedio', value: `${stats.avgWait} min`, color: theme.info },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <p className="text-sm" style={{ color: theme.textMuted }}>{stat.label}</p>
            <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Cola de espera */}
      <h2 className="text-lg font-semibold mb-4" style={{ color: theme.text }}>Cola de Espera ({waitingPatients.length})</h2>
      <div className="space-y-4">
        {waitingPatients.map(patient => {
          const status = statusColors[patient.status];
          const priority = priorityColors[patient.priority];
          return (
            <div key={patient.id} className="p-4 rounded-xl" style={{ backgroundColor: theme.surface, border: patient.status === 'called' ? `2px solid ${theme.info}` : `1px solid ${theme.border}` }}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: patient.status === 'waiting' ? theme.primary : '#9CA3AF' }}>
                    {patient.position}
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: theme.text }}>{patient.name}</h3>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      🕐 Cita: {patient.appointmentTime} {patient.checkInTime && `• Check-in: ${patient.checkInTime}`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {patient.priority !== 'normal' && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: priority.bg, color: priority.text }}>
                      {patient.priority === 'urgent' ? '🚨 Urgente' : '⭐ VIP'}
                    </span>
                  )}
                  <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: status.bg, color: status.text }}>
                    {status.label}
                  </span>
                </div>
              </div>
              <p className="text-sm mb-3 pl-13" style={{ color: theme.textMuted }}>📋 {patient.reason}</p>
              {patient.status === 'waiting' && (
                <div className="p-3 rounded-lg flex items-center justify-between mb-3" style={{ backgroundColor: theme.bg }}>
                  <span className="text-sm" style={{ color: theme.textMuted }}>⏱️ Espera estimada: <strong>{patient.estimatedWait} min</strong> • 📱 {patient.phone}</span>
                  {patient.notificationSent && <span className="text-sm text-green-600 flex items-center gap-1"><Icons.Check /> Notificado</span>}
                </div>
              )}
              <div className="flex gap-2 pt-2" style={{ borderTop: `1px solid ${theme.border}` }}>
                {patient.status === 'waiting' && (
                  <>
                    <button onClick={() => handleCall(patient.id)} className="flex-1 py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2" style={{ backgroundColor: theme.primary }}>
                      <Icons.Bell /> {settings.hasSecretary ? 'Llamar Paciente' : 'Notificar Turno'}
                    </button>
                    <button onClick={() => handleSkip(patient.id)} className="py-2 px-4 rounded-lg" style={{ border: `1px solid ${theme.border}`, color: theme.textMuted }} title="Saltar turno">
                      ⏭️
                    </button>
                    <button onClick={() => handleNoShow(patient.id)} className="py-2 px-4 rounded-lg border-red-200 text-red-600" style={{ border: '1px solid #FECACA' }} title="No se presentó">
                      ✗
                    </button>
                  </>
                )}
                {patient.status === 'called' && (
                  <>
                    <button onClick={() => handleStatusChange(patient.id, 'in_consultation')} className="flex-1 py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2" style={{ backgroundColor: theme.success }}>
                      <Icons.Play /> Iniciar Consulta
                    </button>
                    <button onClick={() => handleCall(patient.id)} className="py-2 px-4 rounded-lg" style={{ border: `1px solid ${theme.info}`, color: theme.info }}>
                      🔔 Re-notificar
                    </button>
                  </>
                )}
                {patient.status === 'in_consultation' && (
                  <button onClick={() => handleStatusChange(patient.id, 'completed')} className="flex-1 py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2" style={{ backgroundColor: theme.success }}>
                    <Icons.Check /> Finalizar Consulta
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {waitingPatients.length === 0 && (
          <div className="p-12 rounded-xl text-center" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold" style={{ color: theme.text }}>No hay pacientes en espera</h3>
            <p style={{ color: theme.textMuted }}>La sala de espera está vacía</p>
          </div>
        )}
      </div>

      {/* Historial */}
      {completedPatients.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4" style={{ color: theme.text }}>Historial del Día ({completedPatients.length})</h2>
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
            <table className="w-full">
              <thead style={{ backgroundColor: theme.bg }}>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium" style={{ color: theme.textMuted }}>Paciente</th>
                  <th className="px-4 py-3 text-left text-sm font-medium" style={{ color: theme.textMuted }}>Cita</th>
                  <th className="px-4 py-3 text-left text-sm font-medium" style={{ color: theme.textMuted }}>Check-in</th>
                  <th className="px-4 py-3 text-left text-sm font-medium" style={{ color: theme.textMuted }}>Estado</th>
                </tr>
              </thead>
              <tbody>
                {completedPatients.map(patient => (
                  <tr key={patient.id} style={{ borderTop: `1px solid ${theme.border}` }}>
                    <td className="px-4 py-3 font-medium" style={{ color: theme.text }}>{patient.name}</td>
                    <td className="px-4 py-3" style={{ color: theme.textMuted }}>{patient.appointmentTime}</td>
                    <td className="px-4 py-3" style={{ color: theme.textMuted }}>{patient.checkInTime || '-'}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${patient.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
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
    </div>
  );
};

const InboxView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>Inbox Unificado</h1>
    <p style={{ color: theme.textMuted }}>WhatsApp, Facebook, Instagram, TikTok, Doctoralia - todo en un solo lugar con badges de origen.</p>
    <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: theme.primaryBg }}>
      <p style={{ color: theme.primary }}>✓ Funcionalidad completa disponible en el MVP anterior</p>
    </div>
  </div>
);

const PatientsView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>Gestión de Pacientes</h1>
    <p style={{ color: theme.textMuted }}>Base de datos centralizada con perfil 360° del paciente.</p>
  </div>
);

const CalendarView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>Calendario</h1>
    <p style={{ color: theme.textMuted }}>Sincronizado con Google Calendar, Doctoralia y Cronofy.</p>
  </div>
);

const PipelineView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>Pipeline de Ventas</h1>
    <p style={{ color: theme.textMuted }}>Vista Kanban con seguimiento de leads y origen por plataforma.</p>
  </div>
);

const BillingView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>Facturación</h1>
    <p style={{ color: theme.textMuted }}>Genera boletas y facturas automáticamente al finalizar la consulta.</p>
  </div>
);

const SettingsView = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>Integraciones</h1>
    <p style={{ color: theme.textMuted }}>Meta, TikTok, Doctoralia, Google Calendar, Stripe, MercadoPago.</p>
  </div>
);

// =====================================================
// MAIN APP
// =====================================================
export default function MedicalCRMEnterprise() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedSection, setExpandedSection] = useState('main');

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const menuSections = [
    {
      id: 'main',
      title: 'Principal',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard },
        { id: 'inbox', label: 'Inbox', icon: Icons.Inbox, badge: 3 },
        { id: 'patients', label: 'Pacientes', icon: Icons.Users },
        { id: 'calendar', label: 'Calendario', icon: Icons.Calendar },
        { id: 'pipeline', label: 'Pipeline', icon: Icons.Pipeline },
      ]
    },
    {
      id: 'ai',
      title: 'Inteligencia Artificial',
      items: [
        { id: 'chatbot', label: 'Chatbot IA', icon: Icons.Bot },
        { id: 'automations', label: 'Automatizaciones', icon: Icons.Zap },
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing',
      items: [
        { id: 'analytics', label: 'Analytics & ROI', icon: Icons.BarChart },
        { id: 'reputation', label: 'Reputación', icon: Icons.Star },
        { id: 'landings', label: 'Landing Pages', icon: Icons.Layout },
      ]
    },
    {
      id: 'operations',
      title: 'Operaciones',
      items: [
        { id: 'waitingroom', label: 'Sala de Espera', icon: Icons.Clock, badge: 4 },
        { id: 'billing', label: 'Facturación', icon: Icons.Receipt },
        { id: 'payments', label: 'Pagos', icon: Icons.CreditCard },
        { id: 'records', label: 'Expediente Clínico', icon: Icons.FileText },
        { id: 'portal', label: 'Portal Paciente', icon: Icons.UserCircle },
      ]
    },
    {
      id: 'config',
      title: 'Configuración',
      items: [
        { id: 'settings', label: 'Integraciones', icon: Icons.Settings },
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'inbox': return <InboxView />;
      case 'patients': return <PatientsView />;
      case 'calendar': return <CalendarView />;
      case 'pipeline': return <PipelineView />;
      case 'chatbot': return <ChatbotView />;
      case 'automations': return <AutomationsView />;
      case 'analytics': return <AnalyticsView />;
      case 'reputation': return <ReputationView />;
      case 'landings': return <LandingPagesView />;
      case 'waitingroom': return <WaitingRoomView />;
      case 'billing': return <BillingView />;
      case 'payments': return <PaymentsView />;
      case 'records': return <MedicalRecordsView />;
      case 'portal': return <PatientPortalView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: theme.bg }}>
      {/* Sidebar */}
      <aside className="w-64 flex flex-col overflow-y-auto" style={{ backgroundColor: theme.surface, borderRight: `1px solid ${theme.border}` }}>
        <div className="p-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <div className="flex items-center gap-3">
            <Icons.Logo />
            <div>
              <h1 className="font-semibold text-sm" style={{ color: theme.text }}>CRM Médico</h1>
              <p className="text-xs" style={{ color: theme.primary }}>Enterprise</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3">
          {menuSections.map((section) => (
            <div key={section.id} className="mb-4">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
                {section.title}
              </p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm"
                      style={{
                        backgroundColor: activeTab === item.id ? theme.primaryBg : 'transparent',
                        color: activeTab === item.id ? theme.primary : theme.textMuted,
                      }}
                    >
                      <item.icon />
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto px-1.5 py-0.5 rounded-full text-xs text-white" style={{ backgroundColor: theme.primary }}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-3" style={{ borderTop: `1px solid ${theme.border}` }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: theme.primaryLight }}>
              {user?.name?.[0] || 'U'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium" style={{ color: theme.text }}>{user?.name || 'Usuario'}</p>
              <p className="text-xs" style={{ color: theme.textMuted }}>{user?.role || 'assistant'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm"
            style={{ backgroundColor: theme.bg, color: theme.textMuted }}
          >
            <Icons.LogOut /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 flex items-center justify-between px-6" style={{ backgroundColor: theme.surface, borderBottom: `1px solid ${theme.border}` }}>
          <div className="relative flex items-center">
            <Icons.Search />
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 rounded-lg text-sm w-64 outline-none"
              style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg" style={{ backgroundColor: theme.bg }}>
              <Icons.Bell />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs text-white flex items-center justify-center" style={{ backgroundColor: theme.error }}>5</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
