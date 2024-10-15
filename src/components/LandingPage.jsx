import React, { useState } from "react";
import './LandingPage.css'; // Import the CSS file if you are using an external stylesheet
import { toast } from "react-toastify";

const LandingPage = ({user, SetUser}) => {
  const [collect, setCollect] = useState(""); // State to collect user input

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = collect.trim(); 
    if (data) {
      toast.info(`Welcome, ${data}!`);
      localStorage.setItem('username',data);
      SetUser({name:data, response:[]});
      setCollect(""); 
    } else {
      toast.error("Please enter a valid name."); 
    }
  };

  return (
    <div className=" w-screen h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center">
      {/* Animated text */}
      <div className="w-full overflow-hidden mb-10">
        <div className="text-center text-white animate-slideX">
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-500 to-teal-500">
            Gen-Core
          </h1>
        </div>
      </div>

      {/* Input field and button */}
      <div className="flex flex-col items-center gap-6 w-full px-10 md:w-1/2 lg:w-1/3">
        {/* Input Field */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
          <input
            value={collect}
            type="text"
            required
            placeholder="Enter your name"
            onChange={(e) => setCollect(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-cyan-500 transition duration-300"
            aria-label="Name input" // Accessibility improvement
          />
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-white rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            Get Started
          </button>
        </form>
      </div>

      {/* Subtitle */}
      <div className="absolute bottom-20 w-full text-center opacity-0 animate-fadeIn">
        <p className="text-gray-400 opacity-80 text-lg sm:text-xl transition-all duration-500 hover:text-teal-400 hover:opacity-100">
          Empowering the Future
        </p>
      </div>

      {/* Powered by Suhaib */}
      <div className="absolute bottom-10 w-full text-center text-gray-500">
        <p className="text-sm">Powered by Suhaib</p>
      </div>

      {/* Glowing circles */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
    </div>
  );
};

export default LandingPage;
