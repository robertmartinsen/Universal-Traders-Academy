import React, { useEffect, useState } from "react"
import { fetchLatestVideo } from "../../utils/api/ytApi"

function YouTubeSection() {
  const [videoInfo, setVideoInfo] = useState(null)

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const result = await fetchLatestVideo()
        setVideoInfo(result)
      } catch (error) {
        console.error("Error fetching video:", error)
      }
    }

    fetchVideo()
  }, [])

  if (!videoInfo) {
    return <div>Loading...</div>
  }

  const { videoId, title, thumbnailUrl } = videoInfo

  return (
    <div>
      <h2>{title}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
      ></iframe>
      <img src={thumbnailUrl} alt={title} />
    </div>
  )
}

export default YouTubeSection
