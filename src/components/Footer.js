import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Footer: update links to your profiles and email address.
export default function Footer(){
  return (
    <footer className="relative">
      <div className="py-8">
        <div className="container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Antonio Verdú Salpico. Todos los derechos reservados.</p>

          <div className="flex gap-4 items-center">
            {/* Sustituye los enlaces por tus URLs reales (GitHub, LinkedIn, email) */}
            <a href="https://github.com/antonioverdu6" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-[var(--accent)]"><FaGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/antonio-verdu-salpico/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[var(--accent)]"><FaLinkedin size={18} /></a>
            <a href="mailto:antoverdusal@gmail.com" aria-label="Email" className="text-gray-300 hover:text-[var(--accent)]"><HiOutlineMail size={20} /></a>
            <button type="button" onClick={async ()=>{
              const res = await import('../utils/download').then(m=>m.downloadFromPublic('/CV_Antonio_Verdú_Salpico.pdf','CV_Antonio_Verdú_Salpico.pdf'));
              if(!res.ok) alert('CV no encontrado en public/. Coloca tu CV en public/ con el nombre CV_Antonio_Verdú_Salpico.pdf o actualiza el enlace.');
            }} className="text-gray-300 hover:text-[var(--accent)]">CV</button>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
