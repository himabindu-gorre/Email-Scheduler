import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';

const EmailForm = () => {
  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/schedule", {
        recipients: recipients.split(",").map((email) => email.trim()),
        subject,
        message,
        scheduleTime,
      });

      console.log("Success:", response.data);
      toast.success("Email Scheduled Successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error scheduling email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <Toaster position="top-right "/>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        {/* <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Schedule Email</h2> */}

        <input
          type="text"
          placeholder="Recipients (comma separated)"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />

        <input
          type="datetime-local"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Schedule Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
