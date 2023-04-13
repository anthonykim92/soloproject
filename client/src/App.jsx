import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import UpdatePerson from "./components/UpdatePerson";
import Person from "./components/Person";
import DisplayAll from "./components/DisplayAll";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/api/person" element={<Person />} />
          <Route path="/api/person/:id" element={<Detail />} />
          <Route path="/api/person/edit/:id" element={<UpdatePerson />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
