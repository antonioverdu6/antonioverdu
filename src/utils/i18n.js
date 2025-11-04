// Lightweight DOM-based translations for common UI strings.
// This is a pragmatic approach: it scans text nodes and replaces known Spanish phrases with English ones.
// It persists language in localStorage under 'lang'.

const TRANSLATIONS = {
  es: {},
  en: {
    'Inicio': 'Home',
    'Sobre mí': 'About',
    'Tecnologías': 'Technologies',
    'Proyectos': 'Projects',
    'Contacto': 'Contact',
    'Habilidades': 'Skills',
    'CV': 'CV',
    'Ver proyectos': 'View projects',
    'Descargar CV': 'Download CV',
    'Ver detalles →': 'View details →',
    'Visitar': 'Visit',
    'Volver': '← Back',
    'Desarrollo': 'Development',
    'Ver en GitHub': 'View on GitHub',
    'Visitar demo': 'Visit demo',
    'Proyecto no encontrado': 'Project not found',
    'El proyecto solicitado no existe o ha sido movido.': "The requested project doesn't exist or has been moved.",
    'Selección de mis proyectos más destacados.': 'A selection of my most notable projects.',
    'Hola, soy': 'Hi, I am',
    'Estudiante de Ingeniería y Sistemas de Datos': 'Student in Systems and Data Engineering',
    'GitHub: (añade link en src/data/projects.js)': 'GitHub: (add link in src/data/projects.js)'
  }
};

function walkTextNodes(root, cb){
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      // ignore empty/whitespace-only nodes
      if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      // ignore nodes inside SCRIPT or STYLE
      const parent = node.parentElement;
      if(!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if(tag === 'script' || tag === 'style' || tag === 'noscript') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = null;
  while ((node = walker.nextNode()) !== null) {
    cb(node);
  }
}

export function applyLanguage(lang){
  if(typeof document === 'undefined') return;
  const map = TRANSLATIONS[lang] || {};

  // For deterministic replacements, sort keys by length desc to avoid partial overlaps
  const keys = Object.keys(map).sort((a,b)=> b.length - a.length);

  walkTextNodes(document.body, (textNode) => {
    let v = textNode.nodeValue;
    let changed = false;
    keys.forEach(k => {
      const re = new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g');
      if(re.test(v)){
        v = v.replace(re, map[k]);
        changed = true;
      }
    });
    if(changed) textNode.nodeValue = v;
  });

  // persist
  try{ localStorage.setItem('lang', lang); } catch(e){}
}

export function initLanguage(){
  const stored = (typeof localStorage !== 'undefined') ? localStorage.getItem('lang') : null;
  const lang = stored || 'es';
  if(lang && lang !== 'es') applyLanguage(lang);
}

export function toggleLanguage(){
  const current = (typeof localStorage !== 'undefined') ? localStorage.getItem('lang') || 'es' : 'es';
  const next = current === 'es' ? 'en' : 'es';
  if(next === 'es'){
    // reload page to revert to original Spanish hardcoded texts
    try{ localStorage.setItem('lang', 'es'); } catch(e){}
    window.location.reload();
    return;
  }
  applyLanguage(next);
}

const I18nUtil = { applyLanguage, initLanguage, toggleLanguage };
export default I18nUtil;
