//create a page to dynamically display unearned badges as well as the associated criteria
//Dynamically display earned badges as well as the associated criteria

import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Run for one mile coudld be something user can just click on
//Complete 30 minute of strenght training could be something user can click on
//see if I can use the database for sleeping to have the website check if the sleep is logged
//run can be something user can just click on
//implement data from the video workout to save the 10 videos
//run can be something user can click on

const Home = () => {
  const achievementList = [
    {title: "First Mile", description: "Run one mile", completed: false },
    {title: "Strong Start", description: "Complete 30 minutes of strength training", completed: false },  
    {title: "Savvy Sleeper", description: "Log your sleep every day for one week", completed: false },
    {title: "5K Runner", description: "Run 5 kilometers", completed: false },
    {title: "Most Organized", description: "Log a sleep activity every day in a month", completed: false },
    {title: "Video Workout", description: "Save 10 videos", completed: false },
    {title: "Marathoner", description: "Run 26.2 miles in one aerobic activity", completed: false }
  ];

  //manages achievmeent completion
  const [achievements, setAchievments] = useState(achievementList);


  //modified
  const handleAchievement = (index) => {
    setAchievments((prev) =>
      prev.map((achievement, i) =>
        i === index ? { ...achievement, completed: !achievement.completed } : achievement
      )
    );
    //note to self: fix the function, only suppose to apply to the
    //first mile, strong start, 5k runner, marathoner, since we aren't advanced enough
    //to track people
    //only with video work out, most organized, savvy sleeper, can it use the database to achieve it

    //Error in function, whenever user presses the complete button
    //its suppose to stay as complete, but it can go back to complete when pressed again

    const message = achievements[index].completed
    //when user clicks on the complete, it's suppose to output the message
      ? "Achievement unmarked. Keep going!"
      : "You completed an achievement! Nice work!";
    toast(message);
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
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`achievement-card ${
              achievement.completed ? 'completed' : 'uncompleted'
            }`}
          >
            <p>
              <strong>{achievement.title}</strong>
            </p>
            <div className="description-box">{achievement.description}</div>
            <button onClick={() => handleAchievement(index)}>
              {achievement.completed ? 'Completed' : 'Complete'}
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
