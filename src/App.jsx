import axios from 'axios';
import React, { useState } from 'react';
import Home from './components/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [collect, setCollect] = useState(''); // Input state
  const [responses, setResponses] = useState([]); // State to store multiple responses

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gen-core-server.onrender.com/api/generate', { text: collect });
      console.log(response.data); 
      
      // Push new response to the responses array
      setResponses((prevResponses) => [...prevResponses, response.data.response]);
      
      setCollect(''); // Clear the input field
    } catch (error) {
      alert("Network error");
    }
  };

  return (
    // <div className='flex flex-col items-center justify-center h-screen w-screen'>
    //   <marquee>AI <span className='text-sm underline'>suhaib version</span></marquee>
    //   <form onSubmit={handleSubmit} className='flex items-center mb-4'>
    //     <input
    //       type="text"
    //       className='border border-gray-600 rounded-md p-2'
    //       value={collect}
    //       onChange={(e) => setCollect(e.target.value)}
    //     />
    //     <button
    //       type='submit'
    //       className='ml-2 bg-blue-500 p-2 rounded-md text-black hover:bg-blue-950 hover:text-white'
    //     >
    //       Send
    //     </button>
    //   </form>
      
    //   {/* Map over the array of responses to display each */}
    //   {responses.length > 0 && (<>
    //     {responses.map((response, index) => (
    //         <div className='border border-gray-300 p-4 rounded-md mb-5'>
    //         <p key={index}><strong>Response {index + 1}:</strong> {response}</p>
    //         </div>
    //       ))}
    //   </>)}
    // </div>
    <>
    <Home/>
    <ToastContainer/>
    </>
  );
};

export default App;
