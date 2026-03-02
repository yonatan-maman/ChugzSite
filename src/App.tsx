import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";

import JoinBar from "./pages/JoinBar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/join" element={<JoinBar />} />
    </Routes>
  );
}