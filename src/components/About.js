import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

// About: reemplaza o amplía este texto con información extraída de tu CV si lo deseas.
export default function About(){
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20">
      <div className="container-max mx-auto">
        <div className="max-w-3xl transition-opacity duration-500">
          <h3 className="text-2xl font-semibold text-white">{t('about.title')}</h3>

          {/* Personaliza este párrafo con información de tu CV. No he añadido datos privados sin confirmación. */}
          <p className="mt-4 text-gray-300">
            <Trans i18nKey="about.paragraph">
              Soy estudiante de <strong>desarrollo web</strong> y me apasiona crear proyectos desde cero, transformar ideas en algo real y aprender en cada paso del proceso.
            </Trans>
          </p>
          {/* He quitado los paneles duplicados de "Tecnologías" y "Buscando" porque las tecnologías se muestran en la sección de TechCloud. */}
        </div>
      </div>
    </section>
  );
}
