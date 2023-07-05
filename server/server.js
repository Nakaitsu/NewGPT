import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import { initializeOpenAI, generateHint, generateOutput, analyzeAnswer } from './OpenAI/OpenAILogic.js';
import { addUser } from './auth/SignUp.js';
// import createDBConnection from './database/db.js';
import User from './database/models/User.js';
import { Op } from 'sequelize';
import ExercisesRouter from './Routes/ExercisesRouter.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserAuthToken from './database/models/UserAuthToken.js'
import sequelize from './database/db.js';

dotenv.config();

// const connection = createDBConnection();

console.log(process.env.OPENAI_API_KEY);

const openai = initializeOpenAI(process.env.OPENAI_API_KEY);

const corsOptions = {
  origin: 'http://localhost:3000'
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/Exercises', ExercisesRouter)

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from NewGPT',
    })
});

// 3

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
    console.log(res.response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});
//RegisterLogic

app.get('/api/register/check-username/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const existingUser = await User.findOne({
      where: {
        username: username,
      },
    });

    res.json({ exists: !!existingUser });
  } catch (error) {
    console.error('Failed to check username:', error);
    res.status(500).json({ error: 'Failed to check username' });
  }
});

app.get('/api/register/check-email/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });

    res.json({ exists: !!existingUser });
  } catch (error) {
    console.error('Failed to check email:', error);
    res.status(500).json({ error: 'Failed to check email' });
  }
});


app.post('/api/register', async (req, res) => {
  const { name, username, email, password } = req.body;

  try{
    const user = {
      name,
      username,
      email,
      password,
    };

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

  try {
      const user = await User.findOne({
        attributes: ['id', 'username', 'email', 'password', 'role'],
        where: {
          email,
          password
        },
      });

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }
    
    const token = jwt.sign({ 
      id: user.id,
      username: user.username,
    }, process.env.API_SECRET)
    
    await UserAuthToken.build({
      user_id: user.id,
      token,
      expiration_date: null
    }).save()
    
    res.status(200).json({ token });
  } catch (error) {
    console.error('Failed to execute login query:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
}); 

app.get('/users', async (req, res) => {
  const authHeader = req.headers["authorization"]

  console.log(authHeader)

  if(!authHeader)
    res.sendStatus(401)

  jwt.verify(
    authHeader, 
    process.env.API_SECRET, 
    async (err, decoded) => {
      if (!err) {
        const user = await User.findOne({
          attributes: ['id', 'username', 'email', 'role'],
          where: {
            id: decoded.id
          }
        })

        req.user = user
        res.status(200).json(user)
      } 
      else
        return res.sendStatus(403)

    })
})

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

sequelize.sync()

app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));