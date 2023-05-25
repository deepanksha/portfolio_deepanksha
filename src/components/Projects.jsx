import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";



const Projects = () => {
  return (
   <div className="projects" id="projects">
      <div>
      <h2 className="gradientText">My Personal Projects</h2>
      </div>

      <section>
       <article>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={2500}
            infiniteLoop={true}
            autoPlay={true}
          >
            {
              data.projects.map((i) =>(
                <div key={i.title} className="workItem">
                  <img src={i.imgSrc} alt={i.title}/>
                  <aside>
                    <h3 className='gradientText'>{i.title}</h3>
                    <p>{i.description}</p>
                    <a href={i.url} target="blank">View Demo</a>
                    
                  </aside>

                </div>
              ))
            }
          </Carousel>

       </article>  


      </section>

   
   </div>
  )
}

export default Projects