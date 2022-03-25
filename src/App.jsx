import React from "react";
import "./App.scss";
import bg from "./assets/bg.jpg"
import WelcomeSection from "./Components/WelcomeSection";
import Header from "./Components/Header";
import Folios from "./Components/Folios";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Scroll from "./Components/Scroll";

const App = () => {
  return (
    <main>
      <img className="bg" src={bg} />
      <Header />
      <WelcomeSection />
      <Folios />
      <About />
      <Contacts />
      <Footer />
      <Scroll />
    </main>
  );
};

export default App;
