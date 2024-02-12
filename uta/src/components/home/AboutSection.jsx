import React, { useState } from "react"

import telegrampic from "../../assets/telegram-pic.png"
import telegramIcon from "../../assets/telegram-plane.svg"

import classes from "../../styles/components/home/AboutSection.module.scss"

function AboutSection() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  return (
    <div className={`mt-5 ${classes.AboutSection}`}>
      <div className="pt-5 container col-lg-10 col-xl-8 col-md-10 col-11">
        <div className={`row ${classes.aboutContainer}`}>
          <div className={`${classes.aboutCard}`}>
            <div>
              <h1 className="text-center">About UTA</h1>

              <div>
                <p className={classes.para1}>
                  Welcome to Universal Traders Academy – Founded and led by
                  Bastion, an adept trader with a wealth of experience spanning
                  five years, Universal Traders Academy is committed to
                  equipping you with the knowledge and skills needed to navigate
                  the dynamic world of futures trading. Whether you're just
                  starting or looking to refine your strategies, join us at
                  Universal Traders Academy and embark on a transformative
                  learning experience that will elevate your trading prowess.
                </p>
              </div>

              <p className={classes.para2}>
                Join our thriving Telegram channel, where Bastion provides
                in-depth analyses and trading ideas to over 2000 subscribers.
                Benefit from Bastion's expertise as he shares valuable insights
                and actionable strategies directly with the community.
              </p>
            </div>
          </div>
          <div className={`${classes.telegramCard}`}>
            <div>
              <h2 className="text-center">Our Free Telegram</h2>
              <p className={classes.para3}>
                Join our thriving Telegram channel, where Bastion provides
                in-depth analyses and trading ideas to over 2000 subscribers.
                Benefit from Bastion's expertise as he shares valuable insights
                and actionable strategies directly with the community.
              </p>
              <div className={classes.videoContainer}>
                <img
                  src={telegrampic}
                  className={classes.telegrampic}
                  alt="universal traders academy telegram"
                />
              </div>
              <div className={classes.telegramBtnContainer}>
                <a
                  className={classes.telegramBtn}
                  href="https://t.me/+08SGOuV6ubNkOTY0"
                  target="_blank"
                >
                  Join{" "}
                  <img className={classes.telegramIcon} src={telegramIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.separater}></div>
    </div>
  )
}

export default AboutSection
