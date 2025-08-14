import React from "react";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
        </Routes>
    </>
  )
}

export default App;