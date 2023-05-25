import React from 'react';
import AboutImg from "../assets/about1.jpg";
import CV from "../assets/deepanksha_cv.pdf";
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';

const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M240 896q-33 0-56.5-23.5T160 816V696h80v120h480V696h80v120q0 33-23.5 56.5T720 896H240Zm240-160L280 536l56-58 104 104V256h80v326l104-104 56 58-200 200Z"/></svg>

const About = () => {
  return (
    <div className="about section" id="about">
      <div>
      <h2 className="gradientText">About Me</h2>
      </div>

      <section className="about__container container grid">

        <div className='about__img'>
        <img src={AboutImg} alt="Deepanksha" className="about__img" />
        </div>

        <div className="about__data">
          <aside>
            <article>
            <a href="https://www.linkedin.com/in/deepanksha-pal-28610791/">
                <AiFillLinkedin/>
            </a>
            </article>
            <article>
            <a href="https://github.com/deepanksha">
                <AiFillGithub/>
            </a>
            </article>
          </aside>

          <p className="about__description">
            My Name is Deepanksha Pal.I am a hardworking Engineering Graduate, Technology Enthusiast, Keen to learn and implement my skills as a React Developer.I believe in continous learning and creating differnt, scalabe and complex web applications.My strengths are hardworking, self-motivated and positive mind set.     
          </p>
          <a download="" href={CV} className="button button--flex">
           Download CV &nbsp;
           {downloadIcon}
          </a>
        </div>

      </section>
    </div>
  )
}

export default About