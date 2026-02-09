import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Apple } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1548625361-16a75f1b20e4?q=80&w=2069&auto=format&fit=crop" 
          alt="Church background" 
          className="h-full w-full object-cover opacity-40 grayscale"
        />
      </div>

      <div className="relative z-20 flex flex-col min-h-screen px-6 pt-12 pb-8">
        {/* Header / Logo */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="size-20 bg-black border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
             <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-primary" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0V3m0 10h8m-8 0H4" />
             </svg>
          </div>
          <div className="text-center">
            <h2 className="text-white text-3xl font-black tracking-tighter uppercase italic">Permanecer Church</h2>
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="h-[1px] w-4 bg-primary/50"></div>
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">PMC Church</p>
              <div className="h-[1px] w-4 bg-primary/50"></div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-md mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
            <div className="mb-8 text-center">
              <h1 className="text-white text-3xl font-bold mb-2">Welcome</h1>
              <p className="text-zinc-400 text-sm">Sign in to your member portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest pl-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-white/[0.05] border border-white/10 rounded-2xl text-white placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-medium"
                    placeholder="member@pmc.church"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Password</label>
                  <a href="#" className="text-primary text-[10px] font-bold uppercase tracking-wider hover:opacity-80">Forgot?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-14 pl-12 pr-12 bg-white/[0.05] border border-white/10 rounded-2xl text-white placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-medium"
                    placeholder="••••••••"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button 
                disabled={isLoading}
                type="submit"
                className="w-full h-16 bg-primary text-black font-black uppercase tracking-widest rounded-2xl shadow-glow hover:bg-primary-dark active:scale-[0.98] transition-all mt-6 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="text-base">{isLoading ? 'Signing In...' : 'Sign In'}</span>
                {!isLoading && <ArrowRight className="w-6 h-6 stroke-[3px]" />}
              </button>
            </form>

            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="px-4 text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-black">Quick Access</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center h-12 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] transition-colors group gap-2">
                <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
                <span className="text-[10px] font-black text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">Google</span>
              </button>
              <button className="flex items-center justify-center h-12 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] transition-colors group gap-2">
                <Apple className="w-5 h-5 opacity-60 group-hover:opacity-100 text-white transition-opacity" />
                <span className="text-[10px] font-black text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">Apple</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 flex flex-col items-center mt-auto">
          <p className="text-zinc-500 text-xs font-medium">
            New to the community?
            <button className="text-primary font-bold hover:underline ml-1">Join now</button>
          </p>
          <div className="mt-6 flex gap-8">
            <button className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Terms</button>
            <button className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Privacy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
