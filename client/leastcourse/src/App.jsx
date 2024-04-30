import Home from './components/Home'
import React from "react";
import Form from "./components/Form.jsx"
import Update from "./components/Update/update.jsx"
import Login from "./components/LogIn/login.jsx"
import Signup from './components/SignUp/Signup.jsx';  
import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <>
      <div>
        <BrowserRouter>
        
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insert" element={<Form />}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App