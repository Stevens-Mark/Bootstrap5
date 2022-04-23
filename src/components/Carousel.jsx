import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'

/**
 * Renders (carousel on offcanvas page) for each project
 * when user clicks on 'Find out more' button
 * @function OffCanvas
 * @param {array} project : data of one project
 * @returns {JSX}
 */
const ProjectCarousel = ( { project } ) => {

  return (

    <Carousel pause='hover'>
      {project.slides.map((proj) => 
        <Carousel.Item interval={10000} >
          <img
            className="d-block w-100 slide"
            src={proj.path}
            alt={proj.alt}
          />
          <Carousel.Caption>
            <h3 className='projectHeading mb-0'>{proj.heading}</h3>
            <p className='projectText d-none d-sm-block mb-0'>{proj.text}</p>
          </Carousel.Caption>
        </Carousel.Item> 
      )}  
    </Carousel>
  )
}

export default ProjectCarousel

// Prototypes
ProjectCarousel.propTypes = {
  project: PropTypes.array.isRequired,
}