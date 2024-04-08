
import './App.css'
import Certificates from './Componets/Certificates/Certificates';
import ContactUs from './Componets/ContactUs/ContactUs';
import Exp from './Componets/Exp/Exp';
import Footer from './Componets/Footer/Footer';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Hero from './Componets/Hero/Hero';

import  NavBar from "./Componets/NavBar/NavBar";
import Portfolio from './Componets/Portfolio/Portfolio';
import Skills from './Componets/Skills/Skills';

import { useContext } from "react";
import { themeContext } from "./Context";
import Talk from './Componets/Talk/Talk';
import About from './Componets/Works/About';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div className="App"  style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
    <NavBar />
  <Hero />
<About / >
  <Portfolio />
  <Exp />
  <Skills />
  <Certificates />
  <Talk />
  <ContactUs />
  <Footer />
    </div>

    </>
  )

}
export default App
