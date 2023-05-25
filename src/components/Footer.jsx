import React from 'react';
// import logo from "../assets/logo.png";
import {AiFillLinkedin,AiFillMail,AiFillGithub, AiOutlineArrowUp} from "react-icons/ai"



const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/108534677?v=4"} alt="Founder" />
            <h2>Deepanksha Pal</h2>
            <p>There are no secrets to success.It is the result of Preparation, Hard work and Learning from failure.</p>    
        </div>
        <aside>
          <h2>Social Media</h2>
          <article>
            <a href="https://www.linkedin.com/in/deepanksha-pal-28610791/">
                <AiFillLinkedin/>
                
            </a>
            <a href="mailto:deepanksha1992@gmail.com">
                <AiFillMail/>
                
            </a>
            <a href="https://github.com/deepanksha">
                <AiFillGithub/>
                
            </a>
          </article>
        </aside>

        <a href="#home">
            <AiOutlineArrowUp/>
        </a>

    </footer>
  )
}

export default Footer 