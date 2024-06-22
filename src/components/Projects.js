import React from 'react';
import project3 from '../images/loviee.jpeg';
import project2 from '../images/todo.jpeg';
import project1 from '../images/uiux.jpeg';
import project4 from '../images/book.jpeg';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'UI Designs',
      description: 'These are some of the UI designs that have been done using Figma',
      img: project1,
      link:'https://www.linkedin.com/in/tineshpandian01/recent-activity/all/'
    },
    {
      id: 2,
      title: 'To-Do-List',
      description: 'This to-do-list have been created using react',
      img: project2,
      link:'https://tineshpandian.github.io/To-Do-List/'
    },  {
      id: 3,
      title: 'Love Percentage Finder',
      description: 'This project have been done using html,css,js It will find love percentange with your partner ',
      img: project3,
      link:'https://github.com/TineshPandian/Loviee'
    },
    {
      id: 4,
      title: 'Book-Blog',
      description: 'This is an book-blog based project created using js.Here we can add and delete books',
      img: project4,
      link:"https://github.com/TineshPandian/Book-Blog"
    },
  ];

  return (
    <div className="projects">
      <p className="heading" data-aos="fade-up" data-aos-duration="2000">~Projects~</p>
      <div className='project-cont' data-aos="fade-up" data-aos-duration="2000">
      <p className="project-text">Check Out My Projects</p>

      </div>
      <div className="project-card" data-aos="fade-up" data-aos-duration="2000">
        {projects.map(project => (
          <div key={project.id} className="project-1"  data-aos="fade-up" data-aos-duration="2000">
            <img src={project.img} alt={project.title} />
            <div className="project-overlay">
              <h1 className="project-heading">{project.title}</h1>
              <p className="project-body">{project.description}</p>
              <a href= {project.link}><button className="project1-view">View</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
