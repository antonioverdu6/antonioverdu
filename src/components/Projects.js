import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projects from '../data/projects';

// Projects: displays cards from src/data/projects.js
export default function Projects(){
  const { i18n, t } = useTranslation();
  return (
    <section id="projects" className="py-20">
      <div className="container-max mx-auto">
        <h3 className="text-2xl font-semibold text-white">{t('projects.title')}</h3>
        <p className="text-gray-400 mt-2">{t('projects.subtitle')}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="bg-[var(--panel)] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105">
              {/* Reduced image height so project images render smaller. Use thumbnail if provided and fallback to a placeholder on error. */}
              <img
                src={p.imageThumb || p.image}
                alt={p.title}
                className="w-full object-contain h-28 sm:h-32 lg:h-36 bg-gray-900"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Imagen+no+disponible'; }}
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{ i18n.language === 'en' ? (p.title_en || p.title) : p.title }</h4>
                <p className="text-gray-300 mt-2 text-sm">{ i18n.language === 'en' ? (p.description_en || p.description) : p.description }</p>

                {/* Tech tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech && p.tech.map((t, idx) => (
                    <span key={idx} className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  {/* Link to project detail page (uses index). You can replace by slug later. */}
                  <Link to={`/projects/${i}`} className="text-[var(--accent)]">{t('projects.viewDetails')}</Link>
                  {p.link && p.link !== '#' && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-gray-300">{t('projects.visit')}</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
