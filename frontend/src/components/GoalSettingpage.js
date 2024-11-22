import React, { useState } from 'react';
import './GoalSettingPage.css';

const GoalSettingPage = () => {
  const [goal, setGoal] = useState('');
  const [goalType, setGoalType] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [userGoals, setUserGoals] = useState([]);

  const [measurements, setMeasurements] = useState({
    weight: '',
    height: '',
    age: '',
  });

  const [dynamicGoals, setDynamicGoals] = useState([]);

  const handleGoalSubmit = (e) => {
    e.preventDefault();

    setUserGoals([
      ...userGoals,
      { goal, goalType, targetDate, progress: 0 }
    ]);

    setGoal('');
    setGoalType('');
    setTargetDate('');
  };

  const handleMeasurementsSubmit = (e) => {
    e.preventDefault();

    const { weight, height, age } = measurements;
    if (!weight || !height || !age) {
      alert('Please fill out all measurement fields.');
      return;
    }

    const heightInMeters = height * 0.0254;
    const weightInKg = weight * 0.453592;
    const bmi = weightInKg / (heightInMeters ** 2);

    const newDynamicGoals = [];
    if (weight > 200) {
      newDynamicGoals.push('Focus on reducing weight to a healthier range.');
    }
    if (bmi < 18.5) {
      newDynamicGoals.push('Include strength-building exercises to gain healthy weight.');
    }
    if (age > 40) {
      newDynamicGoals.push('Prioritize flexibility and low-impact endurance exercises.');
    }
    if (bmi >= 25) {
      newDynamicGoals.push('Incorporate cardio and monitor diet to lower BMI.');
    }

    setDynamicGoals(newDynamicGoals);

    alert('Measurements saved and goals updated!');
    setMeasurements({ weight: '', height: '', age: '' });
  };

  const updateProgress = (index, progressValue) => {
    const updatedGoals = [...userGoals];
    updatedGoals[index].progress = progressValue;
    setUserGoals(updatedGoals);
  };

  return (
    <div className="goal-setting-page">
      <h2>Set Your Fitness Goal</h2>

      <form onSubmit={handleGoalSubmit} className="goal-form">
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

      <h2>Enter Your Measurements</h2>
      <form onSubmit={handleMeasurementsSubmit} className="measurements-form">
        <div className="form-group">
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={measurements.weight}
            onChange={(e) =>
              setMeasurements({ ...measurements, weight: e.target.value })
            }
            placeholder="Enter your weight in pounds"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height (in):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={measurements.height}
            onChange={(e) =>
              setMeasurements({ ...measurements, height: e.target.value })
            }
            placeholder="Enter your height in inches"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={measurements.age}
            onChange={(e) =>
              setMeasurements({ ...measurements, age: e.target.value })
            }
            placeholder="Enter your age"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Save Measurements</button>
      </form>

      <h2> Goals Based on Measurements</h2>
      {dynamicGoals.length > 0 ? (
        <ul className="dynamic-goals">
          {dynamicGoals.map((dynamicGoal, index) => (
            <li key={index}>{dynamicGoal}</li>
          ))}
        </ul>
      ) : (
        <p>No goals generated yet. Enter measurements to see personalized goals.</p>
      )}

      {userGoals.length > 0 && (
        <div className="goal-display">
          <h3>Your Goals:</h3>
          <ul>
            {userGoals.map((goalItem, index) => (
              <li key={index} className="goal-item">
                <p><strong>Goal:</strong> {goalItem.goal}</p>
                <p><strong>Type:</strong> {goalItem.goalType}</p>
                <p><strong>Target Date:</strong> {goalItem.targetDate}</p>
                
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
