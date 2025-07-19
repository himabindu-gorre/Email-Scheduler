// import { useState } from "react";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div>
//         <h1>Sample</h1></div>
//     </>
//   );
// }

// export default App;

import React from "react";
import EmailForm from "./Forms/emailForms.jsx";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MdEmail className="text-blue-600 text-4xl" />
          <h1 className="text-2xl font-bold text-gray-800">
            Email Scheduler
          </h1>
        </div>

        <EmailForm />
      </div>
    </div>
  );
}

export default App;
