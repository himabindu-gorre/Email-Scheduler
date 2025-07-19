MERN Email Scheduler with Cron Job and MySQL
This is a MERN Stack project that schedules and sends emails at a specific time using Nodemailer, Cron Job, and stores/retrieves schedule data using MySQL.

<img width="1878" height="886" alt="Image" src="https://github.com/user-attachments/assets/dff3fcb1-a914-4177-a5dd-830256a82b43" />

 Features
React-based frontend for email form

Node.js/Express backend with:

Email scheduling

Email sending using Nodemailer

Cron job checks for due emails every minute

MySQL database integration

Sends custom HTML emails to multiple recipients

Project Structure
project-root/
├── backend/
│   ├── config/
│   │   ├── db.js            # MySQL DB connection
│   │   └── mailer.js        # Nodemailer transporter
│   ├── controllers/
│   │   └── emailController.js
│   ├── emailModels/
│   │   └── emailModel.js
│   │   └── emailScheduler.js  
│   ├── cronJobs/
│   │   └── cronJobs.js
│   ├── Routes/
│   │   └── emailRoutes.js
│   └── server.js
│   ├── .env
|
│
├── frontend/
│   ├── src/
│   │   ├── Forms/
│   │   │   └── EmailForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js



