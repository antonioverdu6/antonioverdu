export const DAG_METADATA = {
  id: 'antonio_verdu_career_pipeline',
  title: 'antonio_verdu_career_pipeline.py',
  description_es: 'Pipeline de ingeniería de datos, sistemas distribuidos, IA local y desarrollo full stack.',
  description_en: 'Data systems engineering pipeline, distributed architectures, local AI, and full stack development.',
  owner: 'antonio_verdu',
  schedule: '@continuous',
  timezone: 'UTC+1 (Madrid)',
  version: '2.8.1-prod',
  tags: ['upm', 'data-systems', 'big-data', 'distributed-systems', 'auction-intelligence', 'local-ai', 'ing-bank', 'gcp', 'data-engineering', 'fintech', 'python', 'docker', 'react'],
  runStats: {
    success: 8,
    running: 2,
    failed: 0,
    queued: 1,
    skipped: 0
  },
  cluster: {
    name: 'upm-telecom-prod-01',
    status: 'HEALTHY',
    activeWorkers: 8,
    memoryUtilization: '30.1%',
    schedulerHeartbeat: '0.3s'
  }
};

export const DAG_STAGES = [
  { id: 'foundation', name_es: '1. Fundamentos & Disciplina', name_en: '1. Foundation & Discipline' },
  { id: 'academic', name_es: '2. Formación Académica UPM', name_en: '2. UPM Academic Foundation' },
  { id: 'academic_labs', name_es: '3. Laboratorios Distribuidos UPM', name_en: '3. UPM Distributed Labs' },
  { id: 'enterprise', name_es: '4. Experiencia Profesional · FinTech & Cloud', name_en: '4. Professional Experience · FinTech & Cloud' },
  { id: 'independent_systems', name_es: '5. Plataformas Propias & Sistemas Autónomos', name_en: '5. Independent Platforms & AI Systems' },
];

export const DAG_TASKS = [
  {
    id: 'symphonic_discipline_orchestration',
    stage: 'foundation',
    operator: 'ArtisticDisciplineOperator',
    state: 'success',
    duration: '4 Years (2018-2022)',
    pool: 'high_performance_pool',
    tries: '1/1',
    executionDate: '2018-09-01T08:00:00Z',
    title_es: 'Clarinetista · Banda Sinfónica de la Diputación de Cáceres',
    title_en: 'Clarinetist · Symphonic Band of Cáceres',
    summary_es: 'Músico en formación sinfónica profesional. Desarrollo de disciplina diaria, concentración y trabajo en equipo coordinado.',
    summary_en: 'Professional symphonic band musician. Developing daily discipline, deep concentration, and synchronized teamwork.',
    details_es: `Antes de iniciar la ingeniería, formé parte como músico de la Banda Sinfónica de la Excma. Diputación Provincial de Cáceres. 
Esta etapa aportó hábitos esenciales para mi desarrollo profesional:
- **Disciplina y Constancia:** Estudio técnico individual diario para preparar repertorios exigentes.
- **Gestión de la Presión en Escenario:** Actuaciones en directo ante público amplio con exigencia de concentración absoluta.
- **Sincronización:** Trabajo coordinado en una formación de más de 70 músicos, donde la precisión individual contribuye al resultado colectivo.`,
    details_en: `Prior to engineering, I performed as a musician with the Provincial Symphonic Band of Cáceres.
This period built foundational habits for my professional growth:
- **Discipline & Consistency:** Daily individual technical practice to master demanding repertoires.
- **Stage Focus:** Live concert performances requiring high concentration and composure.
- **Team Synchronization:** Coordinated teamwork within a 70+ musician ensemble where individual precision supports the group.`,
    impact_es: 'Hábitos sólidos de constancia, perseverancia y capacidad de trabajo en equipo bajo condiciones exigentes.',
    impact_en: 'Solid habits of perseverance, attention to detail, and ability to work in synchronized teams.',
    metrics: [
      { label: 'Años en activo', value: '4 años' },
      { label: 'Formación', value: '70+ músicos' },
      { label: 'Exigencia', value: 'Directo' },
    ],
    techStack: ['Disciplina', 'Concentración', 'Sincronización', 'Trabajo en Equipo']
  },
  {
    id: 'stem_baccalaureate_san_antonio',
    stage: 'foundation',
    operator: 'STEMFoundationsOperator',
    state: 'success',
    duration: '2 Years (2019-2021)',
    pool: 'high_performance_pool',
    tries: '1/1',
    executionDate: '2019-09-15T08:00:00Z',
    title_es: 'Bachillerato Tecnológico · Colegio San Antonio de Padua (Cáceres)',
    title_en: 'Technological Baccalaureate · Colegio San Antonio de Padua (Cáceres)',
    summary_es: 'Bachillerato en modalidad científico-tecnológica. Formación rigurosa en matemáticas avanzadas, física y dibujo técnico como base para la ingeniería de datos en la UPM.',
    summary_en: 'Science & Technology Baccalaureate. Rigorous baseline in advanced mathematics, physics, and technical drafting establishing foundations for university engineering.',
    details_es: `Etapa de formación pre-universitaria cursada en el Colegio San Antonio de Padua (Cáceres) con orientación a la ingeniería:
- **Matemáticas Avanzadas:** Álgebra matricial, geometría analítica, cálculo diferencial e integral elemental.
- **Física Clásica:** Mecánica newtoniana, campos electromagnéticos y principios de termodinámica.
- **Dibujo Técnico & Visión Espacial:** Geometría descriptiva, vistas normalizadas y resolución de problemas espaciales.
- **Rigor & Método de Estudio:** Consolidación de hábitos analíticos y constancia que facilitaron la admisión y éxito en el Grado en Ingeniería y Sistemas de Datos en la UPM.`,
    details_en: `Pre-university STEM academic foundation at Colegio San Antonio de Padua (Cáceres) focused on engineering:
- **Advanced Mathematics:** Matrix algebra, analytic geometry, and fundamental calculus.
- **Classical Physics:** Newtonian mechanics, electromagnetic fields, and core thermodynamics.
- **Technical Drawing:** Descriptive geometry and spatial reasoning for engineering architectures.
- **Analytical Discipline:** Rigorous study methodology providing a strong baseline for UPM's Data Systems Engineering degree.`,
    impact_es: 'Sólida base cuantitativa y científica que permitió superar con éxito las exigencias matemáticas y de sistemas de la universidad.',
    impact_en: 'Strong quantitative and scientific baseline ensuring success throughout demanding university engineering curricula.',
    metrics: [
      { label: 'Colegio', value: 'San Antonio de Padua' },
      { label: 'Modalidad', value: 'Tecnológico' },
      { label: 'Ubicación', value: 'Cáceres' },
    ],
    techStack: ['Matemáticas Avanzadas', 'Física', 'Dibujo Técnico', 'Metodología Científica']
  },
  {
    id: 'upm_data_systems_degree',
    stage: 'academic',
    operator: 'DataEngineeringAcademyOperator',
    state: 'success',
    duration: '2021 - 2026 (Graduado)',
    pool: 'academic_compute_pool',
    tries: '1/1',
    executionDate: '2021-09-15T09:00:00Z',
    title_es: 'Grado en Ingeniería y Sistemas de Datos · Universidad Politécnica de Madrid (UPM)',
    title_en: 'BSc in Data Systems Engineering · Universidad Politécnica de Madrid (UPM)',
    summary_es: 'Grado completado en la ETSIT - UPM sobre computación distribuida, minería de datos, estadística y desarrollo software.',
    summary_en: 'Engineering degree completed at ETSIT - UPM covering distributed computing, data mining, statistics, and software engineering.',
    details_es: `Grado universitario finalizado en la Escuela Técnica Superior de Ingenieros de Telecomunicación (UPM):
- **Sistemas Distribuidos & Big Data:** Paralelización de procesos, clusters de procesamiento (Spark, Kafka) y bases de datos.
- **Modelado Cuantitativo:** Álgebra lineal, cálculo multivariable, estadística aplicada y fundamentos de machine learning.
- **Ingeniería de Software:** Diseño orientado a objetos, arquitecturas cliente-servidor, APIs REST y contenedores.`,
    details_en: `Engineering degree completed at ETSIT - UPM:
- **Distributed Systems & Big Data:** Process parallelization, cluster architectures (Spark, Kafka), and databases.
- **Quantitative Modeling:** Linear algebra, multivariable calculus, applied statistics, and ML fundamentals.
- **Software Engineering:** Object-oriented design, client-server architectures, REST APIs, and containerization.`,
    impact_es: 'Base cuantitativa e ingenieril sólida para resolver problemas técnicos complejos y diseñar soluciones de datos.',
    impact_en: 'Strong quantitative and engineering foundation to tackle complex technical problems and design data architectures.',
    metrics: [
      { label: 'Universidad', value: 'UPM (Madrid)' },
      { label: 'Estado', value: 'Graduado (2026)' },
      { label: 'Especialidad', value: 'Sistemas & Datos' },
    ],
    techStack: ['Sistemas Distribuidos', 'Estructuras de Datos', 'Bases de Datos', 'Álgebra y Estadística']
  },
  {
    id: 'generative_ai_specialization',
    stage: 'academic',
    operator: 'AIEngineeringOperator',
    state: 'success',
    duration: '120h (2025)',
    pool: 'gpu_analytics_pool',
    tries: '1/1',
    executionDate: '2025-02-01T10:00:00Z',
    title_es: 'Especialización en Inteligencia Artificial Generativa · UPM',
    title_en: 'Specialization in Generative Artificial Intelligence · UPM',
    summary_es: 'Estudio de arquitecturas Transformer, modelos de lenguaje (LLMs), embeddings vectoriales y RAG.',
    summary_en: 'Study of Transformer architectures, large language models (LLMs), vector embeddings, and RAG.',
    details_es: `Curso de formación complementaria impartido en la UPM enfocado en IA generativa práctica:
- **Arquitecturas Transformer:** Funcionamiento interno de mecanismos de atención, encoders y decoders.
- **Técnicas de RAG (Retrieval-Augmented Generation):** Integración de bases vectoriales para contextualizar respuestas de modelos.
- **Implementación y Fine-Tuning:** Uso de librerías modernas de IA y frameworks de inferencia.`,
    details_en: `Complementary training at UPM focused on practical generative AI:
- **Transformer Architectures:** Attention mechanisms, tokenizers, and model fine-tuning concepts.
- **RAG Systems:** Vector database retrieval pipelines to ground model responses with external facts.
- **Implementation:** Working with modern AI libraries and inference engines.`,
    impact_es: 'Conocimiento actualizado para integrar modelos de lenguaje e interfaces de recuperación de información en aplicaciones reales.',
    impact_en: 'Practical skills to integrate language models and vector retrieval into production software applications.',
    metrics: [
      { label: 'Duración', value: '120 horas' },
      { label: 'Entidad', value: 'UPM' },
      { label: 'Año', value: '2025' },
    ],
    techStack: ['PyTorch', 'Transformers', 'RAG', 'Embeddings Vectoriales', 'Prompting']
  },
  {
    id: 'flight_delay_streaming_mllib',
    stage: 'academic_labs',
    operator: 'SparkSubmitOperator',
    state: 'success',
    duration: '450ms Latency',
    pool: 'distributed_stream_pool',
    tries: '1/1',
    executionDate: '2024-04-12T14:22:00Z',
    title_es: 'Predicción de Retrasos de Vuelos en Streaming (IBDN)',
    title_en: 'Real-Time Flight Delay Prediction Pipeline (IBDN)',
    summary_es: 'Sistema distribuido de predicción en tiempo real con Spark MLlib (Scala), Apache Kafka, Cassandra, MongoDB y WebSockets.',
    summary_en: 'Distributed real-time prediction system with Spark MLlib (Scala), Apache Kafka, Cassandra, MongoDB, and WebSockets.',
    details_es: `Arquitectura distribuida desarrollada para la asignatura de Ingeniería de Big Data en la Nube (UPM):
- **Mensajería con Apache Kafka:** Gestión de tópicos de entrada y salida para comunicar el servidor web con el motor de predicción.
- **Procesamiento Distribuido:** Modelo Spark MLlib implementado en Scala corriendo sobre cluster con master y workers en Docker.
- **Almacenamiento Multi-Base:** Cassandra para distancias entre aeropuertos, MongoDB para resultados y HDFS para histórico.
- **Visualización en Tiempo Real:** Servidor Flask y WebSockets para actualizar las predicciones en la interfaz de usuario al instante.`,
    details_en: `Distributed architecture developed for Cloud Big Data Engineering (UPM):
- **Kafka Messaging:** Handling input and output topics connecting the web server to the predictive engine.
- **Distributed Computing:** Spark MLlib model in Scala running on a Dockerized master-worker cluster.
- **Multi-Database Storage:** Cassandra for airport graph distances, MongoDB for predictions, and HDFS for historical logs.
- **Real-Time UI:** Flask server pushing WebSocket updates to the frontend without page reloads.`,
    impact_es: 'Diseño e integración de un flujo completo de Big Data que coordina ingesta en streaming, cálculo distribuido y persistencia políglota.',
    impact_en: 'Design and coordination of a full Big Data pipeline combining streaming, distributed compute, and polyglot persistence.',
    github: 'https://github.com/antonioverdu6/Flight-Predictions-IBDN',
    metrics: [
      { label: 'Cluster', value: 'Spark Master + 2 Workers' },
      { label: 'Bases de datos', value: 'Cassandra + Mongo + HDFS' },
      { label: 'Comunicación', value: 'Kafka + WebSockets' },
    ],
    techStack: ['Apache Spark', 'Scala', 'Apache Kafka', 'Cassandra', 'MongoDB', 'Docker', 'WebSockets']
  },
  {
    id: 'conversational_nl_query_engine',
    stage: 'academic_labs',
    operator: 'RasaDockerOperator',
    state: 'success',
    duration: '320ms Latency',
    pool: 'nlp_query_pool',
    tries: '1/1',
    executionDate: '2024-02-18T16:45:00Z',
    title_es: 'Consulta de Datos en Lenguaje Natural con Rasa y Spark (EdgePoseBot)',
    title_en: 'Natural Language Data Query System with Rasa & Spark (EdgePoseBot)',
    summary_es: 'Infraestructura de datos con Apache Spark y MongoDB consultable mediante un chatbot conversacional basado en Rasa.',
    summary_en: 'Data infrastructure powered by Apache Spark and MongoDB accessible via a conversational Rasa chatbot.',
    details_es: `Proyecto universitario (PIDS - UPM) para facilitar el acceso a datos mediante interacción conversacional:
- **Capa Conversacional:** Chatbot con Rasa entrenado para entender intenciones y parámetros de consulta en lenguaje natural.
- **Procesamiento de Datos:** Ingesta y filtrado con Python y Apache Spark sobre datasets voluminosos.
- **Almacenamiento y Despliegue:** MongoDB para guardar resultados procesados y Docker Compose para orquestar los servicios.`,
    details_en: `University project (PIDS - UPM) enabling conversational access to data:
- **Conversational Layer:** Rasa chatbot trained for natural language intent classification and query extraction.
- **Data Processing:** Python and Apache Spark jobs performing distributed transformations over large datasets.
- **Storage & Deployment:** MongoDB for persistence and Docker Compose for coordinating microservices.`,
    impact_es: 'Facilita a usuarios sin conocimientos de SQL realizar consultas analíticas sobre grandes volúmenes de datos.',
    impact_en: 'Enables non-technical users to perform analytical queries on large data volumes using natural language.',
    github: 'https://github.com/antonioverdu6/PIDS-Entrega1',
    metrics: [
      { label: 'Procesamiento', value: 'Apache Spark' },
      { label: 'Interfaz', value: 'Chatbot Rasa' },
      { label: 'Despliegue', value: 'Docker Compose' },
    ],
    techStack: ['Python', 'Apache Spark', 'MongoDB', 'Rasa NLP', 'Docker Compose']
  },
  {
    id: 'ing_bank_software_intern',
    stage: 'enterprise',
    operator: 'BankingSoftwareOperator',
    state: 'success',
    duration: '2026 (6 Meses)',
    pool: 'enterprise_banking_pool',
    tries: '1/1',
    executionDate: '2026-02-01T08:30:00Z',
    title_es: 'Software Engineer Intern · ING Bank (Madrid)',
    title_en: 'Software Engineer Intern · ING Bank (Madrid)',
    summary_es: 'Desarrollo de interfaces de usuario escalables mediante arquitecturas modernas de frontend bajo estrictos estándares bancarios de seguridad y rendimiento, integrando APIs REST en entornos ágiles (Scrum).',
    summary_en: 'Development of scalable user interfaces using modern frontend architectures adhering to strict banking security and performance standards, integrating REST APIs in Agile (Scrum) environments.',
    details_es: `Primera etapa profesional en ING Bank como Software Engineer Intern:
- **Arquitecturas Frontend Escalables:** Desarrollo de interfaces de usuario robustas y modulares para soluciones bancarias de alta concurrencia.
- **Seguridad Bancaria & Rendimiento:** Implementación bajo estrictos estándares financieros de seguridad, accesibilidad y eficiencia de renderizado en cliente.
- **Integración con APIs REST & Testing:** Optimización de componentes críticos y garantía de integridad en la comunicación con el backend mediante APIs REST y testing con Jest.
- **Metodologías Ágiles (Scrum) & Azure DevOps:** Participación diaria en ceremonias ágiles, integración continua y gestión de tareas corporativas con Azure DevOps.`,
    details_en: `Initial professional engineering experience at ING Bank as Software Engineer Intern:
- **Scalable Frontend Architectures:** Developing robust and modular user interface components for high-concurrency banking applications.
- **Banking Security & Performance:** Implementing solutions compliant with strict financial security, web accessibility, and client performance standards.
- **REST API Integration & Testing:** Optimizing critical components and ensuring data integrity between frontend and backend via RESTful endpoints and Jest unit test suites.
- **Agile Methodologies (Scrum) & Azure DevOps:** Active participation in daily Scrum ceremonies, CI/CD workflows, and enterprise project tracking using Azure DevOps.`,
    impact_es: 'Contribución directa al desarrollo y fiabilidad de soluciones bancarias en producción, optimizando componentes críticos para mejorar la experiencia de usuario.',
    impact_en: 'Direct contribution to production banking solutions, optimizing critical components to enhance customer experience and data integrity.',
    metrics: [
      { label: 'Entidad', value: 'ING Bank (Madrid)' },
      { label: 'Metodología', value: 'Scrum / Agile' },
      { label: 'Herramientas', value: 'Azure DevOps & Jest' },
    ],
    techStack: ['React', 'JavaScript', 'REST APIs', 'Jest', 'Azure DevOps', 'Scrum', 'HTML5/CSS3']
  },
  {
    id: 'ing_bank_investment_data_engineer',
    stage: 'enterprise',
    operator: 'InvestmentDataOperator',
    state: 'running',
    duration: '2026 - Actualidad',
    pool: 'enterprise_investment_pool',
    tries: '1/1',
    executionDate: '2026-07-01T08:00:00Z',
    title_es: 'Data Engineer · Equipo de Inversión · ING Bank',
    title_en: 'Data Engineer · Investment Team · ING Bank',
    summary_es: 'Data Engineer en el equipo de inversión de ING Bank. Trabajo en squad Agile/Scrum internacional y multidisciplinar con sincronización entre hubs de ingeniería. Propietario técnico de pipelines de datos y proyectos cloud.',
    summary_en: 'Data Engineer within ING Bank\'s Investment team. Working in an international cross-border Agile/Scrum squad with technical synchronization across global engineering hubs. Technical owner of data pipelines and cloud projects.',
    details_es: `Rol actual como Data Engineer en el Equipo de Inversión de ING Bank:
- **Metodología Agile & Scrum en Squad Internacional:** Trabajo diario en squad distribuido con ceremonias Scrum (daily standups, sprint planning, refinamientos y retrospectivas), asegurando despliegues continuos y sincronización técnica entre hubs.
- **Coordinación Transfronteriza:** Participación activa en reuniones de diseño arquitectónico y sincronización técnica con stakeholders y equipos internacionales.
- **Pipelines de Datos & Arquitectura Cloud:** Diseño e implementación de flujos de datos sobre Google Cloud (BigQuery) para habilitar analítica de inversión con estrictos estándares de seguridad y gobernanza financiera.
- **Propiedad Técnica de Principio a Fin (End-to-End Ownership):** Responsabilidad directa sobre el ciclo de vida completo: especificación técnica, diseño de pipelines, automatización CI/CD, monitorización y soporte en producción.`,
    details_en: `Current role as Data Engineer within the Investment Team at ING Bank:
- **Agile & Scrum in an International Squad:** Daily collaboration within a distributed cross-border Scrum squad, participating in sprint ceremonies, backlog grooming, and standups across engineering hubs.
- **Cross-Border Technical Coordination:** Active participation in architecture design sessions and synchronization meetings with international engineering teams.
- **Data Pipelines & Cloud Architecture:** Engineering ingestion and transformation pipelines leveraging cloud infrastructure (BigQuery) for robust investment analytics under banking compliance.
- **End-to-End Technical Ownership:** Direct responsibility across the full lifecycle: architectural design, data modeling, automated CI/CD pipelines, observability, and production reliability.`,
    impact_es: 'Desarrollo de pipelines de datos de inversión en un entorno Agile internacional con propiedad técnica de inicio a fin.',
    impact_en: 'Engineering investment data pipelines in an international Agile environment with end-to-end technical ownership.',
    metrics: [
      { label: 'Metodología', value: 'Agile & Scrum' },
      { label: 'Squad', value: 'Internacional & Agile' },
      { label: 'Ownership', value: 'End-to-End Técnico' },
    ],
    techStack: ['Agile / Scrum', 'Data Engineering', 'Python', 'SQL', 'Google Cloud (GCP)', 'BigQuery', 'CI/CD Pipelines', 'International Squads']
  },
  {
    id: 'bidradar_auction_intelligence_etl',
    stage: 'independent_systems',
    operator: 'BatchETL_OllamaSLM_Operator',
    state: 'running',
    duration: 'En Desarrollo (v3.35)',
    pool: 'ai_scraping_pool',
    tries: '1/1',
    executionDate: '2026-11-02T14:18:00Z',
    title_es: 'BidRadar · Pipeline de Datos de Subastas Públicas & SLM Local (v3.35)',
    title_en: 'BidRadar · Multi-Portal Auction Intelligence & Local SLM (v3.35)',
    summary_es: 'Pipeline de datos para ingesta y análisis de 9 portales de subastas públicas (BOE, TGSS, AEAT, etc.) con extracción mediante SLM local (Ollama Qwen 2.5 7B) y tasación financiera.',
    summary_en: 'Production data pipeline ingesting 9 public auction portals (BOE, TGSS, AEAT, etc.) featuring local SLM extraction (Ollama Qwen 2.5 7B) and financial valuation.',
    details_es: `Sistema completo de rastreo, procesamiento estructurado y análisis de subastas públicas y concursales:
- **Ingesta en 2 Fases (Staging Batch ETL):** Separación estricta entre la descarga de datos brutos a base de datos SQLite WAL (sin llamadas a IA) y la fase posterior de análisis en lote, evitando bloqueos y caídas.
- **Parseo DOM Ultrarrápido:** Estandarización de todos los conectores sobre selectolax.lexbor para procesar tablas HTML complejas de tasaciones y cargas en milisegundos.
- **Extracción con SLM Local & Control de VRAM:** Uso de Ollama con Qwen 2.5 7B en local a 0€ de coste de API, con inicio automático del servicio y desalojo de memoria GPU ('keep_alive: 0') al terminar el lote.
- **Modelo de Tasación Determinista:** Cálculo del margen neto estimado: ENP = EMV - (EBP + ETC + ELC), con filtros contra anomalías y cálculo de portes geolocalizados.
- **Notificaciones Automatizadas:** Despacho de avisos individuales a Telegram con fichas en Telegraph Instant View.`,
    details_en: `Complete public and bankruptcy auction data pipeline:
- **2-Phase Staging Batch ETL:** Raw ingestion into SQLite WAL mode decoupled from AI parsing, eliminating WAF blocks and network bottlenecks.
- **Fast DOM Parsing:** All 9 portal connectors standardized on selectolax.lexbor to parse legal appraisal tables efficiently.
- **Local SLM Extraction with VRAM Control:** Ollama running Qwen 2.5 7B locally with zero API cost and automatic GPU memory eviction ('keep_alive: 0') upon batch completion.
- **Financial Calculation Engine:** Net margin formula: ENP = EMV - (EBP + ETC + ELC) with anomaly filtering and geofenced transport costs.
- **Automated Dispatch:** Item-level notifications sent via Telegram Bot API with Telegraph Instant View dossiers.`,
    impact_es: 'Pipeline funcional que automatiza la ingesta masiva de 9 fuentes públicas heterogéneas, normaliza la información con IA local y calcula márgenes económicos con coste de infraestructura mínimo.',
    impact_en: 'Fully automated pipeline aggregating 9 heterogeneous public sources, normalizing data with local AI, and computing valuations with near-zero infrastructure cost.',
    github: 'https://github.com/antonioverdu6/BidRadar',
    metrics: [
      { label: 'Portales integrados', value: '9 Portales' },
      { label: 'Inferencia IA', value: 'Ollama Qwen 2.5 7B (Local)' },
      { label: 'Base de datos', value: 'SQLite WAL Mode' },
    ],
    techStack: ['Python 3.14', 'Ollama SLM', 'Lexbor HTML5', 'SQLite WAL', 'Pydantic v2', 'Telegram Bot API', 'Docker']
  },
  {
    id: 'waves_music_platform_ai',
    stage: 'independent_systems',
    operator: 'DjangoChannelsVectorOperator',
    state: 'success',
    duration: 'Real-Time WebSockets',
    pool: 'fullstack_web_pool',
    tries: '1/1',
    executionDate: '2023-11-20T11:15:00Z',
    title_es: 'Waves · Plataforma Social de Música con Búsqueda Vectorial e IA',
    title_en: 'Waves · Social Music Platform with Vector Search & Audio AI',
    summary_es: 'Plataforma social de descubrimiento musical con búsqueda semántica híbrida (BM25 + Qdrant Vector Search), perfilado genético "Music DNA" (Librosa/CLAP), mensajería en tiempo real con WebSockets (Django Channels & Redis) e ingesta automatizada con YouTube Music y AudD API.',
    summary_en: 'Social music discovery platform featuring hybrid semantic search (BM25 + Qdrant Vector Search), personalized "Music DNA" profiling (Librosa/CLAP audio features), real-time WebSockets (Django Channels & Redis), and automated ingestion via YouTube Music & AudD API.',
    details_es: `Plataforma musical completa impulsada por IA y comunicación en tiempo real:
- **Búsqueda Semántica Híbrida (Qdrant + BM25):** Combinación de búsqueda tradicional léxica (BM25) con búsqueda neuronal vectorial utilizando SentenceTransformers y Qdrant Vector Database para descubrimiento contextual intuitivo.
- **Motor "Music DNA" & Recomendación Inteligente:** Algoritmo de perfilado que construye un mapa genético de gustos musicales analizando interacciones del usuario y extrayendo características de audio (MFCC, CLAP, Librosa).
- **Comunicación en Tiempo Real (WebSockets):** Sistema de chat instantáneo y notificaciones en vivo implementado con Django Channels (capa ASGI) y Redis como message broker.
- **Ingesta Multimedia & Reconocimiento de Audio:** Integración automatizada con YouTube Music (ytmusicapi, yt-dlp), reconocimiento de fragmentos de audio con la API de AudD, sincronización de letras y almacenamiento en Cloudinary.
- **Arquitectura Backend & DevOps:** Django REST Framework, base de datos relacional PostgreSQL, tareas asíncronas en segundo plano con Celery workers y contenedores orquestados con Docker Compose.`,
    details_en: `Comprehensive social music platform powered by AI and real-time communication:
- **Hybrid Semantic Search (Qdrant + BM25):** Fuses traditional lexical BM25 retrieval with state-of-the-art vector embeddings (SentenceTransformers & Qdrant Vector Database) for contextual music discovery.
- **"Music DNA" & Intelligent Recommendations:** Proprietary profiling engine mapping users' musical genetics by combining behavioral feedback with acoustic feature extraction (MFCC, CLAP, Librosa).
- **Real-Time Communication (WebSockets):** Instant messaging and live push notifications built with Django Channels (ASGI) and Redis as the pub/sub message broker.
- **Multimedia Ingestion & Audio Fingerprinting:** Automated syncing via YouTube Music (ytmusicapi, yt-dlp), audio recognition with AudD API, background lyrics syncing, and Cloudinary media storage.
- **Backend Architecture & DevOps:** Django REST Framework, PostgreSQL persistence, asynchronous task workers with Celery, and reproducible deployments using Docker Compose.`,
    impact_es: 'Arquitectura desacoplada de alto rendimiento que combina búsqueda vectorial, procesamiento de señales de audio con IA y mensajería en tiempo real sobre WebSockets.',
    impact_en: 'High-throughput decoupled architecture combining vector semantic search, audio AI signal processing, and real-time WebSockets.',
    github: 'https://github.com/antonioverdu6/ListenList',
    metrics: [
      { label: 'Búsqueda Semántica', value: 'Qdrant Vector DB + BM25' },
      { label: 'Motor de Audio', value: 'Music DNA (Librosa / CLAP)' },
      { label: 'Tiempo Real', value: 'WebSockets (Channels + Redis)' },
    ],
    techStack: ['Django REST', 'React', 'Qdrant Vector DB', 'Django Channels', 'WebSockets', 'Redis', 'Celery', 'Librosa (Audio AI)', 'SentenceTransformers', 'Cloudinary', 'PostgreSQL', 'Docker Compose']
  },
  {
    id: 'agentic_graphrag_reasoning_engine',
    stage: 'independent_systems',
    operator: 'AgenticAIOperator',
    state: 'queued',
    duration: 'Queued · Roadmap Q1 2027',
    pool: 'gpu_analytics_pool',
    tries: '0/1',
    executionDate: '2027-01-15T00:00:00Z',
    title_es: 'Motor Autónomo de Agentes & GraphRAG para Inteligencia Financiera',
    title_en: 'Autonomous Multi-Agent & GraphRAG Financial Intelligence Engine',
    summary_es: 'Sistema agéntico de recuperación aumentada por grafos (GraphRAG) que combina grafos de conocimiento (Neo4j), bases vectoriales y modelos de razonamiento profundo locales para análisis financiero multi-fuente autónomo.',
    summary_en: 'Autonomous Graph-based Retrieval Augmented Generation (GraphRAG) engine fusing Neo4j knowledge graphs, vector embeddings, and deep reasoning models for multi-source financial intelligence.',
    details_es: `Próxima iniciativa de arquitectura de IA en cola (Estado: QUEUED):
- **Arquitectura GraphRAG:** Fusión de bases de datos de grafos (Neo4j) y búsqueda vectorial para capturar relaciones complejas y entidades interconectadas en balances corporativos e información regulatoria.
- **Orquestación Multi-Agente:** Coordinación de agentes especializados (agente de ingesta, agente de verificación factual, agente de síntesis cuantitativa) con protocolos de comunicación estructurados (LangGraph / AutoGen).
- **Inferencia Local & Modelos Abiertos:** Evaluación comparativa con DeepSeek-R1 y Qwen 2.5 Coder cuantizados sobre hardware local para garantizar soberanía de datos y 0€ de coste de API externa.
- **Evaluación & Observabilidad Agéntica:** Monitorización de trazas de razonamiento, métricas de fidelidad RAG (Faithfulness, Answer Relevance) y detección de alucinaciones.`,
    details_en: `Upcoming AI architecture initiative in queue (State: QUEUED):
- **GraphRAG Architecture:** Fusing graph databases (Neo4j) with vector search to capture dense entity relationships across corporate balance sheets and regulatory filings.
- **Multi-Agent Orchestration:** Coordinated specialized agents (ingestion, factual verification, quantitative synthesis) with structured communication protocols (LangGraph / AutoGen).
- **Local Inference & Open Weights:** Benchmarking quantized DeepSeek-R1 and Qwen 2.5 on local hardware ensuring complete data sovereignty and zero external API fees.
- **Agentic Observability & Evaluation:** Tracing reasoning chains, tracking RAG faithfulness metrics, and automated hallucination detection.`,
    impact_es: 'Plataforma analítica avanzada capaz de razonar sobre relaciones complejas de datos empresariales mediante grafos y flujos agénticos supervisados.',
    impact_en: 'Advanced analytical platform reasoning over complex enterprise data relations through graph structures and supervised agentic workflows.',
    metrics: [
      { label: 'Arquitectura', value: 'GraphRAG + Neo4j' },
      { label: 'Orquestación', value: 'Multi-Agente Autónomo' },
      { label: 'Modelos', value: 'DeepSeek / Qwen Local' },
    ],
    techStack: ['GraphRAG', 'Neo4j', 'LangGraph', 'DeepSeek-R1', 'Qwen 2.5', 'Python', 'Vector DB', 'Docker']
  }
];

export const DAG_DEPENDENCIES = [
  { from: 'symphonic_discipline_orchestration', to: 'upm_data_systems_degree' },
  { from: 'stem_baccalaureate_san_antonio', to: 'upm_data_systems_degree' },
  { from: 'upm_data_systems_degree', to: 'generative_ai_specialization' },
  { from: 'upm_data_systems_degree', to: 'flight_delay_streaming_mllib' },
  { from: 'upm_data_systems_degree', to: 'conversational_nl_query_engine' },
  { from: 'upm_data_systems_degree', to: 'ing_bank_software_intern' },
  { from: 'ing_bank_software_intern', to: 'ing_bank_investment_data_engineer' },
  { from: 'ing_bank_software_intern', to: 'waves_music_platform_ai' },
  { from: 'generative_ai_specialization', to: 'bidradar_auction_intelligence_etl' },
  { from: 'generative_ai_specialization', to: 'agentic_graphrag_reasoning_engine' }
];
