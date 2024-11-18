import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getWorkoutPlans = async () => {
  try {
    const response = await axios.get(`${API_URL}/workout-plans`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching workout plans:', error);
    throw error;
  }
};

export const postLogin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`,
      {username, password}
    );

    return response.status; 

  } catch (error) {
    return 401;
  }
};

export const postRegister = async (username, password) => {
  try {
    console.log("1")
    const response = await axios.post(`${API_URL}/register`,
      {username, password}
    );
    console.log(response.status);
    return response.status; 

  } catch (error) {
    return 401;
  }
};
