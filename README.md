# CTSE-Assignment-1 – Secure Node.js Authentication Microservice 🚀

This project is a secure, containerized microservice for user authentication built with **Node.js**, **Express**, and **MongoDB**, and deployed using **Azure App Service**. It demonstrates DevOps and DevSecOps best practices including CI/CD, environment-based configuration, and security scanning via **Snyk**.

---

## 🔧 Features

- ✅ JWT-based Authentication (`/register`, `/login`)
- 🔒 Secure password hashing with `bcryptjs`
- 📦 MongoDB integration using Mongoose
- 📁 Environment variables for secrets and DB connection
- 🔄 Automated CI/CD pipeline using GitHub Actions
- 🐳 Docker-based containerization
- ☁️ Azure App Service Deployment
- 🔍 Security scanning with **Snyk**

---

## 🧪 API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | `/users/register`| Register a new user       |
| POST   | `/users/login`   | User login + JWT token    |
| GET    | `/users`         | Get list of users (secure)|

---

## ⚙️ Tech Stack

- **Node.js** + **Express**
- **MongoDB Atlas**
- **Docker** + **Docker Hub**
- **GitHub Actions** (CI/CD)
- **Azure App Service** (Linux Container)
- **Snyk** (Security Testing)

---

## 🛠️ Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Y3S1-GRP22/CTSE-Assignment-1

# Navigate into the project
cd CTSE-Assignment-1

# Install dependencies
npm install

# Create .env file
touch .env
# Add the following variables:
# MONGO_URI=your_mongodb_connection
# JWT_SECRET=your_secret_key

# Start the server
npm start
