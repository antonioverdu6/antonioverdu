import React from 'react';
import { useTranslation } from 'react-i18next';

// Experience: timeline with placeholders. Replace with tus empresas, fechas y roles.
export default function Experience(){
  const { t, i18n } = useTranslation();
  const items = [
    {
      role: 'Clarinetista',
      role_en: 'Clarinetist',
      company: 'Banda Sinfónica de la Excma. Diputación Provincial de Cáceres',
      company_en: 'Symphonic Band of the Provincial Council of Cáceres',
      period: '2018 - 2022',
      period_en: '2018 - 2022',
      desc: 'Antes de adentrarme en el mundo de la ingeniería, trabajé como músico profesional, una etapa en la que aprendí la importancia de la disciplina, la creatividad y el trabajo en equipo, valores que hoy aplico en mis proyectos tecnológicos.',
      desc_en: 'Before moving into engineering, I worked as a professional musician. During this time I learned discipline, creativity and teamwork — values I apply today in my technology projects.'
    },
    {
      role: 'Gestión de Actividad Frutícola',
      role_en: 'Fruit Farming Operations Coordinator',
      company: 'Frutícola RioJerte',
      company_en: 'Frutícola RioJerte',
      period: '2023 - Act.',
      period_en: '2023 - Present',
      desc: 'Colaboré en la organización de tareas diarias, coordinación de pedidos y control de inventario, aprendiendo a trabajar en equipo y a cumplir objetivos bajo plazos concretos.',
      desc_en: 'I collaborated in daily operations, order coordination and inventory control, learning to work as part of a team and meet objectives under tight deadlines.'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-max mx-auto">
        <h3 className="text-2xl font-semibold text-white">{t('experience.title')}</h3>
        <div className="mt-6 space-y-4">
          {items.map((it, i) => {
            const role = i18n.language === 'en' && it.role_en ? it.role_en : it.role;
            const company = i18n.language === 'en' && it.company_en ? it.company_en : it.company;
            const desc = i18n.language === 'en' && it.desc_en ? it.desc_en : it.desc;
            const period = i18n.language === 'en' && it.period_en ? it.period_en : it.period;
            return (
              <div key={i} className="p-4 bg-[var(--panel)] rounded-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{role}</h4>
                    <div className="text-gray-400 text-sm">{company} • {period}</div>
                  </div>
                </div>
                <p className="mt-2 text-gray-300 text-sm">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
