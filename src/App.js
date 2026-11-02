import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import AirflowNavbar from './components/AirflowNavbar';
import AirflowDagHeader from './components/AirflowDagHeader';
import AirflowGraphView from './components/AirflowGraphView';
import AirflowGridView from './components/AirflowGridView';
import AirflowCapabilitiesView from './components/AirflowCapabilitiesView';
import AirflowProjectsView from './components/AirflowProjectsView';
import AirflowCodeView from './components/AirflowCodeView';
import AirflowLogsView from './components/AirflowLogsView';
import TaskInstanceModal from './components/TaskInstanceModal';
import AirflowTriggerModal from './components/AirflowTriggerModal';
import AirflowFooter from './components/AirflowFooter';
import './index.css';

function MainAirflowDashboard() {
  const [activeTab, setActiveTab] = useState('graph'); // 'graph' | 'grid' | 'capabilities' | 'projects' | 'code' | 'logs'
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTriggerOpen, setIsTriggerOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => localStorage.getItem('lang') || i18n.language || 'es');

  useEffect(() => {
    const handleLangChange = (lng) => {
      setCurrentLang(lng);
    };
    i18n.on('languageChanged', handleLangChange);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, []);

  return (
    <div key={currentLang} className="min-h-screen bg-[#0a0e17] text-gray-100 flex flex-col font-sans w-full overflow-x-hidden">
      
      {/* 1. Global Airflow Navbar */}
      <AirflowNavbar 
        onOpenTrigger={() => setIsTriggerOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentLang={currentLang}
      />

      {/* 2. Airflow DAG Header & Sub-navigation Tabs */}
      <AirflowDagHeader 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTrigger={() => setIsTriggerOpen(true)}
        currentLang={currentLang}
      />

      {/* 3. Main Dashboard Workspace Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 min-w-0 overflow-x-hidden">
        {activeTab === 'graph' && (
          <AirflowGraphView onSelectTask={setSelectedTask} currentLang={currentLang} />
        )}
        {activeTab === 'grid' && (
          <AirflowGridView onSelectTask={setSelectedTask} setActiveTab={setActiveTab} currentLang={currentLang} />
        )}
        {activeTab === 'capabilities' && (
          <AirflowCapabilitiesView currentLang={currentLang} />
        )}
        {activeTab === 'projects' && (
          <AirflowProjectsView onSelectTask={setSelectedTask} currentLang={currentLang} />
        )}
        {activeTab === 'code' && (
          <AirflowCodeView currentLang={currentLang} />
        )}
        {activeTab === 'logs' && (
          <AirflowLogsView currentLang={currentLang} />
        )}
      </main>

      {/* 4. Task Instance Inspector Modal */}
      {selectedTask && (
        <TaskInstanceModal 
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          currentLang={currentLang}
        />
      )}

      {/* 5. Trigger DAG (Contact) Modal */}
      <AirflowTriggerModal 
        isOpen={isTriggerOpen}
        onClose={() => setIsTriggerOpen(false)}
        currentLang={currentLang}
      />

      {/* 6. Airflow System Footer */}
      <AirflowFooter onOpenTrigger={() => setIsTriggerOpen(true)} currentLang={currentLang} />
      
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<MainAirflowDashboard />} />
      </Routes>
    </HashRouter>
  );
}
