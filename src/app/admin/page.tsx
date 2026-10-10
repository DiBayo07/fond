'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  Home as HomeIcon,
  Users,
  Heart,
  TrendingUp,
  FileText,
  Settings,
  Plus,
  Trash2,
  Edit,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  LogOut,
  Save,
  Search,
  Lock,
  Phone,
  CreditCard,
  Building,
  Sparkles,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { Organization, DEFAULT_ORGANIZATIONS } from '@/data/homesData';
import { getHomes, saveHome, deleteHome, getSettings, saveSettings } from '@/lib/db';

const INITIAL_VOLUNTEERS = [
  {
    id: 1,
    name: 'Айдар Касымов',
    age: '16 лет',
    city: 'Бишкек',
    phone: '+996 700 112 233',
    email: 'aidar@example.com',
    parentName: 'Касымов Тимур',
    parentPhone: '+996 700 998 877',
    directions: ['Образовательные занятия', 'Мероприятия'],
    status: 'New',
    date: '04.10.2026',
  },
  {
    id: 2,
    name: 'Алина Муратова',
    age: '19 лет',
    city: 'Бишкек',
    phone: '+996 555 443 322',
    email: 'alina.m@gmail.com',
    parentName: '-',
    parentPhone: '-',
    directions: ['SMM и медиа', 'Сбор помощи'],
    status: 'Accepted',
    date: '02.10.2026',
  },
  {
    id: 3,
    name: 'Бектур Салиев',
    age: '15 лет',
    city: 'Ош',
    phone: '+996 772 334 455',
    email: 'bektur@mail.ru',
    parentName: 'Салиева Жылдыз',
    parentPhone: '+996 772 110 099',
    directions: ['IT и дизайн', 'Сортировка'],
    status: 'Under Review',
    date: '28.09.2026',
  },
];

const INITIAL_DONATIONS = [
  { id: '#SKY-9182', amount: 5000, target: 'Детский дом «Надежда»', donor: 'Анонимный благотворитель', method: 'Банковская карта', date: '04.10.2026', status: 'Завершено' },
  { id: '#SKY-8812', amount: 1000, target: 'Фонд Project Sky', donor: 'Эльмира Т.', method: 'MBank QR', date: '04.10.2026', status: 'Завершено' },
  { id: '#SKY-7734', amount: 2000, target: 'Детский дом «Свет»', donor: 'Азамат Б.', method: 'Банковская карта', date: '03.10.2026', status: 'Завершено' },
  { id: '#SKY-6621', amount: 10000, target: 'Подготовка к зиме', donor: 'ОсОО «Технологии Бишкек»', method: 'Расчетный счет', date: '01.10.2026', status: 'Завершено' },
];

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active section
  const [activeTab, setActiveTab] = useState<'dashboard' | 'homes' | 'volunteers' | 'donations' | 'settings'>('dashboard');

  // State collections
  const [homes, setHomes] = useState<Organization[]>(DEFAULT_ORGANIZATIONS);
  const [volunteers, setVolunteers] = useState(INITIAL_VOLUNTEERS);
  const [donations, setDonations] = useState(INITIAL_DONATIONS);

  // Settings
  const [settings, setSettings] = useState({
    phone: '+996 709 809 017',
    cardNumber: '4169 5853 5799 0323',
    email: 'info@projectsky.kg',
    office: 'Кыргызстан, г. Бишкек, ул. Токтогула 125',
    instagram: '@projectsky',
  });
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  // Home modal state
  const [isHomeModalOpen, setIsHomeModalOpen] = useState(false);
  const [editingHomeId, setEditingHomeId] = useState<string | null>(null);
  const [homeForm, setHomeForm] = useState({
    id: '',
    name: '',
    city: 'Бишкек',
    type: 'Детский дом',
    childrenCount: 30,
    ageRange: '3 – 18 лет',
    address: '',
    director: '',
    phone: '',
    email: '',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
    description: '',
    status: 'Verified',
    needs: '',
  });

  // Load from Database & LocalStorage
  useEffect(() => {
    const savedAuth = localStorage.getItem('sky_admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }

    // 1. Load homes
    getHomes().then((data) => {
      if (data && data.length > 0) setHomes(data);
    });

    // 2. Load settings
    getSettings().then((data) => {
      if (data) setSettings(data);
    });

    // 3. Load volunteers from storage
    const savedVolunteers = localStorage.getItem('sky_admin_volunteers');
    if (savedVolunteers) {
      try { setVolunteers(JSON.parse(savedVolunteers)); } catch (e) {}
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'sky2026' || passwordInput === 'admin' || passwordInput === '1234') {
      setIsAuthenticated(true);
      localStorage.setItem('sky_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Неверный пароль администратора. Попробуйте sky2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('sky_admin_auth');
  };

  // Home Actions: Persistent DB
  const handleSaveHome = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetId = editingHomeId || ('home_' + Date.now());
    const payload = {
      ...homeForm,
      id: targetId,
    };

    await saveHome(payload as any);
    const updated = await getHomes();
    setHomes(updated);
    setIsHomeModalOpen(false);
    setEditingHomeId(null);
  };

  const handleDeleteHome = async (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту организацию из базы данных?')) {
      await deleteHome(id);
      const updated = await getHomes();
      setHomes(updated);
    }
  };

  const handleEditHomeClick = (home: any) => {
    setEditingHomeId(home.id);
    setHomeForm({
      id: home.id,
      name: home.name || '',
      city: home.city || 'Бишкек',
      type: home.type || 'Детский дом',
      childrenCount: home.childrenCount || 0,
      ageRange: home.ageRange || '3 – 18 лет',
      address: home.address || '',
      director: home.director || '',
      phone: home.phone || '',
      email: home.email || '',
      image: home.image || 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
      description: home.description || '',
      status: home.status || 'Verified',
      needs: home.needs || '',
    });
    setIsHomeModalOpen(true);
  };

  const handleOpenAddHomeModal = () => {
    setEditingHomeId(null);
    setHomeForm({
      id: '',
      name: '',
      city: 'Бишкек',
      type: 'Детский дом',
      childrenCount: 30,
      ageRange: '3 – 18 лет',
      address: '',
      director: '',
      phone: '+996 ',
      email: '',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
      description: '',
      status: 'Verified',
      needs: '',
    });
    setIsHomeModalOpen(true);
  };

  // Volunteer Status Action
  const handleVolunteerStatusChange = (id: number, newStatus: string) => {
    const updated = volunteers.map((v) => (v.id === id ? { ...v, status: newStatus } : v));
    setVolunteers(updated);
    localStorage.setItem('sky_admin_volunteers', JSON.stringify(updated));
  };

  // Settings Save
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveSettings(settings);
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 3000);
  };

  // If not logged in, render Secure Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0e387a] text-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="bg-[#092248] p-8 md:p-10 rounded-3xl border border-white/15 max-w-md w-full shadow-2xl relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <Logo variant="dark" size="lg" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#f26a21] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Shield size={14} />
            <span>Панель управления проектом</span>
          </div>

          <h2 className="text-xl font-bold font-serif mb-2">Вход для координаторов</h2>
          <p className="text-xs text-gray-300 mb-6 leading-relaxed">
            Управление детскими домами, модерация анкет волонтёров и финансовая статистика.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                Пароль администратора
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Введите пароль..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full p-3.5 bg-white/5 border border-white/15 rounded-xl text-sm focus:outline-none focus:border-[#f26a21] text-white placeholder-gray-500"
                />
                <Lock size={16} className="absolute right-4 top-4 text-gray-500" />
              </div>
            </div>

            {authError && (
              <p className="text-xs text-red-400 flex items-center gap-1.5">
                <AlertCircle size={14} /> {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#f26a21] hover:bg-[#d95813] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider active:scale-98 transition shadow-lg cursor-pointer"
            >
              Войти в админ-панель
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-400">
            <p>Тестовый пароль: <code className="bg-white/10 px-2 py-0.5 rounded text-[#f26a21]">sky2026</code></p>
            <Link href="/" className="inline-block mt-3 text-sky-300 hover:underline">
              ← Вернуться на сайт
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#0e387a] text-white p-6 flex flex-col justify-between border-r border-white/10 flex-shrink-0">
        <div>
          <div className="mb-8">
            <Logo variant="dark" size="sm" />
            <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#f26a21] text-[9px] font-bold uppercase tracking-wider">
              Администратор
            </div>
          </div>

          <nav className="space-y-1.5 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition text-left cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-[#f26a21] text-white font-extrabold shadow-sm'
                  : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <TrendingUp size={16} />
              <span>Обзор / Статистика</span>
            </button>

            <button
              onClick={() => setActiveTab('homes')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition text-left cursor-pointer ${
                activeTab === 'homes'
                  ? 'bg-[#f26a21] text-white font-extrabold shadow-sm'
                  : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <HomeIcon size={16} />
              <span>Детские дома ({homes.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('volunteers')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition text-left cursor-pointer ${
                activeTab === 'volunteers'
                  ? 'bg-[#f26a21] text-white font-extrabold shadow-sm'
                  : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Users size={16} />
              <span>Волонтёры ({volunteers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('donations')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition text-left cursor-pointer ${
                activeTab === 'donations'
                  ? 'bg-[#f26a21] text-white font-extrabold shadow-sm'
                  : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Heart size={16} />
              <span>Пожертвования ({donations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition text-left cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#f26a21] text-white font-extrabold shadow-sm'
                  : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Settings size={16} />
              <span>Контакты и реквизиты</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-2 text-xs">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition py-1"
          >
            <span>← На публичный сайт</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition py-1 cursor-pointer"
          >
            <LogOut size={14} />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-dark-blue font-serif">
                Панель управления Project Sky
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Сводка показателей деятельности благотворительного проекта.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Всего собрано
                </span>
                <p className="text-2xl font-bold text-dark-blue">2 450 000 сом</p>
                <span className="text-[10px] text-green-600 font-semibold mt-1 inline-block">
                  +18 000 сом за эту неделю
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Детских домов
                </span>
                <p className="text-2xl font-bold text-sky-blue">{homes.length} учреждений</p>
                <span className="text-[10px] text-gray-500 mt-1 inline-block">Бишкек, Ош, Каракол</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Анкет волонтёров
                </span>
                <p className="text-2xl font-bold text-accent">{volunteers.length} кандидатов</p>
                <span className="text-[10px] text-amber-600 font-semibold mt-1 inline-block">
                  1 новая на рассмотрении
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Текущая карта
                </span>
                <p className="text-sm font-mono font-bold text-dark-blue mt-1">
                  {settings.cardNumber}
                </p>
                <span className="text-[10px] text-gray-500 mt-1 inline-block">MBank / Элкарт</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#0e387a] text-white p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-sm font-serif">Быстрое действие:</h3>
                <p className="text-xs text-gray-200">
                  Добавьте детский дом с фото и адресом или актуализируйте список срочных потребностей.
                </p>
              </div>
              <button
                onClick={handleOpenAddHomeModal}
                className="bg-[#f26a21] hover:bg-[#d95813] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <Plus size={16} />
                <span>Добавить детский дом</span>
              </button>
            </div>
          </div>
        )}

        {/* HOMES MANAGEMENT TAB */}
        {activeTab === 'homes' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-dark-blue font-serif">
                  Управление детскими домами
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  Каталог учреждений, статусы модерации и списки потребностей.
                </p>
              </div>
              <button
                onClick={handleOpenAddHomeModal}
                className="bg-[#f26a21] hover:bg-[#d95813] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus size={16} />
                <span>Добавить учреждение</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xs border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50/70 border-b border-gray-100 text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-4">Учреждение (Фото и адрес)</th>
                      <th className="p-4">Воспитанники</th>
                      <th className="p-4">Директор / Контакты</th>
                      <th className="p-4">Статус</th>
                      <th className="p-4">Срочные потребности</th>
                      <th className="p-4 text-right">Действия</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {homes.map((h) => (
                      <tr key={h.id} className="hover:bg-gray-50/50 transition">
                        <td className="p-4 font-bold text-[#0e387a]">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                              <img
                                src={h.image || 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop'}
                                alt={h.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop';
                                }}
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-sm text-[#0e387a] truncate">{h.name}</p>
                              <p className="text-[11px] text-gray-500 font-normal truncate">
                                {h.address || `г. ${h.city}`}
                              </p>
                              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-bold">
                                {h.type}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold">{h.childrenCount} детей</p>
                          <span className="text-[10px] text-gray-400">{h.ageRange}</span>
                        </td>
                        <td className="p-4">
                          <p className="font-medium text-gray-800">{h.director || 'Не указан'}</p>
                          <p className="text-[11px] text-[#0e387a] font-bold">{h.phone}</p>
                          {h.email && <p className="text-[10px] text-gray-400">{h.email}</p>}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              h.status === 'Urgent Support Needed'
                                ? 'bg-red-100 text-red-700'
                                : h.status === 'Verified'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {h.status === 'Urgent Support Needed'
                              ? '🔴 Срочно'
                              : h.status === 'Verified'
                              ? '✓ Проверен'
                              : 'Обновить данные'}
                          </span>
                        </td>
                        <td className="p-4 max-w-xs text-[11px] text-gray-500 truncate">
                          {h.needs}
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => handleEditHomeClick(h)}
                            className="p-2 text-gray-600 hover:text-[#0e387a] hover:bg-gray-100 rounded-lg transition cursor-pointer"
                            title="Редактировать (фото, адрес и т.д.)"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteHome(h.id)}
                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                            title="Удалить из базы"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VOLUNTEERS TAB */}
        {activeTab === 'volunteers' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h1 className="text-2xl font-bold text-dark-blue font-serif">
                База заявок волонтёров (14+)
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Модерация анкет, контакты родителей для несовершеннолетних и отбор кандидатов.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xs border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50/70 border-b border-gray-100 text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-4">Кандидат</th>
                      <th className="p-4">Контакты</th>
                      <th className="p-4">Родители (для &lt;18)</th>
                      <th className="p-4">Направления</th>
                      <th className="p-4">Статус отбора</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {volunteers.map((v) => (
                      <tr key={v.id} className="hover:bg-gray-50/50 transition">
                        <td className="p-4">
                          <p className="font-bold text-dark-blue">{v.name}</p>
                          <span className="text-[10px] text-gray-400">
                            {v.age} • г. {v.city}
                          </span>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-dark-blue">{v.phone}</p>
                          <span className="text-[10px] text-gray-400">{v.email}</span>
                        </td>
                        <td className="p-4">
                          {v.parentPhone && v.parentPhone !== '-' ? (
                            <div>
                              <p className="font-bold text-dark-blue">{v.parentName}</p>
                              <span className="text-[10px] text-sky-blue">{v.parentPhone}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-[11px]">—</span>
                          )}
                        </td>
                        <td className="p-4 text-[11px]">
                          {v.directions.join(', ')}
                        </td>
                        <td className="p-4">
                          <select
                            value={v.status}
                            onChange={(e) => handleVolunteerStatusChange(v.id, e.target.value)}
                            className={`p-1.5 rounded-lg text-xs font-bold border focus:outline-none cursor-pointer ${
                              v.status === 'Accepted'
                                ? 'bg-green-50 border-green-200 text-green-700'
                                : v.status === 'Rejected'
                                ? 'bg-red-50 border-red-200 text-red-700'
                                : v.status === 'Under Review'
                                ? 'bg-amber-50 border-amber-200 text-amber-700'
                                : 'bg-blue-50 border-blue-200 text-sky-blue'
                            }`}
                          >
                            <option value="New">Новая заявка</option>
                            <option value="Under Review">На рассмотрении</option>
                            <option value="Accepted">Принят(а)</option>
                            <option value="Rejected">Отклонён</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* DONATIONS TAB */}
        {activeTab === 'donations' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h1 className="text-2xl font-bold text-dark-blue font-serif">
                Журнал пожертвований
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Поступившие средства, суммы, назначение и способы оплаты.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xs border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50/70 border-b border-gray-100 text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-4">ID транзакции</th>
                      <th className="p-4">Сумма</th>
                      <th className="p-4">Назначение</th>
                      <th className="p-4">Донор</th>
                      <th className="p-4">Способ оплаты</th>
                      <th className="p-4">Дата / Статус</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {donations.map((d) => (
                      <tr key={d.id} className="hover:bg-gray-50/50 transition">
                        <td className="p-4 font-mono font-bold text-sky-blue">{d.id}</td>
                        <td className="p-4 font-bold text-dark-blue text-sm">
                          {d.amount.toLocaleString()} сом
                        </td>
                        <td className="p-4 font-semibold text-gray-700">{d.target}</td>
                        <td className="p-4 text-gray-600">{d.donor}</td>
                        <td className="p-4 text-gray-500">{d.method}</td>
                        <td className="p-4">
                          <span className="text-[10px] text-gray-400 block">{d.date}</span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">
                            {d.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="space-y-6 max-w-2xl animate-in fade-in duration-200">
            <div>
              <h1 className="text-2xl font-bold text-dark-blue font-serif">
                Контакты и реквизиты сайта
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Изменение официального телефона, номера карты для донатов и адреса офиса.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xs border border-gray-100">
              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Основной телефон / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Отображается в шапке, контактах и футере.</p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Официальный номер карты для донатов *
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.cardNumber}
                    onChange={(e) => setSettings({ ...settings, cardNumber: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue font-mono font-bold"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Отображается на странице /donate для прямых переводов.</p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Контактный Email
                  </label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Адрес офиса
                  </label>
                  <input
                    type="text"
                    value={settings.office}
                    onChange={(e) => setSettings({ ...settings, office: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="bg-dark-blue text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-900 transition flex items-center gap-2 cursor-pointer"
                  >
                    <Save size={16} />
                    <span>Сохранить изменения</span>
                  </button>
                </div>

                {savedSettingsNotice && (
                  <p className="text-xs text-green-600 font-bold flex items-center gap-1.5 pt-2 animate-in fade-in">
                    <CheckCircle2 size={16} /> Настройки успешно сохранены!
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Add / Edit Home Modal */}
      {isHomeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <h3 className="text-xl font-bold text-[#0e387a] font-serif">
                  {editingHomeId ? 'Редактировать детский дом' : 'Добавить детский дом'}
                </h3>
                <p className="text-xs text-gray-500">
                  Все изменения сохраняются в базу данных и сразу видны на сайте.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsHomeModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveHome} className="space-y-4 text-xs">
              {/* 1. ФОТОГРАФИЯ УЧРЕЖДЕНИЯ С ПРЕВЬЮ */}
              <div className="p-4 bg-[#f0f4fa] rounded-2xl border border-gray-200">
                <label className="block font-bold text-[#0e387a] mb-2 uppercase text-[10px] tracking-wider">
                  Фотография детского дома (URL изображения) *
                </label>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start mb-3">
                  {/* Превью изображения */}
                  <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-200 border-2 border-white shadow-sm flex-shrink-0 relative">
                    <img
                      src={homeForm.image || 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop'}
                      alt="Предпросмотр"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop';
                      }}
                    />
                    <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded">
                      Превью
                    </span>
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="url"
                      required
                      placeholder="https://images.unsplash.com/..."
                      value={homeForm.image}
                      onChange={(e) => setHomeForm({ ...homeForm, image: e.target.value })}
                      className="w-full p-2.5 border rounded-xl bg-white text-xs font-mono"
                    />
                    <p className="text-[11px] text-gray-500">
                      Вставьте прямую ссылку на фото или выберите готовый вариант ниже:
                    </p>

                    {/* Быстрые пресеты качественных фото */}
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'Здание / Забота', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop' },
                        { label: 'Учеба / Книги', url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop' },
                        { label: 'Класс / Урок', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop' },
                        { label: 'Школа / Творчество', url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop' },
                        { label: 'Игры / Спорт', url: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop' },
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setHomeForm({ ...homeForm, image: preset.url })}
                          className={`text-[10px] px-2 py-1 rounded-md border transition ${
                            homeForm.image === preset.url
                              ? 'bg-[#0e387a] text-white border-[#0e387a] font-bold'
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. НАЗВАНИЕ И ГОРОД */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Название учреждения *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Детский дом «Ак-Жол»"
                    value={homeForm.name}
                    onChange={(e) => setHomeForm({ ...homeForm, name: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Город / Регион *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Бишкек / Ош / Каракол..."
                    value={homeForm.city}
                    onChange={(e) => setHomeForm({ ...homeForm, city: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
              </div>

              {/* 3. ТОЧНЫЙ АДРЕС И ТИП */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Точный адрес учреждения *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="г. Бишкек, ул. Жумабека 123"
                    value={homeForm.address}
                    onChange={(e) => setHomeForm({ ...homeForm, address: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Тип учреждения
                  </label>
                  <select
                    value={homeForm.type}
                    onChange={(e) => setHomeForm({ ...homeForm, type: e.target.value })}
                    className="w-full p-2.5 border rounded-xl bg-white"
                  >
                    <option>Детский дом</option>
                    <option>Центр реабилитации</option>
                    <option>Интернат</option>
                    <option>Приют</option>
                  </select>
                </div>
              </div>

              {/* 4. ВОСПИТАННИКИ И СТАТУС */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Количество детей
                  </label>
                  <input
                    type="number"
                    value={homeForm.childrenCount}
                    onChange={(e) => setHomeForm({ ...homeForm, childrenCount: Number(e.target.value) })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Возраст воспитанников
                  </label>
                  <input
                    type="text"
                    placeholder="3 – 18 лет"
                    value={homeForm.ageRange}
                    onChange={(e) => setHomeForm({ ...homeForm, ageRange: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Статус учреждения
                  </label>
                  <select
                    value={homeForm.status}
                    onChange={(e) => setHomeForm({ ...homeForm, status: e.target.value })}
                    className="w-full p-2.5 border rounded-xl bg-white"
                  >
                    <option value="Verified">✓ Проверен (Verified)</option>
                    <option value="Urgent Support Needed">🔴 Срочная помощь (Urgent)</option>
                    <option value="Needs Updated">Обновить данные</option>
                  </select>
                </div>
              </div>

              {/* 5. КОНТАКТЫ И РУКОВОДСТВО */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    ФИО директора
                  </label>
                  <input
                    type="text"
                    placeholder="Асанова Гульнара К."
                    value={homeForm.director}
                    onChange={(e) => setHomeForm({ ...homeForm, director: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Контактный телефон
                  </label>
                  <input
                    type="text"
                    placeholder="+996 312 12 34 56"
                    value={homeForm.phone}
                    onChange={(e) => setHomeForm({ ...homeForm, phone: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                    Email учреждения
                  </label>
                  <input
                    type="email"
                    placeholder="home@mail.kg"
                    value={homeForm.email}
                    onChange={(e) => setHomeForm({ ...homeForm, email: e.target.value })}
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
              </div>

              {/* 6. ПОДРОБНОЕ ОПИСАНИЕ */}
              <div>
                <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                  Подробное описание деятельности учреждения
                </label>
                <textarea
                  rows={2}
                  placeholder="Опишите историю детского дома, условия проживания, кружки и программы..."
                  value={homeForm.description}
                  onChange={(e) => setHomeForm({ ...homeForm, description: e.target.value })}
                  className="w-full p-2.5 border rounded-xl"
                ></textarea>
              </div>

              {/* 7. СПИСОК ПОТРЕБНОСТЕЙ */}
              <div>
                <label className="block font-bold text-[#0e387a] mb-1 uppercase text-[10px]">
                  Срочные потребности (через запятую) *
                </label>
                <textarea
                  rows={2}
                  placeholder="Школьные принадлежности, средства гигиены, теплая одежда..."
                  value={homeForm.needs}
                  onChange={(e) => setHomeForm({ ...homeForm, needs: e.target.value })}
                  className="w-full p-2.5 border rounded-xl"
                ></textarea>
              </div>

              {/* КНОПКИ ДЕЙСТВИЯ */}
              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsHomeModalOpen(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold uppercase tracking-wider transition"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#f26a21] hover:bg-[#d95813] text-white py-3 rounded-xl font-bold uppercase tracking-wider transition shadow-md"
                >
                  {editingHomeId ? 'Сохранить изменения' : 'Добавить в базу данных'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
