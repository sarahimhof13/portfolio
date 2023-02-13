import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle, PageContainer } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <GlobalStyle />
        <Navbar />
        <Hero/>
      </PageContainer>
    </div>
  );
}

export default App;
