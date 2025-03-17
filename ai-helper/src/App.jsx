import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputContainer from "../components/InputForm";
import Pentagram from "../components/Pentagram";
import Result from "../components/Result";

function App() {
  
  return (
    <>
      <div>
        <Header/>
        <Pentagram/>
        <main>
          <InputContainer/>
          <Result/>
        </main>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
