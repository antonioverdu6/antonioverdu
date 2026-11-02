export const AIRFLOW_PYTHON_CODE = `"""
Pipeline: antonio_verdu_career_pipeline.py
Author: Antonio Verdú Salpico (Data Systems Engineer, UPM)
Description:
    Directed Acyclic Graph orchestrating candidate academic foundations
    at Universidad Politécnica de Madrid, operational coordination,
    multi-portal auction intelligence, and distributed Big Data systems.
"""

from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.apache.spark.operators.spark_submit import SparkSubmitOperator
from airflow.providers.docker.operators.docker import DockerOperator

default_args = {
    'owner': 'antonio_verdu',
    'depends_on_past': False,
    'start_date': datetime(2018, 9, 1),
    'email': ['antoverdusal@gmail.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 0,
    'retry_delay': timedelta(minutes=5),
    'execution_timeout': timedelta(hours=2),
}

with DAG(
    dag_id='antonio_verdu_career_pipeline',
    default_args=default_args,
    description='Data Systems Engineering Trajectory & Production Systems',
    schedule_interval='@continuous',
    catchup=False,
    tags=['upm', 'data-systems', 'big-data', 'auction-intelligence', 'python', 'docker'],
) as dag:

    # Stage 1: Discipline & Foundations
    task_symphonic_discipline = PythonOperator(
        task_id='symphonic_discipline_orchestration',
        python_callable=lambda: print("Banda Sinfónica de Cáceres: 70+ musicians live coordination"),
        doc_md="""
        ### Banda Sinfónica de la Excma. Diputación Provincial de Cáceres
        - Clarinetista (2018-2022).
        - Desarrollo de hábitos de disciplina, concentración técnica y trabajo en equipo.
        """
    )

    task_baccalaureate = PythonOperator(
        task_id='stem_baccalaureate_san_antonio',
        python_callable=lambda: print("Colegio San Antonio de Padua: Bachillerato Tecnológico (Cáceres, 2019-2021)"),
        doc_md="""
        ### Bachillerato Tecnológico · Colegio San Antonio de Padua (Cáceres)
        - Modalidad científico-tecnológica: matemáticas avanzadas, física y dibujo técnico.
        - Base cuantitativa y analítica para el ingreso a la ingeniería en la UPM.
        """
    )

    # Stage 2: Quantitative Engineering & UPM Academic Foundation
    task_upm_degree = PythonOperator(
        task_id='upm_data_systems_degree',
        python_callable=lambda: print("UPM ETSIT: Distributed Systems, Advanced Calculus, Big Data (2021-2026)"),
        doc_md="""
        ### Grado en Ingeniería y Sistemas de Datos (UPM)
        - Computación distribuida, algoritmos paralelos, minería de datos y bases de datos.
        """
    )

    task_generative_ai = PythonOperator(
        task_id='generative_ai_specialization',
        python_callable=lambda: print("UPM 2025: Transformers, RAG & LLMs"),
        doc_md="Especialización en Inteligencia Artificial Generativa: arquitecturas Transformer y RAG."
    )

    # Stage 3: UPM Distributed Computing & Big Data Labs
    task_flight_delay_spark = SparkSubmitOperator(
        task_id='flight_delay_streaming_mllib',
        application='src/spark_jobs/flight_delay_ml.scala',
        conn_id='spark_cluster_upm',
        conf={
            'spark.executor.instances': '2',
            'spark.kafka.bootstrap.servers': 'kafka:9092',
            'spark.cassandra.connection.host': 'cassandra-node-1'
        },
        doc_md="Predicción de retrasos de vuelos en tiempo real usando Spark MLlib, Kafka, Cassandra y WebSockets."
    )

    task_conversational_bot = DockerOperator(
        task_id='conversational_nl_query_engine',
        image='rasa/data-query-bot:prod',
        command='rasa run --enable-api --cors "*"',
        environment={'SPARK_MASTER': 'spark://spark-master:7077'},
        doc_md="Interfaz conversacional con Rasa NLP conectada a cluster analítico Spark."
    )

    # Stage 4: Enterprise Banking, FinTech & Public Cloud (ING Bank)
    task_ing_intern = PythonOperator(
        task_id='ing_bank_software_intern',
        python_callable=lambda: print("ING Bank: Software Engineer Intern (Frontend, REST APIs, Jest, Scrum)"),
        doc_md="Desarrollo de interfaces bancarias escalables y testing en entornos ágiles."
    )

    task_ing_data_engineer = PythonOperator(
        task_id='ing_bank_investment_data_engineer',
        python_callable=lambda: print("ING Bank Investment: Data Engineer (Agile/Scrum, International Cross-Border Squad)"),
        doc_md="""
        ### Data Engineer · Investment Team · ING Bank
        - Metodología Agile & Scrum en squad internacional distribuido con hubs globales.
        - Pipelines de datos y adopción cloud con BigQuery para servicios analíticos de inversión.
        - End-to-End Technical Ownership: arquitectura, pipelines, CI/CD y gobernanza.
        """
    )

    # Stage 5: Independent Platforms & Autonomous AI
    task_bidradar_etl = DockerOperator(
        task_id='bidradar_auction_intelligence_etl',
        image='antonioverdu/bidradar:v3.35',
        command='python main.py --mode=staging-batch-etl',
        environment={
            'OLLAMA_HOST': 'http://localhost:11434',
            'OLLAMA_MODEL': 'qwen2.5:7b',
            'SQLITE_WAL': 'true'
        },
        doc_md="""
        ### BidRadar (v3.35.4)
        - Ingesta desacoplada en 2 fases sobre 9 portales de subastas (BOE, TGSS, AEAT, Escrapalia, etc.).
        - Parseo DOM ultrarrápido con selectolax.lexbor HTML5.
        - Inferencia local con Ollama Qwen 2.5 7B con ciclo de vida de VRAM gestionado.
        - Tasación determinista: ENP = EMV - (EBP + ETC + ELC) y despacho a Telegram.
        """
    )

    task_waves_api = DockerOperator(
        task_id='waves_music_platform_ai',
        image='antonioverdu/waves-platform:latest',
        command='gunicorn redmusical.asgi:application -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000',
        environment={
            'REDIS_URL': 'redis://redis:6379/0',
            'QDRANT_HOST': 'qdrant:6333',
            'CELERY_BROKER': 'redis://redis:6379/1'
        },
        doc_md="""
        ### Waves — The Social Pulse of Music
        - Búsqueda semántica híbrida: BM25 + Qdrant Vector DB con SentenceTransformers.
        - Motor Music DNA: Perfilado genético y extracción de audio con Librosa (MFCC, CLAP).
        - Mensajería y notificaciones en tiempo real con WebSockets (Django Channels & Redis).
        - Ingesta automatizada con YouTube Music (ytmusicapi, yt-dlp) y reconocimiento con AudD API.
        """
    )

    task_agentic_ai = PythonOperator(
        task_id='agentic_graphrag_reasoning_engine',
        python_callable=lambda: print("GraphRAG & Multi-Agent Engine: Queued for Roadmap Q1 2027"),
        doc_md="""
        ### Motor Autónomo de Agentes & GraphRAG (Queued)
        - Fusión de grafos Neo4j con bases vectoriales Qdrant para análisis financiero.
        - Coordinación de agentes autónomos con LangGraph e inferencia local con DeepSeek-R1 / Qwen 2.5.
        """
    )

    # Topological Pipeline Dependencies
    task_symphonic_discipline >> task_upm_degree
    task_baccalaureate >> task_upm_degree

    task_upm_degree >> task_generative_ai
    task_upm_degree >> task_flight_delay_spark
    task_upm_degree >> task_conversational_bot
    task_upm_degree >> task_ing_intern

    task_ing_intern >> task_ing_data_engineer
    task_ing_intern >> task_waves_api

    task_generative_ai >> task_bidradar_etl
    task_generative_ai >> task_agentic_ai
`;
