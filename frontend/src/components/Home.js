import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const achievementList = [
    {title: "First Mile", description: "Run one mile"},
    {title: "Strong Start", description: "Complete 30 minutes of strength training"},  
    {title: "Savvy Sleeper", description: "Log your sleep every day for one week"},
    {title: "5K Runner", description: "Run 5 kilometers"},
    {title: "Most Organized", description: "Log a sleep activity every day in a month"},
    {title: "Video Workout", description: "Save 10 videos"},
    {title: "Marathoner", description: "Run 26.2 miles in one aerobic activity"}
  ];

  const handleAchievement = (e) => {
    e.preventDefault();
    toast("You completed an achievement! Nice work!");
  };

  return (
    <div>
      <h2>Welcome to the Fitness Platform!</h2>
      <ul>
        <div className="link-box">
        <li><Link className="nav-link" to="/workout-plans">Workout Plans</Link></li>
        <li><Link className="nav-link" to="/goal-setting">Goal Setting</Link></li>
        <li><Link className="nav-link" to="/meal-logging">Meal Logging</Link></li>
        <li><Link className="nav-link" to="/video-search">Video Search</Link></li>
        </div>
      </ul>

      <h1>Badges</h1>
      <div className="achievement-container">
      {achievementList.map((achievement, index) => (
          <box key={index} className="achievement-card">
            <p><strong>{achievement.title}</strong></p><br/>
            <div className='description-box'>{achievement.description}</div>
            <button onClick={handleAchievement}>Complete</button>
          </box>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Home;
