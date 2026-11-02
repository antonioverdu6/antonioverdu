# GUÍA Y SISTEMA DE DISEÑO: APACHE AIRFLOW DATA SYSTEMS PORTFOLIO

> **Candidato:** Antonio Verdú Salpico — Estudiante de Ingeniería y Sistemas de Datos (*Universidad Politécnica de Madrid - UPM*).  
> **Perfil:** Pipelines de datos, sistemas distribuidos, inferencia local de SLMs, desarrollo full stack y criptografía aplicada.  
> **Arquetipo Visual:** Interfaz web oficial de **Apache Airflow 2.8+** (Dark Mode de producción).

---

## 1. Filosofía de Diseño: Rigor Técnico y Sobriedad

El portfolio se presenta como una consola real de **Apache Airflow 2.8+**, reflejando simetría, orden y excelencia técnica:

1. **Evidencia Técnica Práctica:** El trabajo habla por sí mismo a través de código real, métricas verificables y arquitecturas funcionales (`DAGs`, `Operators`, `Worker Pools`, `Task Instances`, `Logs`).
2. **Estructura Clara y Modular:** Cada proyecto está desacoplado con responsabilidades bien definidas.
3. **Simetría y Cuidado por el Detalle:** Espaciados uniformes, bordes nítidos (`#22304a`), estados de tarea con códigos de color de Airflow y tipografía monoespaciada para metadatos.

---

## 2. Tokens del Sistema de Diseño (Airflow Official Dark Theme)

### 2.1 Paleta de Colores
* **Lienzo de Fondo (`--airflow-bg`):** `#0a0e17` con cuadrícula de puntos sutiles (`radial-gradient #1f2c42 1px, 24px 24px`).
* **Superficie de Paneles (`--airflow-panel`):** `#141c2e`
* **Superficie Elevada / Hover:** `#1a243a`
* **Borde Estructural (`--airflow-border`):** `#22304a` (Borde nítido y simétrico en todas las tarjetas)
* **Color de Marca Airflow (`--airflow-teal`):** `#00c7b7` (Acento pinwheel de Apache Airflow)
* **Estados de Tarea Oficiales de Airflow:**
  * `success`: `#00c07f` / Verde esmeralda (borde izquierdo `4px solid #00c07f`)
  * `running`: `#017cee` / Azul (borde izquierdo `4px solid #017cee`)
  * `failed`: `#ef4444` / Rojo
  * `queued`: `#64748b` / Gris
* **Tipografía:**
  * Interfaz & Metadatos: `JetBrains Mono, Consolas, Monaco, monospace` (`font-mono`)
  * Textos descriptivos: `Inter, system-ui, sans-serif` (`font-sans`)

---

## 3. Arquitectura de Componentes

```
src/
├── App.js                         # Controlador principal y enrutador
├── index.css                      # Reglas CSS del lienzo Airflow y estados
├── tailwind.config.js             # Tokens de color exactos de Airflow
├── data/
│   ├── dagData.js                 # 9 tareas del DAG, 4 etapas cronológicas y dependencias
│   ├── capabilities.js            # 4 Worker Pools de computación y principios de ingeniería
│   ├── airflowPythonCode.js       # Script real en Python del DAG
│   └── auditLogs.js               # Logs cronológicos de ejecución del Scheduler
└── components/
    ├── AirflowNavbar.js           # Barra superior Airflow (Logo, Cluster, Trigger, CV, Idioma)
    ├── AirflowDagHeader.js        # Cabecera del DAG (Toggle ON/PAUSE, Run Circles, Pestañas)
    ├── AirflowGraphView.js        # Grafo interactivo en 4 etapas con conectores
    ├── AirflowGridView.js         # Vista Grid 2.x con matriz de ejecuciones históricas
    ├── AirflowCapabilitiesView.js # Worker Pools con slots y recursos asignados
    ├── AirflowProjectsView.js     # Servicios en producción (5 sistemas con Reto/Solución/Impacto)
    ├── AirflowCodeView.js         # Visor de código Python con sintaxis coloreada
    ├── AirflowLogsView.js         # Terminal interactiva de logs de auditoría
    ├── TaskInstanceModal.js       # Inspector detallado al pulsar cualquier nodo
    ├── AirflowTriggerModal.js     # Modal de "Trigger DAG with Config" para contacto
    └── AirflowFooter.js           # Pie de página oficial con estado del clúster y stack
```

---

## 4. Las Vistas Principales

1. **Graph View (Grafo DAG):** Visualiza las 4 etapas de Antonio (*Fundamentos de Disciplina $\rightarrow$ Grado UPM & GenAI $\rightarrow$ Operaciones de Almacén $\rightarrow$ Sistemas en Producción*). Cada nodo es clickable e inspeccionable.
2. **Grid View (Matriz de Ejecución):** Vista histórica de ejecuciones idéntica a Airflow 2.x, con celdas de color verde para cada tarea verificada.
3. **Worker Pools (Tecnologías):** Organización del stack como pools de recursos informáticos empresariales (Big Data, Software/Rust/APIs, BBDD Políglotas, IA & Criptografía ZK).
4. **Services & Projects (Casos Técnicos):** Los 5 proyectos clave explicados con claridad técnica: *Reto $\rightarrow$ Arquitectura $\rightarrow$ Resultados*.
5. **Code View (Definición Python):** Muestra el script real `antonio_verdu_career_pipeline.py`.
6. **Trigger DAG (Contacto):** Formulario para enviar mensajes directos o solicitudes de entrevista.
