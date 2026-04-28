import React, { useState, useEffect } from 'react';

// --- INLINE SVG ICONS ---
const CheckSquare = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const Users = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Shield = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Home = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const LogOut = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const Settings = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const Download = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const Bell = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const FileText = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const CheckCircle = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const XCircle = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>;
const Sparkles = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;
const ClipboardList = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;

// --- SUPABASE INITIALIZATION ---
// GANTI KEDUA STRING DI BAWAH INI DENGAN URL DAN ANON KEY SUPABASE ANDA!
const supabaseUrl = 'https://upsgavsszhjhbfjbcuxs.supabase.co'; // TODO: GANTI DENGAN PROJECT URL SUPABASE ANDA
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwc2dhdnNzemhqaGJmamJjdXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMTE0MzEsImV4cCI6MjA5Mjc4NzQzMX0.JvVihBjcN5j-0ujZXj4YNJazTNHYgRPILaQVowMTz_U'; // TODO: GANTI DENGAN ANON/PUBLIC KEY SUPABASE ANDA

let supabase = null;

// --- AI UTILITIES ---
const generateGeminiContent = async (prompt) => {
  const apiKey = ""; 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const delays = [1000, 2000, 4000, 8000, 16000];

  for (let i = 0; i < delays.length + 1; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } catch (error) {
      if (i === delays.length) throw new Error("Gagal menghubungi AI.");
      await new Promise(r => setTimeout(r, delays[i]));
    }
  }
};

// --- UTILITIES ---
const getTodayDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getPredicate = (percentage) => {
  if (percentage >= 90) return { label: 'Sangat Baik', color: 'bg-green-500', text: 'text-green-800' };
  if (percentage >= 70) return { label: 'Baik', color: 'bg-blue-500', text: 'text-blue-800' };
  if (percentage >= 50) return { label: 'Cukup', color: 'bg-yellow-500', text: 'text-yellow-800' };
  return { label: 'Kurang', color: 'bg-red-500', text: 'text-red-800' };
};

export default function App() {
  const [isSupabaseLoaded, setIsSupabaseLoaded] = useState(false);
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [adminTab, setAdminTab] = useState('musyrif'); // musyrif, tasks, broadcasts, reports, admins
  
  // Login State
  const [loggedInRole, setLoggedInRole] = useState(null); 
  const [loggedInUser, setLoggedInUser] = useState(null); // Bisa admin atau musyrif
  
  // Data State
  const [admins, setAdmins] = useState([]);
  const [musyrifs, setMusyrifs] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [reports, setReports] = useState([]);
  const [broadcasts, setBroadcasts] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // UI State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loginModal, setLoginModal] = useState({ isOpen: false, type: '', musyrifId: null });
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // --- MEMUAT SUPABASE VIA CDN (Menghindari error bundler pratinjau) ---
  useEffect(() => {
    if (document.getElementById('supabase-script')) {
      if (window.supabase && !isSupabaseLoaded) {
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        setIsSupabaseLoaded(true);
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'supabase-script';
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    script.onload = () => {
      supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
      setIsSupabaseLoaded(true);
    };
    document.head.appendChild(script);
  }, [isSupabaseLoaded]);

  // --- FETCH DATA FROM SUPABASE ---
  const fetchData = async () => {
    if (!supabase) return;
    try {
      const [a, m, t, r, b] = await Promise.all([
        supabase.from('admins').select('*').order('name'),
        supabase.from('musyrifs').select('*').order('name'),
        supabase.from('tasks').select('*').order('createdAt'),
        supabase.from('reports').select('*'),
        supabase.from('broadcasts').select('*').order('timestamp', { ascending: false })
      ]);

      if (a.data) setAdmins(a.data);
      if (m.data) setMusyrifs(m.data);
      if (t.data) setTasks(t.data);
      if (r.data) setReports(r.data);
      if (b.data) setBroadcasts(b.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    if (isSupabaseLoaded) {
      fetchData();
    }
  }, [isSupabaseLoaded]);

  // --- HANDLERS ---
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    if (loginModal.type === 'admin') {
      const matchedAdmin = admins.find(a => a.pin === pinInput);
      // Fallback jika belum ada data admin sama sekali di database (mencegah terkunci)
      const isFallbackAdmin = admins.length === 0 && pinInput === '123456';

      if (matchedAdmin || isFallbackAdmin) { 
        setLoggedInRole('admin');
        setLoggedInUser(matchedAdmin || { name: 'Admin Utama', pin: '123456' });
        setActiveTab('admin');
        setAdminTab('musyrif');
        setLoginModal({ isOpen: false, type: '', musyrifId: null });
      } else {
        setLoginError('PIN Admin salah!');
      }
    } else if (loginModal.type === 'musyrif') {
      const selectedMusyrif = musyrifs.find(m => m.id === loginModal.musyrifId);
      if (selectedMusyrif && selectedMusyrif.pin === pinInput) {
        setLoggedInRole('musyrif');
        setLoggedInUser(selectedMusyrif);
        setActiveTab('musyrif');
        setLoginModal({ isOpen: false, type: '', musyrifId: null });
      } else {
        setLoginError('PIN Musyrif salah!');
      }
    }
    setPinInput('');
  };

  const handleLogout = () => {
    setLoggedInRole(null);
    setLoggedInUser(null);
    setActiveTab('dashboard');
  };

  // --- RENDERERS ---
  if (!isSupabaseLoaded) {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
        <CheckSquare className="text-green-600 w-12 h-12 mb-4 animate-bounce" />
        <div className="text-green-800 font-bold text-xl">Memuat Database...</div>
      </div>
    );
  }

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6 border-t-8 border-green-600">
          <div className="mx-auto bg-green-100 w-24 h-24 rounded-full flex items-center justify-center">
            <CheckSquare className="text-green-600 w-12 h-12" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">musyrif-app</h1>
            <p className="text-gray-500 mt-2">Sistem Laporan Musyrif<br/>Ponpes Imam Syafi'i Brebes</p>
          </div>
          <button 
            onClick={() => setView('main')}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Buka Aplikasi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      
      {/* SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 w-64 bg-green-800 text-white shadow-xl flex flex-col`}>
        <div className="p-5 flex items-center space-x-3 border-b border-green-700">
          <CheckSquare className="w-8 h-8 text-green-300" />
          <span className="text-xl font-bold tracking-wider">musyrif-app</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <button onClick={() => { setActiveTab('dashboard'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-green-700' : 'hover:bg-green-700'}`}>
                <Home className="w-5 h-5" />
                <span>Dashboard Umum</span>
              </button>
            </li>
            
            {/* JIKA LOGIN SEBAGAI ADMIN, TAMPILKAN PANEL ADMIN DI SINI */}
            {loggedInRole === 'admin' ? (
              <>
                <li className="pt-4 pb-2">
                  <span className="px-4 text-xs font-semibold text-green-300 uppercase tracking-wider">Panel Admin</span>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('admin'); setAdminTab('musyrif'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-left ${adminTab === 'musyrif' ? 'bg-green-600 border border-green-400' : 'hover:bg-green-700'}`}>
                    <Users className="w-4 h-4 opacity-80" /><span>Kelola Musyrif</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('admin'); setAdminTab('tasks'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-left ${adminTab === 'tasks' ? 'bg-green-600 border border-green-400' : 'hover:bg-green-700'}`}>
                    <ClipboardList className="w-4 h-4 opacity-80" /><span>Kelola Tugas</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('admin'); setAdminTab('broadcasts'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-left ${adminTab === 'broadcasts' ? 'bg-green-600 border border-green-400' : 'hover:bg-green-700'}`}>
                    <Bell className="w-4 h-4 opacity-80" /><span>Broadcast Pesan</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('admin'); setAdminTab('reports'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-left ${adminTab === 'reports' ? 'bg-green-600 border border-green-400' : 'hover:bg-green-700'}`}>
                    <FileText className="w-4 h-4 opacity-80" /><span>Rekap Laporan</span>
                  </button>
                </li>
                <li className="pt-2">
                  <button onClick={() => { setActiveTab('admin'); setAdminTab('admins'); setIsSidebarOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-left ${adminTab === 'admins' ? 'bg-green-600 border border-green-400' : 'hover:bg-green-700'}`}>
                    <Shield className="w-4 h-4 opacity-80" /><span>Kelola Admin</span>
                  </button>
                </li>
              </>
            ) : (
              // JIKA BELUM LOGIN ATAU LOGIN SEBAGAI MUSYRIF, TAMPILKAN DAFTAR MUSYRIF
              <>
                <li className="pt-4 pb-2">
                  <span className="px-4 text-xs font-semibold text-green-300 uppercase tracking-wider">Pilihan Musyrif</span>
                </li>
                
                {isLoadingData ? (
                    <div className="px-4 text-sm text-green-400">Memuat data...</div>
                ) : musyrifs.map(m => (
                  <li key={m.id}>
                    <button 
                      onClick={() => {
                        if (loggedInRole === 'musyrif' && loggedInUser?.id === m.id) {
                          setActiveTab('musyrif');
                        } else {
                          setLoginModal({ isOpen: true, type: 'musyrif', musyrifId: m.id });
                        }
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-left ${loggedInUser?.id === m.id ? 'bg-green-600 border border-green-400' : 'hover:bg-green-700'}`}
                    >
                      <Users className="w-4 h-4 opacity-70" />
                      <span className="truncate">{m.name}</span>
                    </button>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        
        <div className="p-4 border-t border-green-700">
          {loggedInRole ? (
            <div className="space-y-2">
              <div className="text-sm text-green-200 px-2">Masuk sebagai: <br/><strong className="text-white">{loggedInUser?.name}</strong></div>
              <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                <LogOut className="w-4 h-4" />
                <span>Keluar</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => { setLoginModal({ isOpen: true, type: 'admin', musyrifId: null }); setIsSidebarOpen(false); }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Login Admin</span>
            </button>
          )}
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden h-screen">
        {/* HEADER MOBILE */}
        <header className="bg-white shadow-sm flex items-center justify-between p-4 md:hidden">
          <div className="flex items-center space-x-2 text-green-700 font-bold">
             <CheckSquare className="w-6 h-6" />
             <span>musyrif-app</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-8">
          {activeTab === 'dashboard' && <DashboardView reports={reports} musyrifs={musyrifs} broadcasts={broadcasts} />}
          {activeTab === 'admin' && loggedInRole === 'admin' && <AdminView activeAdminTab={adminTab} tasks={tasks} musyrifs={musyrifs} reports={reports} broadcasts={broadcasts} admins={admins} refreshData={fetchData} />}
          {activeTab === 'musyrif' && loggedInRole === 'musyrif' && <MusyrifView tasks={tasks} musyrif={loggedInUser} reports={reports} refreshData={fetchData} />}
        </main>
      </div>

      {/* LOGIN MODAL */}
      {loginModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                {loginModal.type === 'admin' ? 'Login Administrator' : `Login: ${musyrifs.find(m => m.id === loginModal.musyrifId)?.name}`}
              </h3>
              <button onClick={() => setLoginModal({ isOpen: false, type: '', musyrifId: null })} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            {loginModal.type === 'admin' && admins.length === 0 && (
              <div className="mb-4 text-sm text-yellow-600 bg-yellow-50 p-2 rounded border border-yellow-200">
                Data admin kosong. PIN Darurat: <strong>123456</strong>
              </div>
            )}

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Masukkan PIN</label>
                <input 
                  type="password" 
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="****"
                  autoFocus
                  required
                />
              </div>
              {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
              <button type="submit" className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                Masuk
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// VIEW COMPONENTS
// ==========================================

function DashboardView({ reports, musyrifs, broadcasts }) {
  const today = getTodayDate();
  const todayReports = reports.filter(r => r.date === today);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-gray-800">Assalamu'alaikum!</h2>
        <p className="text-gray-600">Selamat datang di Sistem Laporan Musyrif Ponpes Imam Syafi'i Brebes.</p>
      </div>

      {broadcasts.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center"><Bell className="w-5 h-5 mr-2 text-yellow-500"/> Informasi & Pengumuman</h3>
          <div className="grid gap-3">
            {broadcasts.slice(0, 3).map(b => (
              <div key={b.id} className={`p-4 rounded-lg border-l-4 shadow-sm bg-white ${
                b.category === 'Peringatan' ? 'border-red-500' : 
                b.category === 'Motivasi' ? 'border-green-500' : 'border-blue-500'
              }`}>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800">{b.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    b.category === 'Peringatan' ? 'bg-red-100 text-red-700' : 
                    b.category === 'Motivasi' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>{b.category}</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm whitespace-pre-wrap">{b.message}</p>
                <div className="text-xs text-gray-400 mt-2">{new Date(b.timestamp).toLocaleDateString('id-ID')}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-600"/> Laporan Hari Ini ({new Date().toLocaleDateString('id-ID')})</h3>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-600">Nama Musyrif</th>
                  <th className="p-4 font-semibold text-gray-600 text-center">Tugas Selesai</th>
                  <th className="p-4 font-semibold text-gray-600 text-center">Persentase</th>
                  <th className="p-4 font-semibold text-gray-600">Predikat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {musyrifs.map(musyrif => {
                  const report = todayReports.find(r => r.musyrifId === musyrif.id);
                  return (
                    <tr key={musyrif.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-800">{musyrif.name}</td>
                      <td className="p-4 text-center text-gray-600">
                        {report ? `${report.score} / ${report.totalTasks}` : '-'}
                      </td>
                      <td className="p-4 text-center">
                        {report ? (
                          <span className="font-bold">{report.percentage}%</span>
                        ) : <span className="text-gray-400">Belum Mengisi</span>}
                      </td>
                      <td className="p-4">
                        {report ? (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold bg-opacity-20 ${getPredicate(report.percentage).color} ${getPredicate(report.percentage).text}`}>
                            {report.predicate}
                          </span>
                        ) : '-'}
                      </td>
                    </tr>
                  );
                })}
                {musyrifs.length === 0 && (
                  <tr><td colSpan="4" className="p-4 text-center text-gray-500">Belum ada data musyrif.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// ADMIN VIEW
// ==========================================
function AdminView({ activeAdminTab, tasks, musyrifs, reports, broadcasts, admins, refreshData }) {
  
  const [newMusyrif, setNewMusyrif] = useState({ name: '', pin: '' });
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [newBroadcast, setNewBroadcast] = useState({ title: '', message: '', category: 'Informasi' });
  const [newAdmin, setNewAdmin] = useState({ name: '', pin: '' });

  // Tambahkan state ini untuk menangkap error
  const [actionError, setActionError] = useState('');

  // AI States
  const [aiTopic, setAiTopic] = useState('');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // --- ACTIONS ---
  const handleAddMusyrif = async (e) => {
    e.preventDefault();
    setActionError('');
    if (!newMusyrif.name || !newMusyrif.pin) return;
    const { error } = await supabase.from('musyrifs').insert([{ name: newMusyrif.name, pin: newMusyrif.pin }]);
    if (error) { setActionError('Gagal tambah Musyrif: ' + error.message); return; }
    setNewMusyrif({ name: '', pin: '' });
    refreshData();
  };

  const handleApprovePin = async (id, newPin) => {
    setActionError('');
    const { error } = await supabase.from('musyrifs').update({ pin: newPin, pinChangeRequest: null }).eq('id', id);
    if (error) { setActionError('Gagal setujui PIN: ' + error.message); return; }
    refreshData();
  };

  const handleDeleteMusyrif = async (id) => {
    setActionError('');
    const { error } = await supabase.from('musyrifs').delete().eq('id', id);
    if (error) { setActionError('Gagal hapus: ' + error.message); return; }
    refreshData();
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    setActionError('');
    if (!newTask.title) return;
    const { error } = await supabase.from('tasks').insert([{ title: newTask.title, description: newTask.description, isActive: true, createdAt: Date.now() }]);
    if (error) { setActionError('Gagal tambah tugas: ' + error.message); return; }
    setNewTask({ title: '', description: '' });
    refreshData();
  };

  const handleDeleteTask = async (id) => {
     setActionError('');
     const { error } = await supabase.from('tasks').delete().eq('id', id);
     if (error) { setActionError('Gagal hapus: ' + error.message); return; }
     refreshData();
  };

  const handleAddBroadcast = async (e) => {
    e.preventDefault();
    setActionError('');
    if (!newBroadcast.title || !newBroadcast.message) return;
    const { error } = await supabase.from('broadcasts').insert([{ ...newBroadcast, timestamp: Date.now() }]);
    if (error) { setActionError('Gagal tambah pesan: ' + error.message); return; }
    setNewBroadcast({ title: '', message: '', category: 'Informasi' });
    refreshData();
  };

  const handleDeleteBroadcast = async (id) => {
    setActionError('');
    const { error } = await supabase.from('broadcasts').delete().eq('id', id);
    if (error) { setActionError('Gagal hapus: ' + error.message); return; }
    refreshData();
  }

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setActionError('');
    if (!newAdmin.name || !newAdmin.pin) return;
    const { error } = await supabase.from('admins').insert([{ name: newAdmin.name, pin: newAdmin.pin }]);
    if (error) { setActionError('Gagal tambah admin: ' + error.message); return; }
    setNewAdmin({ name: '', pin: '' });
    refreshData();
  };

  const handleDeleteAdmin = async (id) => {
    setActionError('');
    if (admins.length <= 1) {
      setActionError("Tidak dapat menghapus admin. Harus ada minimal 1 admin tersisa!");
      return;
    }
    const { error } = await supabase.from('admins').delete().eq('id', id);
    if (error) { setActionError('Gagal hapus: ' + error.message); return; }
    refreshData();
  };

  const handleGenerateBroadcast = async () => {
    if (!aiTopic) return;
    setIsGeneratingAi(true);
    try {
      const prompt = `Sebagai admin pondok pesantren, buatkan draft pesan pengumuman untuk para musyrif (pembina). Inti pesannya: "${aiTopic}". Gunakan bahasa Indonesia yang baik, ramah, sopan, dan bernuansa Islami. Terdiri dari salam, isi, dan penutup. Maksimal 3 paragraf pendek.`;
      const result = await generateGeminiContent(prompt);
      setNewBroadcast(prev => ({ ...prev, message: result }));
      setAiTopic('');
    } catch (error) {
      console.error(error);
      setNewBroadcast(prev => ({ ...prev, message: "Gagal memuat dari AI. Silakan coba lagi." }));
    }
    setIsGeneratingAi(false);
  };

  // Export to CSV
  const exportToCSV = () => {
    let csvContent = "Tanggal,Nama Musyrif,Tugas Selesai,Total Tugas,Persentase,Predikat\n";
    const sortedReports = [...reports].sort((a,b) => new Date(b.date) - new Date(a.date));

    sortedReports.forEach(r => {
      const mName = musyrifs.find(m => m.id === r.musyrifId)?.name || 'Unknown';
      csvContent += `${r.date},${mName},${r.score},${r.totalTasks},${r.percentage}%,${r.predicate}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Rekap_Laporan_Musyrif_${getTodayDate()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center capitalize">
          <Shield className="mr-2 text-green-700"/> Menu: {activeAdminTab.replace('_', ' ')}
        </h2>
      </div>

      {/* TAMPILKAN ERROR JIKA ADA */}
      {actionError && (
        <div className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-sm">
          <p className="font-bold">Terjadi Kesalahan</p>
          <p>{actionError}</p>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        
        {/* TAB: MUSYRIF */}
        {activeAdminTab === 'musyrif' && (
          <div className="space-y-6">
            <form onSubmit={handleAddMusyrif} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-sm text-gray-600 mb-1">Nama Musyrif</label>
                <input type="text" required value={newMusyrif.name} onChange={(e) => setNewMusyrif({...newMusyrif, name: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="w-full md:w-48">
                <label className="block text-sm text-gray-600 mb-1">PIN Default</label>
                <input type="text" required value={newMusyrif.pin} onChange={(e) => setNewMusyrif({...newMusyrif, pin: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <button type="submit" className="w-full md:w-auto px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">Tambah Musyrif</button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3">Nama</th>
                    <th className="p-3">PIN Saat Ini</th>
                    <th className="p-3">Request Ganti PIN</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {musyrifs.map(m => (
                    <tr key={m.id}>
                      <td className="p-3 font-medium">{m.name}</td>
                      <td className="p-3 font-mono text-gray-600">{m.pin}</td>
                      <td className="p-3">
                        {m.pinChangeRequest ? (
                          <div className="flex items-center space-x-2">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded font-mono">{m.pinChangeRequest}</span>
                            <button onClick={() => handleApprovePin(m.id, m.pinChangeRequest)} className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Setujui</button>
                          </div>
                        ) : <span className="text-gray-400 text-sm">-</span>}
                      </td>
                      <td className="p-3 text-right">
                        <button onClick={() => handleDeleteMusyrif(m.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Hapus</button>
                      </td>
                    </tr>
                  ))}
                  {musyrifs.length === 0 && <tr><td colSpan="4" className="p-3 text-center text-gray-500">Data kosong</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: TASKS */}
        {activeAdminTab === 'tasks' && (
          <div className="space-y-6">
            <form onSubmit={handleAddTask} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-4 items-start md:items-end">
              <div className="flex-1 w-full">
                <label className="block text-sm text-gray-600 mb-1">Judul Tugas</label>
                <input type="text" required value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} placeholder="Contoh: Mengontrol Shalat Subuh" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-sm text-gray-600 mb-1">Deskripsi (Opsional)</label>
                <input type="text" value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <button type="submit" className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 h-10">Tambah Tugas</button>
            </form>

            <div className="grid gap-3">
              {tasks.map((t, idx) => (
                <div key={t.id} className="flex justify-between items-center p-4 border rounded-lg hover:shadow-sm">
                  <div>
                    <h4 className="font-bold text-gray-800">{idx + 1}. {t.title}</h4>
                    {t.description && <p className="text-sm text-gray-500">{t.description}</p>}
                  </div>
                  <button onClick={() => handleDeleteTask(t.id)} className="text-red-500 p-2 hover:bg-red-50 rounded"><XCircle className="w-5 h-5"/></button>
                </div>
              ))}
              {tasks.length === 0 && <p className="text-center text-gray-500">Belum ada tugas yang ditambahkan.</p>}
            </div>
          </div>
        )}

        {/* TAB: BROADCAST */}
        {activeAdminTab === 'broadcasts' && (
          <div className="space-y-6">
             <form onSubmit={handleAddBroadcast} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
               <div className="flex gap-4 flex-col md:flex-row">
                 <div className="flex-1">
                   <label className="block text-sm text-gray-600 mb-1">Judul Pesan</label>
                   <input type="text" required value={newBroadcast.title} onChange={(e) => setNewBroadcast({...newBroadcast, title: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
                 </div>
                 <div className="w-full md:w-48">
                   <label className="block text-sm text-gray-600 mb-1">Kategori</label>
                   <select value={newBroadcast.category} onChange={(e) => setNewBroadcast({...newBroadcast, category: e.target.value})} className="w-full px-3 py-2 border rounded-md bg-white">
                     <option>Informasi</option>
                     <option>Peringatan</option>
                     <option>Motivasi</option>
                   </select>
                 </div>
               </div>

               {/* AI Assistant Section */}
               <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                 <label className="flex text-sm font-semibold text-indigo-800 mb-2 items-center">
                   <Sparkles className="w-4 h-4 mr-1"/> Asisten AI Pembuat Draft Pesan
                 </label>
                 <div className="flex gap-2 flex-col sm:flex-row">
                   <input 
                     type="text" 
                     value={aiTopic}
                     onChange={(e) => setAiTopic(e.target.value)}
                     placeholder="Topik: misal, mengingatkan kebersihan asrama jelang jumat"
                     className="flex-1 px-3 py-2 border border-indigo-200 rounded-md focus:ring-indigo-500 bg-white" 
                   />
                   <button 
                     type="button"
                     onClick={handleGenerateBroadcast}
                     disabled={isGeneratingAi || !aiTopic}
                     className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors flex justify-center items-center whitespace-nowrap"
                   >
                     {isGeneratingAi ? 'Membuat...' : '✨ Buat Draft'}
                   </button>
                 </div>
               </div>

               <div>
                  <label className="block text-sm text-gray-600 mb-1">Isi Pesan</label>
                  <textarea required rows="5" value={newBroadcast.message} onChange={(e) => setNewBroadcast({...newBroadcast, message: e.target.value})} className="w-full px-3 py-2 border rounded-md"></textarea>
               </div>
               <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">Kirim Broadcast</button>
             </form>

             <div className="grid gap-3 mt-4">
              {broadcasts.map(b => (
                <div key={b.id} className="p-4 border rounded-lg flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-gray-800">{b.title}</span>
                      <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{b.category}</span>
                    </div>
                    <p className="text-sm text-gray-600">{b.message}</p>
                    <span className="text-xs text-gray-400 mt-2 block">{new Date(b.timestamp).toLocaleString('id-ID')}</span>
                  </div>
                  <button onClick={() => handleDeleteBroadcast(b.id)} className="text-red-500 hover:text-red-700 text-sm">Hapus</button>
                </div>
              ))}
             </div>
          </div>
        )}

        {/* TAB: REPORTS */}
        {activeAdminTab === 'reports' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg border border-green-100">
              <div>
                <h3 className="font-bold text-green-800">Export Laporan</h3>
                <p className="text-sm text-green-600">Unduh data dalam format CSV untuk dibuka di Google Spreadsheet.</p>
              </div>
              <button onClick={exportToCSV} className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow transition-colors">
                <Download className="w-4 h-4"/>
                <span>Export ke Spreadsheet</span>
              </button>
            </div>

            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-3">Tanggal</th>
                    <th className="p-3">Musyrif</th>
                    <th className="p-3 text-center">Skor</th>
                    <th className="p-3 text-center">Persentase</th>
                    <th className="p-3">Predikat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reports.sort((a,b) => new Date(b.date) - new Date(a.date)).map(r => (
                    <tr key={r.id} className="hover:bg-gray-50">
                      <td className="p-3 whitespace-nowrap">{r.date}</td>
                      <td className="p-3 font-medium">{musyrifs.find(m => m.id === r.musyrifId)?.name || 'Unknown'}</td>
                      <td className="p-3 text-center">{r.score} / {r.totalTasks}</td>
                      <td className="p-3 text-center font-bold">{r.percentage}%</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-bold bg-opacity-20 ${getPredicate(r.percentage).color} ${getPredicate(r.percentage).text}`}>
                          {r.predicate}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {reports.length === 0 && <tr><td colSpan="5" className="p-4 text-center text-gray-500">Belum ada data laporan.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: ADMINS (BARU) */}
        {activeAdminTab === 'admins' && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">Admin memiliki akses penuh ke panel ini. Hati-hati dalam memberikan akses PIN Admin.</p>
            </div>
            
            <form onSubmit={handleAddAdmin} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-sm text-gray-600 mb-1">Nama Admin</label>
                <input type="text" required value={newAdmin.name} onChange={(e) => setNewAdmin({...newAdmin, name: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="w-full md:w-48">
                <label className="block text-sm text-gray-600 mb-1">PIN Rahasia</label>
                <input type="text" required value={newAdmin.pin} onChange={(e) => setNewAdmin({...newAdmin, pin: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <button type="submit" className="w-full md:w-auto px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900">Tambah Admin</button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3">Nama Admin</th>
                    <th className="p-3">PIN Akses</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {admins.map(a => (
                    <tr key={a.id}>
                      <td className="p-3 font-medium flex items-center"><Shield className="w-4 h-4 mr-2 text-gray-400"/> {a.name}</td>
                      <td className="p-3 font-mono text-gray-600">{a.pin}</td>
                      <td className="p-3 text-right">
                        <button onClick={() => handleDeleteAdmin(a.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Hapus</button>
                      </td>
                    </tr>
                  ))}
                  {admins.length === 0 && <tr><td colSpan="3" className="p-3 text-center text-gray-500">Data kosong</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


// ==========================================
// MUSYRIF VIEW
// ==========================================
function MusyrifView({ tasks, musyrif, reports, refreshData }) {
  const [activeTab, setActiveTab] = useState('isi_tugas'); 
  const today = getTodayDate();
  const [completedTasks, setCompletedTasks] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const [pinForm, setPinForm] = useState({ old: '', new: '' });
  const [pinMsg, setPinMsg] = useState('');

  // AI Motivation State
  const [aiMotivation, setAiMotivation] = useState('');
  const [isGeneratingMotivation, setIsGeneratingMotivation] = useState(false);

  // Load today's task if already submitted
  useEffect(() => {
    const todayReport = reports.find(r => r.musyrifId === musyrif.id && r.date === today);
    if (todayReport && todayReport.taskDetails) {
      setCompletedTasks(todayReport.taskDetails);
    } else {
      setCompletedTasks({});
    }
  }, [reports, musyrif.id, today]);

  const handleToggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleSaveTasks = async () => {
    setIsSaving(true);
    setSaveMessage('');
    try {
      let score = 0;
      const totalTasks = tasks.length;
      Object.keys(completedTasks).forEach(k => {
        if (completedTasks[k]) score++;
      });
      
      const percentage = totalTasks === 0 ? 0 : Math.round((score / totalTasks) * 100);
      const predicateInfo = getPredicate(percentage);

      const reportData = {
        musyrifId: musyrif.id,
        date: today,
        score,
        totalTasks,
        percentage,
        predicate: predicateInfo.label,
        taskDetails: completedTasks,
        timestamp: Date.now()
      };

      const existingReport = reports.find(r => r.musyrifId === musyrif.id && r.date === today);

      if (existingReport) {
        await supabase.from('reports').update(reportData).eq('id', existingReport.id);
      } else {
        await supabase.from('reports').insert([reportData]);
      }
      
      refreshData();
      setSaveMessage('Laporan berhasil disimpan!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('Gagal menyimpan laporan.');
      console.error(error);
    }
    setIsSaving(false);
  };

  const handleRequestPinChange = async (e) => {
    e.preventDefault();
    if (pinForm.old !== musyrif.pin) {
      setPinMsg('PIN Lama salah!');
      return;
    }
    try {
      await supabase.from('musyrifs').update({ 
        pinChangeRequest: pinForm.new 
      }).eq('id', musyrif.id);
      
      refreshData();
      setPinMsg('Permintaan ganti PIN terkirim ke Admin.');
      setPinForm({ old: '', new: '' });
    } catch(err) {
      setPinMsg('Terjadi kesalahan.');
    }
  };

  const handleGetMotivation = async () => {
    setIsGeneratingMotivation(true);
    setAiMotivation('');
    try {
      let score = 0;
      Object.values(completedTasks).forEach(v => { if (v) score++; });
      const percentage = tasks.length === 0 ? 0 : Math.round((score / tasks.length) * 100);
      
      const prompt = `Sebagai asisten AI Islami, berikan maksimal dua kalimat pendek yang sangat memotivasi untuk musyrif (pembina asrama) bernama ${musyrif.name}. Berdasarkan inputannya, hari ini dia mencetak persentase tugas harian sebesar ${percentage}%. ${percentage >= 80 ? 'Beri apresiasi tinggi atas kerja kerasnya.' : 'Beri semangat dan nasihat lembut agar lebih baik besok.'} Gunakan bahasa Indonesia bernuansa Islami.`;
      
      const result = await generateGeminiContent(prompt);
      setAiMotivation(result);
    } catch (error) {
      setAiMotivation("Gagal memuat pesan. Tetap semangat menjalankan tugas lillahita'ala!");
    }
    setIsGeneratingMotivation(false);
  };

  const myReports = reports.filter(r => r.musyrifId === musyrif.id).sort((a,b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center border-l-4 border-green-500">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Ahlan wa Sahlan, {musyrif.name}</h2>
          <p className="text-gray-600">Jazakumullahu khairan atas dedikasi Antum.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-gray-200">
        <button onClick={() => setActiveTab('isi_tugas')} className={`px-4 py-2 font-medium border-b-2 transition-colors ${activeTab === 'isi_tugas' ? 'border-green-600 text-green-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Isi Tugas Harian</button>
        <button onClick={() => setActiveTab('riwayat')} className={`px-4 py-2 font-medium border-b-2 transition-colors ${activeTab === 'riwayat' ? 'border-green-600 text-green-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Riwayat Laporan</button>
        <button onClick={() => setActiveTab('pengaturan')} className={`px-4 py-2 font-medium border-b-2 transition-colors ${activeTab === 'pengaturan' ? 'border-green-600 text-green-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Pengaturan</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        
        {/* ISI TUGAS */}
        {activeTab === 'isi_tugas' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center">
                <CheckSquare className="mr-2 text-green-600 w-5 h-5"/> Checklist Tugas: {new Date().toLocaleDateString('id-ID')}
              </h3>
            </div>
            
            {/* AI Motivation Section */}
            {aiMotivation && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start shadow-sm">
                <Sparkles className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-800 font-medium italic leading-relaxed">"{aiMotivation}"</p>
              </div>
            )}

            {tasks.length === 0 ? (
              <div className="text-center p-8 bg-gray-50 rounded-lg text-gray-500">Belum ada tugas yang diatur Admin.</div>
            ) : (
              <div className="space-y-3 mb-6">
                {tasks.map((task, idx) => (
                  <label key={task.id} className={`flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${completedTasks[task.id] ? 'bg-green-50 border-green-200' : 'hover:bg-gray-50'}`}>
                    <div className="flex-shrink-0 pt-0.5">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                        checked={!!completedTasks[task.id]}
                        onChange={() => handleToggleTask(task.id)}
                      />
                    </div>
                    <div className="ml-3">
                      <span className={`block font-medium ${completedTasks[task.id] ? 'text-green-800' : 'text-gray-800'}`}>{idx + 1}. {task.title}</span>
                      {task.description && <span className="block text-sm text-gray-500 mt-1">{task.description}</span>}
                    </div>
                  </label>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={handleSaveTasks} 
                disabled={isSaving || tasks.length === 0}
                className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold rounded-lg shadow transition-colors"
              >
                {isSaving ? 'Menyimpan...' : 'Simpan Laporan'}
              </button>
              
              <button
                onClick={handleGetMotivation}
                disabled={isGeneratingMotivation}
                className="w-full sm:w-auto px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-white font-bold rounded-lg shadow transition-colors flex justify-center items-center"
              >
                {isGeneratingMotivation ? 'Memuat...' : '✨ Dapatkan Motivasi AI'}
              </button>

              {saveMessage && <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded w-full sm:w-auto text-center">{saveMessage}</span>}
            </div>
          </div>
        )}

        {/* RIWAYAT */}
        {activeTab === 'riwayat' && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="mr-2 text-blue-600 w-5 h-5"/> Riwayat Laporan Anda
            </h3>
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-3">Tanggal</th>
                    <th className="p-3 text-center">Tugas Selesai</th>
                    <th className="p-3 text-center">Persentase</th>
                    <th className="p-3">Predikat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {myReports.map(r => (
                    <tr key={r.id}>
                      <td className="p-3">{r.date}</td>
                      <td className="p-3 text-center">{r.score} / {r.totalTasks}</td>
                      <td className="p-3 text-center font-bold">{r.percentage}%</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-bold bg-opacity-20 ${getPredicate(r.percentage).color} ${getPredicate(r.percentage).text}`}>
                          {r.predicate}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {myReports.length === 0 && <tr><td colSpan="4" className="p-4 text-center text-gray-500">Belum ada riwayat laporan.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PENGATURAN */}
        {activeTab === 'pengaturan' && (
          <div className="max-w-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Settings className="mr-2 text-gray-600 w-5 h-5"/> Pengaturan Akun
            </h3>
            
            <form onSubmit={handleRequestPinChange} className="space-y-4 bg-gray-50 p-5 rounded-lg border">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PIN Lama</label>
                <input type="password" required value={pinForm.old} onChange={e => setPinForm({...pinForm, old: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PIN Baru (Usulan)</label>
                <input type="password" required value={pinForm.new} onChange={e => setPinForm({...pinForm, new: e.target.value})} className="w-full px-3 py-2 border rounded-md" />
              </div>
              {pinMsg && <div className={`text-sm p-2 rounded ${pinMsg.includes('salah') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{pinMsg}</div>}
              {musyrif.pinChangeRequest && !pinMsg && (
                <div className="text-sm bg-yellow-100 text-yellow-800 p-2 rounded">Status: Menunggu persetujuan Admin untuk PIN baru.</div>
              )}
              <button type="submit" className="w-full py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md">Ajukan Ganti PIN</button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}