import React, { useState } from 'react';
import { 
  Bell, User, Search, SlidersHorizontal, 
  Calendar, Users, Edit3, Plus, 
  LayoutDashboard, BarChart3, CheckCircle2, MoreHorizontal,
  Mail, Phone, Shield, CreditCard
} from 'lucide-react';
import { Event } from '../types';

interface AdminDashboardProps {
  onBack: () => void;
}

type AdminTab = 'dashboard' | 'events' | 'team' | 'data';

const DASHBOARD_EVENTS: Event[] = [
  {
    id: 'admin1',
    title: 'Culto de Domingo - Youth',
    date: '22 Out, 2023',
    time: '10:00',
    location: '',
    imageUrl: '',
    category: 'youth',
    status: 'published'
  },
  {
    id: 'admin2',
    title: 'Ação Comunitária',
    date: '05 Nov, 2023',
    time: '08:30',
    location: '',
    imageUrl: '',
    category: 'community',
    status: 'draft'
  },
  {
    id: 'admin3',
    title: 'Gala Anual PMC',
    date: '15 Dez, 2023',
    time: '19:00',
    location: '',
    imageUrl: '',
    category: 'social',
    status: 'published'
  }
];

const TEAM_MEMBERS = [
    { id: 1, name: 'Pr. Carlos Mendes', role: 'Pastor Sênior', email: 'carlos@pmc.church' },
    { id: 2, name: 'Ana Silva', role: 'Líder de Louvor', email: 'ana@pmc.church' },
    { id: 3, name: 'Roberto Junior', role: 'Diácono', email: 'roberto@pmc.church' },
];

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  const renderHeader = () => (
    <header className="sticky top-0 z-50 flex items-center bg-black p-4 pb-4 justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-transparent border border-white/20 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" onClick={onBack}>
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0V3m0 10h8m-8 0H4" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-white uppercase">PMC Admin</h2>
            <p className="text-[10px] font-semibold text-primary uppercase tracking-wider">Permanent Church</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-white relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-black"></span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-white">
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>
  );

  const renderDashboard = () => (
    <>
      {/* Stats Scroll */}
      <section className="flex flex-nowrap gap-4 p-4 overflow-x-auto no-scrollbar">
        <div className="flex min-w-[170px] flex-1 flex-col gap-3 rounded-3xl p-5 bg-white shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-xl bg-black/5">
              <Calendar className="w-5 h-5 text-black" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Este Mês</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Eventos Totais</p>
            <p className="text-3xl font-black leading-tight text-black mt-1">12</p>
            <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex min-w-[170px] flex-1 flex-col gap-3 rounded-3xl p-5 bg-white shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-xl bg-black/5">
              <Users className="w-5 h-5 text-black" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Inscrições</p>
            <p className="text-3xl font-black leading-tight text-black mt-1">450</p>
            <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-2">
          <h3 className="text-lg font-black uppercase tracking-tight text-black mb-4">Visão Geral</h3>
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-black text-white p-5 rounded-3xl flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 bg-white/10 rounded-full size-20 group-hover:scale-110 transition-transform"></div>
                <CreditCard className="w-6 h-6 text-primary" />
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase">Dízimos</p>
                   <p className="text-xl font-bold">R$ 14.2k</p>
                </div>
             </div>
             <div className="bg-white border border-gray-200 p-5 rounded-3xl flex flex-col justify-between h-32">
                <Users className="w-6 h-6 text-gray-400" />
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase">Novos Membros</p>
                   <p className="text-xl font-bold text-black">24</p>
                </div>
             </div>
          </div>
      </div>
    </>
  );

  const renderEvents = () => (
    <>
      <div className="px-4 py-2 mt-4">
        <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 mb-3 px-1">Gerenciar Cronograma</h3>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              className="block w-full pl-10 pr-3 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-black focus:border-black shadow-sm transition-all"
              placeholder="Buscar eventos..."
            />
          </div>
          <button className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm text-black active:bg-gray-50 hover:border-gray-300 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4">
        {DASHBOARD_EVENTS.map((event) => (
            <div key={event.id} className="flex flex-col gap-4 rounded-3xl p-5 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-black text-primary shadow-lg shadow-black/20">
                           {event.category === 'youth' && <Calendar className="w-6 h-6" />}
                           {event.category === 'community' && <Users className="w-6 h-6" />}
                           {event.category === 'social' && <MoreHorizontal className="w-6 h-6" />}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base font-bold leading-tight text-black">{event.title}</p>
                            <p className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mt-1">
                                <Calendar className="w-3.5 h-3.5" /> 
                                {event.date} • {event.time}
                            </p>
                        </div>
                    </div>
                    <button className="p-2.5 text-gray-400 hover:text-black hover:bg-gray-50 transition-colors rounded-xl border border-transparent hover:border-gray-200">
                        <Edit3 className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-dashed border-gray-100">
                    <div className="flex items-center gap-2.5">
                        <span className={`flex size-2.5 rounded-full ${event.status === 'published' ? 'bg-primary shadow-[0_0_8px_rgba(204,255,0,0.6)]' : 'bg-gray-300'}`}></span>
                        <span className={`text-[10px] font-black uppercase tracking-wider ${event.status === 'published' ? 'text-gray-900' : 'text-gray-400'}`}>
                            {event.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </span>
                    </div>
                    
                    <label className={`relative flex h-7 w-12 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ${event.status === 'published' ? 'bg-black' : 'bg-gray-200'}`}>
                        <input type="checkbox" className="sr-only peer" defaultChecked={event.status === 'published'} />
                        <div className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${event.status === 'published' ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </label>
                </div>
            </div>
        ))}
      </div>
      
      {/* FAB - Add New only on Events Tab */}
      <button className="fixed bottom-28 right-6 flex h-14 items-center gap-3 px-6 rounded-full bg-primary text-black font-black shadow-xl hover:scale-105 active:scale-95 transition-all z-50 hover:bg-primary-dark">
        <Plus className="w-6 h-6 stroke-[3px]" />
        <span className="text-xs uppercase tracking-widest">Novo Evento</span>
      </button>
    </>
  );

  const renderTeam = () => (
      <div className="p-4 pt-6">
        <h3 className="text-xl font-black uppercase tracking-tight text-black mb-6">Equipe Pastoral</h3>
        <div className="space-y-4">
            {TEAM_MEMBERS.map(member => (
                <div key={member.id} className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 border border-gray-200">
                            {member.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-sm text-black">{member.name}</p>
                            <p className="text-xs text-gray-500 font-medium">{member.role}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                            <Phone className="w-4 h-4" />
                        </button>
                        <button className="size-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                            <Mail className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-8 p-6 bg-black rounded-3xl text-center relative overflow-hidden">
             <Shield className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
             <h4 className="text-white font-bold mb-2">Área Restrita</h4>
             <p className="text-gray-400 text-xs mb-4">Gerencie permissões e acessos do sistema.</p>
             <button className="bg-white/10 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase hover:bg-white/20 transition-colors">
                Configurações
             </button>
        </div>
      </div>
  );

  const renderData = () => (
      <div className="p-4 flex flex-col items-center justify-center h-[calc(100vh-160px)] text-center">
          <div className="size-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <BarChart3 className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Análises Detalhadas</h3>
          <p className="text-gray-500 text-sm max-w-xs">Gráficos de frequência, relatórios financeiros e crescimento serão exibidos aqui em breve.</p>
      </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans pb-24">
      {renderHeader()}
      
      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'events' && renderEvents()}
      {activeTab === 'team' && renderTeam()}
      {activeTab === 'data' && renderData()}

      {/* Admin Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-20 items-center justify-around bg-white/90 glass border-t border-gray-200 px-6 pb-6 transition-all">
        <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === 'dashboard' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
        >
          <LayoutDashboard className={`w-6 h-6 ${activeTab === 'dashboard' ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-bold">Painel</span>
        </button>
        
        <button 
            onClick={() => setActiveTab('events')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === 'events' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
        >
          <Calendar className={`w-6 h-6 ${activeTab === 'events' ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Eventos</span>
        </button>
        
        <button 
            onClick={() => setActiveTab('team')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === 'team' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
        >
          <Users className={`w-6 h-6 ${activeTab === 'team' ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Equipe</span>
        </button>
        
        <button 
            onClick={() => setActiveTab('data')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === 'data' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
        >
          <BarChart3 className={`w-6 h-6 ${activeTab === 'data' ? 'fill-current' : ''}`} />
          <span className="text-[10px] font-medium">Dados</span>
        </button>
      </nav>

      {/* Success Toast Animation - Only show conditionally in real app */}
      {/* <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] animate-fade-in-down pointer-events-none opacity-0">
         <div className="bg-black text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-2xl flex items-center gap-3 border border-white/10">
            <CheckCircle2 className="text-primary w-5 h-5" />
            Alteração salva com sucesso
         </div>
      </div> */}
    </div>
  );
};

export default AdminDashboard;