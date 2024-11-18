import React, { useState } from 'react';
import './MealLogging.css';
import HomeButton from './HomeButton';

const MealLogging = () => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');
  const [log, setLog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog([...log, { meal, calories }]);
    setMeal('');
    setCalories('');
  };

  return (
    <div className="meal-logging-container">
      <HomeButton />
      <h2>Meal Logging</h2>
      <form onSubmit={handleSubmit} className="meal-form">
        <label htmlFor="meal">Meal Name:</label>
        <input
          type="text"
          id="meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          required
        />
        
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
        
        <button type="submit">Log Meal</button>
      </form>

      <h3>Logged Meals:</h3>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>
            {entry.meal} - {entry.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealLogging;
