import Header ,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {

  const [menuOpen,setMenuOpen] = useState(false);
  const [ratio,setRatio] = useState(window.innerWidth/window.innerHeight);
  console.log(ratio)
 useEffect(() => {
  const resizeRatio =() =>{
    setRatio(window.innerWidth/window.innerHeight);
  };
  window.addEventListener('resize',resizeRatio);
  return () =>{
    window.removeEventListener('resize',resizeRatio);
  };
 },[ratio]);

  return ratio < 2.5 ?  (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
     <Header menuOpen= {menuOpen} setMenuOpen = {setMenuOpen} />
     <Home ratio={ratio}/>
     <About/>
    
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     <Toaster/>
    </>
  ) : (<em id="customMessage" className="gradientText">Please Change the ratio to View!</em>);
}

export default App;
