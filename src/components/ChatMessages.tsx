import React from 'react';
import { Message } from '../types';
import { ChatMessage } from './ChatMessage';
import { LoadingMessage } from './LoadingMessage';
import { EmptyState } from './EmptyState';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  return (
    <div className="flex-1 bg-gray-800 rounded-lg border border-gray-700 p-6 mb-4 overflow-y-auto shadow-sm">
      {messages.length === 0 && <EmptyState />}
      
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      
      {isLoading && <LoadingMessage />}
    </div>
  );
};