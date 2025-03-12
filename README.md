# Inventory Login/Signup with Django and React

This project is an inventory management application with user authentication (login and signup) built using a **Django** backend and a **React** frontend. The project is structured with both components in a single root directory for easy navigation and setup.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)

## Project Overview
This application provides user authentication (login and signup) and inventory management functionality. The Django backend handles API endpoints, while the React frontend delivers a dynamic user interface. The project is designed to be cloned and run from the root directory, with separate setup steps for the backend and frontend.

## Features
- User authentication (login and signup)
- Inventory management (add, view, update, delete items - *to be implemented based on your actual features*)
- RESTful API for communication between frontend and backend
- Responsive UI with React

## Tech Stack
- **Backend**: Django, Django REST Framework, Python
- **Frontend**: React, JavaScript, HTML, CSS
- **Database**: SQLite (default, can be changed to PostgreSQL or MySQL)
- **Package Manager**: npm (for React)

## Prerequisites
Before running the project, ensure you have the following installed:
- [Python](https://www.python.org/downloads/) (version 3.8 or higher)
- [Node.js and npm](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/downloads)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Nadeesh-Malaka/Inventory-login-signup-django-and-React.git
   cd Inventory-login-signup-django-and-React
   ```

2. **Backend (Django)**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv venv
     .\venv\Scripts\activate  # On Windows
     # source venv/bin/activate  # On macOS/Linux
     ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
     *If `requirements.txt` is missing, install Django and Django REST Framework manually:*
     ```bash
     pip install django djangorestframework
     ```
   - Run migrations to set up the database:
     ```bash
     python manage.py migrate
     ```
   - (Optional) Create a superuser for the Django admin:
     ```bash
     python manage.py createsuperuser
     ```

3. **Frontend (React)**:
   - Navigate to the `inventory` folder:
     ```bash
     cd inventory
     ```
   - Install the required Node.js packages:
     ```bash
     npm install
     ```
     *This will install dependencies listed in `package.json`.*

## Running the Project
1. Open two terminal windows or tabs.
2. **Start the Django Backend**:
   - In the first terminal, navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Activate the virtual environment (if not already active):
     ```bash
     .\venv\Scripts\activate
     ```
   - Run the server:
     ```bash
     python manage.py runserver
     ```
   - The backend will run on `http://localhost:8000`. Access the admin at `http://localhost:8000/admin` with superuser credentials.

3. **Start the React Frontend**:
   - In the second terminal, navigate to the `inventory` folder:
     ```bash
     cd inventory
     ```
   - Run the React development server:
     ```bash
     npm start
     ```
   - The frontend will run on `http://localhost:3000` and should open automatically in your browser.

4. **Access the Application**:
   - Open `http://localhost:3000` to use the application. The React frontend will communicate with the Django backend via API requests.

<h1>Thank You</h1>
