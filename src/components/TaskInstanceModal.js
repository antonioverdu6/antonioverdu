import React, { useState } from 'react';
import { 
  FaTimes, 
  FaCheckCircle, 
  FaClock, 
  FaTerminal, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaLayerGroup, 
  FaInfoCircle,
  FaCheck,
  FaHourglassHalf
} from 'react-icons/fa';
import i18n from 'i18next';

/**
 * Parses inline **bold text** within a string and renders <strong> elements
 */
function renderInlineFormatting(text) {
  if (!text || typeof text !== 'string') return text;
  const parts = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="text-white font-semibold">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

/**
 * Parses multiline markdown text into paragraphs and bullet lists with Airflow styling
 */
function renderFormattedMarkdown(text) {
  if (!text || typeof text !== 'string') return text;
  const lines = text.split('\n');
  const elements = [];
  let currentBullets = [];

  const flushBullets = () => {
    if (currentBullets.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-2.5 space-y-2 pl-0.5">
          {currentBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-200 text-xs">
              <span className="text-[#00c7b7] select-none mt-0.5 text-xs font-mono font-bold">▸</span>
              <span className="leading-relaxed flex-1">
                {renderInlineFormatting(bullet)}
              </span>
            </li>
          ))}
        </ul>
      );
      currentBullets = [];
    }
  };

  lines.forEach((line, lineIdx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets();
      return;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentBullets.push(trimmed.substring(2));
    } else {
      flushBullets();
      elements.push(
        <p key={`p-${lineIdx}`} className="text-gray-300 leading-relaxed mb-2 text-xs">
          {renderInlineFormatting(trimmed)}
        </p>
      );
    }
  });

  flushBullets();
  return elements;
}

export default function TaskInstanceModal({ task, onClose }) {
  const [modalTab, setModalTab] = useState('overview'); // 'overview' | 'params' | 'logs'

  if (!task) return null;

  const isSuccess = task.state === 'success';
  const isRunning = task.state === 'running';
  const isQueued = task.state === 'queued';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#141c2e] border border-[#22304a] rounded-lg max-w-3xl w-full shadow-2xl text-gray-200 overflow-hidden font-mono flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0a0e17] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#22304a] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden">
            {/* Status indicator icon */}
            {isSuccess && (
              <span className="flex items-center gap-1.5 bg-[#00c07f]/15 text-[#00c07f] border border-[#00c07f]/30 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold flex-shrink-0">
                <FaCheckCircle size={10} />
                <span>SUCCESS</span>
              </span>
            )}
            {isRunning && (
              <span className="flex items-center gap-1.5 bg-[#017cee]/20 text-[#017cee] border border-[#017cee]/40 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold animate-pulse flex-shrink-0">
                <FaClock size={10} />
                <span>RUNNING</span>
              </span>
            )}
            {isQueued && (
              <span className="flex items-center gap-1.5 bg-[#788896]/20 text-[#94a3b8] border border-[#788896]/40 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold flex-shrink-0">
                <FaHourglassHalf size={10} />
                <span>QUEUED</span>
              </span>
            )}
            <div className="overflow-hidden">
              <span className="text-white font-bold text-xs sm:text-sm truncate block" title={task.id}>{task.id}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded hover:bg-[#1f2937] transition flex-shrink-0"
            aria-label="Close task details"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Quick Task Metadata Strip */}
        <div className="bg-[#0f172a] px-3 sm:px-4 py-2 border-b border-[#22304a] text-[10px] sm:text-[11px] text-gray-400 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span>Op: <strong className="text-[#00c7b7]">{task.operator}</strong></span>
            <span>•</span>
            <span>Duration: <strong className="text-gray-200">{task.duration}</strong></span>
            <span>•</span>
            <span>Pool: <strong className="text-gray-300">{task.pool}</strong></span>
          </div>
          <div className="text-gray-500 text-[9px] sm:text-[10px]">
            Tries: {task.tries} | DagRun: success
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="bg-[#141c2e] border-b border-[#22304a] px-3 sm:px-4 flex items-center gap-1 sm:gap-2 text-xs overflow-x-auto no-scrollbar flex-nowrap">
          <button
            type="button"
            onClick={() => setModalTab('overview')}
            className={`py-2 px-2.5 sm:px-3 border-b-2 flex items-center gap-1.5 font-sans whitespace-nowrap flex-shrink-0 ${
              modalTab === 'overview'
                ? 'border-[#00c7b7] text-white font-semibold'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <FaInfoCircle size={11} className={modalTab === 'overview' ? 'text-[#00c7b7]' : ''} />
            <span className="hidden sm:inline">{i18n.language === 'en' ? 'Task Overview & Results' : 'Visión General & Resultados'}</span>
            <span className="sm:hidden">{i18n.language === 'en' ? 'Overview' : 'General'}</span>
          </button>

          <button
            type="button"
            onClick={() => setModalTab('params')}
            className={`py-2 px-2.5 sm:px-3 border-b-2 flex items-center gap-1.5 font-sans whitespace-nowrap flex-shrink-0 ${
              modalTab === 'params'
                ? 'border-[#00c7b7] text-white font-semibold'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <FaLayerGroup size={11} className={modalTab === 'params' ? 'text-[#00c7b7]' : ''} />
            <span className="hidden sm:inline">{i18n.language === 'en' ? 'Technical Stack & Metrics' : 'Métricas & Parámetros'}</span>
            <span className="sm:hidden">{i18n.language === 'en' ? 'Stack & Metrics' : 'Métricas'}</span>
          </button>

          <button
            type="button"
            onClick={() => setModalTab('logs')}
            className={`py-2 px-2.5 sm:px-3 border-b-2 flex items-center gap-1.5 font-sans whitespace-nowrap flex-shrink-0 ${
              modalTab === 'logs'
                ? 'border-[#00c7b7] text-white font-semibold'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <FaTerminal size={11} className={modalTab === 'logs' ? 'text-[#00c7b7]' : ''} />
            <span className="hidden sm:inline">{i18n.language === 'en' ? 'Task Logs' : 'Logs de Ejecución'}</span>
            <span className="sm:hidden">Logs</span>
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs font-sans">
          
          {modalTab === 'overview' && (
            <div className="space-y-4">
              {/* Task Title */}
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                  {i18n.language === 'en' ? task.title_en : task.title_es}
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {renderInlineFormatting(i18n.language === 'en' ? task.summary_en : task.summary_es)}
                </p>
              </div>

              {/* In-depth details */}
              <div className="bg-[#0a0e17] border border-[#22304a] p-4 rounded-md">
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <span>Execution Details / Context</span>
                </div>
                <div className="text-gray-200 text-xs leading-relaxed">
                  {renderFormattedMarkdown(i18n.language === 'en' ? task.details_en : task.details_es)}
                </div>
              </div>

              {/* Practical Value & Results Block */}
              <div className="bg-[#0b1b2b] border border-[#00c7b7]/30 p-4 rounded-md">
                <div className="text-[11px] font-mono text-[#00c7b7] uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
                  <FaCheck size={11} />
                  <span>
                    {i18n.language === 'en' 
                      ? 'Technical Contribution & Practical Value' 
                      : 'Aportación Técnica & Valor Práctico'}
                  </span>
                </div>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  {renderInlineFormatting(i18n.language === 'en' ? task.impact_en : task.impact_es)}
                </p>
              </div>

              {/* Quick Metrics Cards */}
              {task.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono">
                  {task.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#0d121f] border border-[#22304a] p-2.5 rounded text-center">
                      <div className="text-[10px] text-gray-400 uppercase">{m.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {modalTab === 'params' && (
            <div className="space-y-4 font-mono">
              <div className="bg-[#0a0e17] border border-[#22304a] p-4 rounded-md">
                <div className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide">
                  Task Parameters & Environment
                </div>
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex justify-between py-1 border-b border-[#1b263b]">
                    <span className="text-gray-500">task_id:</span>
                    <span className="text-emerald-400 font-bold">{task.id}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1b263b]">
                    <span className="text-gray-500">operator_class:</span>
                    <span className="text-[#00c7b7]">{task.operator}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1b263b]">
                    <span className="text-gray-500">execution_date:</span>
                    <span>{task.executionDate || '2026-11-02T16:51:00Z'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1b263b]">
                    <span className="text-gray-500">worker_pool:</span>
                    <span>{task.pool}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">retry_count:</span>
                    <span>0 / 3 (First Pass Execution)</span>
                  </div>
                </div>
              </div>

              {/* Technologies / Stack tags */}
              {task.techStack && (
                <div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-2">
                    Technologies & Applied Skills
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {task.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#0a0e17] border border-[#00c7b7]/40 text-[#00c7b7] px-2.5 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* External links */}
              {task.github && (
                <div className="pt-2">
                  <a
                    href={task.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#017cee] hover:bg-[#006bd1] text-white px-3 py-1.5 rounded transition text-xs font-sans font-medium"
                  >
                    <FaGithub size={13} />
                    <span>View Repository on GitHub</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              )}
            </div>
          )}

          {modalTab === 'logs' && (
            <div className="bg-[#0a0e17] border border-[#22304a] p-3 rounded-md font-mono text-[11px] leading-relaxed text-gray-300 space-y-1 overflow-x-auto">
              <div className="text-gray-500">*** Reading remote log from Airflow Log Server...</div>
              {isQueued ? (
                <>
                  <div>[2026-11-02 18:40:00,001] &#123;<span className="text-[#00c7b7]">scheduler_job.py</span>:820&#125; INFO - Checking upstream dependencies for {task.id}...</div>
                  <div className="text-[#94a3b8]">[2026-11-02 18:40:00,012] &#123;<span className="text-[#00c7b7]">taskinstance.py</span>:1020&#125; QUEUED - Task queued for execution in worker pool: {task.pool}.</div>
                  <div className="text-gray-500">[2026-11-02 18:40:00,015] &#123;<span className="text-[#00c7b7]">taskinstance.py</span>:1025&#125; INFO - Waiting on worker slot allocation. Scheduled milestone: Roadmap Q1 2027.</div>
                </>
              ) : (
                <>
                  <div>[2026-11-02 16:51:00,102] &#123;<span className="text-[#00c7b7]">taskinstance.py</span>:1102&#125; INFO - Dependencies all met for dep_context=non-requeueable deps.</div>
                  <div>[2026-11-02 16:51:00,108] &#123;<span className="text-[#00c7b7]">taskinstance.py</span>:1104&#125; INFO - Starting attempt 1 of 1</div>
                  <div>[2026-11-02 16:51:00,115] &#123;<span className="text-[#00c7b7]">taskinstance.py</span>:1125&#125; INFO - Executing &lt;Task({task.operator}): {task.id}&gt; on worker upm-telecom-worker-01</div>
                  <div className="text-emerald-400">[2026-11-02 16:51:00,320] &#123;<span className="text-emerald-300">{task.id}</span>&#125; INFO - Task verification completed successfully. Duration: {task.duration}.</div>
                  <div className="text-gray-500">[2026-11-02 16:51:00,410] &#123;<span className="text-[#00c7b7]">taskinstance.py</span>:1400&#125; INFO - State updated. dag_id=antonio_verdu_career_pipeline, task_id={task.id}</div>
                </>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="bg-[#0a0e17] px-4 py-3 border-t border-[#22304a] flex items-center justify-between">
          <div className="text-[11px] text-gray-500 font-mono hidden sm:inline">
            Status: <span className={isSuccess ? 'text-emerald-400 font-bold' : isRunning ? 'text-blue-400 font-bold' : 'text-slate-400 font-bold'}>{task.state.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            {task.github && (
              <a
                href={task.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs bg-[#1f2937] hover:bg-[#374151] text-gray-200 px-3 py-1.5 rounded transition"
              >
                <FaGithub size={12} />
                <span>GitHub</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0a0e17] hover:bg-[#1f2c44] border border-[#22304a] text-gray-200 px-4 py-1.5 rounded text-xs transition"
            >
              {i18n.language === 'en' ? 'Close Inspector' : 'Cerrar Inspector'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
