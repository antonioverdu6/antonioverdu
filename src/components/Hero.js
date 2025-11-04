import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

// Hero: portada inicial. Cambia el nombre y el rol aquí.
export default function Hero(){
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  function scrollToProjects(){
    const doScroll = () => {
      const el = document.getElementById('projects');
      if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.location.hash = 'projects';
    };

    if(location && (location.pathname === '/' || location.pathname === '')){
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 120);
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container-max mx-auto py-24">
        <div className="max-w-3xl transition-opacity duration-700 ease-out">
          <p className="text-sm text-[var(--accent)] mb-3">{t('hero.hi')}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">Antonio Verdú Salpico</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mt-3">{t('hero.role')}</h2>
          <p className="mt-6 text-gray-300 max-w-2xl">
            <Trans i18nKey="intro.paragraph">
              Actualmente estudiando, apasionado por <strong>diseñar y crear aplicaciones </strong>útiles con atención al detalle. 
              Me interesa el mundo del <strong>cloud computing</strong>, el <strong>big data</strong> y la <strong>inteligencia artificial</strong>. 
              Soy muy pasional con lo que me gusta y me motiva construir proyectos que ayuden a los demás. 
              Mi sueño es <strong>emprender y desarrollar mis propias aplicaciones en el futuro</strong>.
            </Trans>
           </p>


          <div className="mt-8 flex gap-4">
            <button onClick={(e)=>{e.preventDefault(); scrollToProjects();}} className="inline-block px-5 py-3 rounded-md bg-[var(--accent)] text-black font-medium hover:brightness-95 transition">{t('hero.viewProjects')}</button>
            {/* Descarga de CV: coloca tu CV en public/ y ajusta el nombre si lo cambias */}
            <button
              type="button"
              onClick={async ()=>{
                const { downloadFromPublic } = await import('../utils/download');
                const res = await downloadFromPublic('/CV_Antonio_Verdú_Salpico.pdf', 'CV_Antonio_Verdú_Salpico.pdf');
                if(!res.ok) alert('CV no encontrado en public/. Coloca tu CV en public/ con el nombre CV_Antonio_Verdú_Salpico.pdf o actualiza el enlace.');
              }}
              className="inline-block px-5 py-3 rounded-md border border-gray-600 text-gray-200 hover:border-[var(--accent)]"
            >
              {t('hero.downloadCV')}
            </button>
          </div>
  </div>
      </div>
    </section>
  );
}
