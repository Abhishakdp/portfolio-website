import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
