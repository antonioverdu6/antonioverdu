import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projects from '../data/projects';

// Safely render details text: escape HTML, convert **bold** to <strong>, preserve line breaks
function renderDetailsHtml(text) {
  if (!text) return '';
  const escaped = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // convert markdown-style bold **text** to <strong>
  const bolded = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // preserve new lines
  return bolded.replace(/\r\n|\r|\n/g, '<br/>');
}

// ProjectPage: shows a single project's full details based on index in data.
export default function ProjectPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  // handle back so we navigate to root and then scroll to #projects
  const handleBackToProjects = (e) => {
    e && e.preventDefault();
    // navigate to root route
    navigate('/');
    // allow the route change/layout to happen, then scroll to the projects section
    // give the page a bit more time to render before trying to scroll
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 360);
  };
  const index = parseInt(id, 10);
  const project = projects[index];

  // ensure page starts at top when opening a project detail
  useEffect(() => {
    try { window.scrollTo({ top: 0 }); } catch(e) { window.scrollTo(0,0); }
  }, []);

  if(!project) {
    return (
      <div className="container-max mx-auto py-20">
        <h2 className="text-2xl text-white">{t('project.not_found')}</h2>
        <p className="text-gray-400 mt-2">{t('project.missing')}</p>
        <Link to="/" className="mt-4 inline-block text-[var(--accent)]">{t('project.back')}</Link>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container-max mx-auto">
  {/* Back to projects: navigate to root and then smooth-scroll to #projects */}
  <Link to="/" onClick={handleBackToProjects} className="text-[var(--accent)]">{t('project.back')}</Link>

        <div className="mt-6 bg-[var(--panel)] p-6 rounded-md">
          <h1 className="text-3xl font-bold text-white">{i18n.language === 'en' && project.title_en ? project.title_en : project.title}</h1>
          <p className="text-gray-300 mt-3">{i18n.language === 'en' && project.description_en ? project.description_en : project.description}</p>

          {(project.imageFull || project.image) && (
            <div className="mt-6 w-full flex items-center justify-center bg-transparent p-4">
              {/* constrain image so very large images don't overflow the layout; prefer imageFull when provided */}
              <img
                src={project.imageFull || project.image}
                alt={project.title}
                className="max-h-72 sm:max-h-80 w-auto object-contain rounded"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/900x500?text=Imagen+no+disponible'; }}
              />
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white">{t('project.development')}</h3>
            {/* Render project.details converting **bold** to <strong> safely and preserving line breaks */}
            <div
              className="text-gray-300 mt-2 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderDetailsHtml(i18n.language === 'en' && project.details_en ? project.details_en : project.details) }}
            />
          </div>

          <div className="mt-6 flex gap-4 items-center">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--accent)]">{t('project.view_on_github')}</a>
            ) : (
              <span className="text-gray-500">{t('project.github_missing')}</span>
            )}

            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-300">{t('project.visit_demo')}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
