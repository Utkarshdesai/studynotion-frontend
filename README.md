# StudyNotion - EdTech Platform

StudyNotion is a fully functional EdTech platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables users to create, consume, and rate educational content, providing a seamless and interactive learning experience for students while allowing instructors to showcase their expertise.

## Features
### For Students:
- Browse available courses with descriptions and ratings
- Add courses to the wishlist
- Purchase and enroll in courses
- Access course content (videos, materials, etc.)
- Manage personal account details

### For Instructors:
- Create, update, and delete courses
- Manage course content and pricing
- View insights on course engagement
- Edit profile details

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, Bcrypt, OTP Verification
- **Media Management:** Cloudinary
- **Payments:** Razorpay Integration

## System Architecture
StudyNotion follows a client-server architecture with three main components:
1. **Frontend:** React.js application that communicates with the backend via REST APIs.
2. **Backend:** Node.js and Express.js server handling business logic and authentication.
3. **Database:** MongoDB for storing user data, courses, and transactions.

## API Endpoints
### Authentication
- `POST /api/auth/signup` - User registration (student/instructor)
- `POST /api/auth/login` - User login and JWT token generation
- `POST /api/auth/verify-otp` - OTP verification for account security
- `POST /api/auth/forgot-password` - Password reset request

### Courses
- `GET /api/courses` - Fetch all available courses
- `GET /api/courses/:id` - Fetch course details by ID
- `POST /api/courses` - Create a new course (Instructor only)
- `PUT /api/courses/:id` - Update an existing course
- `DELETE /api/courses/:id` - Delete a course
- `POST /api/courses/:id/rate` - Rate a course

## Installation & Setup
### Prerequisites:
- Node.js (v16+)
- MongoDB (local or cloud instance)




   

