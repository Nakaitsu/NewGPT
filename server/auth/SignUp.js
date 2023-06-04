import User from '../database/models/User.js';

export const addUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    console.log('User added successfully');
    return createdUser;
  } catch (error) {
    console.error('Failed to add user:', error);
    throw error;
  }
};
