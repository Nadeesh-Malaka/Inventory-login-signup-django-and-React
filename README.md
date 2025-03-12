# Inventory Login/Signup with Django and React

This project is an inventory management application with user authentication (login and signup) built using a **Django** backend and a **React** frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [Backend (Django)](#backend-django)
  - [Frontend (React)](#frontend-react)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This application allows users to log in or sign up and manage an inventory system. The backend is powered by Django with Django REST Framework for API endpoints, while the frontend is built with React for a dynamic user interface.

## Features
- User authentication (login and signup)
- Inventory management (add, view, update, delete items - *to be implemented based on your actual features*)
- RESTful API for communication between frontend and backend
- Responsive UI with React

## Tech Stack
- **Backend**: Django, Django REST Framework, Python
- **Frontend**: React, JavaScript, HTML, CSS
- **Package Manager**: npm (for React)

## Prerequisites
Before running the project, ensure you have the following installed:
- [Python](https://www.python.org/downloads/) (version 3.8 or higher)
- [Node.js and npm](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/downloads)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Installation and Setup

### Backend (Django)
1. Navigate to the `backend` folder:
   ```bash
   cd backend

Got it! I understand now—you're saying the `inventory` folder in your GitHub repository appears empty, but locally, you have your React frontend files in the `inventory` folder. You can start the React frontend with `npm start` from the `inventory` folder, and you can also navigate to the `backend` folder (Django) and start the backend. Since everything is working locally, you just want to ensure the setup is correct, document it in a `README.md` file, and upload the complete project to GitHub properly.

Let’s break this down:

### Step 1: Ensure All Files Are Committed to GitHub
First, let’s make sure all your frontend files (in the `inventory` folder) are uploaded to GitHub. Since you mentioned the `inventory` folder is empty on GitHub, it’s possible the files weren’t staged or committed properly.

#### 1.1 Navigate to the Project Root
Your project structure looks like this:
```
Inventory-auth-django/
├── backend/        # Django backend
├── inventory/      # React frontend
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
```
Ensure you’re in the `C:\Users\nadee\Desktop\New folder\Inventory-auth-django` directory (the parent directory containing both `backend` and `inventory`):
```powershell
cd C:\Users\nadee\Desktop\New folder\Inventory-auth-django
```

#### 1.2 Verify the `inventory` Folder Locally
Check that the `inventory` folder contains your React files:
```powershell
Get-ChildItem -Path inventory -Recurse
```
You should see files like `src/`, `public/`, `package.json`, etc. If these files are present, they just weren’t uploaded to GitHub.

#### 1.3 Stage and Commit the Missing Files
Stage all files (including the `inventory` folder):
```powershell
git add .
```
Commit the changes:
```powershell
git commit -m "Add React frontend files in inventory folder"
```
Push to GitHub:
```powershell
git push origin main
```

#### 1.4 Verify on GitHub
- Go to your GitHub repository (`https://github.com/Nadeesh-Malaka/Inventory-login-signup-django-and-React`) and refresh the page.
- You should now see the `inventory` folder with all its contents (e.g., `src/`, `public/`, etc.).

#### 1.5 (Optional) Double-Check `.gitignore`
If the `inventory` folder still doesn’t upload, check if there’s a `.gitignore` file excluding it:
```powershell
Get-ChildItem .gitignore
```
If it exists, open it with `notepad .gitignore` and ensure there’s no line like `inventory/` or `node_modules/`. If `node_modules/` is listed, that’s fine (you don’t want to upload it), but `inventory/` should not be ignored.

---

### Step 2: Create a Comprehensive `README.md` File
Now that your project is fully uploaded to GitHub, let’s create a detailed `README.md` file to document the project setup, requirements, and how to run it. Since you’ve confirmed the project works locally (React frontend with `npm start` and Django backend), I’ll include those details.

#### 2.1 Open or Create `README.md`
If you already have a `README.md`, you can edit it:
```powershell
notepad README.md
```
If you don’t have one, create it:
```powershell
echo "# Inventory-login-signup-django-and-React" >> README.md
notepad README.md
```

#### 2.2 Add the Following Content to `README.md`
Here’s a detailed `README.md` template for your project:

```markdown
# Inventory Login/Signup with Django and React

This project is an inventory management application with user authentication (login and signup) built using a **Django** backend and a **React** frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [Backend (Django)](#backend-django)
  - [Frontend (React)](#frontend-react)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   .\venv\Scripts\activate  # On Windows
   # source venv/bin/activate  # On macOS/Linux
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
   *If `requirements.txt` is missing, install Django and Django REST Framework manually:*
   ```bash
   pip install django djangorestframework
   ```
4. Run migrations to set up the database:
   ```bash
   python manage.py migrate
   ```
5. (Optional) Create a superuser to access the Django admin:
   ```bash
   python manage.py createsuperuser
   ```

### Frontend (React)
1. Navigate to the `inventory` folder:
   ```bash
   cd inventory
   ```
2. Install the required Node.js packages:
   ```bash
   npm install
   ```
   *This will install dependencies listed in `package.json`.*

## Running the Project
1. **Start the Django Backend**:
   - From the `backend` folder, run:
     ```bash
     python manage.py runserver
     ```
   - The backend will run on `http://localhost:8000` by default.
   - You can access the Django admin at `http://localhost:8000/admin` (log in with the superuser credentials).

2. **Start the React Frontend**:
   - Open a new terminal and navigate to the `inventory` folder:
     ```bash
     cd inventory
     ```
   - Run the React development server:
     ```bash
     npm start
     ```
   - The frontend will run on `http://localhost:3000` by default and should automatically open in your browser.

3. **Access the Application**:
   - Open `http://localhost:3000` in your browser to interact with the application.
   - The React frontend will communicate with the Django backend via API requests (ensure the backend URL is correctly configured in your React app, e.g., in `inventory/src`).

