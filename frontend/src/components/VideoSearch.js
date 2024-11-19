//note to self: add a bookmark feature to save the videos

import React, { useState } from 'react';
import './VideoSearch.css';
import HomeButton from './HomeButton';

const VideoSearch = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([
    { title: 'Yoga for Beginners', url: 'https://www.youtube.com/watch?v=1' },
    { title: 'Cardio Routine', url: 'https://www.youtube.com/watch?v=2' },
    { title: 'Full Body Strength Training', url: 'https://www.youtube.com/watch?v=3' },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  // Getting the YouTube ID for the icon
  const getVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/[^\n\s]+\/|\S+?v=|(?:v|e(?:mbed)?)\/|\S{11}))/);
    if (match) {
      const urlParam = new URLSearchParams(new URL(url).search);
      return urlParam.get('v');
    }
    return null;
  };

  return (
    <div className="video-search-container">
      <HomeButton />
      <h2>Search Fitness Videos</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Results:</h3>
      <ul>
        {videos.length === 0 ? (
          <li>No videos found</li>
        ) : (
          videos.map((video, index) => {
            const videoId = getVideoId(video.url);
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : '';

            return (
              <li key={index}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={thumbnailUrl} alt={video.title} width="50" height="50" style={{ marginRight: '10px' }} />
                  {video.title}
                </a>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default VideoSearch;
