import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { FindUs, Laurels, SpecialMenu } from "../container";
import Pnf from "../components/PNF/pnf";
import Home from "../container/Home/home";
import { MyNavbar } from "../components";
import Resturant from "../components/Basics/Resturant";
import Protected from "./Protected";
import Login from "../Authentication/Login/Login";
import Reg from "../Authentication/Reg/Reg";

const AboutUs = lazy(() => import("../container/AboutUs/AboutUs"));

export default function Routing() {
  return (
    <Router>
      <Suspense fallback={<h1 style={{ color: "blue" }}>Loading...</h1>}>
        <MyNavbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          {/* default path setup */}
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="menu" element={<SpecialMenu />}></Route>
          <Route path="awards" element={<Laurels />}></Route>
          <Route path="contact" element={<FindUs />}></Route>
          <Route element={<Protected />}>
            <Route path="book-table" element={<Resturant />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Reg />}></Route>

          <Route path="*" element={<Pnf />}></Route>
          {/* always will be at the end */}
        </Routes>
      </Suspense>
    </Router>
  );
}
