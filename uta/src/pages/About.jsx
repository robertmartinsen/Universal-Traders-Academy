import React from "react"

import classes from "../styles/About.module.scss"

function About() {
  return (
    <div className={classes.aboutBody}>
      <div className="pt-5 container col-lg-10 col-xl-8 col-md-10 col-11">
        <h1 className="text-center">About Universal Traders Academy</h1>
        <p className="mt-4">
          Universal Traders Academy is a dynamic educational platform dedicated
          to equipping both new and seasoned traders with the essential skills
          to navigate the intricacies of trading futures, specifically focusing
          on the NASDAQ (US TECH 100) and the German stock index (DAX 30). Our
          mission is to demystify the complexities of financial markets by
          providing comprehensive courses on candlestick analysis, pattern
          recognition, and effective market analysis.
        </p>

        <h2 className="mt-5">Guided by Bastion's Expertise</h2>
        <p>
          At the helm of Universal Traders Academy is Bastion, a seasoned trader
          with five years of invaluable experience. Bastion's passion for
          trading and commitment to education drive the academy's vision.
          Through a carefully curated curriculum and hands-on approach, Bastion
          imparts knowledge gained through years of live trading and analysis,
          offering a unique perspective to learners.
        </p>

        <h3 className="mt-5">Comprehensive Learning Ecosystem</h3>
        <p>
          Universal Traders Academy extends its reach beyond traditional
          education avenues. Bastion shares his insights and strategies on a
          dedicated YouTube channel, presenting instructional videos on trading
          techniques and live trading sessions. Additionally, the academy
          operates a free Telegram channel, providing a space for sharing
          analyses, trading ideas, and fostering a community of like-minded
          individuals. With a focus on real-world application, Universal Traders
          Academy is more than an educational institution; it's a vibrant
          community for traders to grow and thrive.
        </p>
      </div>
    </div>
  )
}

export default About
