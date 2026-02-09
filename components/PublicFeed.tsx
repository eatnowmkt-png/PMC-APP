import React, { useState } from 'react';
import { Search, Bell, MapPin, Calendar, ArrowRight, User, Heart, Ticket, QrCode, Copy, CreditCard, ChevronRight, LayoutDashboard, Settings, LogOut } from 'lucide-react';
import { Event, UserRole } from '../types';

interface PublicFeedProps {
  onNavigateAdmin: () => void;
  onLogout: () => void;
  userRole: UserRole;
}

type Tab = 'events' | 'registrations' | 'donate' | 'profile';

const FEATURED_EVENT: Event = {
  id: 'f1',
  title: 'Culto de Natal PMC',
  date: '24 Dez',
  time: '19:00',
  location: 'Main Sanctuary',
  category: 'worship',
  imageUrl: 'https://images.unsplash.com/photo-1543615694-8840337d4052?q=80&w=2070&auto=format&fit=crop',
  isFeatured: true
};

const UPCOMING_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Youth Night: Summer Kickoff',
    date: 'Sex, 14 Jun',
    time: '18:30',
    location: 'Youth Hall',
    category: 'youth',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
    tags: ['+12']
  },
  {
    id: 'e2',
    title: 'Almoço Comunitário',
    date: 'Dom, 16 Jun',
    time: '12:30',
    location: 'Pátio Fellowship',
    category: 'community',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
    status: 'archived', // Used as "Sold out" indicator visually
    waitlist: 4
  },
  {
    id: 'e3',
    title: 'Culto de Adoração',
    date: 'Semanal',
    time: '10:00',
    location: 'Santuário Principal',
    category: 'worship',
    imageUrl: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop',
    tags: ['Free']
  }
];

const MY_TICKETS = [
  {
    id: 't1',
    eventTitle: 'Retiro de Jovens 2024',
    date: '15-17 Set',
    location: 'Acampamento Monte Sião',
    qrCode: 'valid',
    status: 'confirmed'
  },
  {
    id: 't2',
    eventTitle: 'Workshop: Liderança Criativa',
    date: '02 Ago',
    location: 'Sala 3B',
    qrCode: 'valid',
    status: 'confirmed'
  }
];

const PublicFeed: React.FC<PublicFeedProps> = ({ onNavigateAdmin, onLogout, userRole }) => {
  const [activeTab, setActiveTab] = useState<Tab>('events');

  const renderEvents = () => (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 glass border-b border-gray-100">
        <div className="bg-black text-white px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-black border border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0V3m0 10h8m-8 0H4" />
                </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black tracking-widest text-primary uppercase">Permanecer</span>
              <span className="text-sm font-bold tracking-tight">Church</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-white relative hover:bg-white/10 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-black"></span>
            </button>
          </div>
        </div>
        
        <div className="pt-4 pb-2">
          <h1 className="px-4 text-2xl font-black italic tracking-tighter mb-4 uppercase text-black">Programação</h1>
          <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
            <button className="px-5 py-2 rounded-full bg-black text-white text-[11px] font-bold whitespace-nowrap shadow-md">TUDO</button>
            {['Cultos', 'Youth', 'Social', 'Conferências'].map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-[11px] font-bold whitespace-nowrap uppercase hover:bg-gray-200 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Featured Card */}
        <section className="px-4 pt-6">
          <div className="group relative overflow-hidden rounded-3xl bg-gray-900 aspect-[16/10] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url(${FEATURED_EVENT.imageUrl})` }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <span className="inline-block px-2.5 py-1 rounded bg-primary text-[10px] font-black uppercase tracking-wider text-black mb-3">
                Destaque
              </span>
              <h3 className="text-white text-3xl font-black italic uppercase mb-2 leading-none">
                {FEATURED_EVENT.title}
              </h3>
              <p className="text-white/90 text-xs font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {FEATURED_EVENT.date} • {FEATURED_EVENT.time}
              </p>
            </div>
          </div>
        </section>

        {/* List Section */}
        <section className="px-4 mt-8">
          <div className="flex justify-between items-baseline mb-5">
            <h2 className="text-xl font-black italic uppercase tracking-tight text-black">Próximos Eventos</h2>
            <button className="text-xs font-bold text-gray-400 uppercase hover:text-black transition-colors">Ver todos</button>
          </div>

          <div className="space-y-4">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div 
                    className={`size-24 rounded-2xl bg-cover bg-center shrink-0 shadow-inner ${event.status === 'archived' ? 'grayscale' : ''}`}
                    style={{ backgroundImage: `url(${event.imageUrl})` }}
                  ></div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg text-black truncate leading-tight mb-1">{event.title}</h4>
                        {event.status === 'archived' && (
                            <span className="bg-black text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase ml-2">Lotado</span>
                        )}
                    </div>
                    <p className="text-gray-500 text-xs mt-1 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date} • {event.time}
                    </p>
                    <p className="text-gray-500 text-xs font-medium flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between pl-1">
                    {event.category === 'youth' && (
                        <div className="flex -space-x-2">
                            <div className="size-8 rounded-full border-2 border-white bg-gray-200"></div>
                            <div className="size-8 rounded-full border-2 border-white bg-gray-300"></div>
                            <div className="size-8 rounded-full border-2 border-white bg-black flex items-center justify-center text-[9px] font-bold text-white uppercase">+12</div>
                        </div>
                    )}
                    {event.waitlist && (
                        <p className="text-[10px] text-gray-400 font-bold uppercase">{event.waitlist} em espera</p>
                    )}
                    {event.tags && event.tags.includes('Free') && (
                        <p className="text-[10px] text-primary-dark font-black uppercase">Entrada Livre</p>
                    )}

                    <div className="ml-auto">
                        {event.status === 'archived' ? (
                            <button className="border-2 border-black text-black px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all active:scale-95 hover:bg-gray-50">
                                Fila
                            </button>
                        ) : event.category === 'worship' ? (
                            <button className="bg-gray-100 text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all active:scale-95 hover:bg-gray-200">
                                Detalhes
                            </button>
                        ) : (
                            <button className="bg-primary hover:bg-primary-dark text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all active:scale-95 shadow-sm">
                                Inscrever-se
                            </button>
                        )}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAB */}
        <button className="fixed bottom-24 right-4 z-40 size-14 rounded-full bg-black text-primary shadow-2xl flex items-center justify-center transition-transform active:scale-90 border-2 border-primary/20 hover:scale-105">
          <MapPin className="w-6 h-6 fill-current" />
        </button>
      </main>
    </>
  );

  const renderRegistrations = () => (
    <div className="p-4 pt-12 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-8">Meus Ingressos</h1>
      
      <div className="space-y-6">
        {MY_TICKETS.map(ticket => (
          <div key={ticket.id} className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="p-6 pb-8 border-b-2 border-dashed border-gray-100 relative">
               {/* Semi-circles for ticket effect */}
               <div className="absolute -bottom-4 -left-4 size-8 bg-gray-50 rounded-full"></div>
               <div className="absolute -bottom-4 -right-4 size-8 bg-gray-50 rounded-full"></div>

               <div className="flex justify-between items-start mb-4">
                  <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-1 rounded">Confirmado</span>
                  <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
               </div>
               <h3 className="text-xl font-black uppercase leading-tight mb-2">{ticket.eventTitle}</h3>
               <div className="flex flex-col gap-1">
                  <p className="text-gray-500 text-xs font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary-dark" />
                    {ticket.date}
                  </p>
                  <p className="text-gray-500 text-xs font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-dark" />
                    {ticket.location}
                  </p>
               </div>
            </div>
            <div className="p-4 bg-gray-50/50 flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">#{ticket.id.toUpperCase()}8829</span>
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-xs font-bold uppercase hover:bg-gray-800 transition-colors">
                <QrCode className="w-4 h-4" />
                Ver QR Code
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 p-6 rounded-3xl bg-white border border-gray-100 text-center">
          <div className="size-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          <h4 className="font-bold text-lg mb-1">Procurando mais?</h4>
          <p className="text-gray-500 text-sm mb-4">Confira a agenda completa para novos eventos.</p>
          <button 
            onClick={() => setActiveTab('events')}
            className="text-primary-dark font-black uppercase text-xs tracking-wider border-b-2 border-primary-dark pb-0.5"
          >
            Ver Agenda
          </button>
        </div>
      </div>
    </div>
  );

  const renderDonate = () => (
    <div className="p-4 pt-12 min-h-screen bg-black text-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black italic uppercase tracking-tighter">Contribuição</h1>
        <button className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
           <User className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-6 mb-8 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-primary blur-[100px] opacity-10 rounded-full pointer-events-none"></div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Contribuído (2024)</p>
        <div className="flex items-baseline gap-1">
          <span className="text-primary text-2xl font-bold">R$</span>
          <span className="text-4xl font-black text-white">1.250,00</span>
        </div>
        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-white text-black py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-gray-200 transition-colors">
            Extrato
          </button>
          <button className="flex-1 bg-primary text-black py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary-dark transition-colors">
            Nova Doação
          </button>
        </div>
      </div>

      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 px-1">Oferta Rápida</h3>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[50, 100, 200, 500, 1000].map(amount => (
          <button key={amount} className="py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-black transition-all group">
            <span className="block text-[10px] text-gray-500 group-hover:text-black/60 font-bold">R$</span>
            <span className="text-xl font-black">{amount}</span>
          </button>
        ))}
        <button className="py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center">
          <span className="text-xs font-black uppercase">Outro</span>
        </button>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-white/10 flex items-center justify-center">
              <Copy className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm">Chave PIX</p>
              <p className="text-xs text-gray-500">Copiar chave aleatória</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-white/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm">Cartão de Crédito</p>
              <p className="text-xs text-gray-500">Visa •••• 4242</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="p-4 pt-12 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-8 text-black">Meu Perfil</h1>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="size-20 rounded-full bg-gray-200 border-2 border-primary overflow-hidden">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
            </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">{userRole === 'ADMIN' ? 'Admin' : 'Membro'}</h2>
          <p className="text-sm text-gray-500">{userRole === 'ADMIN' ? 'Acesso Total' : 'Membro desde 2021'}</p>
        </div>
      </div>

      <div className="space-y-3">
         {/* Menu items */}
         <button className="w-full p-4 rounded-2xl bg-white border border-gray-100 flex items-center justify-between font-bold text-black hover:bg-gray-50 transition-colors">
            <span className="flex items-center gap-3"><User className="w-5 h-5 text-gray-400"/> Dados Pessoais</span>
            <ChevronRight className="w-5 h-5 text-gray-400"/>
         </button>
         <button className="w-full p-4 rounded-2xl bg-white border border-gray-100 flex items-center justify-between font-bold text-black hover:bg-gray-50 transition-colors">
            <span className="flex items-center gap-3"><Settings className="w-5 h-5 text-gray-400"/> Configurações</span>
            <ChevronRight className="w-5 h-5 text-gray-400"/>
         </button>
         
         <div className="h-px bg-gray-200 my-4"></div>

         {userRole === 'ADMIN' && (
            <button onClick={onNavigateAdmin} className="w-full p-4 rounded-2xl bg-black text-primary flex items-center justify-between font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                <span className="flex items-center gap-3"><LayoutDashboard className="w-5 h-5"/> Área Administrativa</span>
                <ChevronRight className="w-5 h-5"/>
            </button>
         )}
         
         <button onClick={onLogout} className="w-full p-4 rounded-2xl bg-white border border-red-100 text-red-500 flex items-center justify-center font-black uppercase tracking-widest mt-8 hover:bg-red-50 transition-colors gap-2">
            <LogOut className="w-4 h-4" />
            Sair
         </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-black">
      {activeTab === 'events' && renderEvents()}
      {activeTab === 'registrations' && renderRegistrations()}
      {activeTab === 'donate' && renderDonate()}
      {activeTab === 'profile' && renderProfile()}

      {/* Bottom Nav */}
      <nav className={`fixed bottom-0 left-0 right-0 z-50 ${activeTab === 'donate' ? 'bg-black border-t border-white/10' : 'bg-white/95 glass border-t border-gray-100'} pb-safe transition-colors duration-300`}>
        <div className="flex items-center justify-around h-20 max-w-md mx-auto px-2">
          <button 
            onClick={() => setActiveTab('events')}
            className={`flex flex-col items-center gap-1.5 p-2 transition-colors ${activeTab === 'events' ? 'text-primary' : activeTab === 'donate' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-black'}`}
          >
            <Calendar className={`w-6 h-6 ${activeTab === 'events' ? 'fill-current' : ''}`} />
            <span className="text-[9px] font-black uppercase tracking-widest">Eventos</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('registrations')}
            className={`flex flex-col items-center gap-1.5 p-2 transition-colors ${activeTab === 'registrations' ? 'text-primary' : activeTab === 'donate' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-black'}`}
          >
            <Ticket className={`w-6 h-6 ${activeTab === 'registrations' ? 'fill-current' : ''}`} />
            <span className="text-[9px] font-black uppercase tracking-widest">Inscrições</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('donate')}
            className={`flex flex-col items-center gap-1.5 p-2 transition-colors ${activeTab === 'donate' ? 'text-primary' : 'text-gray-400 hover:text-black'}`}
          >
            <Heart className={`w-6 h-6 ${activeTab === 'donate' ? 'fill-current' : ''}`} />
            <span className="text-[9px] font-black uppercase tracking-widest">Doar</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1.5 p-2 transition-colors ${activeTab === 'profile' ? 'text-primary' : activeTab === 'donate' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-black'}`}
          >
            <User className={`w-6 h-6 ${activeTab === 'profile' ? 'fill-current' : ''}`} />
            <span className="text-[9px] font-black uppercase tracking-widest">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default PublicFeed;