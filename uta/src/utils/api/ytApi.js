const CHANNEL_ID = "UCmsUw_9yP8JVbuXZ6bTDyyQ"
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const fetchLatestVideo = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${YOUTUBE_API_KEY}`
    )

    if (!response.ok) {
      throw new Error("Failed to fetch video data")
    }

    const data = await response.json()
    const videoItem = data.items[0]
    const videoId = videoItem?.id?.videoId
    const title = videoItem?.snippet?.title
    const thumbnailUrl = videoItem?.snippet?.thumbnails?.medium?.url

    return { videoId, title, thumbnailUrl }
  } catch (error) {
    console.error(error)
    throw error
  }
}
