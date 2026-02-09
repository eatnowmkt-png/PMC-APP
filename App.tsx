import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import PublicFeed from './components/PublicFeed';
import AdminDashboard from './components/AdminDashboard';
import { ViewState, UserRole } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('LOGIN');
  const [userRole, setUserRole] = useState<UserRole>('GUEST');

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    if (role === 'ADMIN') {
      setCurrentView('ADMIN');
    } else {
      setCurrentView('PUBLIC');
    }
  };

  const handleLogout = () => {
    setUserRole('GUEST');
    setCurrentView('LOGIN');
  };

  const renderView = () => {
    switch (currentView) {
      case 'LOGIN':
        return <LoginScreen onLogin={handleLogin} />;
      case 'PUBLIC':
        return (
          <PublicFeed 
            userRole={userRole}
            onNavigateAdmin={() => setCurrentView('ADMIN')} 
            onLogout={handleLogout}
          />
        );
      case 'ADMIN':
        return (
          <AdminDashboard 
            onBack={() => setCurrentView('PUBLIC')} 
            onLogout={handleLogout}
          />
        );
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return (
    <div className="antialiased">
      {renderView()}
    </div>
  );
};

export default App;