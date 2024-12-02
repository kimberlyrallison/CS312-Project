//note to self; list the modified task to put all the video stuff in the same video page instead of a sepearte page
//coding works

import React, { useState } from 'react';
import './VideoSearch.css';
import HomeButton from './HomeButton';

//modifed to contain more variables such as the length of the video and type of category
const VideoSearch = () => {
  const [query, setQuery] = useState('');
  const [lengthFilter, setLengthFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [videos, setVideos] = useState([
    { title: 'Yoga for Beginners', url: 'https://www.youtube.com/watch?v=1', length: 10, type: 'Yoga' },
    { title: 'Cardio Routine', url: 'https://www.youtube.com/watch?v=2', length: 20, type: 'Cardio' },
    { title: 'Full Body Strength Training', url: 'https://www.youtube.com/watch?v=3', length: 30, type: 'Strength' },
  ]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);

  //new function for the bookmark function
  const handleBookmark = (video) => {
    if (!bookmarkedVideos.some((v) => v.url === video.url)) {
      setBookmarkedVideos((prev) => [...prev, video]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  //gets the youtube ID for icon
  const getVideoId = (url) => {
    //modified
    const match = url.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/[^\n\s]+\/|\S+?v=|(?:v|e(?:mbed)?)\/|\S{11}))/);
    if (match) {
      const urlParam = new URLSearchParams(new URL(url).search);
      return urlParam.get('v');
    }
    return null;
  };

  //created the filter function to filter out videos
  const filterVideos = () => {
    return videos.filter((video) => {
      const matchesQuery = video.title.toLowerCase().includes(query.toLowerCase());
      const matchesType = typeFilter ? video.type.toLowerCase() === typeFilter.toLowerCase() : true;
      const matchesLength = lengthFilter
        ? (lengthFilter === 'short' && video.length <= 10) ||
          (lengthFilter === 'medium' && video.length > 10 && video.length <= 20) ||
          (lengthFilter === 'long' && video.length > 20)
        : true;

      return matchesQuery && matchesType && matchesLength;
    });
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

      <div className="filters">
        <label>Filter by Type:</label>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Yoga">Yoga</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
        </select>

        <label>Filter by Length:</label>
        <select value={lengthFilter} onChange={(e) => setLengthFilter(e.target.value)}>
          <option value="">All</option>
          <option value="short">Short (≤10 mins)</option>
          <option value="medium">Medium (11-20 mins)</option>
          <option value="long">Long (>20 mins)</option>
        </select>
      </div>

      <h3>Results:</h3>
      <ul>
        {filterVideos().length === 0 ? (
          <li>No videos found</li>
        ) : (
          filterVideos().map((video, index) => {
            const videoId = getVideoId(video.url);
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : '';

            return (
              <li key={index}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={thumbnailUrl} alt={video.title} width="50" height="50" style={{ marginRight: '10px' }} />
                  {video.title} ({video.length} mins, {video.type})
                </a>
                <button onClick={() => handleBookmark(video)}>Bookmark</button>
              </li>
            );
          })
        )}
      </ul>

      <h3>Bookmarked Videos:</h3>
      <ul>
        {bookmarkedVideos.length === 0 ? (
          <li>No bookmarks yet</li>
        ) : (
          bookmarkedVideos.map((video, index) => (
            <li key={index}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                {video.title} ({video.length} mins, {video.type})
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default VideoSearch;
