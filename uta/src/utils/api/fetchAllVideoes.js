// Import necessary constants and functions
import { YT_VIDEO_URL } from "./endpoints.js"

const CHANNEL_ID = "UCmsUw_9yP8JVbuXZ6bTDyyQ"
const UPLOAD_ID = "UUmsUw_9yP8JVbuXZ6bTDyyQ"
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const fetchAllVideos = async () => {
  try {
    // Construct the API URL for fetching videos from a channel
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=60&playlistId=${UPLOAD_ID}&key=${YOUTUBE_API_KEY}`

    // Make the API request
    const response = await fetch(apiUrl)

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch video data. Status: ${response.status}`)
    }

    // Parse the response data
    const data = await response.json()

    // Extract video information from the response
    const videos = []

    for (const videoItem of data.items) {
      // Get video details using the videos endpoint
      const videoDetailsResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoItem.contentDetails.videoId}&key=${YOUTUBE_API_KEY}`
      )

      if (!videoDetailsResponse.ok) {
        throw new Error(
          `Failed to fetch video details. Status: ${videoDetailsResponse.status}`
        )
      }

      const videoDetailsData = await videoDetailsResponse.json()

      // Check if the video duration is at least 1 minute and 1 second
      const videoDuration = parseISO8601Duration(
        videoDetailsData.items[0].contentDetails.duration
      )
      const isLongEnough = videoDuration >= 61 // 1 minute and 1 second

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

// Helper function to parse ISO 8601 duration format
const parseISO8601Duration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

  const hours = parseInt(match[1]) || 0
  const minutes = parseInt(match[2]) || 0
  const seconds = parseInt(match[3]) || 0

  return hours * 3600 + minutes * 60 + seconds
}
