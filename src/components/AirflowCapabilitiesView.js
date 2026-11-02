import React, { useState } from 'react';
import { FaServer } from 'react-icons/fa';
import { AIRFLOW_WORKER_POOLS, SYSTEMS_COMPETENCIES } from '../data/capabilities';
import i18n from 'i18next';

export default function AirflowCapabilitiesView() {
  const [activePool, setActivePool] = useState('all');

  const filteredPools = activePool === 'all' 
    ? AIRFLOW_WORKER_POOLS 
    : AIRFLOW_WORKER_POOLS.filter(p => p.id === activePool);

  return (
    <div className="space-y-6 font-mono text-xs">
      
      {/* Top Pool Control Bar */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="text-white font-bold text-sm flex items-center gap-2">
            <FaServer className="text-[#00c7b7]" />
            <span>Airflow Worker Pools & Computing Resources</span>
          </div>
          <p className="text-gray-400 font-sans text-xs mt-1">
            {i18n.language === 'en'
              ? 'Categorized technology stack structured as high-throughput enterprise worker pools.'
              : 'Stack tecnológico estructurado como pools de cómputo de alta disponibilidad y rendimiento.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-nowrap py-1 max-w-full">
          <button
            type="button"
            onClick={() => setActivePool('all')}
            className={`px-3 py-1 rounded transition text-[11px] whitespace-nowrap flex-shrink-0 ${
              activePool === 'all'
                ? 'bg-[#00c7b7] text-black font-bold'
                : 'bg-[#0a0e17] text-gray-300 border border-[#22304a]'
            }`}
          >
            All Pools (4)
          </button>
          {AIRFLOW_WORKER_POOLS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePool(p.id)}
              className={`px-2.5 py-1 rounded transition text-[11px] whitespace-nowrap flex-shrink-0 ${
                activePool === p.id
                  ? 'bg-[#00c7b7] text-black font-bold'
                  : 'bg-[#0a0e17] text-gray-300 border border-[#22304a]'
              }`}
            >
              {p.name_es.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Worker Pools Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPools.map((pool) => (
          <div 
            key={pool.id}
            className="bg-[#141c2e] border border-[#22304a] rounded-lg overflow-hidden flex flex-col shadow-lg"
          >
            {/* Pool Header */}
            <div className="bg-[#0f172a] p-3.5 border-b border-[#22304a] flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-xs sm:text-sm">
                  {i18n.language === 'en' ? pool.name_en : pool.name_es}
                </h3>
                <p className="text-[11px] font-sans text-gray-400 mt-0.5">
                  {i18n.language === 'en' ? pool.description_en : pool.description_es}
                </p>
              </div>
              <span className="bg-[#0a0e17] text-[#00c7b7] border border-[#22304a] px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                {pool.slots}
              </span>
            </div>

            {/* Pool Technologies Table / List */}
            <div className="p-3 divide-y divide-[#1b263b] flex-1">
              {pool.techs.map((tech) => (
                <div key={tech.name} className="py-2 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c07f]"></span>
                    <span className="text-white font-bold">{tech.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-sans text-gray-300">
                      {i18n.language === 'en' ? tech.role_en : tech.role_es}
                    </div>
                    <span className="text-[9px] text-[#00c7b7] font-mono">
                      Level: {tech.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pool Footer Status */}
            <div className="bg-[#0a0e17] px-3.5 py-2 border-t border-[#22304a] text-[10px] text-gray-500 flex justify-between">
              <span>Pool Health: <strong className="text-emerald-400">OPTIMAL</strong></span>
              <span>Available Slots: <strong className="text-gray-300">100%</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Principles Section */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-5 mt-6">
        <div className="border-b border-[#22304a] pb-3 mb-4">
          <div className="text-[10px] font-mono text-[#00c7b7] uppercase tracking-wider font-semibold">
            Engineering Competencies
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white font-mono mt-0.5">
            {i18n.language === 'en' 
              ? 'Engineering Principles & Working Methodology' 
              : 'Principios de Ingeniería & Metodología de Trabajo'}
          </h2>
          <p className="text-gray-300 font-sans text-xs mt-1">
            {i18n.language === 'en'
              ? 'Core practices developed across software projects, distributed systems labs, and operational environments.'
              : 'Hábitos y criterios aplicados en proyectos de software, laboratorios de sistemas distribuidos y entornos operativos.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SYSTEMS_COMPETENCIES.map((comp) => (
            <div 
              key={comp.id} 
              className="bg-[#0d121f] border border-[#22304a] hover:border-[#00c7b7]/40 p-4 rounded-md transition"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00c7b7]"></span>
                <h4 className="text-white font-bold text-xs sm:text-sm font-sans">
                  {i18n.language === 'en' ? comp.title_en : comp.title_es}
                </h4>
              </div>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">
                {i18n.language === 'en' ? comp.desc_en : comp.desc_es}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
