import React, {useContext, useState} from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Protected } from "./components/Protected/Protected";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Header } from "./layouts/Header/Header";

function App() {

  return (
    <div className="App">
      <Routes>
      {/* Login */}
      <Route path="/" element={<Login />}/>
      {/* Home */}
      <Route path="/home" element={
        <Protected>
          <Header/>
          <Home/>
        </Protected>
      }/>

      </Routes>
    </div>
  );
}

export default App;
