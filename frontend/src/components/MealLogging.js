//Added date and time and week day- Alyssa
//Added a placement for suggestion box where it'll read off
import React, { useState } from 'react';
import './MealLogging.css';
import HomeButton from './HomeButton';

const MealLogging = () => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');
  const [log, setLog] = useState([]);

  const [sleepDay, setDay] = useState('');
  const [sleepHours, setHours] = useState('');
  const [sleepLog, setSleep] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //getting date and time
    const currentDate = new Date();

    //establishing a strings of week
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = dayOfWeek[currentDate.getDay()];

    // suggestions
    if( calories > 800 ) 
    {
      suggestions.push("Try increasing the number of small meals consumed throughout the day.");
    }

    //formating date and time
    const dateStr = currentDate.toLocaleString();

    //changed
    setLog([...log, { meal, calories, date: dateStr, day: currentDayOfWeek }]);
    setMeal('');
    setCalories('');
  };

  const handleSleep = (e) => {
    e.preventDefault();

    // set day and time
    var currentDate = new Date;
    setSleep([...sleepLog, { day: sleepDay, hours: sleepHours}]);
    setDay('');
    setHours('');

    // add suggestions
    if( sleepHours < 7 || sleepHours > 10 )
    {
      suggestions.push("Try to sleep between 7 and 10 hours each night")
    }
  }

  return (
    <div className="logging-container">
      <HomeButton />
      <h2>Wellness Log</h2>
      <div>
        <h4>Suggestions:</h4>
        {suggestions.map((entry, index) => (
          <li key={index}>
            {entry}
          </li>
        ))}
      </div>

    <div className="input-container-grid">
    <div>
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
      </form><br/>
    </div>

    <div>
      <form onSubmit={handleSleep} className="meal-form">
        <label htmlFor="meal">Weekday:</label>
        <input
          type="text"
          id="sleepDay"
          value={sleepDay}
          onChange={(e) => setDay(e.target.value)}
          required
        />
        
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="sleepHours"
          value={sleepHours}
          onChange={(e) => setHours(e.target.value)}
          required
        />
        
        <button type="submit">Log Sleep</button>
      </form>
    </div>
    </div>

      <h3>Meal Log:</h3>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>
            {entry.meal} - {entry.calories} kcal - <strong>{entry.day}</strong> - <em>{entry.date}</em>
          </li>
        ))}
      </ul>

      <h3>Sleep Log:</h3>
      <ul>
        {sleepLog.map((entry, index) => (
          <li key={index}>
            <strong>{entry.day}</strong>: {entry.hours} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealLogging;
