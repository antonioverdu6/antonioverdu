import React, { useState, useRef, useEffect } from 'react';
import { 
  FaCheckCircle, 
  FaFilter, 
  FaSearch, 
  FaProjectDiagram, 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaBrain, 
  FaMusic, 
  FaLandmark, 
  FaArrowRight,
  FaArrowLeft,
  FaInfoCircle,
  FaRobot,
  FaClock,
  FaHourglassHalf,
  FaNetworkWired,
  FaGraduationCap
} from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import { DAG_STAGES, DAG_TASKS } from '../data/dagData';
import i18n from 'i18next';

// Map operators to meaningful icons
const OPERATOR_ICONS = {
  'ArtisticDisciplineOperator': FaMusic,
  'STEMFoundationsOperator': FaGraduationCap,
  'DataEngineeringAcademyOperator': FaDatabase,
  'AIEngineeringOperator': FaBrain,
  'BankingSoftwareOperator': FaLandmark,
  'InvestmentDataOperator': FaLandmark,
  'GCPDataPlatformOperator': SiGooglecloud,
  'BatchETL_OllamaSLM_Operator': FaRobot,
  'SparkSubmitOperator': FaServer,
  'RasaDockerOperator': FaProjectDiagram,
  'DjangoReactOperator': FaCode,
  'DjangoChannelsVectorOperator': FaCode,
  'AgenticAIOperator': FaNetworkWired
};

export default function AirflowGraphView({ onSelectTask }) {
  const [selectedStage, setSelectedStage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const pipelineScrollRef = useRef(null);

  const scrollPipeline = (offset) => {
    if (pipelineScrollRef.current) {
      pipelineScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollToStage = (stageIdx) => {
    if (pipelineScrollRef.current) {
      const stageWidth = 335;
      pipelineScrollRef.current.scrollTo({
        left: stageIdx * stageWidth,
        behavior: 'smooth'
      });
      setActiveStageIdx(stageIdx);
    }
  };

  // Mouse click-and-drag panning
  const handleMouseDown = (e) => {
    if (e.target.closest('.airflow-task-card') || e.target.closest('button') || e.target.closest('input')) {
      return;
    }
    setIsDragging(true);
    setStartX(e.pageX - (pipelineScrollRef.current?.offsetLeft || 0));
    setScrollLeftState(pipelineScrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !pipelineScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (pipelineScrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    pipelineScrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Mouse wheel to horizontal scroll listener
  useEffect(() => {
    const el = pipelineScrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY !== 0 && el.scrollWidth > el.clientWidth) {
        const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 2;
        const canScrollLeft = el.scrollLeft > 2;

        if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 1.25, behavior: 'auto' });
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  // Update active stage indicator on scroll
  useEffect(() => {
    const el = pipelineScrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / 335);
      setActiveStageIdx(Math.min(Math.max(idx, 0), DAG_STAGES.length - 1));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Filter tasks based on stage and search query
  const filteredTasks = DAG_TASKS.filter((task) => {
    const matchesStage = selectedStage === 'all' || task.stage === selectedStage;
    const matchesSearch = 
      task.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.title_es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.operator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {/* Airflow Graph View Controls Bar */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
        
        {/* Left: Stage Filter & Search */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto overflow-hidden">
          <div className="flex items-center gap-1.5 text-gray-400 flex-shrink-0">
            <FaFilter size={11} className="text-[#00c7b7]" />
            <span className="hidden sm:inline">Filter Stage:</span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar flex-nowrap py-0.5">
            <button
              type="button"
              onClick={() => setSelectedStage('all')}
              className={`px-2.5 py-1 rounded transition text-[11px] whitespace-nowrap flex-shrink-0 ${
                selectedStage === 'all'
                  ? 'bg-[#00c7b7] text-black font-bold'
                  : 'bg-[#0a0e17] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
              }`}
            >
              All ({DAG_TASKS.length})
            </button>
            {DAG_STAGES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedStage(s.id)}
                className={`px-2.5 py-1 rounded transition text-[11px] whitespace-nowrap flex-shrink-0 ${
                  selectedStage === s.id
                    ? 'bg-[#00c7b7] text-black font-bold'
                    : 'bg-[#0a0e17] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
                }`}
              >
                {i18n.language === 'en' ? s.name_en : s.name_es}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Search Input & Legend */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <FaSearch size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search task_id..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0a0e17] border border-[#22304a] text-gray-200 text-xs rounded pl-7 pr-3 py-1 focus:outline-none focus:border-[#00c7b7] w-full sm:w-48"
            />
          </div>

          {/* Quick Legend */}
          <div className="hidden lg:flex items-center gap-2.5 text-[10px] text-gray-400 border-l border-[#22304a] pl-3">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#00c07f]"></span> success
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#017cee] animate-pulse"></span> running
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#788896]"></span> queued
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Graph Canvas (Airflow Grid Dots) */}
      <div className="bg-[#0d121f] border border-[#22304a] rounded-lg p-3 sm:p-5 airflow-grid-canvas min-h-[520px] overflow-hidden relative shadow-2xl">
        
        {/* Helper Instructions Pill & Scroll Navigation */}
        <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono text-gray-400 bg-[#141c2e]/90 border border-[#22304a] px-3.5 py-2.5 rounded-md">
          <div className="flex items-center gap-2">
            <FaInfoCircle className="text-[#00c7b7]" size={13} />
            <span>
              {i18n.language === 'en' 
                ? 'Drag with mouse or swipe on mobile to pan. Click any task node to inspect details.' 
                : 'Arrastra con el ratón o desliza en móvil para navegar. Haz clic en una tarea para ver detalles.'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-gray-300">
            <span className="text-gray-400 text-[10px] hidden sm:inline">
              {i18n.language === 'en' ? 'Navigate Pipeline:' : 'Navegar Pipeline:'}
            </span>
            <button
              type="button"
              onClick={() => scrollPipeline(-340)}
              className="bg-[#0a0e17] hover:bg-[#1f2c44] text-gray-200 border border-[#22304a] px-2.5 py-1 rounded text-[11px] flex items-center gap-1.5 transition active:scale-95 shadow-sm"
              title="Scroll Left"
            >
              <FaArrowLeft size={10} className="text-[#00c7b7]" />
              <span className="hidden sm:inline">{i18n.language === 'en' ? 'Left' : 'Anterior'}</span>
            </button>
            <button
              type="button"
              onClick={() => scrollPipeline(340)}
              className="bg-[#0a0e17] hover:bg-[#1f2c44] text-gray-200 border border-[#22304a] px-2.5 py-1 rounded text-[11px] flex items-center gap-1.5 transition active:scale-95 shadow-sm"
              title="Scroll Right"
            >
              <span className="hidden sm:inline">{i18n.language === 'en' ? 'Right' : 'Siguiente'}</span>
              <FaArrowRight size={10} className="text-[#00c7b7]" />
            </button>
          </div>
        </div>

        {/* Quick Stage Jump Navigation Pills (Instant 1-tap jump on Mobile & Desktop) */}
        {selectedStage === 'all' && (
          <div className="mb-4 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[10px] text-gray-500 font-mono hidden md:inline mr-1 uppercase whitespace-nowrap">
              {i18n.language === 'en' ? 'Jump to Stage:' : 'Saltar a:'}
            </span>
            {DAG_STAGES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToStage(idx)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap transition flex items-center gap-1 ${
                  activeStageIdx === idx
                    ? 'bg-[#00c7b7] text-black font-bold shadow'
                    : 'bg-[#141c2e] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
                }`}
              >
                <span className="opacity-75 font-bold">#{idx + 1}</span>
                <span>
                  {i18n.language === 'en' ? s.name_en.replace(/^\d+\.\s*/, '') : s.name_es.replace(/^\d+\.\s*/, '')}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Graph Columns Layout (5 Pipeline Stages with comfortable widths & horizontal scrollbar) */}
        <div 
          ref={pipelineScrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`pipeline-scroll-container overflow-x-auto pb-4 pt-1 flex items-start gap-3.5 sm:gap-5 snap-x snap-mandatory sm:snap-none select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: isDragging ? 'auto' : 'smooth'
          }}
        >
          {DAG_STAGES.map((stage, stageIdx) => {
            const stageTasks = filteredTasks.filter((t) => t.stage === stage.id);
            if (selectedStage !== 'all' && selectedStage !== stage.id) return null;

            return (
              <div 
                key={stage.id} 
                className={`space-y-3 bg-[#141c2e]/90 border border-[#22304a] rounded-lg p-3 sm:p-3.5 shadow-xl flex-shrink-0 snap-center sm:snap-start transition ${
                  selectedStage === 'all' 
                    ? 'w-[84vw] max-w-[325px] sm:w-[325px]' 
                    : 'w-full max-w-2xl mx-auto'
                }`}
              >
                {/* Stage Header */}
                <div className="border-b border-[#22304a] pb-2 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-[#00c7b7] font-semibold uppercase tracking-wider">
                      STAGE {stageIdx + 1} OF {DAG_STAGES.length}
                    </div>
                    <div className="text-xs font-bold text-white font-mono truncate max-w-[210px]" title={i18n.language === 'en' ? stage.name_en : stage.name_es}>
                      {i18n.language === 'en' ? stage.name_en : stage.name_es}
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#0a0e17] text-gray-400 border border-[#22304a] px-1.5 py-0.5 rounded font-mono">
                    {stageTasks.length} {stageTasks.length === 1 ? 'task' : 'tasks'}
                  </span>
                </div>

                {/* Stage Tasks List */}
                <div className="space-y-3">
                  {stageTasks.length === 0 ? (
                    <div className="text-center py-6 text-gray-500 font-mono text-[11px]">
                      No matching tasks
                    </div>
                  ) : (
                    stageTasks.map((task) => {
                      const Icon = OPERATOR_ICONS[task.operator] || FaCode;
                      const isSuccess = task.state === 'success';
                      const isRunning = task.state === 'running';
                      const isQueued = task.state === 'queued';

                      let borderClass = 'status-border-success';
                      if (isRunning) borderClass = 'status-border-running';
                      else if (isQueued) borderClass = 'status-border-queued';

                      return (
                        <div
                          key={task.id}
                          onClick={() => onSelectTask(task)}
                          className={`airflow-task-card rounded-md p-3.5 cursor-pointer shadow-md text-left font-mono relative group ${borderClass}`}
                        >
                          {/* Task Top Bar: Operator Name + State Icon */}
                          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1.5">
                            <span className="text-[#00c7b7] font-semibold truncate max-w-[180px] flex items-center gap-1.5" title={task.operator}>
                              <Icon size={11} className="text-[#00c7b7] flex-shrink-0" />
                              <span>{task.operator}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              {isSuccess && <FaCheckCircle size={11} className="text-[#00c07f]" />}
                              {isRunning && <FaClock size={11} className="text-[#017cee] animate-pulse" />}
                              {isQueued && <FaHourglassHalf size={11} className="text-[#788896]" />}
                            </span>
                          </div>

                          {/* Task ID (Airflow Style in Bold Mono) */}
                          <div className="text-xs font-bold text-white group-hover:text-[#00c7b7] transition truncate mb-1.5" title={task.id}>
                            {task.id}
                          </div>

                          {/* Title in readable font */}
                          <div className="text-[11px] font-sans text-gray-300 line-clamp-2 leading-snug mb-2.5">
                            {i18n.language === 'en' ? task.title_en : task.title_es}
                          </div>

                          {/* Duration Badge & Pool */}
                          <div className="flex items-center justify-between pt-2 border-t border-[#1b263b] text-[10px] text-gray-400">
                            <span className="bg-[#0a0e17] px-1.5 py-0.5 rounded border border-[#22304a] text-gray-300">
                              {task.duration}
                            </span>
                            <span className="text-gray-500 truncate max-w-[120px]">
                              {task.pool.replace('_pool', '')}
                            </span>
                          </div>

                          {/* Click Hint Indicator on Hover */}
                          <div className="absolute inset-0 bg-[#00c7b7]/5 opacity-0 group-hover:opacity-100 rounded-md transition pointer-events-none flex items-center justify-center">
                            <span className="bg-[#0a0e17] text-[#00c7b7] text-[10px] px-2 py-0.5 rounded border border-[#00c7b7]/40 shadow-lg">
                              Inspect Task →
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Stage Flow Indicator (Arrow to next stage) */}
                {stageIdx < DAG_STAGES.length - 1 && selectedStage === 'all' && (
                  <div className="flex justify-center pt-1 text-gray-500">
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1.5 bg-[#0a0e17] px-2 py-0.5 rounded border border-[#22304a]">
                      downstream <FaArrowRight size={8} className="text-[#00c7b7]" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pipeline Summary Card */}
        <div className="mt-8 bg-[#141c2e] border border-[#22304a] p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <div className="text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00c07f]"></span>
              <span>Pipeline Architecture: {DAG_TASKS.length} Tasks Verified</span>
            </div>
            <p className="text-gray-400 font-sans text-xs mt-1 max-w-2xl">
              {i18n.language === 'en'
                ? 'From orchestral discipline and quantitative engineering at UPM, to data engineering at ING (international Agile squads) and distributed systems in production.'
                : 'Desde la disciplina sinfónica y la formación cuantitativa en la UPM, hasta la ingeniería de datos en ING (squads Agile internacionales) y sistemas distribuidos en producción.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-2.5 py-1 bg-[#0a0e17] text-gray-300 border border-[#22304a] rounded text-[11px]">
              SLA: 100% Met
            </span>
            <span className="px-2.5 py-1 bg-[#00c07f]/20 text-[#00c07f] border border-[#00c07f]/40 rounded font-bold text-[11px]">
              STATE: VERIFIED
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
