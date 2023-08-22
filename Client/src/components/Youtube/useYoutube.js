import React, { useState, useEffect } from "react";
import "./youtube.css";

function useYoutube() {
  const [youtubeVideo, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC1UOAzTgTaRq9yCf06rZkkf7DSmjqwxzI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youtubeVideos = data.items;
        console.log(data.items);
        setVideo(youtubeVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="youtube">
      <div className="video_container">
        <div className="rows">
          <div className="col-title">
            <h1 className="heading">Apple Youtube Videos</h1>
          </div>
        </div>
        <div className="rows">
          <div className="grid-items">
            { youtubeVideo.map((singleVideo) => {
              let vidID = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidID}`;
              let videoWrapper =( 
                <div key={vidID} className="video">
                  <div className="single_video_wrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="apple youtube thumbnail"
                        />
                      </a>
                    </div>
                    <div className="text_container">
                      <div className="video_title">
                        <a href={vidLink} target="_blank" rel="">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="desctiption">
                        <p>{singleVideo.snippet.description}</p>
                      </div>
                    </div>
                  </div>
                </div>);
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default useYoutube;
