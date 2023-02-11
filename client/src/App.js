import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle, PageContainer } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <GlobalStyle />
        <Navbar />
      </PageContainer>
    </div>
  );
}

export default App;
