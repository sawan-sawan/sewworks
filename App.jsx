// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OwnerStatsSection from "./components/OwnerStatsSection";
import AlsoSoldSlider from "./components/AlsoSoldSlider";
import OurServices from "./pages/OurServicesPage";
import GallerySection from "./pages/GalleryPage";
import ProjectShowcase from "./pages/ProjectShowcase";
import ProjectDetails from "./pages/ProjectDetails";
import SocialSection from "./components/SocialSection";
import TradeSection from "./components/Manufacturing";
import AllProducts from "./pages/AllProducts";
import ScrollToTop from "./pages/ScrollToTop";
import Tradeproducts from "./components/Tradeproducts";
import AllProducts2 from "./pages/AllProducts2";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <TradeSection />
              <Tradeproducts />
              <SocialSection />
              <AlsoSoldSlider />
              <OwnerStatsSection />
              <About />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectShowcase />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allproducts2" element={<AllProducts2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
