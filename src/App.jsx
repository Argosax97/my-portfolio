import React, { useState, useLayoutEffect } from "react";
import bg from "./assets/bg.jpg";
import WelcomeSection from "./Components/WelcomeSection";
import Header from "./Components/Header";
import Folios from "./Components/Folios";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Scroll from "./Components/Scroll";
import "./App.scss";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(undefined);
  useLayoutEffect(() => {
    function updatePosition() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <main>
      <img className="bg" src={bg} alt={""} />
      <Header />
      <WelcomeSection />
      <Folios />
      <About />
      <Contacts />
      <Footer />
      {scrollPosition > 400 && <Scroll />}
    </main>
  );
};

export default App;