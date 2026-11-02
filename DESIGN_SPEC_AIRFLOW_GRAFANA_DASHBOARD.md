# SYSTEM DESIGN SPECIFICATION: AIRFLOW & GRAFANA/DATADOG EXECUTIVE DATA PORTFOLIO

> **Target Audience:** Strategy Consulting Firms (McKinsey & Company, Bain & Company, BCG), Technology Practices (QuantumBlack, Bain Vector), Enterprise Analytics & Data Engineering Leadership.  
> **Candidate:** Antonio Verdú Salpico — Student of Data Systems Engineering (*Universidad Politécnica de Madrid - UPM*).  
> **Aesthetic Archetype:** Production Data Platform / Airflow DAG & Datadog/Grafana Observability Console.

---

## 1. Executive Philosophy & Strategy

Rather than a generic developer portfolio with dark-mode game aesthetics or animated spinning circles, this website is structured as an **enterprise-grade Data Platform & Telemetry Console**.

### Why This Style Succeeds with Bain & McKinsey:
1. **Immediate Proof of Hard Skills:** It demonstrates mastery of real Data Engineering concepts (DAGs, distributed systems, telemetry, microservices, SLAs, orchestration) rather than just stating them on a CV.
2. **Extreme Structured Thinking (MECE):** A Directed Acyclic Graph (DAG) is the ultimate visual embodiment of causality, modularity, and structured problem solving.
3. **High Executive Seriousness:** It mirrors the tools used by Fortune 500 enterprises and top-tier tech consultancies to monitor multi-million-euro data pipelines.
4. **Memorable Differentiation:** Partners and recruiters review hundreds of identical standard resumes; an interactive Airflow & Datadog console is unforgettable.

---

## 2. Visual Identity & Design System Tokens

### 2.1 Color Palette (Datadog Dark Slate + Grafana Metrics + Airflow State Colors)
- **App Canvas (`--bg-canvas`):** `#0a0e17` (Deep Obsidian / Datadog Midnight)
- **Panel Surface (`--bg-panel`):** `#111827` (Slate 900)
- **Panel Hover / Elevated (`--bg-panel-hover`):** `#1a2336` (Slate 850)
- **Panel Borders (`--border-grid`):** `#1f293d` / `#24334d` (Crisp structural line)
- **Airflow State Success (`--state-success`):** `#10b981` (Emerald 500) | Background: `rgba(16, 185, 129, 0.12)`
- **Airflow State Running (`--state-running`):** `#3b82f6` (Blue 500) | Background: `rgba(59, 130, 246, 0.15)`
- **Grafana Warning / Latency (`--state-warning`):** `#f59e0b` (Amber 500)
- **Telemetry Cyan / Datadog Accent (`--telemetry-cyan`):** `#06b6d4` / `#0284c7`
- **Text Headings (`--text-primary`):** `#f8fafc` (Slate 50)
- **Text Body (`--text-secondary`):** `#94a3b8` (Slate 400)
- **Text Muted / Code (`--text-muted`):** `#64748b` (Slate 500)

### 2.2 Typography
- **Primary Interface:** Inter / system-ui (Crisp, clean, executive readability)
- **Telemetry & Metadata:** JetBrains Mono / SFMono / Consolas (`font-mono`)
  - Used for DAG run IDs, timestamps, execution durations, memory/latency metrics, and status pills.

### 2.3 Structural Components
- **Top Brand & Navigation Bar (Airflow/Grafana Header):**
  - Cluster status badge: `CLUSTER: upm-data-prod`
  - DAG ID: `dag_id: antonio_verdu_career_v2`
  - Run Status: `SUCCESS` (Pulsing green indicator)
  - UTC / Live Timestamp clock
  - Global Actions: Quick Download CV (`export_cv.pdf`), Language Toggle (`ES | EN`), Incident Dispatcher (`Contact`).
- **Telemetry Metric Ribbon (Datadog KPI Row):**
  - KPI 1: Uptime / Track Record (`UPM Data Systems Engineering 2021-2026`)
  - KPI 2: Distributed Architectures Deployed (`3 Active End-to-End Systems`)
  - KPI 3: Polyglot Technology Nodes (`22+ Production Frameworks & Tools`)
  - KPI 4: Core Competencies (`Bilingual ES/EN`, `High-Performance Musical Discipline`, `Supply Chain Ops`)

---

## 3. Core Functional Views (The 4 Dashboards)

The platform organizes information across 4 switchable tabs (modeled after Grafana dashboards and Airflow UI):

### View 1: `[ DAG PIPELINE VIEW ]` (Replaces the old Tech Circle)
*An interactive Directed Acyclic Graph (DAG) visualizing Antonio's trajectory, academic foundation, technical pipelines, and business impact.*
- **Visual Nodes with Status & Execution Times:**
  1. `task_01_discipline_artistic_symphony`: Clarinetist in Cáceres Symphonic Band (Values: extreme discipline, synchronization, pressure management). `[SUCCESS · 2018-2022]`
  2. `task_02_degree_data_engineering`: UPM Data Systems Engineering (Values: distributed systems, quantitative modeling). `[SUCCESS · 2021-2026]`
  3. `task_03_operations_supply_chain`: Frutícola RioJerte (Values: inventory logistics, deadline delivery, operations). `[SUCCESS · 2023-PRES]`
  4. `task_04_realtime_flight_streaming`: Spark MLlib + Kafka + Cassandra Distributed System. `[SUCCESS · 450ms]`
  5. `task_05_intelligent_data_bot`: Rasa NLP + Spark Distributed Query Engine. `[SUCCESS · 320ms]`
  6. `task_06_scalable_web_listenlist`: React + Django REST Spotify Data API. `[SUCCESS · 180ms]`
  7. `task_07_consulting_strategy_impact`: Bain / McKinsey Strategy Consulting Execution. `[RUNNING · READY TO DEPLOY]`
- **Interactive Capabilities:** Clicking any DAG node opens an **Inspector Drawer** with task execution metadata, operators used (`SparkSubmitOperator`, `DockerOperator`, `PythonOperator`), input/output datasets, and strategic business takeaways.

### View 2: `[ CAPABILITIES & INFRASTRUCTURE MATRIX ]`
*Structured like a Datadog Service & Infrastructure Map, categorizing Antonio's technical expertise into enterprise computing pillars:*
1. **Pillar 1: Distributed Systems & Big Data Orchestration**
   - Technologies: Apache Spark, Apache Kafka, Apache NiFi, Docker, Kubernetes, HDFS.
   - Enterprise Value: Streaming ingestion, distributed transformations, fault tolerance.
2. **Pillar 2: Software Engineering & Cloud Architectures**
   - Technologies: Python, Django REST Framework, React, Node.js, Linux, Git, WebSockets.
   - Enterprise Value: Decoupled microservices, secure RESTful APIs, high-availability frontends.
3. **Pillar 3: Database Engineering & Polyglot Storage**
   - Technologies: PostgreSQL, MongoDB, Cassandra, SQLite, Elasticsearch.
   - Enterprise Value: Optimized OLTP schema design, scalable OLAP columnar storage.
4. **Pillar 4: Advanced Analytics, AI & Machine Learning**
   - Technologies: PyTorch, Generative AI (UPM 2025), Spark MLlib, Rasa NLP, Analytical SQL.
   - Enterprise Value: Real-time predictive modeling, conversational data interfaces.

### View 3: `[ ACTIVE SERVICES / PROJECTS ]`
*Presented as live production microservices in a Datadog Service Catalog:*
- **Service 1: `flight-delay-predictor-stream` (IBDN)**
  - Architecture: Kafka bus -> Spark MLlib (Scala) cluster -> Cassandra / MongoDB -> WebSockets.
  - Consulting Impact: Real-time airport delay forecasting with low latency.
- **Service 2: `intelligent-data-bot` (EdgePoseBot)**
  - Architecture: Rasa conversational NLP -> Spark distributed computation -> MongoDB NoSQL.
  - Consulting Impact: Natural-language data democratization for non-technical stakeholders.
- **Service 3: `listenlist-platform`**
  - Architecture: React interactive UX -> Django REST API -> Spotify Web API -> JWT auth.
  - Consulting Impact: Zero-redundancy cloud data synchronization and lightweight scalability.

### View 4: `[ AUDIT LOGS & INCIDENT DISPATCHER ]`
*Airflow/Datadog Execution Log & Contact System:*
- **Career Execution Log:** Formatted as structured chronological events with log levels (`INFO`, `SUCCESS`, `METRIC`), describing his music career, agricultural operations, and academic milestones.
- **Incident Dispatcher / Contact Terminal:** Formspree-connected executive contact form to initiate inquiries, interview requests, or advisory contact with priority level tags (`P1 - Strategic Consulting Recruitment`).

---

## 4. Technical Architecture & File Structure

```
src/
├── App.js                     # Root controller, state for active tab & drawer
├── index.css                  # Datadog/Grafana design system & styling rules
├── tailwind.config.js         # Custom palette for telemetry, states & cards
├── config.js                  # Formspree & email configuration
├── data/
│   ├── dagNodes.js            # Node data, operators, dependencies, logs for DAG
│   ├── capabilities.js        # Infrastructure & tech matrix with metrics
│   ├── projects.js            # Enterprise microservice projects data
│   └── auditLogs.js           # Chronological career logs with severity levels
├── components/
│   ├── Header.js              # Airflow/Grafana top navigation, cluster bar & CV
│   ├── TelemetryBar.js        # Datadog top KPI / metric ribbon
│   ├── DagView.js             # Interactive Airflow DAG Graph with SVG lines
│   ├── DagNodeDrawer.js       # Slide-over task inspector with logs & details
│   ├── CapabilitiesGrid.js    # Infrastructure & tech node matrix
│   ├── ServicesView.js        # Microservices / project cards (MBB format)
│   ├── AuditLogsView.js       # System logs & timeline view
│   ├── IncidentDispatcher.js  # Executive contact & alerting console
│   └── Footer.js              # System footer with status & direct links
└── locales/
    ├── es/translation.json    # Spanish translations
    └── en/translation.json    # English translations
```

---

## 5. Verification Checklist for the Agent

- [ ] All visuals adhere strictly to Datadog / Grafana / Airflow telemetry aesthetics (no toy gaming glows, no random stars).
- [ ] DAG graph nodes are responsive and interactive with detailed inspection metadata.
- [ ] Full bilingual support (Spanish & English toggle operates seamlessly).
- [ ] CV download (`/CV_Antonio_Verdu_Salpico.pdf`) functions reliably.
- [ ] Contact form works with Formspree and provides clear status feedback.
- [ ] Clean build: `npm.cmd run build` passes with zero errors.
