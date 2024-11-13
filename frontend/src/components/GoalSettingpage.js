import React, { useState } from 'react';
import './GoalSettingPage.css';

const GoalSettingPage = () => {
  const [goal, setGoal] = useState('');
  const [goalType, setGoalType] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [userGoals, setUserGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserGoals([
      ...userGoals,
      { goal, goalType, targetDate, progress: 0 }
    ]);

    setGoal('');
    setGoalType('');
    setTargetDate('');
  };

  const updateProgress = (index, progressValue) => {
    const updatedGoals = [...userGoals];
    updatedGoals[index].progress = progressValue;
    setUserGoals(updatedGoals);
  };

  return (
    <div className="goal-setting-page">
      <h2>Set Your Fitness Goal</h2>

      <form onSubmit={handleSubmit} className="goal-form">
        <div className="form-group">
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your goal (e.g., lose weight, gain muscle)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="goalType">Goal Type</label>
          <select
            id="goalType"
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            required
          >
            <option value="">Select Goal Type</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
            <option value="Flexibility">Flexibility</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="targetDate">Target Date</label>
          <input
            type="date"
            id="targetDate"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Set Goal</button>
      </form>

      {userGoals.length > 0 && (
        <div className="goal-display">
          <h3>Your Goals:</h3>
          <ul>
            {userGoals.map((goalItem, index) => (
              <li key={index} className="goal-item">
                <p><strong>Goal:</strong> {goalItem.goal}</p>
                <p><strong>Type:</strong> {goalItem.goalType}</p>
                <p><strong>Target Date:</strong> {goalItem.targetDate}</p>
                
                {/* Progress bar */}
                <div className="progress-container">
                  <p>Progress: {goalItem.progress}%</p>
                  <progress value={goalItem.progress} max="100"></progress>
                  <button
                    onClick={() => updateProgress(index, goalItem.progress + 10)}
                    disabled={goalItem.progress >= 100}
                  >
                    +10% Progress
                  </button>
                </div>

                <div className="achievements">
                  {goalItem.progress >= 25 && <p>Achievement Unlocked: 25% Progress</p>}
                  {goalItem.progress >= 50 && <p>Achievement Unlocked: 50% Progress</p>}
                  {goalItem.progress >= 75 && <p>Achievement Unlocked: 75% Progress</p>}
                  {goalItem.progress >= 100 && <p>Achievement Unlocked: 100% Goal Completed!</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GoalSettingPage;
