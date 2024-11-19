//Added date and time and week day- Alyssa
//Added a placement for suggestion box where it'll read off
import React, { useState } from 'react';
import './MealLogging.css';
import HomeButton from './HomeButton';

const MealLogging = () => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');
  const [log, setLog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //getting date and time
    const currentDate = new Date();

    //establishing a strings of week
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = dayOfWeek[currentDate.getDay()];

    //formating date and time
    const dateStr = currentDate.toLocaleString();

    //changed
    setLog([...log, { meal, calories, date: dateStr, day: currentDayOfWeek }]);
    setMeal('');
    setCalories('');
  };

  return (
    <div className="meal-logging-container">
      <HomeButton />
      <h2>Meal Logging</h2>
      <div>
        <h4>Suggestions!:</h4>
        <p>Keep Going!</p><br></br>
      </div>

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
            {entry.meal} - {entry.calories} kcal - <strong>{entry.day}</strong> - <em>{entry.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealLogging;
