import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { downloadFromPublic } from '../utils/download';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { FiMenu, FiX } from 'react-icons/fi';

// Header: fixed top navigation. Update the name and section links if needed.
export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // section IDs (without #). Using programmatic scroll avoids router/hash conflicts.
  const { t } = useTranslation();
  const links = [
    { to: 'home', labelKey: 'nav.home' },
    { to: 'about', labelKey: 'nav.about' },
    { to: 'skills', labelKey: 'nav.skills' },
    { to: 'tech', labelKey: 'nav.tech' },
    { to: 'projects', labelKey: 'nav.projects' },
    { to: 'contact', labelKey: 'nav.contact' },
  ];

  function scrollToSection(id){
    const doScroll = () => {
      const el = document.getElementById(id);
      if(el){
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback: set hash (will not break app)
        window.location.hash = id;
      }
      setOpen(false);
    };

    // If we're already on the root route, scroll immediately.
    // Otherwise navigate to root first and then scroll after a short delay so the DOM is ready.
    if(location && (location.pathname === '/' || location.pathname === '')){
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 120);
    }
  }

  // i18n initialized in src/i18n.js (if present)

  return (
    <header className="fixed w-full top-0 z-40">
      <div className="glass container-max flex items-center justify-between h-16 px-4 md:px-6">
  <a href="#home" onClick={(e)=>{e.preventDefault(); scrollToSection('home')}} className="text-white font-semibold text-lg">Antonio Verdú Salpico</a>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <a key={l.to} href={`#${l.to}`} onClick={(e)=>{e.preventDefault(); scrollToSection(l.to)}} className="text-gray-300 hover:text-[var(--accent)] transition">{t(l.labelKey)}</a>
          ))}
          <button
            type="button"
            onClick={async ()=>{
              const res = await downloadFromPublic('/CV_Antonio_Verdú_Salpico.pdf', 'CV_Antonio_Verdú_Salpico.pdf');
              if(!res.ok) alert(t('alerts.cv_missing'));
            }}
            className="text-gray-300 hover:text-[var(--accent)] transition"
          >
            CV
          </button>
          {/* Language toggle: show Spanish or UK flag emoji depending on stored lang */}
          <button
            type="button"
            onClick={(e)=>{ e.preventDefault(); const next = i18n.language === 'es' ? 'en' : 'es'; i18n.changeLanguage(next); localStorage.setItem('lang', next); }}
            title="Change language"
            className="ml-2 text-xl"
            aria-label="Toggle language"
          >
            { i18n.language === 'en' ? '🇬🇧' : '🇪🇸' }
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden glass px-4 py-4">
          <nav className="flex flex-col gap-3">
            {links.map(l => (
              <a key={l.to} href={`#${l.to}`} className="text-gray-200 py-2" onClick={(e)=>{e.preventDefault(); scrollToSection(l.to)}}>{t(l.labelKey)}</a>
            ))}
            <button type="button" className="text-gray-200 py-2 text-left" onClick={async ()=>{
              const res = await downloadFromPublic('/CV_Antonio_Verdú_Salpico.pdf', 'CV_Antonio_Verdú_Salpico.pdf');
              if(!res.ok) alert(t('alerts.cv_missing'));
              setOpen(false);
            }}>{t('header.cv')}</button>
            <div className="flex items-center gap-3">
              <button type="button" className="text-gray-200 py-2 text-left text-2xl" onClick={(e)=>{e.preventDefault(); const next = i18n.language === 'es' ? 'en' : 'es'; i18n.changeLanguage(next); localStorage.setItem('lang', next); setOpen(false); }} aria-label="Toggle language">{ i18n.language === 'en' ? '🇬🇧' : '🇪🇸' }</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
