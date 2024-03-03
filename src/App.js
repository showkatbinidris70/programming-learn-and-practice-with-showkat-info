import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import React from "react";
import Home from "./Home";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="use-state" element={<UseState />} />
            <Route path="use-effect" element={<UseEffect />} />
            <Route path="use-ref" element={<UseRef />} />
            <Route path="use-ref" element={<UseRef />} />
            <Route path="use-reducer" element={<UseReducer />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
