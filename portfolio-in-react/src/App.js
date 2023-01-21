import React, { useEffect, useRef, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  const [translateY, setTranslateY] = useState("translateY(0px)");
  const scrollRef = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = (e) => {
      const cur = window.scrollY;
      if (scrollRef.current < cur) {
        setTranslateY("translateY(-200px)");
      } else {
        setTranslateY("translateY(0px)");
      }
      scrollRef.current = cur;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header translateY={translateY} />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
