import User from '../models/User';

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    return user;
  } catch (error) {
    console.error('Failed to login:', error);
    throw new Error('Failed to login');
  }
};
