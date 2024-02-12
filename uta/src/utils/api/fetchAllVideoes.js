import { YT_ALL_VIDEOES_URL, YT_VIDEO_DETAILS_URL } from "./endpoints.js"

const CHANNEL_ID = "UCmsUw_9yP8JVbuXZ6bTDyyQ"
const UPLOAD_ID = "UUmsUw_9yP8JVbuXZ6bTDyyQ"
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const fetchAllVideos = async () => {
  try {
    const apiUrl = `${YT_ALL_VIDEOES_URL}${UPLOAD_ID}&key=${YOUTUBE_API_KEY}`

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch video data. Status: ${response.status}`)
    }

    const data = await response.json()

    const videos = []

    for (const videoItem of data.items) {
      const videoDetailsResponse = await fetch(
        `${YT_VIDEO_DETAILS_URL}${videoItem.contentDetails.videoId}&key=${YOUTUBE_API_KEY}`
      )

      if (!videoDetailsResponse.ok) {
        throw new Error(
          `Failed to fetch video details. Status: ${videoDetailsResponse.status}`
        )
      }

      const videoDetailsData = await videoDetailsResponse.json()

      const videoDuration = parseISO8601Duration(
        videoDetailsData.items[0].contentDetails.duration
      )
      const isLongEnough = videoDuration >= 62

      if (isLongEnough) {
        videos.push({
          videoId: videoItem.contentDetails.videoId,
          title: videoItem.snippet.title,
          thumbnailUrl: videoItem.snippet.thumbnails.medium.url,
        })
      }
    }

    return videos
  } catch (error) {
    console.error(error)
    throw error
  }
}

const parseISO8601Duration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

  const hours = parseInt(match[1]) || 0
  const minutes = parseInt(match[2]) || 0
  const seconds = parseInt(match[3]) || 0

  return hours * 3600 + minutes * 60 + seconds
}
