import React from 'react'
import{AiOutlineMenu} from "react-icons/ai"

const Header = ({setMenuOpen, menuOpen}) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>

    </nav>
     <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
     <AiOutlineMenu/>
   </button>
    
    </>
  
  )
}

export const HeaderPhone = ({menuOpen,setMenuOpen}) =>{
  return(
    <div className= {`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
     <NavContent setMenuOpen={setMenuOpen}/>

    </div>
  )
}

export const NavContent = ({setMenuOpen}) =>(
 <>
  <h2 className='gradientText'>
    {/* <span>Deepa</span>
    <span>nksha</span> */}
    Deepanksha
  </h2>
  <div>
    <a onClick={() => setMenuOpen(false)}  className='gradientText' href="#home">Home</a>
    <a onClick={() => setMenuOpen(false)}  className='gradientText' href="#about">About</a>
    <a onClick={() => setMenuOpen(false)} className='gradientText'  href="#skills">Skills</a>
    <a onClick={() => setMenuOpen(false)}  className='gradientText' href="#projects">Project</a>
    <a onClick={() => setMenuOpen(false)}  className='gradientText' href="#contact">Contact me</a>
  </div>
  <a href="mailto:deepanksha1992@gmail.com">
    <button>Email</button>
  </a>
 
 
 
 </>



)



export default Header