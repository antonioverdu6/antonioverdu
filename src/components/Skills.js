import React from 'react';
import { useTranslation } from 'react-i18next';

// Skills: muestra habilidades relevantes para un Full Stack Developer.
// Modifica niveles y tecnologías según tu CV.
export default function Skills(){
  const { t, i18n } = useTranslation();
  const skills = [
    { name: 'HTML/CSS', name_en: 'HTML/CSS', level: 95 },
    { name: 'JavaScript (ES6+)', name_en: 'JavaScript (ES6+)', level: 85 },
    { name: 'Python', name_en: 'Python', level: 90 },
    { name: 'Bases de datos (SQL/NoSQL)', name_en: 'Databases (SQL/NoSQL)', level: 85 },
    { name: 'Node.js / Express', name_en: 'Node.js / Express', level: 65 },
    { name: 'React', name_en: 'React', level: 80 },
    { name: 'DevOps básico (Git, CI)', name_en: 'Basic DevOps (Git, CI)', level: 60 },
    { name: 'Docker', name_en: 'Docker', level: 70 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-max mx-auto">
        <h3 className="text-2xl font-semibold text-white">{t('skills.title')}</h3>


        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="p-4 bg-[var(--panel)] rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-gray-200">{i18n.language === 'en' && s.name_en ? s.name_en : s.name}</span>
                <span className="text-sm text-gray-400">{s.level}%</span>
              </div>
              <div className="mt-2 w-full bg-gray-800 h-2 rounded">
                <div className="h-2 bg-[var(--accent)] rounded" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
