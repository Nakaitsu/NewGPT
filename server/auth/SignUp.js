import connection from '../database/db.js';

export const addUser = async (user) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', user, (err, result) => {
      if (err) {
        console.error('Failed to add user:', err);
        reject(err);
        return;
      }

      console.log('User added successfully');
      resolve(result);
    });
  });
};

