import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';              // Core Swiper styles
import 'swiper/css/navigation';   // Navigation styles

// Import Swiper's navigation module from 'swiper/modules'
import { Navigation } from 'swiper/modules';

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
      <h2 className="projects-title">My Projects</h2>
      
      {/* Swiper container */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true} // Enables looping
        navigation={{ nextEl: '.swiper-button-next' }} // Use custom navigation buttons
        modules={[Navigation]} // Include the navigation module
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

      {/* Custom next arrow */}
      <div className="swiper-button-next custom-next-arrow">→</div>
    </section>
  );
};

export default ProjectCarousel;