# 🏋️‍♂️ Fitness Tracker - MERN Stack Application

A comprehensive fitness tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js) that helps users track their workouts, monitor progress, and achieve their fitness goals.

## ✨ Features

- **User Authentication**: Secure signup and login system
- **Dashboard**: Overview of daily fitness statistics and progress
- **Workout Tracking**: Add and track various types of workouts
- **Progress Visualization**: Charts and graphs showing weekly progress
- **Workout History**: View workouts by date using an interactive calendar
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Additional Pages**: Tutorials, Blogs, and Contact sections

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Material-UI** - UI components and icons
- **Styled Components** - CSS-in-JS styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **MUI X Charts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Fitness-Tracker
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   
   The server `.env` file is already created with default values:
   ```
   MONGODB_URL=mongodb://localhost:27017/fitness-tracker
   JWT=your-super-secret-jwt-key-here-make-it-long-and-secure-fitness-tracker-2024
   PORT=8080
   ```
   
   **Important**: Change the JWT secret to a secure random string in production!

5. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # If using local MongoDB
   mongod
   
   # Or if using MongoDB as a service
   sudo systemctl start mongod
   ```

6. **Start the application**
   
   Open two terminal windows:
   
   **Terminal 1 - Start the backend server:**
   ```bash
   cd server
   npm start
   ```
   
   **Terminal 2 - Start the frontend client:**
   ```bash
   cd client
   npm start
   ```

7. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 📱 Usage

### Getting Started
1. **Sign Up**: Create a new account with your name, email, and password
2. **Sign In**: Log in with your credentials
3. **Dashboard**: View your fitness overview and today's statistics

### Adding Workouts
Use the "Add New Workout" section on the dashboard with this format:
```
#Category
-Workout Name
-5 setsX15 reps
-30 kg
-10 min
```

Example:
```
#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min
```

### Features Overview
- **Dashboard**: View calories burned, workout count, and weekly progress
- **Workouts**: Browse workouts by date using the calendar
- **Tutorials**: Learn about fitness tracking and workout tips
- **Blogs**: Read fitness-related articles and tips
- **Contact**: Get in touch with support

## 🔧 API Endpoints

### Authentication
- `POST /api/user/signup` - Create new user account
- `POST /api/user/signin` - User login

### Workouts
- `GET /api/user/dashboard` - Get dashboard statistics
- `GET /api/user/workout` - Get workouts by date
- `POST /api/user/workout` - Add new workout

## 🎨 Project Structure

```
Fitness-Tracker/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # State management
│   │   ├── utils/          # Utilities and themes
│   │   └── api/            # API calls
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the MONGODB_URL in `.env` file
   - Verify MongoDB is accessible on the specified port

2. **Port Already in Use**
   - Change the PORT in `.env` file
   - Kill any processes using ports 3000 or 8080

3. **JWT Token Issues**
   - Clear browser localStorage
   - Ensure JWT secret is set in `.env` file

4. **CORS Errors**
   - Verify the API baseURL in `client/src/api/index.js`
   - Ensure both frontend and backend are running

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Contact support through the Contact page in the app

---

**Happy Fitness Tracking! 💪**
