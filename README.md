## Backend Repository
Laravel Backend Repository: [soft84ya_laravelReact](https://github.com/soft84ya/soft84ya_laravelReact)

# 🏗️ laravelReact Construction Project
This is a **construction project website** built using **React (frontend)** and **Laravel (backend)**.

---

## 🚀 React + Vite Setup

This template provides a **minimal setup** to get **React working in Vite** with HMR and some **ESLint rules**.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses **Babel** for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses **SWC** for Fast Refresh.

---

## 🛠️ **Project Setup**

### **🔹 Backend (Laravel Setup)**

```sh
# Create Laravel Project
composer create-project laravel/laravel backend 

# Set up MySQL Database (Edit .env file and set DB_DATABASE=soft84ya_db)

# Run Migrations
php artisan migrate 

# Install Laravel Sanctum for API authentication
php artisan install:api 

# Seed Database with Fake Data
php artisan db:seed
