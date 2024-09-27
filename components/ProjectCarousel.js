import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/nav.css"; // Ensure the path is correct

import { Pagination, Mousewheel } from 'swiper/modules';

const projects = [
  { image: '/empty.jpg', title: 'Project 1' },
  { image: '/empty.jpg', title: 'Project 2' },
  { image: '/empty.jpg', title: 'Project 3' },
  { image: '/empty.jpg', title: 'Project 4' },
  { image: '/empty.jpg', title: 'Project 5' }
  // Add more projects here
];

const ProjectCarousel = () => {
    return (
      <section id="section2" className="projects-section">
        <div className="typing-container2">
          <span id="header3" className="header3"></span>
          <span className="input-cursor2"></span>    
        </div>
        
        {/* Swiper container */}
        <div className="swiper-container">
          <Swiper
            spaceBetween={30} // Space between the slides
            slidesPerView={3}  // Show 1 slide at a time for better control
            loop={true}  // Loop through slides continuously
            pagination={{
              clickable: true, 
              el: '.swiper-pagination',
            }}
            mousewheel={true}  // Enable mouse wheel control
            modules={[Pagination, Mousewheel]}  // Include the modules
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        {/* Swiper pagination */}
        <div className="swiper-pagination"></div>
      </section>
    );
  };
  
  

export default ProjectCarousel;
