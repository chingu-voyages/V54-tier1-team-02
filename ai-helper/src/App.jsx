import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputContainer from "../components/input form/InputContainer";

function App() {
  
  return (
    <>
      <div>
        <Header/>
        <h2>Input Form</h2>
        <InputContainer/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
