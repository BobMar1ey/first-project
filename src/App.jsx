import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Footer from "./components/footer/Footer";
import Firm from "./components/Firm/Firm";
import How from "./components/How/How";
import Projects from "./components/Projects/Projects";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Важно: импорт стилей анимации

export default function App() {
    useEffect(() => {
    AOS.init({

      duration: 800,     
      once: true,        
      easing: 'ease-out'
    });
  }, []);
  return (
    <div className="mx-auto  flex flex-col h-full justify-between   min-h-screen max-w-[1440px] w-full ">
      <Header />
      <main className="grow flex flex-col">
        <Hero />
        <Firm/>
        <How/>
        <Projects/>
      </main>

      <Footer />
    </div>
  );
}
