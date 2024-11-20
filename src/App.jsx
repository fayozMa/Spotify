import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Details from "./pages/Details";
import Mainlayout from "./layouts/Mainlayout";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainlayout><Home></Home></Mainlayout>} />
        <Route path="/likes" element={<Mainlayout><Likes></Likes></Mainlayout>} />
        <Route path="/details/:id" element={<Mainlayout><Details></Details></Mainlayout>} />
      </Routes>
    </div>
  );
}

export default App;
