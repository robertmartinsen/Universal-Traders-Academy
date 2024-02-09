import React, { useEffect, useState } from "react"
import { fetchAllVideos } from "../../utils/api/fetchAllVideoes"

import classes from "../../styles/components/freelessons/YouTubeCards.module.scss"

function YouTubeCards() {
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const allVideosData = await fetchAllVideos()
        setAllVideos(allVideosData)
      } catch (error) {
        console.error("Error fetching videos:", error)
      }
    }

    fetchVideos()
  }, [])

  return (
    <div>
      <div className="pt-5 container col-lg-10 col-xl-8 col-md-10 col-11">
        <hr />

        <div>
          <h2>YouTube</h2>
        </div>

        <div >
          <div className="row mt-4">
            {allVideos.map((video) => (
              <div key={video.videoId} className="col-md-4 mb-4">
                <div className={classes.card}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                    />
                    <p>{video.title}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouTubeCards
