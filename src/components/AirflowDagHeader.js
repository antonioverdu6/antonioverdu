import React, { useState } from 'react';
import { 
  FaProjectDiagram, 
  FaTh, 
  FaServer, 
  FaCode, 
  FaTerminal, 
  FaTag,
  FaLaptopCode
} from 'react-icons/fa';
import { DAG_METADATA, DAG_TASKS } from '../data/dagData';
import i18n from 'i18next';

const TAG_CONFIGS = {
  'data-engineering': { label: 'Data Engineering', badgeClass: 'bg-[#00c7b7]/15 text-[#00c7b7] border-[#00c7b7]/40', dot: 'bg-[#00c7b7]' },
  'ing-bank': { label: 'ING Bank', badgeClass: 'bg-[#017cee]/20 text-[#38bdf8] border-[#017cee]/40', dot: 'bg-[#017cee]' },
  'local-ai': { label: 'Local AI (Ollama)', badgeClass: 'bg-purple-950/40 text-purple-300 border-purple-500/40', dot: 'bg-purple-400' },
  'big-data': { label: 'Big Data', badgeClass: 'bg-[#00c7b7]/15 text-[#00c7b7] border-[#00c7b7]/40', dot: 'bg-[#00c7b7]' },
  'gcp': { label: 'GCP Cloud', badgeClass: 'bg-[#017cee]/20 text-[#38bdf8] border-[#017cee]/40', dot: 'bg-[#017cee]' },
  'upm': { label: 'UPM ETSIT', badgeClass: 'bg-amber-950/30 text-amber-300 border-amber-500/40', dot: 'bg-amber-400' },
  'auction-intelligence': { label: 'Auction Intel', badgeClass: 'bg-purple-950/40 text-purple-300 border-purple-500/40', dot: 'bg-purple-400' },
  'distributed-systems': { label: 'Distributed Systems', badgeClass: 'bg-[#00c7b7]/15 text-[#00c7b7] border-[#00c7b7]/40', dot: 'bg-[#00c7b7]' },
  'data-systems': { label: 'Data Systems', badgeClass: 'bg-[#00c7b7]/15 text-[#00c7b7] border-[#00c7b7]/40', dot: 'bg-[#00c7b7]' },
  'fintech': { label: 'FinTech', badgeClass: 'bg-[#017cee]/20 text-[#38bdf8] border-[#017cee]/40', dot: 'bg-[#017cee]' },
  'python': { label: 'Python 3.10+', badgeClass: 'bg-slate-800/60 text-slate-300 border-slate-600', dot: 'bg-slate-400' },
  'docker': { label: 'Docker', badgeClass: 'bg-slate-800/60 text-slate-300 border-slate-600', dot: 'bg-slate-400' },
  'react': { label: 'React.js', badgeClass: 'bg-slate-800/60 text-slate-300 border-slate-600', dot: 'bg-slate-400' },
};

const PRIORITY_TAGS = ['data-engineering', 'ing-bank', 'local-ai', 'big-data', 'gcp', 'upm'];

export default function AirflowDagHeader({ activeTab, setActiveTab }) {
  const [isPaused, setIsPaused] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  const successCount = DAG_TASKS.filter((t) => t.state === 'success').length;
  const runningCount = DAG_TASKS.filter((t) => t.state === 'running').length;
  const queuedCount = DAG_TASKS.filter((t) => t.state === 'queued').length;

  const tabs = [
    { id: 'graph', label_es: 'Graph', label_en: 'Graph', full_es: 'Graph (Grafo DAG)', full_en: 'Graph View', icon: FaProjectDiagram, badge: `${DAG_TASKS.length} Nodes` },
    { id: 'grid', label_es: 'Grid', label_en: 'Grid', full_es: 'Grid (Matriz de Ejecución)', full_en: 'Grid View', icon: FaTh, badge: `${DAG_TASKS.length} Runs` },
    { id: 'capabilities', label_es: 'Pools', label_en: 'Worker Pools', full_es: 'Worker Pools (Tecnologías)', full_en: 'Worker Pools & Skills', icon: FaServer, badge: '28 Techs' },
    { id: 'projects', label_es: 'Proyectos', label_en: 'Projects', full_es: 'Servicios & Proyectos', full_en: 'Projects & Services', icon: FaLaptopCode, badge: `${DAG_TASKS.filter(t => t.stage === 'academic_labs' || t.stage === 'independent_systems').length} Systems` },
    { id: 'code', label_es: 'Código .py', label_en: 'DAG Code', full_es: 'Código DAG (Python)', full_en: 'DAG Code (Python)', icon: FaCode, badge: '.py' },
    { id: 'logs', label_es: 'Audit Logs', label_en: 'Audit Logs', full_es: 'Audit Logs & Historial', full_en: 'Audit Logs', icon: FaTerminal, badge: 'Live' },
  ];

  return (
    <div className="bg-[#141c2e] border-b border-[#22304a] text-gray-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-5 pb-0 w-full min-w-0">
        
        {/* Main DAG Header Info Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 w-full min-w-0">
          
          {/* Left: Pause Toggle + Title + Tags */}
          <div className="flex items-start gap-2.5 sm:gap-3.5 w-full min-w-0">
            {/* Airflow Toggle Button (ON / PAUSED) */}
            <div className="pt-0.5 flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className={`relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isPaused ? 'bg-gray-600' : 'bg-[#00c07f]'
                }`}
                title={isPaused ? 'Unpause DAG execution' : 'Pause DAG execution'}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isPaused ? 'translate-x-0' : 'translate-x-6'
                  }`}
                />
              </button>
              <div className="text-[10px] font-mono text-center mt-1 text-gray-400 uppercase">
                {isPaused ? 'PAUSED' : 'ACTIVE'}
              </div>
            </div>

            {/* Title, Subtitle, Tags */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                <h1 className="text-sm sm:text-lg md:text-2xl font-bold font-mono text-white tracking-tight break-words [overflow-wrap:anywhere]">
                  antonio_<wbr />verdu_<wbr />career_<wbr />pipeline
                </h1>
                <span className="text-[10px] sm:text-xs font-normal px-1.5 sm:px-2 py-0.5 rounded bg-[#0a0e17] text-[#00c7b7] border border-[#22304a] flex-shrink-0">
                  PROD v2.8
                </span>
              </div>

              {/* Candidate description */}
              <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-3xl leading-relaxed break-words [overflow-wrap:anywhere]">
                {i18n.language === 'en' ? (
                  <>
                    <strong className="text-white">Antonio Verdú Salpico</strong> · Data Engineer at <strong className="text-[#00c7b7]">ING Bank</strong> (Investment Team) & Data Systems Engineering Graduate from UPM. Working in international Agile/Scrum squads on cloud data pipelines.
                  </>
                ) : (
                  <>
                    <strong className="text-white">Antonio Verdú Salpico</strong> · Data Engineer en <strong className="text-[#00c7b7]">ING Bank</strong> (Equipo de Inversión) y Graduado en Ingeniería y Sistemas de Datos por la UPM. Trabajo en squads Agile/Scrum internacionales en pipelines de datos cloud.
                  </>
                )}
              </p>

              {/* Tags row with categorized pill badges & progressive reveal */}
              <div className="flex items-center gap-1.5 flex-wrap mt-2.5 w-full min-w-0">
                <div className="flex items-center gap-1 text-gray-500 mr-0.5 flex-shrink-0">
                  <FaTag size={10} />
                  <span className="text-[10px] font-mono hidden sm:inline">Tags:</span>
                </div>

                {(showAllTags ? DAG_METADATA.tags : PRIORITY_TAGS).map((tag) => {
                  const cfg = TAG_CONFIGS[tag] || {
                    label: tag,
                    badgeClass: 'bg-[#0d121f] text-gray-300 border-[#22304a]',
                    dot: 'bg-gray-400'
                  };

                  return (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1.5 shadow-sm whitespace-nowrap transition ${cfg.badgeClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} flex-shrink-0`}></span>
                      <span>{cfg.label}</span>
                    </span>
                  );
                })}

                {/* Toggle more/less tags button */}
                <button
                  type="button"
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#22304a] bg-[#0a0e17] text-gray-400 hover:text-white hover:border-[#00c7b7] transition flex items-center gap-1 shadow-sm flex-shrink-0"
                  title={showAllTags ? 'Mostrar menos etiquetas' : 'Ver todas las etiquetas tecnológicas'}
                >
                  <span className="text-[#00c7b7] font-bold">{showAllTags ? '−' : '+'}</span>
                  <span>{showAllTags ? (i18n.language === 'en' ? 'Less' : 'Menos') : `${DAG_METADATA.tags.length - PRIORITY_TAGS.length} ${i18n.language === 'en' ? 'more' : 'más'}`}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Iconic Airflow Task State Circles */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2.5 font-mono w-full lg:w-auto min-w-0">
            
            {/* Airflow Run Circles Matrix */}
            <div className="bg-[#0a0e17] border border-[#22304a] p-2 rounded-lg flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3 text-xs w-full sm:w-auto overflow-x-auto no-scrollbar">
              
              {/* Success circle */}
              <div className="flex items-center gap-1.5" title="Tasks in SUCCESS state">
                <span className="w-5 h-5 rounded-full bg-[#00c07f] text-black font-bold flex items-center justify-center text-[10px] shadow-sm flex-shrink-0">
                  {successCount}
                </span>
                <span className="text-gray-400 text-[11px]">success</span>
              </div>

              {/* Running circle */}
              <div className="flex items-center gap-1.5" title="Running tasks (Currently Active)">
                <span className={`w-5 h-5 rounded-full font-bold flex items-center justify-center text-[10px] shadow-sm flex-shrink-0 ${
                  runningCount > 0 
                    ? 'bg-[#017cee] text-white animate-pulse' 
                    : 'bg-[#22304a] text-gray-500'
                }`}>
                  {runningCount}
                </span>
                <span className={runningCount > 0 ? 'text-[#017cee] font-semibold text-[11px]' : 'text-gray-500 text-[11px]'}>
                  running
                </span>
              </div>

              {/* Failed circle */}
              <div className="flex items-center gap-1.5" title="Failed tasks">
                <span className="w-5 h-5 rounded-full bg-[#22304a] text-gray-500 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
                  0
                </span>
                <span className="text-gray-500 text-[11px]">failed</span>
              </div>

              {/* Queued circle */}
              <div className="flex items-center gap-1.5" title="Queued tasks (Scheduled in Backlog)">
                <span className={`w-5 h-5 rounded-full font-bold flex items-center justify-center text-[10px] shadow-sm flex-shrink-0 ${
                  queuedCount > 0 
                    ? 'bg-[#788896] text-white' 
                    : 'bg-[#22304a] text-gray-500'
                }`}>
                  {queuedCount}
                </span>
                <span className={queuedCount > 0 ? 'text-[#94a3b8] font-semibold text-[11px]' : 'text-gray-500 text-[11px]'}>
                  queued
                </span>
              </div>
            </div>

            {/* Metadata Summary Line */}
            <div className="text-[10px] sm:text-[11px] text-gray-400 flex items-center gap-2 sm:gap-3 flex-wrap">
              <span>Schedule: <strong className="text-gray-200">@continuous</strong></span>
              <span>•</span>
              <span>Cluster: <strong className="text-[#00c07f]">UPM-Prod-ETSIT</strong></span>
              <span>•</span>
              <span>State: <strong className="text-[#00c7b7]">Healthy</strong></span>
            </div>
          </div>
        </div>

        {/* Airflow Sub-Navigation Tabs Row (Symmetrical & Responsive) */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-t border-[#22304a] pt-1 -mx-3 px-3 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 font-mono text-xs whitespace-nowrap transition-all border-b-2 flex-shrink-0 ${
                  isActive
                    ? 'border-[#00c7b7] text-white bg-[#0a0e17] font-semibold rounded-t'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#1a243a]'
                }`}
              >
                <Icon size={12} className={isActive ? 'text-[#00c7b7]' : 'text-gray-500'} />
                <span className="hidden sm:inline">{i18n.language === 'en' ? tab.full_en : tab.full_es}</span>
                <span className="sm:hidden">{i18n.language === 'en' ? tab.label_en : tab.label_es}</span>
                <span
                  className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-[#00c7b7]/20 text-[#00c7b7]' : 'bg-[#0a0e17] text-gray-500'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
