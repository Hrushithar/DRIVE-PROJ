cat << 'EOF' > README.md
# 🚀 DRIVE — File Upload Web App

A sleek and simple file upload application built using **Node.js**, **Express**, and **MongoDB**, with file storage handled by **Firebase Storage**. Users can upload files through a beautiful drag-and-drop UI. File metadata is stored securely in MongoDB.

---

## 📸 Preview

> Add a screenshot here (e.g. upload popup, file name showing, Firebase dashboard preview)

---

## ✨ Features

- 📂 Drag & drop file upload interface  
- 🔒 File metadata stored in MongoDB  
- ☁️ Files saved directly to Firebase Cloud Storage  
- 🎨 Responsive UI with TailwindCSS + Flowbite  
- ✅ Input validation using `express-validator`  
- 🔐 Passwords hashed with `bcrypt`  
- 🌘 Light/Dark mode support  
- 🧪 JWT authentication ready (optional)

---

## 📁 Folder Structure

\`\`\`
DRIVE/
├── config/
│   ├── db.js
│   ├── firebase.config.js
│   └── multer.config.js
├── middlewares/
│   └── authe.js
├── models/
│   └── user.model.js
├── routes/
│   ├── index.routes.js
│   └── user.routes.js
├── views/
│   ├── home.ejs
│   └── register.ejs
├── public/
│   └── (static files)
├── .env
├── app.js
└── package.json
\`\`\`

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB running locally or MongoDB Atlas URI
- A Firebase project with storage bucket enabled
- A Firebase service account key JSON file

### 🔧 Installation Steps

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/drive.git
cd drive

# Install dependencies
npm install

# Add Firebase key
# Place your firebaseServiceAccountKey.json in /config

# Set up .env
touch .env
\`\`\`

### 🧪 Example `.env`:

\`\`\`
MONGO_URI=mongodb://localhost:27017/drive
PORT=3000
\`\`\`

### 🧠 Run the App

\`\`\`bash
npm start
\`\`\`

---

## 🧪 Technologies Used

- **Node.js** + **Express**
- **MongoDB** with **Mongoose**
- **Firebase Cloud Storage**
- **Multer + multer-firebase-storage**
- **EJS** templating
- **TailwindCSS** + **Flowbite**
- **bcrypt**, **dotenv**, **express-validator**

---

## 🙌 Author

Made with ❤️ by [Hrushith AR](https://github.com/hrushithar)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
EOF
