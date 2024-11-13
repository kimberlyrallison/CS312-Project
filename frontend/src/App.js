import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import HomeButton from './components/HomeButton';
import MealLogging from './components/MealLogging';
import VideoSearch from './components/VideoSearch';
import WorkoutPage from './components/WorkoutPage'; 
import GoalSettingPage from './components/GoalSettingpage';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Fitness Platform</h1>
          <HomeButton />
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workout-plans" element={<WorkoutPage />} />
            <Route path="/meal-logging" element={<MealLogging />} />
            <Route path="/video-search" element={<VideoSearch />} /> 
            <Route path="/workout-plans" element={<WorkoutPage />} />
            <Route path="/goal-setting" element={<GoalSettingPage />} /> 
          </Routes>
        </div>

        <footer>
          <p>&copy; 2024 Fitness Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
