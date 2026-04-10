# Personal Dashboard – Fullstack App with Dockerized Infrastructure

## 🚀 Overview

This is a simple fullstack application that allows users to view and manage:

* 📝 Notes
* 🔗 Useful links

While the functionality is intentionally minimal, the **main focus of this project is infrastructure and environment setup**, not complex business logic.

The goal is to understand how a modern application is built, containerized, and run in a consistent, reproducible way.

---

## 🧱 Architecture

The application is composed of three main services:

```
Browser
   ↓
Frontend (React + Nginx)
   ↓
Backend (Spring Boot REST API)
   ↓
Database (MySQL)
```

All services are containerized and orchestrated using Docker Compose.

---

## 🛠️ Technologies Used

### Frontend

* React
* Nginx (for serving static files)

### Backend

* Spring Boot
* REST API
* Flyway (database migrations)

### Database

* MySQL

### Infrastructure

* Docker
* Docker Compose

---

## 🐳 Docker Setup

Each part of the application runs in its own container:

| Service  | Description                           |
| -------- | ------------------------------------- |
| db       | MySQL database with persistent volume |
| backend  | Spring Boot application               |
| frontend | React app served via Nginx            |

Docker Compose connects all services via a shared network and manages startup.

---

## ⚙️ Running the Project

### 1. Build backend

```bash
cd backend
mvn clean package -DskipTests
```

### 2. Start all services

```bash
docker-compose up -d --build
```

---

## 🌐 Access the Application

* Frontend: http://localhost:3000
* Backend API: http://localhost:8080/api

---

## 🔄 Development Workflow

### Backend changes

```bash
cd backend
mvn clean package -DskipTests
docker-compose up -d --build backend
```

### Frontend changes

```bash
docker-compose up -d --build frontend
```

---

## 🗄️ Database & Migrations

* Managed using Flyway
* Migrations run automatically on backend startup
* Database data is persisted using Docker volumes

### Reset database (development only)

```bash
docker-compose down -v
docker-compose up -d --build
```

---

## 🧠 Key Concepts Learned

This project emphasizes:

* Containerization of services
* Separation of concerns (FE, BE, DB)
* Service-to-service communication via Docker network
* Environment-based configuration
* Persistent storage using Docker volumes
* Handling startup dependencies (backend vs database)

---

## 🎯 Purpose of the Project

This is not meant to be a feature-rich application.

Instead, it demonstrates:

> How to build, run, and manage a fullstack application using modern DevOps practices.

---

## 🚀 Future Improvements

* Add CI/CD pipeline
* Deploy to cloud (AWS)
* Introduce Kubernetes for orchestration
* Add authentication & user management
* Improve UI/UX

---

## 📌 Summary

A simple app, but a strong foundation.

This project focuses on **how applications run**, not just how they are written.
