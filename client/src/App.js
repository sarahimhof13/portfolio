import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Navbar />
        <Hero/>
        <Skills/>
        <Projects />
      <Footer/>
    </div>
  );
}

export default App;
