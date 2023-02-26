import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {Configuration, OpenAIApi} from 'openai';

dotenv.config();

console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from NewGPT',
    })
});

// prompt = `You're an AI that talk in brazilian-portuguese an you help complete begginners to solve code questions. You analyse the question and his code, and give him a hint to solve it, without giving a answer.`

app.post('/', async (req, res) => {
    try{
        const prompt = req.body.prompt;
        const question = req.body.question;
        console.log(question);
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: `You're an AI that talk in brazilian-portuguese an you help complete begginners to solve code questions. You analyse the question and his code, and give him a hint to solve it, without giving a answer. 
            code:${prompt}
            hint:
                
            `,
            temperature:0.7,
            max_tokens:100,
            top_p:1,
            frequency_penalty:0.5,
            presence_penalty:0,       
        });
        res.status(200).send({
            bot: response.data.choices[0].text
        })
      } catch(error){
            console.log(error);
            res.status(500).send({error});
        }
})

app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));