import React, { useEffect, useState } from "react"
import { fetchLatestVideo } from "../../utils/api/ytApi"

function YouTubeSection() {
  const [latestVideo, setLatestVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoData = await fetchLatestVideo();
        setLatestVideo(videoData);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {latestVideo && (
        <div>
          <h2>{latestVideo.title}</h2>
          <p>Video ID: {latestVideo.videoId}</p>
          <img src={latestVideo.thumbnailUrl} alt="Video Thumbnail" />
        </div>
      )}
    </div>
  );
}

export default YouTubeSection
