import React, { useState, useRef } from 'react';
import { 
  FaCheckCircle, 
  FaClock, 
  FaCheck, 
  FaHourglassHalf, 
  FaHistory,
  FaLayerGroup,
  FaProjectDiagram,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { DAG_TASKS, DAG_STAGES } from '../data/dagData';
import { GRID_RUNS, TASK_RUN_STATUS } from '../data/gridData';
import i18n from 'i18next';

export default function AirflowGridView({ onSelectTask, setActiveTab }) {
  // Default selected instance to the live ING Data Engineer run
  const [selectedInstance, setSelectedInstance] = useState({
    taskId: 'ing_bank_investment_data_engineer',
    runId: 'run_2026_11'
  });
  const [hoveredTaskId, setHoveredTaskId] = useState(null);

  const rightPaneRef = useRef(null);

  const selectedTask = DAG_TASKS.find((t) => t.id === selectedInstance?.taskId) || DAG_TASKS[0];
  const selectedRun = GRID_RUNS.find((r) => r.id === selectedInstance?.runId) || GRID_RUNS[GRID_RUNS.length - 1];
  const selectedStatus = selectedTask && selectedRun 
    ? TASK_RUN_STATUS[selectedTask.id]?.[selectedRun.id] 
    : null;

  const scrollToRun = (runId) => {
    setSelectedInstance(prev => ({ ...prev, runId }));
    if (rightPaneRef.current) {
      const runIndex = GRID_RUNS.findIndex(r => r.id === runId);
      if (runIndex >= 0) {
        // Approximate width per run column is ~112px on mobile, ~128px on desktop
        const isMobile = window.innerWidth < 640;
        const colWidth = isMobile ? 112 : 128;
        const targetScroll = runIndex * colWidth;
        rightPaneRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="space-y-4 font-mono text-xs w-full min-w-0">
      
      {/* Top Banner & Stats */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <FaHistory className="text-[#00c7b7] flex-shrink-0" size={14} />
            <span className="text-white font-bold text-xs sm:text-sm truncate">
              Airflow Grid Matrix · Matriz Temporal de Ejecuciones (2024 - 2026)
            </span>
          </div>
          <p className="text-gray-400 font-sans text-xs mt-1 leading-relaxed">
            {i18n.language === 'en'
              ? 'Progression of pipeline tasks across 6 historical checkpoints from UPM university labs to ING Bank and production AI platforms.'
              : 'Evolución cronológica de tareas a través de 6 checkpoints históricos, desde los laboratorios de la UPM hasta ING Bank y plataformas de IA.'}
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px] text-gray-300 flex-wrap flex-shrink-0">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#00c07f]"></span>
            <span>Success</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] border border-[#017cee] bg-[#017cee]/30"></span>
            <span>Running</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] border border-[#64748b] bg-[#334155]/40 text-[#94a3b8]"></span>
            <span>Queued</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-[2px] border border-[#1e293b] bg-[#0a0e17] text-gray-600 flex items-center justify-center text-[8px]">·</span>
            <span>No iniciado</span>
          </span>
        </div>
      </div>

      {/* Grid Checkpoint Selector Bar with Dates */}
      <div className="bg-[#141c2e] border border-[#22304a] p-2 sm:p-2.5 rounded-lg flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-md">
        <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase font-mono px-1 flex-shrink-0">
          <FaCalendarAlt size={10} className="text-[#00c7b7]" />
          <span className="hidden sm:inline">Checkpoint:</span>
        </div>

        {GRID_RUNS.map((run) => {
          const isSelected = selectedInstance?.runId === run.id;
          const isLive = run.id === 'run_2026_11';

          return (
            <button
              key={run.id}
              type="button"
              onClick={() => scrollToRun(run.id)}
              className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap transition flex items-center gap-1.5 flex-shrink-0 shadow-sm ${
                isSelected
                  ? 'bg-[#00c7b7] text-black font-bold ring-1 ring-[#00c7b7]'
                  : 'bg-[#0a0e17] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
              }`}
            >
              {isLive && <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-[#017cee] animate-ping'}`}></span>}
              <span>{run.label}</span>
              <span className={`text-[9px] ${isSelected ? 'text-black/75' : 'text-gray-500'}`}>({run.date})</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid View Container: Split Two-Pane Frozen Architecture */}
      <div className="bg-[#0d121f] border border-[#22304a] rounded-lg overflow-hidden shadow-2xl w-full min-w-0 flex flex-col">
        
        {/* Mobile Swipe / Interaction Hint Bar */}
        <div className="sm:hidden px-3 py-1.5 bg-[#10192a] border-b border-[#22304a] flex items-center justify-between text-[10px] text-gray-400">
          <span className="flex items-center gap-1.5 text-[#00c7b7] font-semibold">
            <FaLayerGroup size={10} />
            <span>Columna izquierda fija</span>
          </span>
          <span className="text-gray-400 flex items-center gap-1 font-mono">
            <span>Deslizar fechas</span>
            <span className="text-[#00c7b7] font-bold">→</span>
          </span>
        </div>

        {/* Two-Pane Container */}
        <div className="flex w-full min-w-0">
          
          {/* PANE 1: LEFT STATIC / FROZEN COLUMN (Never scrolls horizontally) */}
          <div className="w-40 sm:w-60 md:w-72 lg:w-80 flex-shrink-0 bg-[#141c2e] border-r-2 border-[#22304a] z-10 shadow-[4px_0_12px_rgba(0,0,0,0.5)] flex flex-col select-none">
            
            {/* Left Header */}
            <div className="h-14 min-h-[56px] max-h-[56px] px-3 sm:px-4 flex items-center justify-between border-b border-[#22304a] bg-[#141c2e]">
              <div className="flex items-center gap-2 min-w-0">
                <FaLayerGroup className="text-[#00c7b7] flex-shrink-0" size={12} />
                <span className="font-semibold text-white text-xs truncate">Tasks & Operators</span>
              </div>
              <span className="text-[10px] text-gray-400 bg-[#0a0e17] px-1.5 py-0.5 rounded border border-[#22304a] font-mono flex-shrink-0 hidden sm:inline">
                {DAG_TASKS.length} tasks
              </span>
            </div>

            {/* Left Stages and Tasks */}
            {DAG_STAGES.map((stage) => {
              const stageTasks = DAG_TASKS.filter((t) => t.stage === stage.id);
              return (
                <div key={stage.id} className="flex flex-col">
                  {/* Stage Divider Row */}
                  <div className="h-8 min-h-[32px] max-h-[32px] px-3 sm:px-4 bg-[#10192a] border-b border-[#22304a] flex items-center justify-between text-[#00c7b7] font-bold text-[11px] overflow-hidden">
                    <span className="truncate max-w-[120px] sm:max-w-[200px]" title={i18n.language === 'en' ? stage.name_en : stage.name_es}>
                      ▾ {i18n.language === 'en' ? stage.name_en : stage.name_es}
                    </span>
                    <span className="text-[9px] bg-[#0a0e17] text-gray-400 px-1.5 py-0.5 rounded border border-[#22304a] font-normal flex-shrink-0">
                      {stageTasks.length}
                    </span>
                  </div>

                  {/* Task Rows */}
                  {stageTasks.map((task, taskIdx) => {
                    const isTaskSelected = selectedInstance?.taskId === task.id;
                    const isHovered = hoveredTaskId === task.id;
                    const rowBg = taskIdx % 2 === 0 ? 'bg-[#0d121f]' : 'bg-[#0a0e17]';
                    const taskTitle = i18n.language === 'en' ? task.title_en : task.title_es;

                    return (
                      <div
                        key={task.id}
                        onMouseEnter={() => setHoveredTaskId(task.id)}
                        onMouseLeave={() => setHoveredTaskId(null)}
                        onClick={() => setSelectedInstance(prev => ({ ...prev, taskId: task.id }))}
                        className={`h-12 min-h-[48px] max-h-[48px] px-2.5 sm:px-3 flex flex-col justify-center border-b border-[#1b263b]/70 cursor-pointer transition overflow-hidden ${
                          isTaskSelected 
                            ? 'bg-[#16253c] border-l-2 border-l-[#00c7b7]' 
                            : isHovered 
                            ? 'bg-[#131d2e]' 
                            : rowBg
                        }`}
                        title={`${taskTitle} (${task.id})`}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          {task.state === 'success' && <FaCheckCircle className="text-[#00c07f] flex-shrink-0" size={11} />}
                          {task.state === 'running' && <FaClock className="text-[#017cee] flex-shrink-0 animate-pulse" size={11} />}
                          {task.state === 'queued' && <FaHourglassHalf className="text-[#788896] flex-shrink-0" size={11} />}
                          
                          <span className="text-white font-sans font-semibold text-[11px] sm:text-xs truncate hover:text-[#00c7b7]">
                            {taskTitle}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 pl-4 sm:pl-5 mt-0.5 text-[9px] font-mono text-gray-400 min-w-0 truncate">
                          <span className="text-gray-400 truncate max-w-[80px] sm:max-w-[130px]" title={task.id}>
                            {task.id}
                          </span>
                          <span className="text-gray-600 flex-shrink-0">•</span>
                          <span className="text-gray-500 truncate" title={task.operator}>
                            {task.operator}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

          </div>

          {/* PANE 2: RIGHT HORIZONTALLY SCROLLABLE CHECKPOINTS */}
          <div ref={rightPaneRef} className="flex-1 min-w-0 overflow-x-auto pipeline-scroll-container">
            <div className="min-w-max flex flex-col">
              
              {/* Right Header: Checkpoints / Dates */}
              <div className="h-14 min-h-[56px] max-h-[56px] flex border-b border-[#22304a] bg-[#141c2e]">
                {GRID_RUNS.map((run) => {
                  const isRunSelected = selectedInstance?.runId === run.id;
                  const isLive = run.id === 'run_2026_11';

                  return (
                    <div
                      key={run.id}
                      onClick={() => setSelectedInstance(prev => ({ ...prev, runId: run.id }))}
                      className={`w-28 sm:w-32 flex-shrink-0 flex flex-col items-center justify-center px-2 border-l border-[#22304a] transition cursor-pointer select-none ${
                        isRunSelected 
                          ? 'bg-[#18263d] border-t-2 border-t-[#00c7b7]' 
                          : 'bg-[#141c2e] hover:bg-[#1a253a]'
                      }`}
                      title={`Checkpoint: ${run.label} (${run.date})`}
                    >
                      <div className="flex items-center justify-center gap-1 min-w-0">
                        {isLive && <span className="w-1.5 h-1.5 rounded-full bg-[#017cee] animate-ping flex-shrink-0"></span>}
                        <span className={`text-[11px] font-bold whitespace-nowrap ${isLive ? 'text-[#00c7b7]' : isRunSelected ? 'text-white' : 'text-gray-200'}`}>
                          {run.label}
                        </span>
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                        {run.date}
                      </div>
                      <div className="text-[9px] text-[#00c7b7]/80 font-mono">
                        {run.duration}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Rows Grouped by Stage */}
              {DAG_STAGES.map((stage, stageIdx) => {
                const stageTasks = DAG_TASKS.filter((t) => t.stage === stage.id);
                return (
                  <div key={stage.id} className="flex flex-col">
                    {/* Stage Divider Row */}
                    <div className="h-8 min-h-[32px] max-h-[32px] bg-[#10192a] border-b border-[#22304a] flex items-center justify-end px-4 text-gray-500 text-[9px] uppercase font-mono tracking-wider overflow-hidden">
                      Stage {stageIdx + 1} of {DAG_STAGES.length}
                    </div>

                    {/* Task Rows with Execution Status Squares */}
                    {stageTasks.map((task, taskIdx) => {
                      const isTaskSelected = selectedInstance?.taskId === task.id;
                      const isHovered = hoveredTaskId === task.id;
                      const rowBg = taskIdx % 2 === 0 ? 'bg-[#0d121f]' : 'bg-[#0a0e17]';

                      return (
                        <div
                          key={task.id}
                          onMouseEnter={() => setHoveredTaskId(task.id)}
                          onMouseLeave={() => setHoveredTaskId(null)}
                          className={`h-12 min-h-[48px] max-h-[48px] flex items-center border-b border-[#1b263b]/70 transition ${
                            isTaskSelected 
                              ? 'bg-[#16253c]' 
                              : isHovered 
                              ? 'bg-[#131d2e]' 
                              : rowBg
                          }`}
                        >
                          {GRID_RUNS.map((run) => {
                            const statusInfo = TASK_RUN_STATUS[task.id]?.[run.id] || { state: 'not_started', duration: '-' };
                            const isCellSelected = selectedInstance?.taskId === task.id && selectedInstance?.runId === run.id;

                            const isSuccess = statusInfo.state === 'success';
                            const isRunning = statusInfo.state === 'running';
                            const isQueued = statusInfo.state === 'queued';
                            const isNotStarted = statusInfo.state === 'not_started';

                            return (
                              <div
                                key={run.id}
                                className={`w-28 sm:w-32 flex-shrink-0 h-full flex items-center justify-center border-l border-[#22304a]/70 transition ${
                                  isCellSelected ? 'bg-[#1b2942]' : ''
                                }`}
                              >
                                {isSuccess && (
                                  <button
                                    type="button"
                                    onClick={() => setSelectedInstance({ taskId: task.id, runId: run.id })}
                                    title={`${task.id} [${run.label} · ${run.date}]: SUCCESS (${statusInfo.duration})`}
                                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[4px] bg-[#00c07f] hover:brightness-110 transition flex items-center justify-center text-black text-[10px] shadow-sm font-bold ${
                                      isCellSelected ? 'ring-2 ring-[#00c7b7] ring-offset-2 ring-offset-[#0d121f] scale-110 z-20 shadow-[0_0_12px_rgba(0,199,183,0.5)]' : ''
                                    }`}
                                  >
                                    <FaCheck size={9} />
                                  </button>
                                )}

                                {isRunning && (
                                  <button
                                    type="button"
                                    onClick={() => setSelectedInstance({ taskId: task.id, runId: run.id })}
                                    title={`${task.id} [${run.label} · ${run.date}]: RUNNING (En Curso / Desarrollo)`}
                                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[4px] border-2 border-[#017cee] bg-[#017cee]/25 text-[#017cee] hover:bg-[#017cee]/40 transition flex items-center justify-center ${
                                      isCellSelected ? 'ring-2 ring-[#00c7b7] ring-offset-2 ring-offset-[#0d121f] scale-110 z-20 shadow-[0_0_12px_rgba(1,124,238,0.5)]' : 'animate-pulse'
                                    }`}
                                  >
                                    <span className="w-2 h-2 rounded-full bg-[#017cee]"></span>
                                  </button>
                                )}

                                {isQueued && (
                                  <button
                                    type="button"
                                    onClick={() => setSelectedInstance({ taskId: task.id, runId: run.id })}
                                    title={`${task.id} [${run.label} · ${run.date}]: QUEUED (En cola)`}
                                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[4px] border border-[#64748b] bg-[#334155]/30 hover:bg-[#334155]/50 text-[#94a3b8] transition flex items-center justify-center ${
                                      isCellSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0d121f] scale-110 z-20' : ''
                                    }`}
                                  >
                                    <FaHourglassHalf size={8} />
                                  </button>
                                )}

                                {isNotStarted && (
                                  <button
                                    type="button"
                                    onClick={() => setSelectedInstance({ taskId: task.id, runId: run.id })}
                                    title={`${task.id} [${run.label} · ${run.date}]: No iniciado`}
                                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[4px] border border-[#1e293b] bg-[#0a0e17]/60 hover:bg-[#162035] text-gray-700 transition flex items-center justify-center text-[10px] ${
                                      isCellSelected ? 'ring-2 ring-gray-400 ring-offset-2 ring-offset-[#0d121f] scale-110 z-20' : ''
                                    }`}
                                  >
                                    ·
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>

      {/* Selected Instance Inspector Drawer (Prominent Context Panel) */}
      {selectedTask && selectedRun && selectedStatus && (
        <div className="bg-[#141c2e] border border-[#00c7b7]/40 rounded-lg p-4 sm:p-5 shadow-2xl font-mono animate-fadeIn w-full min-w-0">
          
          {/* Header Row: Checkpoint + State + Operator + Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#22304a]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] bg-[#0a0e17] text-[#00c7b7] border border-[#22304a] px-2.5 py-1 rounded font-bold uppercase flex items-center gap-1.5 shadow-sm">
                <FaCalendarAlt size={10} />
                <span>DagRun: {selectedRun.label} ({selectedRun.date})</span>
              </span>
              
              <span className={`text-[10px] px-2.5 py-1 rounded font-bold uppercase shadow-sm ${
                selectedStatus.state === 'success'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                  : selectedStatus.state === 'running'
                  ? 'bg-blue-950/80 text-blue-300 border border-blue-500/40 animate-pulse'
                  : selectedStatus.state === 'queued'
                  ? 'bg-slate-800 text-slate-300 border border-slate-600'
                  : 'bg-gray-900 text-gray-500 border border-gray-800'
              }`}>
                STATE: {selectedStatus.state} ({selectedStatus.duration})
              </span>

              <span className="text-[10px] bg-[#0d121f] text-gray-300 border border-[#22304a] px-2 py-1 rounded">
                Operator: <strong className="text-[#00c7b7]">{selectedTask.operator}</strong>
              </span>

              <span className="text-[10px] text-gray-400 hidden sm:inline">
                Pool: {selectedTask.pool}
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => onSelectTask(selectedTask)}
                className="bg-[#00c7b7] hover:bg-[#00b2a3] text-black font-bold px-3.5 py-1.5 rounded transition text-xs flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <span>{i18n.language === 'en' ? 'Open Task Details' : 'Inspeccionar Tarea'}</span>
                <FaExternalLinkAlt size={10} />
              </button>

              {setActiveTab && (
                <button
                  type="button"
                  onClick={() => setActiveTab('graph')}
                  className="bg-[#0a0e17] hover:bg-[#1b263b] text-gray-200 border border-[#22304a] hover:border-[#00c7b7] px-3.5 py-1.5 rounded transition text-xs flex items-center gap-1.5 active:scale-95"
                >
                  <FaProjectDiagram size={11} className="text-[#00c7b7]" />
                  <span>{i18n.language === 'en' ? 'View in Graph' : 'Ver en Grafo'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Body: Task Name & Contextual Milestone Note */}
          <div className="pt-3 space-y-2.5">
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-sans">
                {i18n.language === 'en' ? selectedTask.title_en : selectedTask.title_es}
              </div>
              <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                task_id: <span className="text-[#00c7b7] font-semibold">{selectedTask.id}</span>
              </div>
            </div>

            {/* Historical milestone note styled as an Airflow callout */}
            <div className="bg-[#0a0e17] border-l-4 border-[#00c7b7] p-3.5 rounded-r text-gray-200 font-sans text-xs sm:text-sm leading-relaxed shadow-inner space-y-1">
              <div className="text-[10px] font-mono text-[#00c7b7] uppercase tracking-wider font-bold flex items-center gap-1.5">
                <FaInfoCircle size={10} />
                <span>{i18n.language === 'en' ? 'Checkpoint Execution Context:' : 'Contexto de Ejecución en Checkpoint:'}</span>
              </div>
              <p>
                {selectedStatus.note_es 
                  ? (i18n.language === 'en' ? selectedStatus.note_en : selectedStatus.note_es)
                  : (i18n.language === 'en' ? selectedTask.summary_en : selectedTask.summary_es)}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}