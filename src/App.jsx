import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Expertise"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Project"><Parallax type="project"/></section>
    <Projects/>
    
    
    <section id="contact"><Contact/></section>
    <div className="footer"> Made with 💗 in React. <p>© 2024 Aviral Chauhan. All rights reserved.</p></div>
  </div>;
};

export default App;
