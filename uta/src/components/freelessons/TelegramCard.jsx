import React from "react"

import classes from "../../styles/components/freelessons/TelegramCard.module.scss"
import telegramVideo from "../../assets/telegram.mp4"
import telegramIcon from "../../assets/telegram-plane.svg"

function TelegramCard() {
  return (
    <div className={`mt-5 ${classes.telegramContainer}`}>
      <div className={classes.telegramCard}>
        <div className={classes.telegramInfoContainer}>
          <div>
            <h2 className="text-center">Telegram</h2>
          </div>
          <div>
            <p className={`mt-4 ${classes.telegramP}`}>
              Don't forget to check out our free telegram channel where we post
              analysis and trading ideas!
            </p>
          </div>
          <div className={classes.telegramBtn1Container}>
            <a
              className={classes.telegramBtn1}
              href="https://t.me/+08SGOuV6ubNkOTY0"
              target="_blank"
            >
              Join <img className={classes.telegramIcon} src={telegramIcon} />
            </a>
          </div>
        </div>
        <div className={classes.videoContainer}>
          <video
            src={telegramVideo}
            autoPlay
            loop
            muted
            type="video/mp4"
            className={classes.video}
          />

          <div className={classes.telegramBtn2Container}>
            <a
              className={classes.telegramBtn2}
              href="https://t.me/+08SGOuV6ubNkOTY0"
              target="_blank"
            >
              Join <img className={classes.telegramIcon} src={telegramIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelegramCard
