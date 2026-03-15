
# ✈️ Travola App

Travola is a full-stack web application built with **Django** and **React** that provides a modern platform for managing travel-related services and experiences.

---

## 🚀 Tech Stack

### Backend

* 🐍 Django
* 🔐 Django REST Framework (API)
* 🗄️ SQLite / PostgreSQL (configurable)
* 🔑 JWT Authentication (optional)

### Frontend

* ⚛️ React
* 🎨 CSS / Tailwind / UI Library (customizable)
* 🌐 Axios / Fetch API

---

## ✨ Features

* 👤 User Authentication (Login & Signup)
* 🧳 Travel Listings / Destinations
* 🔎 Search & Filter Functionality
* ❤️ Favorites / Saved Trips
* 📱 Responsive Design
* ⚡ REST API powered backend
* 🔐 Secure authentication system

---

## 📂 Project Structure

```
travola/
│
├── backend/        # Django project
│   ├── api/
│   ├── users/
│   └── manage.py
│
├── frontend/       # React app
│   ├── src/
│   └── public/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/travola.git
cd travola
```

---

### 2️⃣ Backend Setup (Django)

```bash
cd backend

python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt
```

#### Apply migrations

```bash
python manage.py migrate
```

#### Run the server

```bash
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000/
```

---

### 3️⃣ Frontend Setup (React)

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000/
```

---

## 🔗 API Configuration

Make sure the React app points to the Django backend:

```js
const API_URL = "http://127.0.0.1:8000/api/";
```

---

## 🧪 Running Tests

### Backend

```bash
python manage.py test
```

### Frontend

```bash
npm test
```

---


## 🌍 Deployment

You can deploy:

* Backend → Render / Railway / DigitalOcean / AWS
* Frontend → Vercel / Netlify
* Database → PostgreSQL (recommended for production)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Githinji William**


