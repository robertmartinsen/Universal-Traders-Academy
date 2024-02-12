import React, { useEffect, useState } from "react"
import { fetchAllVideos } from "../../utils/api/fetchAllVideoes"

import "../../styles/components/loading.scss"
import classes from "../../styles/components/freelessons/YouTubeCards.module.scss"
import cancel from "../../assets/cancel.png"

function YouTubeCards() {
  const [allVideos, setAllVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [ellipsisCount, setEllipsisCount] = useState(0)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const allVideosData = await fetchAllVideos()
        setAllVideos(allVideosData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching videos:", error)
        setLoading(false)
        setError(true)
      }
    }

    const ellipsisInterval = setInterval(() => {
      setEllipsisCount((prevCount) => (prevCount + 1) % 3)
    }, 500)

    fetchVideos()

    return () => {
      clearInterval(ellipsisInterval)
    }
  }, [])

  return (
    <div>
      <div className="pt-5 container col-lg-10 col-xl-8 col-md-10 col-11">
        <hr />

        <div>
          <h2>YouTube</h2>
        </div>

        {loading && (
          <div className="loading">
            <div className="d-flex justify-content-center">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-center">
                Videos loading
                {Array.from(
                  { length: ellipsisCount + 1 },
                  (_, index) => "."
                ).join("")}
              </h3>
            </div>
          </div>
        )}

        {error && (
          <div className="cancel">
            <div className="d-flex justify-content-center">
              <div className="">
                <img src={cancel} alt="Cancel" className="cancel-img" />
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-center">Videos failed to load.</h3>
              <h4 className="text-center">
                Try refreshing the page or come back later.
              </h4>
            </div>
          </div>
        )}

        <div>
          <div className="row mt-4">
            {allVideos.map((video) => (
              <div key={video.videoId} className="col-md-4 mb-4">
                <div className={classes.card}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={video.thumbnailUrl} alt={video.title} />
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
