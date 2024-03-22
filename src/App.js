import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import PageA from "./pages/PageA";

import "./styles/App.css"



function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="lessonSelect" element={<Lessons />} />
                    <Route path="/lessons/A" element={<PageA />} />
                </Route>
            </Routes>
            <Outlet/>
        </BrowserRouter>
      );
    }
export default App;