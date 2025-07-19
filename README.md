MERN Email Scheduler with Cron Job and NodeMailer

This is a MERN Stack project that schedules and sends emails at a specific time using Nodemailer, Cron Job, and stores/retrieves schedule data using MySQL.

---
<img width="1878" height="886" alt="Image" src="https://github.com/user-attachments/assets/dff3fcb1-a914-4177-a5dd-830256a82b43" />

---
 Features
 
React-based frontend for email form

Node.js/Express backend with:

Email scheduling

Email sending using Nodemailer

Cron job checks for due emails every minute

MySQL database integration

Sends custom HTML emails to multiple recipients

--- 

Project Structure

project-root/
│
├── backend/
│   ├── config/
│   │   ├── db.js                # MySQL DB connection
│   │   └── mailer.js            # Nodemailer transporter setup
│   │
│   ├── controllers/
│   │   └── emailController.js   # Logic to handle email creation and scheduling
│   │
│   ├── emailModels/
│   │   ├── emailModel.js        # Email table model
│   │   └── emailScheduler.js    # Scheduler table model
│   │
│   ├── cronJobs/
│   │   └── cronJobs.js          # Cron job to send scheduled emails
│   │
│   ├── Routes/
│   │   └── emailRoutes.js       # API routes
│   │
│   ├── server.js                # Entry point of backend
│   └── .env                     # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── Forms/
│   │   │   └── EmailForm.jsx    # Form to schedule emails
│   │   ├── App.jsx              # Root component
│   │   └── main.jsx             # Vite entry file
│   │
│   └── vite.config.js           # Vite config for frontend




