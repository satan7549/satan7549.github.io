import "./App.css";
import { Header } from "./Components/Header";
// import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { About } from "./Pages/About";
// import Contact from "./Pages/Contact";


function App() {
 
  return (
    <>
    <Navbar />
    {/* <Header /> */}
    <About />
    {/* <Contact /> */}
    </>
  );
}

export default App;
