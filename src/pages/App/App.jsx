import "./App.css";
import Nav from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default App;
