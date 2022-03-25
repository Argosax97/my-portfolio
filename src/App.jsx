import React from "react";
import "./App.scss";
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
      <img
        className="bg"
        src="http://uploads.webflow.com/560f27977849849d0e1fee5c/5614b716f91f1b0b7cb92ed4_fe4a5cbf.jpg"
      />
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
