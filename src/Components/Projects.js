import React, { useState } from 'react';

// Sample projects data with categories
const projectsData = [
  {
    title: 'BLOCK-STAMP',
    description: 'A DAPP to record student attendance in block chain',
    videoSrc: '/projects/videos/block-meet.mp4',
    photoSrcs: ['/media/photo1.jpg', '/media/photo2.jpg'],
    category: 'Block Chain'
  },
  {
    title: 'BLOCK-MEET',
    description: 'A video conference DAPP that stores the meeting recordings to blockchain using IPFS',
    videoSrc: '/media/video2.mp4',
    photoSrcs: ['/media/photo3.jpg', '/media/photo4.jpg'],
    category: 'Block Chain'
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3.',
    videoSrc: '/media/video4.mp4',
    photoSrcs: ['/media/photo5.jpg', '/media/photo6.jpg'],
    category: 'Cyber Security'
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects">
      <div className="category-filter">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.videoSrc && (
              <div className="project-video">
                <video width="520" height="340" controls>
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {project.photoSrcs.length > 0 && (
              <div className="project-photos">
                {project.photoSrcs.map((photoSrc, photoIndex) => (
                 <img 
                 key={photoIndex}
                 src={photoSrc}
                 alt="" 
                 className="project-photo"
               />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
