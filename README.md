# HIREHUB
HireHub is a MERN stack job portal application that connects job seekers with recruiters. It allows users to register as job seekers or employers, post or apply for jobs, and manage their profile — all in a modern, responsive web app.

![Preview](public/preview.png)


## 🚀 Features

- 👤 User authentication (Register/Login)
- 🧑‍💼 Employer dashboard to post and manage jobs
- 📄 Job seeker dashboard to apply for jobs
- 🔍 Job listings with filters and search
- 📩 Email notification system
- ☁️ Image/file uploads via Cloudinary
- 🌐 Fully responsive frontend (React + Tailwind)


## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js (for password hashing)
- Nodemailer (for email services)

### Cloud & DevOps:
- Cloudinary (for file/image uploads)
- MongoDB Atlas (for cloud database)
- .env for environment variables


## 🔧 Environment Variables (`.env`)

Create a `.env` file in the root of the project and add the following:

```env
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret_key

MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_app_password
MAIL_HOST=smtp.gmail.com

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=hirehub
```
# Installation
## Clone the repo
```bash
git clone https://github.com/Dhvaniparghi2003/HIREHUB.git
cd Hire_hub_project
```

## Install  dependencies
```bash
npm install
```
## Running the App
Make sure MongoDB is running or your Atlas connection is active.
```bash
npm start
```
🎉The app should now be running at: http://localhost:3000

💬 Contact
For any questions or feedback, reach out at [parghidhvani@gmail.com].
