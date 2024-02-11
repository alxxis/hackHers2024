import { config } from "dotenv";
config()
import OpenAI from "openai"
 // const punycode = import('punycode/');
const openai = new OpenAI({apiKey: process.env.API_KEY})
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Correct my mistakes while explaining them step by step" + ".txt"}], //add file
  });
  console.log(chatCompletion.choices[0].message);