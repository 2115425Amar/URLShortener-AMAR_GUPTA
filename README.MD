### ✅ Deliverable 1: GitHub Repository Structure

#### `README.md` (I'll write it below)

It will contain:

* Project Overview
* Setup Instructions
* API Documentation (all routes with payload examples)
* Optional Features

---

### ✅ Deliverable 2: Bonus - Postman Collection and Swagger Documentation

I'll generate:

* A ready-to-import **Postman collection**
* A **Swagger OpenAPI v3 spec (`swagger.json`)** for documentation and testing

---

### ✅ Deliverable 3: Optional Hosting / Docker Setup

I'll provide:

* A basic `Dockerfile` and `docker-compose.yml`
* Setup guide if you want to host it via services like **Render**, **Railway**, **Vercel (for frontend)** or using **Docker locally**

---

### ✅ Next Step

Let’s start with **`README.md`** below 👇

---

## 📘 `README.md`

```markdown
# URL Shortener Service 🚀

A full-featured URL shortener backend built using Node.js, Express, MongoDB, and JWT authentication. Supports:
- URL shortening (with/without user auth)
- Custom slug/alias support
- Auth (Register/Login/Logout)
- User-specific URL tracking
- Short URL redirection

---

## 📁 Project Structure

```

📦 BACKEND
┣ 📂src
┃ ┣ 📂controller
┃ ┣ 📂dao
┃ ┣ 📂middleware
┃ ┣ 📂models
┃ ┣ 📂routes
┃ ┣ 📂services
┃ ┣ 📂utils
┣ 📄app.js
┣ 📄.env

````

---

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/url-shortener-backend.git
   cd url-shortener-backend/BACKEND
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment:
   Create a `.env` file with the following:

   ```env
   MONGO_URL=mongodb://localhost:27017/urlshortener
   JWT_SECRET=your_jwt_secret
   APP_URL=http://localhost:3000/
   ```

4. Run server:

   ```bash
   npm start
   ```

---

## 🧪 API Documentation

### ✅ Auth Routes (`/api/auth`)

#### Register

```http
POST /api/auth/register
```

**Body:**

```json
{
  "name": "Amar",
  "email": "amar@example.com",
  "password": "123456"
}
```

#### Login

```http
POST /api/auth/login
```

**Body:**

```json
{
  "email": "amar@example.com",
  "password": "123456"
}
```

#### Logout

```http
POST /api/auth/logout
```

#### Get Current User

```http
GET /api/auth/me
```

**Requires:** Auth token cookie

---

### 🔗 URL Shortener Routes (`/api/create`)

#### Create short URL (with or without auth)

```http
POST /api/create
```

**Body:**

```json
{
  "url": "https://google.com",
  "slug": "goog"  // Optional
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:3000/goog"
}
```

#### Redirect to long URL

```http
GET /:id
```

---

### 👤 User Routes (`/api/user`)

#### Get all URLs created by the user

```http
POST /api/user/urls
```

**Requires:** Auth token cookie
**Response:**

```json
{
  "message": "success",
  "urls": [
    {
      "short_url": "abc123",
      "full_url": "https://example.com"
    }
  ]
}
```

---

## 🧰 Technologies Used

* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication
* nanoid (for unique short links)
* dotenv, cors, cookie-parser

---

## 📦 Bonus

* [ ] Postman collection: `postman_collection.json`
* [ ] Swagger doc: `swagger.json`

---

## 🐳 Optional: Docker Setup

### `Dockerfile`

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

### `docker-compose.yml`

```yaml
version: '3'
services:
  backend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/urlshortener
      - JWT_SECRET=your_jwt_secret
      - APP_URL=http://localhost:3000/
    depends_on:
      - mongo
  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

---

## 📎 Future Improvements

* Analytics dashboard
* QR code generation
* Email notification for expired URLs

---

## 👨‍💻 Author

Built with 💻 by Amar Gupta

```

---

### ✅ Next Deliverables:
- Postman collection
- Swagger spec

Would you like me to generate those now?  
Also let me know if you want the `README.md` in a file download.
```

## 🧪 API Endpoints

### Authentication

| Method | Endpoint        | Description        |
|--------|------------------|--------------------|
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |
| POST   | /api/auth/logout   | Logout user       |
| GET    | /api/auth/me       | Get current user  |

### Short URL

| Method | Endpoint         | Description                    |
|--------|------------------|--------------------------------|
| POST   | /api/create      | Create short URL (auth optional) |
| GET    | /:id             | Redirect to original URL       |

### User

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | /api/user/urls   | Get URLs of logged-in user |

---