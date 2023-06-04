import axios from 'axios';

export const loginUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Failed to login:', error);
      throw new Error('Failed to login');
    }
  };

export default loginUser;

  