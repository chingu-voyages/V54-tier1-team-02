import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputContainer from "../components/InputForm";

function App() {
  
  return (
    <>
      <div>
        <Header/>
        <main>
          <InputContainer/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
