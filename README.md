# 📬 MERN Stack Email Scheduler using Cron & Nodemailer

A complete end-to-end email scheduling system using React, Node.js, MySQL, Nodemailer, and Cron Jobs. Users can schedule emails to be sent at a specified time to one or multiple recipients with custom HTML content.

<img width="1878" height="886" alt="Image" src="https://github.com/user-attachments/assets/dff3fcb1-a914-4177-a5dd-830256a82b43" />


---

## 🚀 Features

- 📩 Schedule emails using a simple React form
- 🧠 Backend built with Node.js & Express
- ✉️ Email sending powered by Nodemailer
- 🕒 Cron job runs every minute to check and send scheduled emails
- 💾 MySQL database for storing email & scheduling info
- 🎨 Custom HTML email body support
- 👥 Send emails to multiple recipients at once

---

## 🔧 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React, Tailwind CSS, Axios, Vite  |
| Backend   | Node.js, Express, Nodemailer, node-cron |
| Database  | MySQL                             |
| Tools     | dotenv, cors, body-parser         |

---

## 🗂️ Project Structure

```bash
project-root/
├── backend/
│   ├── config/
│   │   ├── db.js              # MySQL DB connection
│   │   └── mailer.js          # Nodemailer transporter setup
│   ├── controllers/
│   │   └── emailController.js # Email creation & scheduling logic
│   ├── emailModels/
│   │   ├── emailModel.js      # Email table schema
│   │   └── emailScheduler.js  # Scheduler table schema
│   ├── cronJobs/
│   │   └── cronJobs.js        # Cron job that sends scheduled emails
│   ├── routes/
│   │   └── emailRoutes.js     # REST API routes
│   ├── server.js              # Express entry point
│   └── .env                   # Environment config
│
├── frontend/
│   ├── src/
│   │   ├── Forms/
│   │   │   └── EmailForm.jsx  # Email scheduler form component
│   │   ├── App.jsx            # Root React component
│   │   └── main.jsx           # Vite entry file
│   └── vite.config.js         # Vite frontend config
