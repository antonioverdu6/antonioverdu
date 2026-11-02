import React, { useState } from 'react';
import { 
  FaLaptopCode, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowRight,
  FaFilter,
  FaCube,
  FaFlask
} from 'react-icons/fa';
import { DAG_TASKS } from '../data/dagData';
import i18n from 'i18next';

export default function AirflowProjectsView({ onSelectTask }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter tasks belonging to independent platforms or academic distributed labs
  const allEngineeringTasks = DAG_TASKS.filter(
    (t) => t.stage === 'independent_systems' || t.stage === 'academic_labs'
  );

  const independentCount = DAG_TASKS.filter((t) => t.stage === 'independent_systems').length;
  const labsCount = DAG_TASKS.filter((t) => t.stage === 'academic_labs').length;

  const projectTasks = allEngineeringTasks.filter(
    (t) => activeCategory === 'all' || t.stage === activeCategory
  );

  return (
    <div className="space-y-6 font-mono text-xs">
      
      {/* Header Banner */}
      <div className="bg-[#141c2e] border border-[#22304a] rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="text-white font-bold text-sm flex items-center gap-2">
            <FaLaptopCode className="text-[#00c7b7]" />
            <span>Airflow Production Services & Data Architectures</span>
          </div>
          <p className="text-gray-400 font-sans text-xs mt-1">
            {i18n.language === 'en'
              ? 'Independent platforms, local SLM pipelines, vector search engines, and UPM distributed Big Data systems.'
              : 'Plataformas propias, pipelines con SLMs locales, motores vectoriales y laboratorios distribuidos de Big Data UPM.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-[#0a0e17] text-gray-300 border border-[#22304a] px-3 py-1 rounded text-xs flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 3 Prod
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> 1 Dev
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span> 1 Queued
            </span>
          </span>
        </div>
      </div>

      {/* Category Filter Controls */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-nowrap bg-[#141c2e]/70 border border-[#22304a] p-2 sm:p-2.5 rounded-lg">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs px-1 sm:px-2 flex-shrink-0">
          <FaFilter size={11} className="text-[#00c7b7]" />
          <span className="hidden sm:inline">{i18n.language === 'en' ? 'Category:' : 'Categoría:'}</span>
        </div>

        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded transition text-xs font-mono flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
            activeCategory === 'all'
              ? 'bg-[#00c7b7] text-black font-bold'
              : 'bg-[#0a0e17] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
          }`}
        >
          <span>{i18n.language === 'en' ? 'All Systems' : 'Todos los Sistemas'}</span>
          <span className="text-[10px] opacity-80">({allEngineeringTasks.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('independent_systems')}
          className={`px-3 py-1.5 rounded transition text-xs font-mono flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
            activeCategory === 'independent_systems'
              ? 'bg-purple-600 text-white font-bold'
              : 'bg-[#0a0e17] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
          }`}
        >
          <FaCube size={11} className="text-purple-400" />
          <span>{i18n.language === 'en' ? 'Independent Platforms & AI' : 'Plataformas Propias & IA'}</span>
          <span className="text-[10px] opacity-80">({independentCount})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCategory('academic_labs')}
          className={`px-3 py-1.5 rounded transition text-xs font-mono flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 ${
            activeCategory === 'academic_labs'
              ? 'bg-cyan-600 text-white font-bold'
              : 'bg-[#0a0e17] text-gray-300 hover:bg-[#1f2c44] border border-[#22304a]'
          }`}
        >
          <FaFlask size={11} className="text-cyan-400" />
          <span>{i18n.language === 'en' ? 'UPM Distributed Labs' : 'Laboratorios Distribuidos UPM'}</span>
          <span className="text-[10px] opacity-80">({labsCount})</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {projectTasks.map((task) => (
          <div 
            key={task.id}
            className="bg-[#141c2e] border border-[#22304a] hover:border-[#00c7b7]/50 rounded-lg overflow-hidden transition shadow-xl flex flex-col"
          >
            {/* Service Top Bar */}
            <div className="bg-[#0f172a] p-4 border-b border-[#22304a] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className={`w-2.5 h-2.5 rounded-full ${
                  task.state === 'success' 
                    ? 'bg-[#00c07f]' 
                    : task.state === 'running' 
                    ? 'bg-[#017cee] animate-pulse' 
                    : 'bg-[#788896]'
                }`}></span>
                <span className="text-white font-bold text-sm sm:text-base">
                  {i18n.language === 'en' ? task.title_en : task.title_es}
                </span>

                {/* Category Pill */}
                <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${
                  task.stage === 'independent_systems'
                    ? 'bg-purple-950/50 text-purple-300 border-purple-500/40'
                    : 'bg-cyan-950/50 text-cyan-300 border-cyan-500/40'
                }`}>
                  {task.stage === 'independent_systems'
                    ? (i18n.language === 'en' ? 'Independent Platform & AI' : 'Plataforma Propia & IA')
                    : (i18n.language === 'en' ? 'UPM Distributed Lab' : 'Laboratorio Distribuido UPM')}
                </span>

                <span className="text-[10px] bg-[#0a0e17] text-[#00c7b7] border border-[#22304a] px-2 py-0.5 rounded">
                  {task.operator}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="bg-[#0a0e17] text-gray-300 border border-[#22304a] px-2.5 py-1 rounded text-[11px]">
                  Status: <strong className={
                    task.state === 'success' 
                      ? 'text-emerald-400' 
                      : task.state === 'running' 
                      ? 'text-blue-400' 
                      : 'text-slate-400'
                  }>{task.duration}</strong>
                </span>
              </div>
            </div>

            {/* Service Body Content */}
            <div className="p-5 font-sans space-y-4 flex-1">
              
              {/* Summary Description */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {i18n.language === 'en' ? task.summary_en : task.summary_es}
              </p>

              {/* Three Pillars: Challenge, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                
                {/* 1. Context & Challenge */}
                <div className="bg-[#0a0e17] border border-[#22304a] p-3 rounded">
                  <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">
                    1. Context & Challenge
                  </div>
                  <p className="text-gray-300 font-sans text-xs leading-relaxed">
                    {task.id === 'bidradar_auction_intelligence_etl' && (
                      i18n.language === 'en'
                        ? 'Extracting and valuing auction opportunities across 9 fragmented public portals (BOE, TGSS, AEAT) with zero WAF bans and zero API billing overhead.'
                        : 'Extraer y tasar oportunidades en 9 portales públicos y judiciales fragmentados (BOE, TGSS, AEAT) sin bloqueos WAF y con coste 0€ de APIs comerciales.'
                    )}
                    {task.id === 'flight_delay_streaming_mllib' && (
                      i18n.language === 'en'
                        ? 'Forecasting flight delays in real-time by ingesting massive live flight events without hitting database bottlenecks.'
                        : 'Predecir retrasos en vuelos en tiempo real procesando flujos de datos masivos sin generar cuellos de botella en la base de datos.'
                    )}
                    {task.id === 'conversational_nl_query_engine' && (
                      i18n.language === 'en'
                        ? 'Eliminating technical SQL friction so non-technical users can query big data clusters using natural language.'
                        : 'Eliminar la fricción técnica de SQL para que usuarios no técnicos consulten repositorios analíticos mediante lenguaje natural.'
                    )}
                    {task.id === 'waves_music_platform_ai' && (
                      i18n.language === 'en'
                        ? 'Building a social music discovery network that replaces keyword search with hybrid vector embeddings, audio DNA profiling, and live WebSockets without performance degradation.'
                        : 'Diseñar una plataforma de música y red social con búsqueda semántica vectorial, perfilado genético de audio (Music DNA) y mensajería en tiempo real sobre WebSockets.'
                    )}
                    {task.id === 'agentic_graphrag_reasoning_engine' && (
                      i18n.language === 'en'
                        ? 'Eliminating hallucinations and relational context blindness in standard LLMs through enterprise GraphRAG knowledge structures and coordinated autonomous agents.'
                        : 'Superar las alucinaciones y la falta de contexto relacional en LLMs estándar mediante la construcción de un grafo de conocimiento empresarial (GraphRAG) y agentes autónomos coordinados.'
                    )}
                  </p>
                </div>

                {/* 2. Technical Architecture */}
                <div className="bg-[#0a0e17] border border-[#22304a] p-3 rounded">
                  <div className="text-[10px] text-[#00c7b7] uppercase font-bold mb-1">
                    2. Technical Architecture
                  </div>
                  <p className="text-gray-300 font-sans text-xs leading-relaxed">
                    {task.id === 'bidradar_auction_intelligence_etl' && (
                      i18n.language === 'en'
                        ? '2-Phase Staging Batch ETL, Lexbor HTML5 parser, Ollama Qwen 2.5 7B local SLM with VRAM eviction, SQLite WAL mode, and Telegram Bot API.'
                        : 'Staging Batch ETL en 2 fases, parser HTML5 Lexbor, SLM local Ollama Qwen 2.5 7B con ciclo de vida VRAM, SQLite WAL y bot en Telegram.'
                    )}
                    {task.id === 'flight_delay_streaming_mllib' && (
                      i18n.language === 'en'
                        ? 'Spark MLlib cluster in Scala, Kafka streaming bus, multi-database storage (Cassandra + Mongo + HDFS) and WebSockets.'
                        : 'Cluster Spark MLlib en Scala, bus de mensajería Kafka, persistencia híbrida (Cassandra + Mongo + HDFS) y WebSockets.'
                    )}
                    {task.id === 'conversational_nl_query_engine' && (
                      i18n.language === 'en'
                        ? 'Decoupled Rasa conversational intent engine wired to an Apache Spark distributed backend orchestrator in Docker.'
                        : 'Motor de intenciones conversacionales Rasa conectado a backend distribuido con Apache Spark orquestado en Docker.'
                    )}
                    {task.id === 'waves_music_platform_ai' && (
                      i18n.language === 'en'
                        ? 'Django Channels ASGI with Redis and Celery for real-time WebSockets, hybrid BM25 + Qdrant Vector DB, Librosa acoustic feature extraction, and React SPA.'
                        : 'Django Channels ASGI con Redis y Celery para WebSockets, motor híbrido BM25 + Qdrant Vector DB, extracción acústica con Librosa y frontend React.'
                    )}
                    {task.id === 'agentic_graphrag_reasoning_engine' && (
                      i18n.language === 'en'
                        ? 'Neo4j knowledge graph fused with Qdrant vector DB, LangGraph multi-agent coordination, and local quantized inference with DeepSeek-R1 / Qwen 2.5.'
                        : 'Fusión de grafos Neo4j con bases vectoriales Qdrant, orquestación multi-agente con LangGraph e inferencia local con DeepSeek-R1 y Qwen 2.5.'
                    )}
                  </p>
                </div>

                {/* 3. Technical Value & Results */}
                <div className="bg-[#0b1b2b] border border-[#00c7b7]/40 p-3 rounded">
                  <div className="text-[10px] text-emerald-400 uppercase font-bold mb-1">
                    3. Technical Value & Results
                  </div>
                  <p className="text-gray-200 font-sans text-xs leading-relaxed">
                    {i18n.language === 'en' ? task.impact_en : task.impact_es}
                  </p>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="flex items-center gap-1.5 flex-wrap pt-2">
                {task.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#0a0e17] border border-[#22304a] text-gray-300 px-2 py-0.5 rounded text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* Service Footer / Action Buttons */}
            <div className="bg-[#0a0e17] px-5 py-3 border-t border-[#22304a] flex items-center justify-between font-mono">
              <button
                type="button"
                onClick={() => onSelectTask(task)}
                className="text-[#00c7b7] hover:underline flex items-center gap-1.5 text-xs"
              >
                <span>Inspect Task Instance Details</span>
                <FaArrowRight size={10} />
              </button>

              <div className="flex items-center gap-2">
                {task.github && (
                  <a
                    href={task.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-[#141c2e] hover:bg-[#1b263b] text-gray-200 border border-[#22304a] px-3 py-1.5 rounded transition text-xs"
                  >
                    <FaGithub size={13} />
                    <span>View GitHub Repo</span>
                    <FaExternalLinkAlt size={9} />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
