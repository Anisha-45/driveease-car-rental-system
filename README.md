🚗 DriveEase – Car Rental System
📌 Project Overview

DriveEase is a full-stack Car Rental System that allows users to browse available cars, rent vehicles, return them, and view rental history.

This project is designed with a user-friendly interface and a Spring Boot backend, simulating a real-world car rental platform.

🚀 Features
👤 User Features
🔍 View all available cars
🚗 Rent a car (enter name & number of days)
🔁 Return rented cars
📊 View rental history
🎨 Modern UI with images and animations
🔎 Filter & Sort cars
🔔 Toast notifications & loader
🧠 Smart Features
Real-time availability update
Prevents renting already rented cars
Stores rental history
Local storage for user details
🛠️ Tech Stack
💻 Frontend
HTML5
CSS3
JavaScript (Vanilla JS)
⚙️ Backend
Java
Spring Boot
Spring Data JPA
🗄️ Database
H2 / MySQL (depending on your setup)


📁 Project Structure
CarRentalSystem/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│
├── frontend/
│   ├── index.html
│   ├── cars.html
│   ├── history.html
│   ├── css/
│   ├── js/


🔌 API Endpoints
Method	Endpoint	Description
GET	/cars	Get all cars
POST	/cars/rent	Rent a car
POST	/cars/return/{id}	Return car
GET	/cars/history	Rental history

⚙️ How to Run the Project
🔹 Backend Setup
Open project in IntelliJ / Eclipse
Run:
CarRentalSystemApplication.java
Server starts at:
http://127.0.0.1:8080
🔹 Frontend Setup
Open frontend folder in VS Code
Run using Live Server
Open:
http://127.0.0.1:5500/index.html

💡 Future Enhancements
🔐 User authentication (Login/Signup)
💳 Online payment integration
📍 Location-based search
📱 Mobile responsive improvements
📊 Admin dashboard
🧾 Booking details with date/time

🎯 Learning Outcomes
Full-stack development (Frontend + Backend)
REST API integration
UI/UX design principles
Real-world project architecture

👩‍💻 Author

Anisha Kumari
B.Tech CSE (AI & ML)
Lovely Professional University

⭐ Conclusion

DriveEase demonstrates a complete working car rental system with modern UI and real-time backend integration, making it a strong portfolio project for internships and placements.