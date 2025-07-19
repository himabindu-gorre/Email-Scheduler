// import cron from "node-cron";
// import { getScheduledEmails, clearScheduledEmails } from "../controller/emailController.js";
// import transporter from "../config/mailer.js";

// cron.schedule("* * * * *", () => {
//   getScheduledEmails((emails) => {
//     if (!emails.length) return;

//     console.log("Sending scheduled emails:", new Date().toISOString());

//     const sentIds = [];

//     emails.forEach((email) => {
//       const mailOptions = {
//         from: process.env.email,
//         to: email.recipients.join(","),
//         subject: email.subject,
//         text: email.message,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error(" Error sending email:", error);
//         } else {
//           console.log(`Email sent to ${mailOptions.to} - ${info.response}`);
//           sentIds.push(email.id);
//         }

//         if (sentIds.length === emails.length) {
//           clearScheduledEmails(sentIds);
//         }
//       });
//     });
//   });
// });

import cron from "node-cron";
import { getScheduledEmails, clearScheduledEmails } from "../controller/emailController.js";
import transporter from "../config/mailer.js";

cron.schedule("* * * * *", async () => {
  try {
    const emails = await getScheduledEmails();

    if (!emails.length) {
      console.log("No scheduled emails to send at", new Date().toISOString());
      return;
    }

    console.log("Sending scheduled emails:", new Date().toISOString());

    const sendEmailPromises = emails.map((email) => {
      const mailOptions = {
        from: process.env.email,
        to: email.recipients.join(","),
        subject: email.subject,
        text: email.message,
      };

      return new Promise((resolve) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email to:", mailOptions.to, "-", error.message);
            return resolve(null); 
          }

          console.log(`Email sent to ${mailOptions.to} - ${info.response}`);
          resolve(email.id); 
        });
      });
    });

    const results = await Promise.all(sendEmailPromises);
    const sentIds = results.filter((id) => id !== null);

    if (sentIds.length > 0) {
      await clearScheduledEmails(sentIds);
    }

  } catch (err) {
    console.error("Cron job failed:", err.message);
  }
});
