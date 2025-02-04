import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and\nContentText as Field.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "video_scenes": [\n    {\n      "imagePrompt": "A bustling marketplace in 14th century Florence, Italy. Merchants in colorful tunics hawk their wares, including fabrics, spices, and pottery. The architecture is Renaissance-style, with cobblestone streets and buildings with terracotta roofs. A sense of lively energy and vibrant trade is conveyed. Realistic, midday lighting.",\n      "ContentText": "In 14th century Florence, the Medici family wasn\'t just rich; they were innovative. They started a banking system that revolutionized Europe."\n    },\n    {\n      "imagePrompt": "A close-up view of a ledger in a dimly lit room. The ledger is open, with intricate handwriting and numerical figures. A quill pen rests on the page, and a stack of gold coins is partially visible nearby. The scene has a classic, realistic look, with warm lighting from a single candle.",\n       "ContentText": "Their double-entry bookkeeping method is still used today, proving that even accounting can have a lasting impact."\n    },\n    {\n       "imagePrompt":"Cosimo de\' Medici, a stern-looking man with a long, dark robe and a cap, sitting at a large wooden desk filled with papers and books, looks directly at the viewer with a thoughtful expression. The background is a dimly lit study with a large window showing the city of Florence in the background. Realistic, historical portrait style.",\n       "ContentText": "Cosimo de\' Medici, the family\'s patriarch, understood that power wasn\'t just about wealth, but also influence."\n    },\n    {\n      "imagePrompt": "A majestic dome is shown from ground view, the massive structure is impressive and intricately designed. The sky is partly cloudy with the sun shining through. In the foreground is an urban setting with people going about their business. Realistic, eye-level perspective, historical, Renaissance Architecture.",\n      "ContentText": "They poured their riches into art and architecture. The Duomo, Florence\'s iconic cathedral, is a testament to their patronage."\n    },\n    {\n       "imagePrompt": "Michelangelo, a strong looking man with paint on his hands and clothes, standing in front of a large marble statue in a workshop or studio. Tools are scattered around him. The lighting should convey a sense of artistic effort and mastery. Realistic, historical, Renaissance era painting style.",\n       "ContentText": "Patronizing artists like Michelangelo, they ignited the Renaissance, ushering in an era of unprecedented creativity."\n    },\n    {\n      "imagePrompt": "A wider view of Florence city from an aerial viewpoint, showing the Duomo, the Arno River, and various historical buildings. The sky is bright and clear. The scene should capture the overall beauty and historical grandeur of Florence. Realistic, scenic view, Renaissance city.",\n      "ContentText":"The Medici\'s legacy transformed Florence into the heart of culture and innovation, leaving an indelible mark on the world."\n    }\n\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
