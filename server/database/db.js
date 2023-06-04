import { createConnection } from 'mysql';

const createDBConnection = () => {
  const connection = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aldeia_senai',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Failed to connect to the database:', err);
      return;
    }

    console.log('Connected to the database');
  });

  return connection;
};

export default createDBConnection;
