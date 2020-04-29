import React from "react";
import Fullpage from "./components/Fullpage";
import Change from "./components/Change";
import NavigationBar from "./components/NavigationBar";
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";

import "./App.css";

function App() {
  return (
    <div>
      <Change />
      <NavigationBar />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

export default App;
