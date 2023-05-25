import React, { useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs';
import me from "../assets/sq2.png";

const Home = ({ratio}) => {

    const projectCount = useRef(null);

    const animationProjectCount = () =>{
      animate(0,20,{
        duration:5,
        onUpdate:(v) =>(projectCount.current.textContent = v.toFixed()),
      })
    }

    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
               x:0,
               opacity:1, 
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
               y:0,
               opacity:1, 
            }
        }
    }
  return (
    <div id='home'>
       <section>
         <div>
           <motion.h1 {...animations.h1}
           className='gradientText'
           >
             Hi, I Am <br/> Deepanksha Pal
           </motion.h1>

           <Typewriter
            options={{
                strings: ["A Frontend Developer" , 'A Creator'],
                autoStart:true,
                loop:true,
                wrapperClassName:'typewriterpara',
                cursor:'',
            }}
           />

           <div>
            <a href="mailto:deepanksha1992@gmail.com">Hire Me </a>
            <a href="#projects">
                Projects <BsArrowUpRight/>
            </a>
           </div>
          
          <aside>
           <article>
            <p>
                +
                {
                  ratio <2.5 && <motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>
                }
            </p>
            <span>Projects Done</span>
           </article>

           <article>
            <p >Contact</p>
            <span>deepanksha1992@gmail.com</span>
           </article>
           </aside>
         </div>
       </section>

      <section>
       <img src={me} alt="Deepanksha" />
      </section>

      <BsChevronDown/>

    </div>
  )
}

export default Home