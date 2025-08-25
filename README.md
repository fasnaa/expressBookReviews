# 📚 Book Review & Rating Management System

A RESTful **backend application** for an online bookstore where users can **browse books**, **search by ISBN, author, or title**, and **manage book reviews**.  
Built with **Node.js** and **Express.js**, featuring **JWT authentication** and asynchronous APIs for concurrent multi-user access.

---

## 🚀 Features

### **General Users**
- View all available books
- Search books by **ISBN**, **author**, or **title**
- Read book reviews and ratings
- Register and log in to the application

### **Registered Users**
- Add a book review
- Edit their own book reviews
- Delete their own book reviews

### **System Features**
- RESTful API architecture
- JWT-based authentication & session management
- Supports multiple users concurrently via **Async/Await** and **Promises**
- Tested using **Postman** & integrated with **Axios**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Authentication:** JWT, Express-Session
- **Database:** Preloaded JSON / MongoDB *(if integrated)*
- **API Testing:** Postman, Axios
- **Asynchronous Handling:** Async/Await & Promises

---

## 📂 Project Structure

book-review-api/
├── controllers/ # Business logic
├── routes/ # API endpoints
├── models/ # Data & schema
├── middleware/ # Auth middleware
├── config/ # DB & JWT configuration
├── utils/ # Helper functions
├── app.js # Main Express app
├── package.json
└── README.md


---

## 🔑 API Endpoints

| **Method** | **Endpoint**         | **Description**                  | **Auth Required** |
|------------|----------------------|-----------------------------------|-------------------|
| GET       | `/books`            | Get all books                     | ❌ No |
| GET       | `/books/isbn/:isbn` | Get book by ISBN                 | ❌ No |
| GET       | `/books/author/:name` | Get books by author            | ❌ No |
| GET       | `/books/title/:title` | Get books by title            | ❌ No |
| POST      | `/register`        | Register a new user              | ❌ No |
| POST      | `/login`          | Login as a user                  | ❌ No |
| POST      | `/reviews/:isbn` | Add a review                     | ✅ Yes |
| PUT       | `/reviews/:isbn` | Modify own review               | ✅ Yes |
| DELETE    | `/reviews/:isbn` | Delete own review               | ✅ Yes |

---

## 🧪 Testing

- Tested all endpoints using **Postman**.
- Used **Axios** with **Async/Await** and **Promises** to validate client-server communication.

---

## 📌 How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/book-review-api.git

# Navigate to project folder
cd book-review-api

# Install dependencies
npm install

# Start the server
npm start
