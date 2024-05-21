import { useState } from "react";
import "./Home.css";
import cover from "./assets/school.png";
import logo from "./assets/classmates.png";
// import course1 from "./assets/cover.jpg";

function App() {
  return (
    <>
      <div className="page">
      <nav>
                <img src={logo} alt='logo' id='logo' />
                <input type="text" id='search' />
            </nav>
            <div className="body">
            <img src={cover} alt='cover' id='cover' />
               </div>
      </div>
    </>
  );
}

export default App;
