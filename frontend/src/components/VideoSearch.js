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
          videos.map((video, index) => (
            <li key={index}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                {video.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default VideoSearch;
