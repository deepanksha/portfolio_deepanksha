import React from 'react';
import {AiFillHtml5,AiFillGithub,} from "react-icons/ai";
import{BsBootstrapFill,BsGit} from "react-icons/bs"
import {SiSass,SiReact,SiJquery}from "react-icons/si"
import{TbBrandJavascript,TbBrandRedux,TbBrandCss3} from "react-icons/tb"

const Skills = () => {
  return (
    <section className="skills" id="skills">
       <div>
      <h2 className="gradientText">My Technical Skills</h2>
      </div>

      <div className='skill__container'>
        <article>
          <div
          style={{animationDelay:"0.3s"}}
          >
            <AiFillHtml5/>
            <p>HTML</p>
          </div>
          <div
          style={{animationDelay:"0.5s"}}
          >
            <TbBrandCss3/>
            <p>CSS</p>
          </div>
          <div
          style={{animationDelay:"0.7s"}}
          >
            <SiSass/>
            <p>SCSS</p>
          </div>
          <div
          style={{animationDelay:"1s"}}
          >
            <BsBootstrapFill/>
            <p>BOOTSTRAP</p>
          </div>
          <div
          style={{animationDelay:".3s"}}
          >
            <TbBrandJavascript/>
            <p>JAVASCRIPT</p>
          </div>
          <div
          style={{animationDelay:".5s"}}
          >
            <SiReact/>
            <p>REACT</p>
          </div>
          <div
          style={{animationDelay:".7s"}}
          >
            <TbBrandRedux/>
            <p>REDUX</p>
          </div>
          <div
          style={{animationDelay:"0.9s"}}
          >
            <SiJquery/>
            <p>JQUERY</p>
          </div>
          <div
          style={{animationDelay:"1s"}}
          >
            <BsGit/>
            <p>GIT</p>
          </div>
          <div
          style={{animationDelay:"0.3s"}}
          >
            <AiFillGithub/>
            <p>GITHUB</p>
          </div>
        </article>
        


      </div>

    </section>
  )
}

export default Skills