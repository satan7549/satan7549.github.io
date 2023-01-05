import { Container } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import { About } from "./Pages/About";
import GithubStatus from "./Pages/GithubStatus";
import { SkillsSection } from "./Pages/Skills/SkillsSection";

function App() {
  return (
    <Container
      //  bgImage={""}
      bgColor={"#eaf4f4"}
      bgSize="100%"
      maxW={"100%"}
    >
      <Navbar />
      <Header />
      <About />
      <SkillsSection />
      <GithubStatus />
    </Container>
  );
}

export default App;
