/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'airflow-bg': '#0a0e17',
        'airflow-canvas': '#0d121f',
        'airflow-panel': '#141c2e',
        'airflow-panel-hover': '#1a243a',
        'airflow-border': '#22304a',
        'airflow-border-light': '#2d3f61',
        'airflow-teal': '#00c7b7',
        'airflow-blue': '#017cee',
        'airflow-success': '#00c07f',
        'airflow-running': '#017cee',
        'airflow-warning': '#f59e0b',
        'airflow-failed': '#ef4444',
        'airflow-queued': '#64748b',
        'airflow-text-primary': '#f8fafc',
        'airflow-text-secondary': '#94a3b8',
        'airflow-text-muted': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
