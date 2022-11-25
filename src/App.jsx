import React, { useEffect } from "react";
import Navbar from "./components/nav/Navbar";
import Login from "./components/Login/Login";

function App() {


  return (
    <div>
      <div className="h-screen  flex flex-col ">
     <Navbar/>
     <Login/>
  
      </div>
    </div>
  );
}

export default App;
