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
      <Header/>
      <Routes>
      {/* Login */}
      <Route path="/" element={<Login />}/>
      {/* Home */}
      <Route path="/home" element={
        <Protected>
          <Home/>
        </Protected>
      }/>

      </Routes>
    </div>
  );
}

export default App;
