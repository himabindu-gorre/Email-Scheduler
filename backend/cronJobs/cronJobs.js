import { getScheduledEmailsDue, deleteScheduledEmails } from "../emailModels/emailModel.js";
import transporter from "../config/mailer.js";
// import dotenv from "dotenv";

// dotenv.config();

const sendEmail = async (recipients , subject, message) => {
    console.log(process.env.mail);
  const mailOptions = {
    // from: "gorrehimabindu@gmail.com",
    from: process.env.email,
    to: recipients,
    subject,
    html: `<p>${message}</p>`,
  };

  await transporter.sendMail(mailOptions);
};
const runEmailCron = async () => {
  try {
    console.log("Running email cron at", new Date().toLocaleString());

    const emailsToSend = await getScheduledEmailsDue();
    console.log("Emails fetched from DB:", emailsToSend);

    if (!emailsToSend.length) {
      console.log("No emails to send at this time.");
      return;
    }

    for (const email of emailsToSend) {
      console.log(`Sending email to: ${email.recipients}`);
      await sendEmail(email.recipients, email.subject, email.message);
    }

    const idsToDelete = emailsToSend.map(e => e.id);
    await deleteScheduledEmails(idsToDelete);

    console.log(` Sent & cleared ${emailsToSend.length} scheduled emails.`);
  } catch (err) {
    console.error("Cron job error:", err);
  }
};

export default runEmailCron;
