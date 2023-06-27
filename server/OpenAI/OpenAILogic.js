import { Configuration, OpenAIApi } from 'openai';

export const initializeOpenAI = (apiKey) => {
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  console.log(configuration.apiKey);
  return new OpenAIApi(configuration);
};

export const generateHint = async (openai, question, code, language) => {
  const prompt = `You're an AI that talks in Brazilian Portuguese and helps beginners solve code questions. You analyze the question and their code, and give hints without providing the answer.
  question: ${question}
  language: ${language}
  code: ${code}
  hint:`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
};

export const generateOutput = async (openai, code, language) => {
  const prompt = `Give the output of the code
  language: ${language}
  code: ${code}
  output:`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
};

export const analyzeAnswer = async (openai, question, code, language) => {
  const prompt = `Determine se a resposta está correta ou não sem fornecer a resposta e diga por que está incorreta.
  question: ${question}
  language: ${language}
  code: ${code}
  answer:`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
};