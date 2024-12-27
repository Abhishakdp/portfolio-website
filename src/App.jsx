import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Expertise />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
