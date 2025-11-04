// Replace the project entries below with your actual projects.
// Fields: title, description, image, link
const projects = [
  {
    title: 'ListenList',
    title_en: 'ListenList',
    description: 'Desarrollo de una aplicación web para valorar y comentar música, con autenticación de usuarios y perfiles personalizados.',
    description_en: 'Web application to rate and review music, with user authentication and personalized profiles.',
  // Use the attached image placed in public/images/listenlist.png
  // Put the image file at: public/images/listenlist.png
  // and the app will load it via the public path '/images/listenlist.png'
  image: '/images/listenlist.png',
  imageThumb: '/images/listenlist.png',
  imageFull: '/images/listenlist.png',
  link: '#',
    tech: ['React', 'Django REST', 'Spotify API', 'JWT', 'SQLite'],
    github: 'https://github.com/antonioverdu6/ListenList',
    // 'details' is a longer development description; edit with in-depth notes about design, arquitectura, retos, soluciones, etc.
    details: `
        ListenList es una aplicación web social centrada en la música, desarrollada con **Django (API backend)** y **React (frontend)**. 
        Su objetivo es permitir a los usuarios buscar canciones, valorar y reseñar temas o álbumes utilizando el catálogo en tiempo real de **Spotify**.

        A nivel técnico, la app utiliza la **Spotify Web API** mediante la librería spotipy, lo que evita almacenar todo el catálogo musical localmente. 
        La base de datos solo guarda la información relevante sobre las canciones o álbumes con los que los usuarios interactúan 
        (ID de Spotify, nombre, valoración, comentarios y relación con el usuario).

        En el frontend, React gestiona la experiencia interactiva con componentes dinámicos para búsquedas, resultados y reseñas. 
        El backend, construido con **Django REST Framework**, ofrece endpoints seguros y estructurados que permiten comunicar la interfaz con la API de Spotify.

        Durante el desarrollo, las principales decisiones técnicas se centraron en:
        - Mantener la aplicación **ligera y escalable**, almacenando solo datos necesarios.
        - **Evitar duplicados** en la base de datos al guardar contenido.
        - Diseñar una interfaz **limpia y moderna**, inspirada en los tonos verdes de Spotify (#1db954, #17a74a) y fondos oscuros de alto contraste.
        - Separar frontend y backend para facilitar el mantenimiento y futuras ampliaciones.

        Entre los aprendizajes más destacados están la integración de **APIs externas**, el manejo de **autenticación segura** con claves privadas de Spotify y la importancia de un **modelo de datos eficiente** para evitar redundancia.

        El resultado es una aplicación fluida, social y actualizada en tiempo real, donde los usuarios pueden descubrir música, opinar y compartir experiencias.
        `
  ,
  details_en: `
    ListenList is a social web application focused on music, built with **Django (API backend)** and **React (frontend)**.
    It allows users to search tracks, rate and review songs or albums using the live catalog provided by **Spotify**.

    Technically, the app consumes the **Spotify Web API** (via a lightweight library) so the full catalog isn't stored locally.
    The database saves only relevant metadata for items users interact with (Spotify ID, title, rating, comments and user relation).

    The frontend (React) provides an interactive UX with dynamic components for search results and reviews, while the **Django REST Framework** backend exposes secure, structured endpoints to connect the UI with Spotify's API.

    Key decisions focused on keeping the app **lightweight and scalable**, avoiding duplicated records, and designing a **clean, modern UI** inspired by Spotify-green accents over a dark theme.

    The outcome is a real-time, social application where users can discover music, share opinions and interact around tracks and albums.
    `
  },
  {
    title: 'Sistema de consulta inteligente de datos',
    title_en: 'Intelligent Data Query System',
    description: 'Arquitectura de datos distribuida con procesamiento en Spark y chatbot Rasa conectado a la infraestructura para consultas en lenguaje natural.',
    description_en: 'Distributed data architecture with Spark processing and a Rasa chatbot connected to the infrastructure for natural language queries.',
    image: '/images/rasa-logo.png',
    imageThumb: '/images/rasa-logo.png',
    imageFull: '/images/rasa-logo.png',
    link: '#',
    tech: ['Python', 'Spark', 'MongoDB', 'Rasa', 'Docker'],
    github: 'https://github.com/antonioverdu6/PIDS-Entrega1',
    details: `
        **PIDS-Proyecto1 (EdgePoseBot)** es un sistema completo de **procesamiento y almacenamiento de datos**, desarrollado en el marco de la asignatura Proyectos de Ingeniería de Sistemas de Datos (UPM).  
        El objetivo principal fue construir una infraestructura capaz de **ingestar, procesar y consultar información** mediante un **chatbot inteligente** basado en Rasa.

        El proyecto se compone de tres grandes bloques que integran un flujo completo de ingeniería de datos:

        1. **Infraestructura y almacenamiento**  
        - Ingesta y procesamiento de datos con **Python** y **Apache Spark**, aprovechando su capacidad para trabajar con datos distribuidos.  
        - **MongoDB** como base de datos NoSQL para el almacenamiento de los resultados procesados.  
        - Despliegue y orquestación con **Docker** y **Docker Compose**, facilitando la portabilidad y la ejecución en entornos reproducibles.

        2. **Interacción conversacional**  
        - Implementación de un **chatbot con Rasa**, conectado directamente a la infraestructura de datos.  
        - Permite realizar consultas y ejecutar acciones sobre la información procesada mediante **lenguaje natural**, simulando una interacción humana con el sistema.

        3. **Tecnologías y herramientas utilizadas**  
        - **Procesamiento:** Apache Spark  
        - **Almacenamiento:** MongoDB  
        - **Interfaz conversacional:** Rasa  
        - **Despliegue:** Docker, Docker Compose  
        - **Desarrollo:** Python, VS Code, Google Colab

        Durante el desarrollo se tomaron decisiones clave para asegurar la **modularidad y escalabilidad** del sistema, 
        optando por una arquitectura desacoplada entre el procesamiento y la capa de interacción.  
        También se puso especial énfasis en la **automatización del despliegue** y en la **integración de diferentes componentes** dentro de contenedores coordinados.

        Entre los principales aprendizajes destacan la configuración de entornos distribuidos con Spark, 
        la integración de chatbots con backends de datos y la importancia de diseñar flujos de datos eficientes y mantenibles.

        El resultado es un sistema robusto que combina **procesamiento distribuido, almacenamiento NoSQL y comunicación conversacional**, 
        demostrando una aplicación práctica de la ingeniería de sistemas de datos moderna.
        `
  ,
  details_en: `
    **PIDS-Project1 (EdgePoseBot)** is a complete data processing and storage system developed for a university project in Systems and Data Engineering.
    The main goal was to build an infrastructure that can **ingest, process and query** information via an **intelligent Rasa-based chatbot**.

    The project contains three main blocks: infrastructure and storage (Apache Spark for processing and MongoDB for storage), a conversational interface built with Rasa, and deployment orchestration using Docker and Docker Compose.

    Processing uses **Apache Spark** for distributed computation. The conversational layer (Rasa) connects to the processed dataset allowing natural language querying and actions over the data.

    The system demonstrates modularity, scalability and deployment automation. Key learnings included configuring distributed Spark environments, integrating chatbots with data backends, and designing efficient data flows.

    The result is a robust platform combining distributed processing, NoSQL storage and conversational access to data.
    `
  },
  {
    title: 'Predicción de retrasos de vuelos',
    title_en: 'Flight Delay Prediction',
    description: 'Sistema distribuido de predicción en tiempo real con almacenamiento en múltiples bases de datos y comunicación por WebSockets.',
    description_en: 'Distributed real-time flight delay prediction system with multi-database storage and WebSocket communication.',
    image: '/images/flight_predictions.jpg',
    // If the image isn't present in public/images, the UI will fallback to a placeholder.
    imageThumb: '/images/flight_predictions.jpg',
    imageFull: '/images/flight_predictions.jpg',
    link: '#',
    tech: ['Spark', 'Kafka', 'Flask', 'MongoDB', 'Cassandra', 'Docker'],
    github: 'https://github.com/antonioverdu6/Flight-Predictions-IBDN',
    details: `
        **Flight Predictions - IBDN** es un proyecto de predicción de retrasos de vuelos desarrollado dentro de la asignatura Ingeniería de Big Data en la Nube (IBDN) de la UPM.  
        El objetivo fue construir un sistema distribuido y desplegable que calcule predicciones de retrasos en tiempo real mediante un **frontend interactivo** y un **entorno de procesamiento cloud** basado en múltiples servicios coordinados con Docker.

        El proyecto combina varias tecnologías de ingeniería de datos modernas para cubrir el flujo completo de ingestión, procesamiento, almacenamiento y visualización:

        1. **Procesamiento y predicción**  
        - Implementación de un modelo predictivo con **Apache Spark MLlib**, entrenado para calcular retrasos de vuelos a partir de datos históricos.  
        - El motor de predicción, desarrollado en **Scala**, recibe peticiones desde Flask a través de **Apache Kafka** y devuelve los resultados procesados a distintos destinos.  
        - Arquitectura con **Spark Master** y **dos workers**, simulando un entorno distribuido.

        2. **Comunicación y flujo de datos**  
        - **Kafka** actúa como middleware de mensajería, gestionando los tópicos de entrada (*flight-delay-ml-request*) y salida (*flight-predictions-output*).  
        - **Apache NiFi** orquesta el flujo de datos, automatizando la recepción de predicciones y su almacenamiento en archivos y bases de datos.

        3. **Almacenamiento e infraestructura**  
        - **MongoDB** almacena los resultados de predicciones y datos de entrenamiento.  
        - **HDFS** guarda las predicciones históricas en formato CSV, accesibles desde su interfaz web.  
        - **Cassandra** se añadió como base de datos complementaria, alojando las distancias entre aeropuertos y mejorando la eficiencia de las consultas del modelo.  
        - Todo el sistema se ejecuta en contenedores gestionados con **Docker y Docker Compose**, lo que facilita su despliegue local o en entornos cloud.

        4. **Interfaz y predicciones en tiempo real**  
        - Un servidor **Flask** convierte las peticiones de usuario en mensajes de Kafka, calcula predicciones y las devuelve mediante **WebSockets**, permitiendo actualizaciones instantáneas sin recargar la página.  
        - El frontend muestra las predicciones y métricas de vuelo de forma sencilla y directa.

        Durante el desarrollo se aprendió a integrar múltiples componentes distribuidos dentro de una arquitectura coordinada, a gestionar flujos de datos en tiempo real y a combinar distintas bases de datos para optimizar rendimiento y escalabilidad.  
        También se profundizó en el uso de contenedores y servicios orquestados como entorno estándar para proyectos de ingeniería de datos.

        El resultado es un sistema **modular, escalable y totalmente automatizado**, capaz de predecir retrasos de vuelos y almacenar la información en diferentes capas de persistencia, representando un ejemplo práctico de ecosistema Big Data en la nube.
        `
  ,
  details_en: `
    **Flight Predictions - IBDN** is a project that implements flight delay prediction within a cloud-oriented Big Data engineering course.
    The system aims to deliver real-time delay predictions through an interactive frontend and a cloud processing environment coordinated with Docker services.

    The project integrates an **Apache Spark MLlib** model for prediction (implemented in Scala), a Kafka-based messaging layer for requests and responses, and storage layers including MongoDB, HDFS and Cassandra.

    A Flask server accepts user requests, forwards messages to Kafka, and the prediction engine returns results which are pushed to clients via WebSockets for instant updates.

    The result is a modular, scalable and automated system capable of predicting flight delays and storing results across different persistence layers—an applied example of Big Data systems in the cloud.
    `
  }
];

export default projects;
