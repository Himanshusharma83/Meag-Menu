import React from "react";
import Button from "./components/pages/Button";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import All from "./components/pages/AllRent";
import Home from "./components/pages/Home";
import AnySerial from "./components/pages/AnySerial";
import KoreanSerial from "./components/pages/koreanSerial";
import Cartoon from "./components/pages/Cartoon";
import Action from "./components/pages/action";

const App = () => {
  return (
    <>
    
   
    <Navbar />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path='/all' element={<All />}></Route>
        <Route path='/anyserial' element={<AnySerial />}></Route>
        <Route path='/koreanserial' element={<KoreanSerial />}></Route>
        <Route path='/cartoon' element={<Cartoon />}></Route>
        <Route path="/action" element={<Action />}></Route>
      </Routes>
    

    </>
  );
};

export default App;
