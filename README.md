# 🌐 Modern MERN Social Media App

![Social Media Header](https://img.shields.io/badge/MERN-Social%20Media-blueviolet?style=for-the-badge)

A fully functional, robust, and modern Social Media application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for real-time communication.

## ✨ Features

- **Authentication System** (Login/Register/Logout)
- **User Profiles** (Edit Profile, Change Avatar)
- **Posts** (Create, Read, Update, Delete)
- **Interactions** (Like, Comment, Save Posts)
- **Real-time Chat & Notifications** using Socket.io
- **Followers / Following System**
- **Responsive Design**

## 🚀 Tech Stack

- **Frontend:** React, Redux, Axios, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.io
- **Authentication:** JWT (JSON Web Tokens)

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pavithrabhat9/social-media.git
   cd social-media
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd client
   npm install
   ```

4. **Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URL = your_mongodb_uri
   ACCESS_TOKEN_SECRET = your_access_token_secret
   REFRESH_TOKEN_SECRET = your_refresh_token_secret
   ```

5. **Run the Application (Backend):**
   ```bash
   npm run dev
   ```

6. **Run the Application (Frontend):**
   Open a new terminal window/tab, and run:
   ```bash
   cd client
   npm start
   ```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
