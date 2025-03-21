import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from 'dotenv';

// dotenv.config();

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result.response.text;
};
