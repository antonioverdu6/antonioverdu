import React, { useState } from 'react';
import { SiApacheairflow } from 'react-icons/si';
import { FaDownload, FaPlay, FaGlobe, FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import i18n from 'i18next';
import { downloadFromPublic } from '../utils/download';

export default function AirflowNavbar({ onOpenTrigger, activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const res = await downloadFromPublic('/CV_Antonio_Verdu_Salpico.pdf', 'CV_Antonio_Verdu_Salpico.pdf');
      if (!res.ok) {
        await downloadFromPublic('/CV_Antonio_Verdú_Salpico.pdf', 'CV_Antonio_Verdu_Salpico.pdf');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  const toggleLanguage = () => {
    const nextLang = (i18n.language === 'es' || !i18n.language?.startsWith('en')) ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('lang', nextLang);
  };

  return (
    <header className="bg-[#141c2e] border-b border-[#22304a] sticky top-0 z-50 text-xs font-mono">
      {/* Topmost Brand & Cluster Telemetry Strip */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-12 flex items-center justify-between">
        
        {/* Left: Airflow Logo & Brand Name */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('graph')}>
            <div className="w-7 h-7 rounded bg-[#0a0e17] border border-[#22304a] flex items-center justify-center text-[#00c7b7] shadow-sm">
              <SiApacheairflow size={18} />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-sm tracking-wide text-white">Airflow</span>
              <span className="text-gray-400 text-[11px] hidden sm:inline">v2.8.1</span>
            </div>
          </div>

          <span className="text-gray-600 hidden md:inline">|</span>

          {/* Breadcrumb / DAG Name */}
          <div className="hidden md:flex items-center gap-1.5 text-gray-300">
            <span className="text-gray-500">DAGs</span>
            <span className="text-gray-600">/</span>
            <span className="text-[#00c7b7] font-semibold">antonio_verdu_career_pipeline</span>
          </div>

          {/* Cluster Status Pill */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#0a0e17] px-2 py-0.5 rounded border border-[#22304a] text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c07f] animate-pulse"></span>
            <span className="text-gray-400">CLUSTER:</span>
            <span className="text-emerald-400 font-semibold">upm-telecom-prod</span>
          </div>
        </div>

        {/* Right: Actions (Trigger DAG, Download Artifact, Language, Socials) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick social links */}
          <div className="hidden sm:flex items-center gap-2 mr-1">
            <a 
              href="https://www.linkedin.com/in/antonio-verdu-salpico/" 
              target="_blank" 
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-1.5 text-gray-400 hover:text-white hover:bg-[#1f2c44] rounded transition"
            >
              <FaLinkedin size={14} />
            </a>
            <a 
              href="https://github.com/antonioverdu6" 
              target="_blank" 
              rel="noreferrer"
              title="GitHub Profile"
              className="p-1.5 text-gray-400 hover:text-white hover:bg-[#1f2c44] rounded transition"
            >
              <FaGithub size={14} />
            </a>
          </div>

          {/* Download CV / Artifact Button */}
          <button
            type="button"
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className="flex items-center gap-1 sm:gap-1.5 bg-[#0a0e17] hover:bg-[#1b263b] text-gray-200 border border-[#22304a] hover:border-[#00c7b7] px-2 sm:px-2.5 py-1 rounded transition shadow-sm"
            title="Download Candidate CV (PDF)"
          >
            <FaDownload className="text-[#00c7b7]" size={10} />
            <span className="font-sans font-medium text-[11px] whitespace-nowrap">
              {isDownloading ? '...' : (
                <>
                  <span className="hidden sm:inline">Artifact </span>
                  <span>CV</span>
                  <span className="hidden sm:inline">.pdf</span>
                </>
              )}
            </span>
          </button>

          {/* Trigger DAG Button (Contact) */}
          <button
            type="button"
            onClick={onOpenTrigger}
            className="flex items-center gap-1 sm:gap-1.5 bg-[#017cee] hover:bg-[#006bd1] text-white px-2 sm:px-2.5 py-1 rounded transition shadow-sm font-sans font-medium text-[11px] whitespace-nowrap"
            title="Trigger DAG with Config / Contact Antonio"
          >
            <FaPlay size={9} />
            <span>
              <span className="hidden sm:inline">Trigger </span>
              <span>DAG</span>
            </span>
          </button>

          {/* Language Switcher (Segmented ES / EN toggle) */}
          <div 
            onClick={toggleLanguage}
            className="flex items-center bg-[#0a0e17] border border-[#22304a] hover:border-[#00c7b7] rounded p-0.5 cursor-pointer transition select-none shadow-sm"
            title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <div className="hidden sm:flex items-center gap-1 px-1 py-0.5 text-gray-400">
              <FaGlobe size={10} className="text-[#00c7b7]" />
            </div>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition ${
              i18n.language !== 'en' 
                ? 'bg-[#00c7b7] text-black shadow' 
                : 'text-gray-400 hover:text-white'
            }`}>
              ES
            </span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition ${
              i18n.language === 'en' 
                ? 'bg-[#00c7b7] text-black shadow' 
                : 'text-gray-400 hover:text-white'
            }`}>
              EN
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-400 hover:text-white ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d121f] border-b border-[#22304a] px-4 py-3 space-y-2">
          <div className="text-gray-400 text-[11px] pb-1 border-b border-[#22304a] truncate">
            DAG: <span className="text-[#00c7b7]">antonio_verdu_career_pipeline</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => { setActiveTab('graph'); setMobileMenuOpen(false); }}
              className={`p-2 text-left rounded ${activeTab === 'graph' ? 'bg-[#017cee] text-white' : 'bg-[#141c2e] text-gray-300'}`}
            >
              Graph View
            </button>
            <button
              onClick={() => { setActiveTab('grid'); setMobileMenuOpen(false); }}
              className={`p-2 text-left rounded ${activeTab === 'grid' ? 'bg-[#017cee] text-white' : 'bg-[#141c2e] text-gray-300'}`}
            >
              Grid View
            </button>
            <button
              onClick={() => { setActiveTab('capabilities'); setMobileMenuOpen(false); }}
              className={`p-2 text-left rounded ${activeTab === 'capabilities' ? 'bg-[#017cee] text-white' : 'bg-[#141c2e] text-gray-300'}`}
            >
              Worker Pools
            </button>
            <button
              onClick={() => { setActiveTab('projects'); setMobileMenuOpen(false); }}
              className={`p-2 text-left rounded ${activeTab === 'projects' ? 'bg-[#017cee] text-white' : 'bg-[#141c2e] text-gray-300'}`}
            >
              Projects & APIs
            </button>
            <button
              onClick={() => { setActiveTab('code'); setMobileMenuOpen(false); }}
              className={`p-2 text-left rounded ${activeTab === 'code' ? 'bg-[#017cee] text-white' : 'bg-[#141c2e] text-gray-300'}`}
            >
              Code (Python)
            </button>
            <button
              onClick={() => { setActiveTab('logs'); setMobileMenuOpen(false); }}
              className={`p-2 text-left rounded ${activeTab === 'logs' ? 'bg-[#017cee] text-white' : 'bg-[#141c2e] text-gray-300'}`}
            >
              Audit Logs
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
