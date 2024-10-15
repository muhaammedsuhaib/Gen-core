import axios from "axios";
import React, { useState } from "react";
import { FaClipboard, FaPencilAlt, FaArrowCircleUp } from "react-icons/fa";
import { toast } from "react-toastify";

const Main = ({responses,setResponses}) => {
  const [collect, setCollect] = useState(""); // Input state
  // State to store multiple responses

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gen-core-server.onrender.com/api/generate",
        { text: collect }
      );
      setResponses((prevResponses) => [
        ...prevResponses,
        response.data.response,
      ]);
      setCollect("");
    } catch (error) {
      toast.error("Network error");
    }
  };

  const data = [
    "Hello",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night",
    "Hi there!",
    "Help me",
    "Thank you!",
    "Goodbye!",
  ];

  const option_add = (item) => {
    setCollect(item);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-5 md:p-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-auto">
      {/* Map over the array of responses */}
      {responses.length > 0 ? (
        <div className="w-full h-fit rounded-xl overflow-auto">
          {responses.map((response, index) => (
            <div
              key={index}
              className="border border-gray-700 bg-gradient-to-r from-cyan-500 to-teal-400 p-4 rounded-lg mb-5 flex items-center gap-3 shadow-lg"
            >
              <FaClipboard size={20} className="text-white" />
              <p>
                <strong className="bg-cyan-500 rounded-lg p-1 text-white">
                  Response {index + 1}:
                </strong>{" "}
                {response}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <marquee className="text-center block">
          <h1 className="text-2xl sm:text-4xl text-cyan-500">
            What can I help with?
          </h1>
        </marquee>
      )}

      {/* Input Form */}
      <div className="flex justify-center w-full flex-wrap gap-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center w-full gap-4"
        >
          <input
            required
            type="text"
            placeholder="Message Gen-Core"
            className="rounded-full w-full md:w-[70%] bg-gray-900 text-white p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md"
            value={collect}
            onChange={(e) => setCollect(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 md:mt-0 bg-gradient-to-r from-cyan-500 to-teal-400 p-4 rounded-full text-white hover:bg-teal-500 transition duration-300 flex items-center justify-center gap-2 focus:ring-4 focus:ring-cyan-500 shadow-md"
          >
            <FaArrowCircleUp size={30} />
          </button>
        </form>
      </div>

      {/* Quick Text Options */}
      {responses.length === 0 && (
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {data.map((item, index) => (
            <div
              className="rounded-lg p-2 shadow-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white cursor-pointer hover:bg-teal-500 transition duration-300 flex items-center gap-2"
              key={index}
              onClick={() => option_add(item)}
            >
              <FaPencilAlt size={16} />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
