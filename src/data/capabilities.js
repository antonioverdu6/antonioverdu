export const AIRFLOW_WORKER_POOLS = [
  {
    id: 'pool_distributed_bigdata',
    name_es: 'Pool 1: Big Data & Procesamiento Distribuido',
    name_en: 'Pool 1: Big Data & Distributed Computing',
    slots: '128 Slots / High Throughput',
    description_es: 'Herramientas de procesamiento distribuido, mensajería en streaming y orquestación de contenedores.',
    description_en: 'Distributed computing, streaming messaging, and container orchestration toolset.',
    techs: [
      { name: 'Google Cloud Platform (GCP)', level: 'Avanzado (ING Inversión)', role_es: 'BigQuery, Cloud Storage y transición a nube pública en banca', role_en: 'BigQuery, Cloud Storage & enterprise public cloud banking adoption', icon: 'SiGooglecloud' },
      { name: 'Apache Spark', level: 'Avanzado', role_es: 'Procesamiento distribuido en memoria y Spark MLlib', role_en: 'In-memory distributed analytics & Spark MLlib', icon: 'SiApachespark' },
      { name: 'Apache Kafka', level: 'Avanzado', role_es: 'Mensajería publish/subscribe de baja latencia', role_en: 'Low-latency publish/subscribe streaming', icon: 'SiApachekafka' },
      { name: 'Stack ELK & APM', level: 'Avanzado', role_es: 'Elasticsearch, Logstash, Kibana y Elastic APM para observabilidad', role_en: 'ELK Stack & Elastic APM for distributed logs and trace observability', icon: 'SiElasticsearch' },
      { name: 'Docker / Compose', level: 'Avanzado', role_es: 'Contenerización de microservicios y despliegues reproducibles', role_en: 'Microservice containerization and reproducible deploys', icon: 'SiDocker' },
      { name: 'HDFS / Hadoop', level: 'Intermedio', role_es: 'Almacenamiento distribuido para histórico analítico', role_en: 'Distributed historical analytic file storage', icon: 'SiApache' },
      { name: 'Grafana', level: 'Avanzado', role_es: 'Dashboards de telemetría y métricas en tiempo real', role_en: 'Real-time telemetry and cluster metrics visualization', icon: 'SiGrafana' }
    ]
  },
  {
    id: 'pool_software_apis',
    name_es: 'Pool 2: Desarrollo Software, Python & APIs',
    name_en: 'Pool 2: Software Engineering, Python & APIs',
    slots: '96 Slots / High Concurrency',
    description_es: 'Lenguajes de programación, desarrollo backend, APIs REST y frameworks web.',
    description_en: 'Programming languages, backend development, REST APIs, and web frameworks.',
    techs: [
      { name: 'Python (NumPy, Pandas, Scikit)', level: 'Avanzado (Core)', role_es: 'Pipelines ETL, estructuras de datos, modelado y automatización', role_en: 'Data pipelines, scientific computing, ETL and automation', icon: 'SiPython' },
      { name: 'JavaScript & React', level: 'Avanzado', role_es: 'Arquitecturas frontend escalables en banca (ING Bank) y aplicaciones web', role_en: 'Scalable frontend architectures for enterprise banking (ING) and web apps', icon: 'FaReact' },
      { name: 'Django / REST Framework', level: 'Avanzado', role_es: 'Desarrollo de APIs REST, ORM, serializadores y autenticación JWT', role_en: 'REST API engineering, ORM, serializers, and JWT auth', icon: 'SiDjango' },
      { name: 'Jest & Unit Testing', level: 'Avanzado', role_es: 'Pruebas unitarias de componentes y validación de interfaces', role_en: 'Unit testing and component verification suites', icon: 'SiJest' },
      { name: 'Azure DevOps & Scrum', level: 'Avanzado', role_es: 'Integración continua (CI/CD) y metodologías ágiles en FinTech', role_en: 'Continuous integration and agile sprint coordination in enterprise FinTech', icon: 'SiAzuredevops' },
      { name: 'Pydantic v2', level: 'Avanzado', role_es: 'Validación de esquemas y modelado de datos', role_en: 'Deterministic domain data modeling and validation', icon: 'SiPython' },
      { name: 'Lexbor HTML5 Engine', level: 'Avanzado', role_es: 'Extracción y parseo DOM rápido con selectolax', role_en: 'Ultra-fast DOM parsing engine with selectolax', icon: 'SiHtml5' },
      { name: 'Git & GitHub', level: 'Avanzado', role_es: 'Control de versiones y flujos colaborativos', role_en: 'Collaborative version control and workflow hygiene', icon: 'FaGit' },
      { name: 'Linux / Bash', level: 'Avanzado', role_es: 'Administración de sistemas y scripting de shell', role_en: 'Server administration and operational shell automation', icon: 'SiLinux' },
      { name: 'Scala', level: 'Intermedio', role_es: 'Modelos predictivos fuertemente tipados con Spark', role_en: 'Strongly typed predictive engines with Spark', icon: 'SiScala' }
    ]
  },
  {
    id: 'pool_polyglot_storage',
    name_es: 'Pool 3: Bases de Datos & Almacenamiento',
    name_en: 'Pool 3: Database Systems & Persistence',
    slots: '48 Slots / High Consistency',
    description_es: 'Sistemas de bases de datos relacionales, NoSQL, columnares y embebidas.',
    description_en: 'Relational, NoSQL, wide-column, and embedded database engines.',
    techs: [
      { name: 'SQLite (WAL Mode)', level: 'Avanzado', role_es: 'Base de datos embebida con alta concurrencia en modo WAL', role_en: 'High-throughput transactional database in WAL mode', icon: 'SiSqlite' },
      { name: 'PostgreSQL', level: 'Avanzado', role_es: 'Modelado relacional, consultas SQL complejas y transacciones', role_en: 'Relational DB, transactional modeling, complex SQL', icon: 'SiPostgresql' },
      { name: 'MongoDB', level: 'Avanzado', role_es: 'Almacenamiento NoSQL para documentos JSON', role_en: 'Semi-structured JSON document NoSQL datastore', icon: 'SiMongodb' },
      { name: 'Apache Cassandra', level: 'Intermedio', role_es: 'Persistencia columnar distribuida para lecturas rápidas', role_en: 'Distributed wide-column store for low read latencies', icon: 'SiApache' },
      { name: 'Qdrant Vector Database', level: 'Avanzado', role_es: 'Base de datos vectorial para búsqueda semántica híbrida y embeddings', role_en: 'Vector database for hybrid semantic search and embeddings', icon: 'SiQdrant' },
      { name: 'Neo4j (Knowledge Graphs)', level: 'Avanzado', role_es: 'Base de datos orientada a grafos para arquitecturas GraphRAG', role_en: 'Graph database engine for interconnected GraphRAG architectures', icon: 'SiNeo4J' },
      { name: 'Elasticsearch', level: 'Intermedio', role_es: 'Indexación y búsqueda de texto completo', role_en: 'Indexed full-text retrieval and analytical aggregations', icon: 'SiElasticsearch' }
    ]
  },
  {
    id: 'pool_ai_advanced_analytics',
    name_es: 'Pool 4: Inteligencia Artificial, SLMs Locales & Analítica',
    name_en: 'Pool 4: AI, Local SLMs & Analytics',
    slots: '32 Slots / GPU & Compute',
    description_es: 'Modelos de lenguaje locales, embeddings y librerías de machine learning.',
    description_en: 'Local language models, embeddings, and machine learning libraries.',
    techs: [
      { name: 'Ollama SLM (Qwen 2.5 7B)', level: 'Avanzado', role_es: 'Extracción semántica local con gestión de ciclo de vida de GPU', role_en: 'Local semantic extraction with automated GPU lifecycle management', icon: 'SiOpenai' },
      { name: 'IA Generativa & RAG', level: 'Avanzado (UPM 2025)', role_es: 'Modelos Transformer, embeddings vectoriales y RAG', role_en: 'Enterprise RAG, vector embeddings, advanced prompting', icon: 'SiOpenai' },
      { name: 'LangGraph & Multi-Agent AI', level: 'Avanzado (Queued Engine)', role_es: 'Orquestación de agentes autónomos y protocolos de comunicación GraphRAG', role_en: 'Autonomous agentic graph orchestration & supervised workflows', icon: 'SiPython' },
      { name: 'PyTorch', level: 'Intermedio', role_es: 'Diseño e inferencia de redes neuronales', role_en: 'Deep learning neural network modeling and inference', icon: 'SiPytorch' },
      { name: 'Librosa & CLAP (Audio AI)', level: 'Avanzado', role_es: 'Extracción de características de audio (MFCC) para perfilado Music DNA', role_en: 'Audio feature extraction & acoustic embedding similarity', icon: 'SiPython' },
      { name: 'Spark MLlib', level: 'Avanzado', role_es: 'Modelos predictivos sobre grandes volúmenes de datos', role_en: 'Distributed machine learning models over big datasets', icon: 'SiApachespark' },
      { name: 'Rasa Conversational AI', level: 'Avanzado', role_es: 'Chatbots orientados a tareas con procesamiento de lenguaje natural', role_en: 'Task-oriented conversational agents with natural language processing', icon: 'SiRasa' }
    ]
  }
];

export const SYSTEMS_COMPETENCIES = [
  {
    id: 'mece_structuring',
    title_es: 'Enfoque Estructurado & Modularidad',
    title_en: 'Structured Thinking & Modularity',
    desc_es: 'Descomposición clara de problemas complejos en componentes modulares independientes y mantenibles.',
    desc_en: 'Clear decomposition of complex technical problems into independent, maintainable modular components.'
  },
  {
    id: 'quantitative_rigor',
    title_es: 'Rigor Analítico & Validación Empírica',
    title_en: 'Quantitative Rigor & Data Validation',
    desc_es: 'Comprobación de hipótesis basada en datos, pruebas unitarias y validación métrica de resultados.',
    desc_en: 'Testing and validating hypotheses grounded in empirical data, unit testing, and measurable outcomes.'
  },
  {
    id: 'resource_optimization',
    title_es: 'Optimización de Recursos & Eficiencia',
    title_en: 'Resource Optimization & Efficiency',
    desc_es: 'Diseño de arquitecturas eficientes (uso de SLMs locales a 0€ de coste, gestión de memoria GPU, minimización de latencias).',
    desc_en: 'Designing cost-efficient architectures (zero-cost local SLMs, GPU VRAM eviction, minimal latency pipelines).'
  },
  {
    id: 'resilience_teamwork',
    title_es: 'Metodología Agile & Squads Internacionales',
    title_en: 'Agile Mindset & International Cross-Hub Squads',
    desc_es: 'Trabajo diario en sprints Agile/Scrum en squad internacional distribuido y coordinación técnica entre hubs globales con propiedad técnica de inicio a fin.',
    desc_en: 'Daily Agile/Scrum delivery collaborating in a distributed international squad and cross-hub engineering with end-to-end technical ownership.'
  }
];
