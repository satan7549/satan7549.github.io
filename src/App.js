import { Container } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./Components/Header";
// import Navbar from "./Components/Navbar/Navbar";
import { About } from "./Pages/About";
import ContactSection from "./Pages/ContactSection";
import GithubStatus from "./Pages/GithubStatus";
import { ProjectsSection } from "./Pages/Projects/ProjectSection";
import SkillsSection from "./Pages/Skills/SkillsSection";
import Tools from "./Tools/Tools";
import Bg_img from "./Utilities/BG_Img.jpeg";
import SimpleNav from "./Components/Navbar/NavMenueTest";

function App() {
  return (
    <Container
      className="main_container"
      bgImage={Bg_img}
      // bgColor={"#eaf4f4"}
      bgSize="100%"
      maxW={"100%"}
    >
      {/* <Navbar /> */}
      <SimpleNav />
      <Header />
      <About />
      <SkillsSection />
      <Tools />
      <ProjectsSection />
      <GithubStatus />
      <ContactSection />
    </Container>
  );
}

export default App;
