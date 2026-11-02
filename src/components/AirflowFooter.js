import React from 'react';
import { SiApacheairflow } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { downloadFromPublic } from '../utils/download';

export default function AirflowFooter() {
  const handleDownloadCV = async () => {
    try {
      const res = await downloadFromPublic('/CV_Antonio_Verdu_Salpico.pdf', 'CV_Antonio_Verdu_Salpico.pdf');
      if (!res.ok) {
        await downloadFromPublic('/CV_Antonio_Verdú_Salpico.pdf', 'CV_Antonio_Verdu_Salpico.pdf');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="bg-[#141c2e] border-t border-[#22304a] text-xs font-mono py-6 mt-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Airflow Version & Author */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-[#0a0e17] border border-[#22304a] flex items-center justify-center text-[#00c7b7]">
            <SiApacheairflow size={14} />
          </div>
          <div>
            <div className="text-white font-bold text-[11px]">
              Apache Airflow v2.8.1 · Production Console
            </div>
            <div className="text-[10px] text-gray-500">
              © {new Date().getFullYear()} Antonio Verdú Salpico · UPM Data Systems Engineering
            </div>
          </div>
        </div>

        {/* Center: System Telemetry status */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] text-gray-400 bg-[#0a0e17] px-3 py-1 rounded border border-[#22304a]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c07f]"></span>
            <span>Status: Healthy</span>
          </span>
          <span>•</span>
          <span>Scheduler: Online</span>
          <span>•</span>
          <span>Stack: Python · Rust · Spark · Airflow</span>
        </div>

        {/* Right: Direct Profile Links */}
        <div className="flex items-center justify-center flex-wrap gap-3.5 sm:gap-4 text-xs">
          <a
            href="https://www.linkedin.com/in/antonio-verdu-salpico/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-[#00c7b7] transition"
          >
            <FaLinkedin size={13} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/antonioverdu6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-[#00c7b7] transition"
          >
            <FaGithub size={13} />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:antoverdusal@gmail.com"
            className="flex items-center gap-1 text-gray-300 hover:text-[#00c7b7] transition"
          >
            <FaEnvelope size={13} />
            <span>Email</span>
          </a>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="flex items-center gap-1 text-gray-300 hover:text-[#00c7b7] transition"
          >
            <FaFilePdf size={12} className="text-[#00c7b7]" />
            <span>CV</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
