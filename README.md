# Nexus 🌐
Connecting people through a modern, seamless, and real-time social experience.

![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)

## What is Nexus?
Nexus is a modern social media platform built to provide a premium, SaaS-like experience for users to connect, share, and engage. From real-time messaging to dynamic content discovery, every feature is designed to be fast, responsive, and visually stunning.

## Features
- **Real-Time Chat & Notifications** - Instant messaging and live alerts powered by Socket.io
- **Dynamic Content Feed** - Create, read, update, and delete posts with image and video support
- **Social Interactions** - Like, comment, and save posts seamlessly
- **Follower Ecosystem** - Build your network by following and unfollowing users
- **User Profiles & Avatars** - Personalized setup with customizable avatars and bios
- **Discover Page** - Explore new content from around the network
- **Dark & Light Mode** - Effortlessly toggle between a sleek dark theme and a clean light theme

## Tech Stack
| Layer | Technologies |
| --- | --- |
| **Language** | JavaScript (ES6+) |
| **Frontend** | React, Redux, Vanilla CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Real-time** | Socket.io |
| **Storage** | Cloudinary |
| **Authentication** | JWT (JSON Web Tokens) |

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/pavithrabhat9/social-media.git
   ```
2. Install dependencies for both backend and frontend:
   ```bash
   npm install
   cd client && npm install
   ```
3. Create a `.env` file in the root directory and add your credentials:
   ```env
   MONGODB_URL=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_secret
   REFRESH_TOKEN_SECRET=your_refresh_secret
   ```
4. Start the development servers:
   ```bash
   # Run backend
   npm run dev
   # Run frontend (in a new terminal)
   cd client && npm start
   ```

## Why Nexus?
Every user deserves a digital space that feels premium and responsive. Nexus was built with one goal: to create a beautiful, modern social media experience without the bloat. 

Built with purpose. Feedback and contributions are always welcome.
