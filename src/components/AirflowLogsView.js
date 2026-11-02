import React, { useState } from 'react';
import { FaTerminal, FaSearch } from 'react-icons/fa';
import { AIRFLOW_AUDIT_LOGS } from '../data/auditLogs';

export default function AirflowLogsView() {
  const [levelFilter, setLevelFilter] = useState('ALL');
  const [filterQuery, setFilterQuery] = useState('');

  const filteredLogs = AIRFLOW_AUDIT_LOGS.filter((log) => {
    const matchesLevel = levelFilter === 'ALL' || log.level === levelFilter;
    const matchesQuery = 
      log.message.toLowerCase().includes(filterQuery.toLowerCase()) ||
      log.taskId.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesLevel && matchesQuery;
  });

  return (
    <div className="space-y-4 font-mono text-xs">
      
      {/* Logs Controls Bar */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 w-full min-w-0">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <FaTerminal className="text-[#00c7b7] flex-shrink-0" size={13} />
          <div className="min-w-0">
            <div className="text-white font-bold text-xs sm:text-sm truncate sm:whitespace-normal">
              Airflow Execution Audit Trail & Logs
            </div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 truncate sm:whitespace-normal">
              Chronological pipeline execution records · Scheduler Node 01
            </div>
          </div>
        </div>

        {/* Level Filters & Search */}
        <div className="flex items-center justify-between sm:justify-end gap-2 flex-wrap w-full md:w-auto">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {['ALL', 'SUCCESS', 'INFO', 'METRIC'].map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={`px-2 py-0.5 rounded text-[10px] transition whitespace-nowrap ${
                  levelFilter === lvl
                    ? 'bg-[#00c7b7] text-black font-bold'
                    : 'bg-[#0a0e17] text-gray-400 border border-[#22304a]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="relative flex-1 sm:flex-none">
            <FaSearch size={10} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Grep logs..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="bg-[#0a0e17] border border-[#22304a] text-gray-200 text-xs rounded pl-7 pr-2 py-1 focus:outline-none focus:border-[#00c7b7] w-full sm:w-44"
            />
          </div>
        </div>
      </div>

      {/* Terminal Output Window */}
      <div className="bg-[#0a0e17] border border-[#22304a] rounded-lg overflow-hidden shadow-2xl w-full min-w-0">
        <div className="bg-[#0f172a] px-3 sm:px-4 py-2 border-b border-[#22304a] text-[11px] text-gray-400 flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 flex-shrink-0"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 flex-shrink-0"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 flex-shrink-0"></span>
            <span className="ml-1 sm:ml-2 font-mono truncate text-[10px] sm:text-xs">
              airflow-worker@upm: journalctl -u airflow-scheduler
            </span>
          </div>
          <span className="text-emerald-400 text-[10px] flex items-center gap-1 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE</span>
          </span>
        </div>

        {/* Log Entries */}
        <div className="p-2.5 sm:p-4 text-[11px] leading-relaxed max-h-[560px] overflow-y-auto space-y-2 w-full min-w-0">
          {filteredLogs.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              No matching log records found for current filters.
            </div>
          ) : (
            filteredLogs.map((log, idx) => {
              let levelBadge = 'bg-blue-500/20 text-blue-400 border-blue-500/30';
              if (log.level === 'SUCCESS') levelBadge = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
              if (log.level === 'METRIC') levelBadge = 'bg-purple-500/20 text-purple-400 border-purple-500/30';

              return (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2.5 hover:bg-[#141c2e]/60 p-2 sm:p-1.5 rounded transition border-b sm:border-b-0 border-[#1a2336]/60 w-full min-w-0"
                >
                  {/* Metadata strip: timestamp, level, taskId */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap flex-shrink-0">
                    <span className="text-gray-500 font-mono text-[10px] whitespace-nowrap">
                      {log.timestamp.replace('T', ' ').replace('Z', '').split('.')[0]}
                    </span>
                    
                    <span className={`px-1.5 py-0.2 rounded border text-[9px] font-bold ${levelBadge}`}>
                      {log.level}
                    </span>

                    <span className="text-[#00c7b7] font-semibold text-[10px] sm:text-[11px] font-mono truncate max-w-[170px] sm:max-w-[210px]" title={log.taskId}>
                      &#123;{log.taskId}&#125;
                    </span>
                  </div>

                  {/* Log message with text wrapping */}
                  <span className="text-gray-300 font-sans text-xs leading-relaxed flex-1 break-words [overflow-wrap:anywhere] min-w-0">
                    {log.message}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

    </div>
  );
}
