import React from 'react';
import { Message } from '../types';
import { parseMarkdown } from '../utils/markdown';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`mb-4 ${isUser ? 'ml-8' : 'mr-8'}`}>
      <div className={`p-4 rounded-lg ${
        isUser 
          ? 'bg-blue-900 border-l-4 border-blue-400' 
          : 'bg-gray-700 border-l-4 border-green-400'
      }`}>
        <div className="flex items-center mb-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            isUser 
              ? 'bg-blue-800 text-blue-200' 
              : 'bg-green-800 text-green-200'
          }`}>
            {isUser ? '👤 You' : '🤖 Robot'}
          </span>
        </div>
        
        {isUser ? (
          <p className="text-gray-100 whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div 
            className="text-gray-100 prose prose-sm max-w-none markdown-content dark-markdown"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
          />
        )}
      </div>
    </div>
  );
};