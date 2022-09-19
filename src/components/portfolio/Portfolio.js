import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/lostThigApp.PNG"
import IMG2 from "../../assets/weatherApp.PNG"
import IMG3 from "../../assets/To-Do-App.PNG"
import IMG4 from "../../assets/movieApp.PNG"
import IMG5 from "../../assets/postApp.PNG"


const Portfolio = () => {

  const data=[{
    id:1,
    image: IMG1,
    title: "Lost-Thing-App", 
    github: "https://github.com/Youssef-Dhaou/mern-app-final-project",
    demo:"https://main--mern-client-app.netlify.app/",
  },

  {
    id:2,
    image: IMG2,
    title: "Weather Api",
    github: "https://github.com/Youssef-Dhaou/weather-app",
    demo:"https://632335fcc8938e5323ea5f93--weather-react-api-client.netlify.app/",
  },

  {
    id:3,
    image: IMG3,
    title: "To-Do_List",
    github: "https://github.com/Youssef-Dhaou/to_do_list",
    demo:"https://youssef-dhaou.github.io/to_do_list/",
  },

  {
    id:4,
    image: IMG4,
    title: "Movie app",
    github: "https://github.com/Youssef-Dhaou/MovieApp",
    demo:"https://63271c9865440535741291a6--client-movie-app.netlify.app/",
  },

  {
    id:5,
    image: IMG5,
    title: "postApp",
    github: "https://github.com/Youssef-Dhaou/post-App",
    demo:"https://main--monumental-klepon-c40d57.netlify.app/",
  },

]
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {
      data.map(({id, image, title, github, demo})=>{
        return(
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' rel="noreferrer" target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' rel="noreferrer" target="_blank">Live Demo</a>
            </div>
</article>
        )
      })
      }



      </div>
    </section>
  )
}

export default Portfolio