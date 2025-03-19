import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from 'dotenv';

// dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyBX-PMQtKiXnVqDBq6cn4DnCuWpD33ZBac");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text;
};
