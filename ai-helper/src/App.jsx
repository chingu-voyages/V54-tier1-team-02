import React, { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputContainer from "../components/input form/InputContainer";

function App() {
  
  return (
    <>
      <div>
        <Header/>
        
      </div>
      <h2>Input Form</h2>
      <InputContainer/>
      <Footer/>
    </>
  );
}

export default App;
