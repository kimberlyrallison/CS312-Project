import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Fitness Platform!</h2>
      <p>Choose a page to get started:</p>
      <ul>
        <li><Link to="/workout-plans">Workout Plans</Link></li>
        <li><Link to="/goal-setting">Goal Setting</Link></li>
        <li><Link to="/meal-logging">Meal Logging</Link></li>
        <li><Link to="/video-search">Video Search</Link></li>
        
      </ul>
    </div>
  );
};

export default Home;
