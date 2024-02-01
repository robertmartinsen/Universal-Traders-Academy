import React, { useEffect, useState } from "react"
import { fetchLatestVideo } from "../../utils/api/ytApi"

import classes from "../../styles/components/home/YoutubeSection.module.scss"
import YouTubeIcon from "../../assets/youtube.svg"

function YouTubeSection() {
  const [latestVideo, setLatestVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoData = await fetchLatestVideo()
        setLatestVideo(videoData)
      } catch (error) {
        console.error("Error fetching video:", error)
        setError(error.message || "Failed to fetch video data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="pt-5 container col-lg-10 col-xl-8 col-md-12 col-11 col-sm-8">
        <div>
          <div>
            <h1 className="text-center">Our Youtube Channel</h1>
            <div className={classes.infoBox}>
              <p className="mt-4">
                Discover a wealth of knowledge on futures trading with Bastion's
                YouTube channel. Uncover free and valuable content where Bastion
                generously shares lessons and tips to empower traders on their
                journey.
              </p>
            </div>
          </div>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {latestVideo && (
          <div className="mt-4 d-flex justify-content-center">
            <iframe
              className={classes.youtubeVideo}
              title="Latest Video"
              src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className={classes.youtubeBtnContainer}>
          <a
            className={classes.youtubeBtn}
            href="https://www.youtube.com/channel/UCmsUw_9yP8JVbuXZ6bTDyyQ"
            target="_blank"
          >
            More{" "}
            <img
              className={classes.youtubeIcon}
              src={YouTubeIcon}
              alt="Youtube Icon"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default YouTubeSection
