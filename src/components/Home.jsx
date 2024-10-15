import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import LandingPage from "./LandingPage";

const Home = () => {
  const [user, SetUser] = useState(null);
  const [responses, setResponses] = useState([]);
  return (
    <>
      {user ? (
        <div className="flex h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <Sidebar responses={responses} setResponses={setResponses} />
          <div className="flex-1 h-full  bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-auto">
            <Main responses={responses} setResponses={setResponses} />
          </div>
        </div>
      ) : (       
          <div className="w-screen h-screen ">
           
        <LandingPage user={user} SetUser={SetUser}/>
          </div>       
      )}

    </>
  );
};

export default Home;
