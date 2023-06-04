import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import { initializeOpenAI, generateHint, generateOutput, analyzeAnswer } from './OpenAI/OpenAILogic.js';
import { addUser } from './auth/SignUp.js';
import createDBConnection from './database/db.js';

dotenv.config();

const connection = createDBConnection();

console.log(process.env.OPENAI_API_KEY);

const openai = initializeOpenAI(process.env.OPENAI_API_KEY);

// Rest of your code
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from NewGPT',
    })
});

app.get('/api/register', async (req, res) => {
  res.status(200).send({
      message: 'serase',
  })
});

app.post('/', async (req, res) => {
  try {
    const { question, code, language, type } = req.body;
    console.log(question, code, language);
    let response = null;
    if (type === 'hint') {
      response = await generateHint(openai, question, code, language);
    } else if (type === 'output') {
      response = await generateOutput(openai, code, language);
    } else if (type === 'submit') {
      response = await analyzeAnswer(openai, question, code, language);
    }
    res.status(200).send({
      bot: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});
//RegisterLogic

app.post('/api/register', async (req, res) => {
    const { name, username, email, password } = req.body;
    message: 'carlinhosdamassa;'
  
    const user = {
      name,
      username,
      email,
      password
    };
  
    try {
      await addUser(user);
      console.log(user);
      res.json({ message: 'User added successfully' });
    } catch (error) {
      console.error('Failed to add user:', error);
      res.status(500).json({ error: 'Failed to add user' });  
    }
  });

  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Query the database to check if the user exists and the password is correct
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Failed to execute login query:', err);
        res.status(500).json({ error: 'Failed to login' });
        return;
      }
  
      if (results.length === 0) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }
  
      const user = results[0];
      res.json({ user });
    });
  });
  


app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));

