<div align="center">

<img width="160" src="../web/img/logo.png" />

# 🎵 Topsify

### Plataforma educativa de streaming musical y análisis de datos 🚀

<p align="center">
  <b>Topsify</b> es un proyecto orientado al aprendizaje de bases de datos, SQL y análisis de plataformas de streaming musical.  
  Incluye ejercicios, workshops y una estructura completa de datos inspirada en servicios modernos de música.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite">
  <img src="https://img.shields.io/badge/SQL-Learning-blue?style=for-the-badge&logo=mysql">
  <img src="https://img.shields.io/badge/Open%20Source-Project-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Exercises-Included-orange?style=for-the-badge">
</p>

<p align="center">
  <a href="#-acerca-de-topsify">Acerca</a> •
  <a href="#-características">Características</a> •
  <a href="#-estructura-de-la-base-de-datos">Base de Datos</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-ejercicios-y-workshops">Workshops</a>
</p>

</div>

---

# 🌊 Acerca de Topsify

**Topsify** es una plataforma educativa enfocada en el aprendizaje práctico de:

- 📊 Bases de datos
- 🗄️ SQL y SQLite
- 📈 Reportes y análisis de datos
- 🎵 Sistemas de streaming musical
- 🧠 Modelado relacional

El proyecto simula una gran plataforma de música con usuarios, artistas, álbumes, canciones y características de audio similares a Spotify.

---

# ✨ Características

## 🎵 Sistema Musical

- 🎧 Gestión de artistas
- 💿 Álbumes y canciones
- 📂 Features de audio
- 👤 Usuarios registrados
- 📈 Estadísticas musicales

---

## 📊 Aprendizaje SQL

- 🗄️ Consultas SQL reales
- 📑 Reportes JSON
- 🔍 Ejercicios guiados
- 🧠 Workshops progresivos
- ⚡ Prácticas de análisis de datos

---

## 🚀 Herramientas Educativas

- 📚 Ejercicios por días
- 🧪 Sistema de pruebas automáticas
- 🖥️ Integración con VSCode
- 🔥 Base de datos lista para usar

---

# 📸 Preview

<div align="center">

<img src="./web/img/logo.png" width="300"/>

</div>

---

# 🧠 Estructura de la Base de Datos

## 📦 Entidades principales

- 👤 Users
- 🎤 Artists
- 💿 Albums
- 🎵 Tracks
- 📊 Features

---

# 🗂️ Modelo Relacional

```mermaid
erDiagram
    users {
        INTEGER id PK
        TEXT username
        TEXT email
    }

    artists {
        TEXT id PK
        TEXT name
    }

    albums {
        TEXT id PK
        TEXT artist_id FK
        TEXT name
    }

    tracks {
        TEXT id PK
        TEXT album_id FK
        TEXT name
    }

    features {
        TEXT track_id PK
        REAL danceability
        REAL energy
        REAL tempo
    }

    artists ||--o{ albums : has
    albums ||--o{ tracks : contains
    tracks ||--|| features : described_by
