import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import PublicFeed from './components/PublicFeed';
import AdminDashboard from './components/AdminDashboard';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('PUBLIC');

  const renderView = () => {
    switch (currentView) {
      case 'LOGIN':
        return <LoginScreen onLogin={() => setCurrentView('PUBLIC')} />;
      case 'PUBLIC':
        return <PublicFeed onNavigateAdmin={() => setCurrentView('ADMIN')} />;
      case 'ADMIN':
        return <AdminDashboard onBack={() => setCurrentView('PUBLIC')} />;
      default:
        return <LoginScreen onLogin={() => setCurrentView('PUBLIC')} />;
    }
  };

  return (
    <div className="antialiased">
      {renderView()}
    </div>
  );
};

export default App;