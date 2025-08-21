import axios from 'axios';
import { Message } from '../types';

const OLLAMA_API_URL = "https://ollama.utahtech.dev/api/chat";
const MODEL = "gpt-oss:120b";
const SYSTEM_MESSAGE = "You are a child's elementary school assistant and tutor. Respond simply.";

export const sendChatMessage = async (messages: Message[]) => {
  try {
    const response = await axios.post(OLLAMA_API_URL, {
      model: MODEL,
      stream: false,
      messages: [
        {
          role: "system",
          content: SYSTEM_MESSAGE,
        },
        ...messages,
      ],
    });

    return response.data.message.content;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Sorry, I had trouble responding. Please try again.');
  }
};