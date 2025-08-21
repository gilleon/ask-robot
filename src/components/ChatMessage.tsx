import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`mb-4 ${isUser ? 'ml-8' : 'mr-8'}`}>
      <div className={`p-4 rounded-lg ${
        isUser 
          ? 'bg-blue-100 border-l-4 border-blue-500' 
          : 'bg-gray-100 border-l-4 border-green-500'
      }`}>
        <div className="flex items-center mb-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            isUser 
              ? 'bg-blue-200 text-blue-800' 
              : 'bg-green-200 text-green-800'
          }`}>
            {isUser ? '👤 You' : '🤖 Robot'}
          </span>
        </div>
        <p className="text-gray-800 whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};