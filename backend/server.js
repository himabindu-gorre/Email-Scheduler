// import express from "express";
// import cors from "cors";
// import cron from "node-cron";
// import dotenv from 'dotenv';

// dotenv.config();

// import router from "./Routes/emailRoutes.js";

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/api", router);

// const port = process.env.port || 5000;

// app.get("/", (req, res) => {
//   res.send("Email is running in backend");
// })

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
  
// });

// const task = () => {
//       console.log("Job run sucessfully", new Date().toISOString());
// }

// cron.schedule(" * * * * *", () => {
//   task();
// })

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";

import emailRouter from "./Routes/emailRoutes.js";
import runEmailCron from "./cronJobs/cronJobs.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", emailRouter);

app.get("/", (req, res) => {
  res.send(" Email Scheduler Backend Running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});

// Run the cron job
cron.schedule("* * * * *", runEmailCron);
