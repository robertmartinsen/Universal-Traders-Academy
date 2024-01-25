import React from "react"
import classes from "../../styles/components/home/Hero.module.scss"
import hero from "../../assets/hero.jpg"

function Hero() {
  return (
    <div
      className={`container col-lg-10 col-xl-8 col-md-10 col-11 ${classes.heroBody} `}
    >
      <div className={classes.heroWrap}>
        <div className={classes.gradient}></div>
        <img
          src={hero}
          className={classes.heroImg}
          alt="Universal traders academy hero"
        />

        <div className={classes.heroContainer}>
          <h2 className="fw-bold">Unlock Trading Success with</h2>
          <h1 className="text-primary fw-bolder">Universal Traders Academy</h1>
          <p className="text-start">
            Join Universal Traders Academy and elevate your trading expertise in
            futures—where proven strategies meet financial empowerment. Master
            the markets confidently and secure your financial future with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
