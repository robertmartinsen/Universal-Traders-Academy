import { useState } from "react"
import Carousel from "react-bootstrap/Carousel"

import classes from "../../styles/components/home/TestimonialSection.module.scss"
import background from "../../assets/testimonialBg.png"

import testi1 from "../../assets/testi-1.JPG"
import testi2 from "../../assets/testi-2.png"
import testi3 from "../../assets/testi-3.png"
import testi4 from "../../assets/testi-4.png"
import testi5 from "../../assets/testi-5.png"
import testi6 from "../../assets/testi-6.jpg"

function TestimonialSection() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <div className={`mt-5 ${classes.bg}`}>
      <div className={`pt-5 container ${classes.testimonialsContainer}`}>
        <div>
          <h1 className="text-center text-white">Testimonials</h1>
        </div>
        <Carousel
          activeIndex={index}
          className={classes.largerCarousel}
          onSelect={handleSelect}
          indicators={false}
        >
          <Carousel.Item>
            <div className={`${classes.slide1Container}`}>
              <img src={testi1} className={classes.testi1} />
              <img src={testi2} className={classes.testi2} />
              <img src={testi3} className={classes.testi3} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={`${classes.slide2Container}`}>
              <img src={testi4} className={classes.testi4} />
              <img src={testi5} className={classes.testi5} />
              <img src={testi6} className={classes.testi6} />
            </div>
          </Carousel.Item>
        </Carousel>

        <Carousel
          activeIndex={index}
          className={classes.smallCarousel}
          onSelect={handleSelect}
          indicators={false}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img src={testi1} className={classes.testi1small} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center mt-5 ml-5">
              <img src={testi2} className={classes.testi2small} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center mt-5">
              <img src={testi3} className={classes.testi3small} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center mt-5">
              <img src={testi4} className={classes.testi4small} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center mt-5">
              <img src={testi5} className={classes.testi5small} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center mt-5">
              <img src={testi6} className={classes.testi6small} />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default TestimonialSection
