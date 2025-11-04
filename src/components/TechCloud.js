import React from 'react';
import { useTranslation } from 'react-i18next';
import techList from '../data/tech';
// Import common tech icons from react-icons. Add or remove icons as needed.
import { FaReact, FaGit, FaLaptopCode } from 'react-icons/fa';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiOpenjdk,
  SiC,
  SiScala,
  SiMongodb,
  SiPostgresql,
  SiElasticsearch,
  SiApachespark,
  SiApachekafka,
  SiApache,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiVercel
} from 'react-icons/si';

// Map keys to icon components. Add mappings for any new keys added to src/data/tech.js
const ICON_MAP = {
  'React': FaReact,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'Python': SiPython,
  'Flask': SiFlask,
  'Java': SiOpenjdk,
  'C': SiC,
  'Scala': SiScala,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Elasticsearch': SiElasticsearch,
  'Apache Spark': SiApachespark,
  'Apache Kafka': SiApachekafka,
  'Apache Nifi': SiApache,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Git': FaGit,
  'Linux': SiLinux,
  'Vercel': SiVercel,
};

// NOTE: Removed category map - tooltip will display the technology name directly.

// TechCloud: displays tech logos arranged in a circle/orbit with subtle animation.
export default function TechCloud({ className }){
  const { t } = useTranslation();
  // radius for orbit (px)
  const baseRadius = 150; // aumentado para mantener proporciones con el tamaño mayor
  const orbitDuration = 24; // same duration for all to create harmonic rotation

  return (
    <section id="tech" className={`py-12 ${className || ''}`}>
      <div className="container-max mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left: heading */}
          <div className="md:w-48 w-full text-left">
            <h3 className="text-2xl font-semibold text-white">{t('tech.title')}</h3>
            <p className="text-gray-400 text-sm">{t('tech.subtitle')}</p>
          </div>

          {/* Right: cloud area (más grande y desplazada a la izquierda en md+) */}
          <div className="flex-1 flex justify-start">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] md:-ml-8 lg:-ml-10">
              {/* center computer icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 tech-center">
                <div className="center-box bg-[var(--panel)] p-4 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-200">
                  <FaLaptopCode size={56} className="text-[var(--accent)]" aria-hidden="true" />
                </div>
              </div>

              {/* orbiting icons in fixed order with same speed */}
              {techList.map((t, i) => {
                const Icon = ICON_MAP[t] || (()=> <div className="w-8 h-8 bg-gray-600 rounded" />);
                const initialDeg = (i / techList.length) * 360;
                const radius = baseRadius + (i % 3) * 16; // slight radius variation for depth
                const size = 26 + (i % 3) * 4;

                return (
                  <div
                    key={t}
                    aria-label={t}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                          '--radius': `${radius}px`,
                          '--duration': `${orbitDuration}s`,
                          '--delay': `${-(initialDeg / 360) * orbitDuration}s`,
                          '--size': `${size}px`
                        }}
                  >
                    <div className="orbit-item relative">
                      <div className="flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] p-2" style={{ width: size+12, height: size+12 }}>
                        <Icon size={size} className="text-[var(--accent)]" />
                      </div>

                      {/* custom tooltip (styled) shown on hover */}
                      <div className="tech-tooltip pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] opacity-0 transform translate-y-1 transition-all duration-150">
                        <div className="text-xs text-white bg-[rgba(10,14,18,0.95)] px-3 py-1 rounded-md shadow-lg border border-[rgba(255,255,255,0.04)]">{t}</div>
                        <div className="tooltip-arrow w-2 h-2 bg-[rgba(10,14,18,0.95)] rotate-45 absolute left-1/2 -translate-x-1/2 top-full" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Component-scoped styles */}
              <style>{`
                @keyframes orbit {
                  from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
                  to   { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
                }
                .orbit-item{ 
                  transform-origin: 0 0; 
                  animation-name: orbit; 
                  animation-timing-function: linear; 
                  animation-iteration-count: infinite; 
                  animation-duration: var(--duration, ${orbitDuration}s);
                  animation-delay: var(--delay, 0s);
                  will-change: transform;
                }
                /* keep items interactive upright on hover */
                .orbit-item > div{ transition: transform .18s ease; }
                .orbit-item:hover > div{ transform: scale(1.12); }

                /* tooltip behaviour */
                .orbit-item:hover .tech-tooltip{ opacity: 1; transform: translateY(0); pointer-events:auto; }
                .tech-tooltip .tooltip-arrow{ box-shadow: 0 4px 12px rgba(0,0,0,0.45); }

                /* center computer hover scale */
                .tech-center:hover .center-box{ transform: scale(1.08); }

                /* ensure tooltip looks crisp */
                .tech-tooltip div{ font-weight: 600; }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
