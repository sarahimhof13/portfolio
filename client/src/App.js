import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { GlobalStyle, PageContainer } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <GlobalStyle />
        <Navbar />
        <Hero/>
        <Skills/>
        <Projects />
      </PageContainer>
    </div>
  );
}

export default App;
