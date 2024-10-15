import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { VscLayoutSidebarLeft, VscLayoutSidebarRight } from "react-icons/vsc";

const Sidebar = ({responses}) => {
  const [open, setOpen] = useState(false);

  const username = localStorage.getItem('username');

  const handle_logout = ({responses,setResponses}) => {
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <>
      <div
        className="absolute top-5 left-5 text-white rounded-md p-2 bg-gradient-to-r from-cyan-500 to-teal-400 hover:bg-teal-500 focus:ring-4 focus:ring-cyan-500 transition-all duration-300 cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <VscLayoutSidebarLeft size={25} />
        ) : (
          <VscLayoutSidebarRight size={25} />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen p-2 overflow-hidden bg-gradient-to-br border-r-2 transition-all duration-300 ${
          open ? "md:w-[300px] w-full" : "hidden"
        }`}
      >
        <div className="w-full h-full shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-md text-white p-5 flex flex-col gap-5 justify-between">
          {/* Sidebar Header */}
          <h1 className="text-end text-lg font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-500 to-teal-500">GEN-CORE</h1>

          {/* Profile Info */}
          <div className="bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg p-5 shadow-md flex flex-col items-center justify-center relative transition-all duration-300 hover:bg-teal-500">
            {/* Profile Icon */}
            <FaUserCircle size={85} className="mb-4 text-white" />
            {/* Username */}
            <div className="text-white text-lg font-semibold">{username}</div>
            {/* Logout Icon */}
            <div className="absolute top-5 right-5 z-50">
              <HiOutlineLogout
                size={25}
                className="cursor-pointer text-white hover:text-red-500 transition-colors duration-200"
                onClick={handle_logout}
              />
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="w-full h-full overflow-auto p-5 rounded-lg shadow-md mt-5 text-white">
          {responses.length > 0 && (
        <div className="w-full h-fit rounded-xl overflow-auto">
          {responses.map((response, index) => (
            <div
              key={index}
              className="border border-gray-700 bg-gradient-to-r from-cyan-500 to-teal-400 p-4 rounded-lg mb-5 flex items-center gap-3 shadow-lg"
            >
              <MdOutlineHistory size={35} className="text-white" />
              <p>
                <strong className="bg-cyan-500 rounded-lg p-1 text-white">
                  Response {index + 1}:
                </strong>{" "}
                {response}
              </p>
            </div>
          ))}
        </div>
      )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
