// // // let scheduledEmails = []; 

// // // export const scheduledEmail = (req, res) => {
// // //   const { subject, message, recipients, scheduleTime } = req.body;

// // //   if (!subject || !message || !recipients || recipients.length === 0 || !scheduleTime) {
// // //     return res.status(400).json({ error: "All fields are required" });
// // //   }

// // //   scheduledEmails.push({ subject, message, recipients, scheduleTime });
// // //   return res.status(200).json({ message: "Email Scheduled successfully" });
// // // };

// // // export const getScheduledEmails = () => scheduledEmails;

// // // export const clearScheduledEmails = () => {
// // //   scheduledEmails = [];
// // // };

// // import db from "../config/db.js";

// // // Schedule an email and insert into DB
// // export const scheduledEmail = (req, res) => {
// //   const { subject, message, recipients, scheduleTime } = req.body;

// //   if (!subject || !message || !recipients || recipients.length === 0 || !scheduleTime) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }

// //   const recipientsStr = recipients.join(',');

// //   const query = `
// //     INSERT INTO scheduled_emails (subject, message, recipients, schedule_time)
// //     VALUES (?, ?, ?, ?)
// //   `;

// //   db.query(query, [subject, message, recipientsStr, scheduleTime], (err, result) => {
// //     if (err) {
// //       console.error("DB Insert Error:", err);
// //       return res.status(500).json({ error: "Failed to schedule email" });
// //     }

// //     return res.status(200).json({ message: "✅ Email Scheduled successfully" });
// //   });
// // };

// // // Fetch emails scheduled for current minute
// // export const getScheduledEmails = (callback) => {
// //   const now = new Date();
// //   const currentMinute = now.toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm

// //   const query = `
// //     SELECT * FROM scheduled_emails 
// //     WHERE DATE_FORMAT(schedule_time, '%Y-%m-%dT%H:%i') = ?
// //   `;

// //   // db.query(query, [currentMinute], (err, results) => {
// //   //   if (err) {
// //   //     console.error("DB Fetch Error:", err);
// //   //     return callback([]);
// //   //   }

// //   //   const formatted = results.map((email) => ({
// //   //     id: email.id,
// //   //     subject: email.subject,
// //   //     message: email.message,
// //   //     recipients: email.recipients.split(','),
// //   //     scheduleTime: email.schedule_time,
// //   //   }));

// //   //   callback(formatted);
// //   // });
// // };

// // // Clear (delete) sent emails
// // export const clearScheduledEmails = (emailIds) => {
// //   if (!emailIds.length) return;

// //   const query = `DELETE FROM scheduled_emails WHERE id IN (?)`;

// //   // db.query(query, [emailIds], (err, result) => {
// //   //   if (err) {
// //   //     console.error("Error clearing scheduled emails:", err);
// //   //   } else {
// //   //     console.log(`✅ Cleared ${result.affectedRows} scheduled emails`);
// //   //   }
// //   // });
// // };


// import db from "../config/db.js";

// // Schedule an email and insert into DB
// export const scheduledEmail = async (req, res) => {
//   const { subject, message, recipients, scheduleTime } = req.body;

//   if (!subject || !message || !recipients || recipients.length === 0 || !scheduleTime) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const recipientsStr = recipients.join(',');

//   const query = `
//     INSERT INTO scheduled_emails (subject, message, recipients, schedule_time)
//     VALUES (?, ?, ?, ?)
//   `;

//   try {
//     await db.query(query, [subject, message, recipientsStr, scheduleTime]);
//     return res.status(200).json({ message: "Email scheduled successfully" });
//   } catch (err) {
//     console.error("DB Insert Error:", err);
//     return res.status(500).json({ error: "Failed to schedule email" });
//   }
// };

// // Fetch emails scheduled for current minute
// export const getScheduledEmails = async () => {
//   const now = new Date();
//   const currentMinute = now.toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm

//   const query = `
//     SELECT * FROM scheduled_emails 
//     WHERE DATE_FORMAT(schedule_time, '%Y-%m-%dT%H:%i') = ?
//   `;

//   try {
//     const [results] = await db.query(query, [currentMinute]);
//     return results.map((email) => ({
//       id: email.id,
//       subject: email.subject,
//       message: email.message,
//       recipients: email.recipients.split(','),
//       scheduleTime: email.schedule_time,
//     }));
//   } catch (err) {
//     console.error("DB Fetch Error:", err);
//     return [];
//   }
// };

// // Clear (delete) sent emails
// export const clearScheduledEmails = async (emailIds) => {
//   if (!emailIds.length) return;

//   const query = `DELETE FROM scheduled_emails WHERE id IN (?)`;

//   try {
//     const [result] = await db.query(query, [emailIds]);
//     console.log(`Cleared ${result.affectedRows} scheduled emails`);
//   } catch (err) {
//     console.error("Error clearing scheduled emails:", err);
//   }
// };


import { insertScheduledEmail } from "../emailModels/emailModel.js";

export const scheduleEmail = async (req, res) => {
  const { subject, message, recipients, scheduleTime } = req.body;

  if (!subject || !message || !recipients || !scheduleTime) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await insertScheduledEmail({ subject, message, recipients, scheduleTime });
    res.status(200).json({ message: "Email scheduled successfully." });
  } catch (err) {
    console.error("Error scheduling email:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
