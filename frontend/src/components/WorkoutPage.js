import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import './WorkoutPage.css'; 
const WorkoutPage = () => {
  const [date, setDate] = useState(new Date());
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [workoutTime, setWorkoutTime] = useState('');
  const [workoutLog, setWorkoutLog] = useState([]);
  const [workoutType, setWorkoutType] = useState('');
  const [split, setSplit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const workout = {
      date: date.toDateString(),
      time: workoutTime,
      description: workoutDescription,
      type: workoutType,
    };

    setWorkoutLog([...workoutLog, workout]);
    setWorkoutDescription('');
    setWorkoutTime('');
    setWorkoutType('');
  };

  return (
    <div className="workout-page-container">
      <h2>Workout Plan</h2>

      <div className="calendar-container">
        <Calendar value={date} onChange={setDate} />
      </div>

      <div className="workout-selection">
        <label>
          <input
            type="radio"
            name="workoutType"
            value="Split"
            checked={workoutType === 'Split'}
            onChange={() => setWorkoutType('Split')}
          />
          Workout Split
        </label>
        <label>
          <input
            type="radio"
            name="workoutType"
            value="Custom"
            checked={workoutType === 'Custom'}
            onChange={() => setWorkoutType('Custom')}
          />
          Create Custom Workout Plan
        </label>
      </div>

      {workoutType === 'Split' && (
        <div className="split-options">
          <label>
            Choose a Split:
            <select onChange={(e) => setSplit(e.target.value)} value={split}>
              <option value="Full Body">Full Body</option>
              <option value="Upper Body/Lower Body">Upper Body/Lower Body</option>
              <option value="Push/Pull/Legs">Push/Pull/Legs</option>
            </select>
          </label>
        </div>
      )}

      {workoutType === 'Custom' && (
        <div className="custom-workout-form">
          <label htmlFor="workoutTime">Workout Time:</label>
          <input
            type="time"
            id="workoutTime"
            value={workoutTime}
            onChange={(e) => setWorkoutTime(e.target.value)}
          />
          <label htmlFor="workoutDescription">Workout Description:</label>
          <textarea
            id="workoutDescription"
            value={workoutDescription}
            onChange={(e) => setWorkoutDescription(e.target.value)}
            placeholder="Enter your workout details"
          />
          <button onClick={handleSubmit}>Add Workout</button>
        </div>
      )}

      <h3>Workout Log</h3>
      <ul className="workout-log-list">
        {workoutLog.map((workout, index) => (
          <li key={index}>
            <strong>{workout.date}</strong> - {workout.time} - {workout.type === 'Split' ? split : workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPage;
