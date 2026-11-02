import React, { useState } from 'react';
import { FaCode, FaCopy, FaCheck } from 'react-icons/fa';
import { AIRFLOW_PYTHON_CODE } from '../data/airflowPythonCode';

export default function AirflowCodeView() {
  const [copied, setCopied] = useState(false);

  const lines = AIRFLOW_PYTHON_CODE.trim().split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(AIRFLOW_PYTHON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-4 font-mono text-xs">
      
      {/* Code Header Bar */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <FaCode className="text-[#00c7b7] flex-shrink-0" size={14} />
          <div className="min-w-0">
            <div className="text-white font-bold text-xs sm:text-sm truncate">
              dags/antonio_verdu_career_pipeline.py
            </div>
            <div className="text-[10px] sm:text-[11px] text-gray-400">
              {lines.length} lines • Python (Apache Airflow DAG Definition)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 bg-[#0a0e17] hover:bg-[#1b263b] text-gray-200 border border-[#22304a] px-3 py-1.5 rounded transition"
          >
            {copied ? <FaCheck className="text-emerald-400" size={11} /> : <FaCopy size={11} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy DAG Code'}</span>
          </button>
        </div>
      </div>

      {/* Code Box with Line Numbers */}
      <div className="bg-[#0a0e17] border border-[#22304a] rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-[#0f172a] px-4 py-2 border-b border-[#22304a] text-[11px] text-gray-400 flex items-center justify-between">
          <span>Language: Python 3.10+ · Apache Airflow v2.8.1</span>
          <span className="text-[#00c7b7]">Topological Execution Graph</span>
        </div>

        <div className="p-4 overflow-x-auto text-[11.5px] leading-relaxed max-h-[620px] overflow-y-auto">
          <pre className="text-gray-300">
            {lines.map((line, idx) => {
              // Basic color highlights
              let lineClass = 'text-gray-300';
              if (line.startsWith('#') || line.startsWith('"""') || line.startsWith('*')) {
                lineClass = 'text-gray-500 italic';
              } else if (line.includes('DAG(') || line.includes('Operator(')) {
                lineClass = 'text-[#00c7b7] font-semibold';
              } else if (line.includes('>>') || line.includes('import ') || line.includes('from ')) {
                lineClass = 'text-[#017cee] font-semibold';
              } else if (line.includes('task_id=') || line.includes('dag_id=')) {
                lineClass = 'text-emerald-400';
              }

              return (
                <div key={idx} className="flex hover:bg-[#141c2e]/60 px-2 py-0.5 rounded transition">
                  <span className="w-10 text-gray-600 select-none text-right pr-4 font-mono">
                    {idx + 1}
                  </span>
                  <span className={`${lineClass} font-mono flex-1 whitespace-pre`}>
                    {line}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>

    </div>
  );
}
