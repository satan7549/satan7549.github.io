import { Container } from "@chakra-ui/react";
import "./App.css";
import Contact from "./Components/Contact";
import { Header } from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import { About } from "./Pages/About";
import ContactSection from "./Pages/ContactSection";
import GithubStatus from "./Pages/GithubStatus";
import { ProjectsSection } from "./Pages/Projects/ProjectSection";
import { SkillsSection } from "./Pages/Skills/SkillsSection";
import Bg_img from "./Utilities/BG_Img.jpeg";

function App() {
  return (
    <Container
      className="main_container"
      bgImage={Bg_img}
      // bgColor={"#eaf4f4"}
      bgSize="100%"
      maxW={"100%"}
    >
      <Navbar />
      <Contact />
      <Header />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <GithubStatus />
      <ContactSection />
    </Container>
  );
}

export default App;
