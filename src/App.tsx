import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Protected } from "./components/Protected/Protected";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Header } from "./layouts/Header/Header";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Detail } from "./pages/Detail/Detail";
import { Favorite } from "./pages/Favorite/Favorite";

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
      } />
      {/* Detail Page */}
      <Route path="/movie/:idMovie" element={
        <Protected>
          <Header/>
          <Detail/>
        </Protected>
      }/>
      {/* Favorite */}
      <Route path="/favorite" element={
        <Protected>
          <Header/>
          <Favorite/>
        </Protected>
      } />

      {/* Not Found Page */}
      <Route path="*" element={<>
        <Header />
        <NotFoundPage />
      </>} />

      <Route path="/home/*" element={<>
        <Header />
        <NotFoundPage />
      </>} />

      </Routes>
    </div>
  );
}

export default App;
