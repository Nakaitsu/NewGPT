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

app.post('/', async (req, res) => {
    try{
        const prompt = req.body.prompt;

        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: `give me a tip to answer this question without giving me a answer analysing my code and\n\nquestion: Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.\n\nDon’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.\nDon’t forget the space before and after the equal signal and after the U$.\nInput\nThe input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour.\n\nOutput\nPrint the number and the employee's salary, according to the given example, with a blank space before and after the equal signal.\nlanguage: c#\ncode:using System;\n\n\n\nclass URI {\n\nstatic void Main(string[] args) { \n    int NUMBER,HOUR;\n    double SALARY,VHOUR;\n    NUMBER =int.Parse(Console.ReadLine());\n    HOUR = int.Parse(Console.ReadLine());\n    VHOUR= Math.Round(Double.Parse(Console.ReadLine()),2);\n    SALARY = Math.Round((HOUR *VHOUR),2);\n    Console.WriteLine(\"NUMBER = \"+ NUMBER);\n    Console.WriteLine($\"SALARY = U$ {SALARY.ToString(\"0.00\")}\");   \n    }\n}\n\n\nanswer:  \ntip:   \nCorrect. Your code should include a Console.WriteLine() after the salary is printed in order to print an end of line character and avoid a Presentation Error.\n\n
                ${prompt}
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