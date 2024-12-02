require('dotenv').config(); 

const express = require('express');
const app = express();
const cors = require('cors');
const workoutPlansRouter = require('./routes/workoutPlans'); 
const loginRouter = require('./routes/login'); 
var session = require('express-session');
const registerRouter = require('./routes/register');
const mealLoggingRouter = require('./routes/mealLogging');


require('dotenv').config(); 

app.use(cors());
app.use(express.json());  

app.use(
  session({
    secret:"user",
    resave: false,
    saveUninitialized:false
  })
);

app.use('/api/workout-plans', workoutPlansRouter); 
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/register', mealLoggingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
