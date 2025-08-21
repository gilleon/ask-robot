import React from 'react';

export const LoadingMessage = () => {
  return (
    <div className="mr-8 mb-4">
      <div className="bg-gray-700 border-l-4 border-green-400 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-800 text-green-200">
            🤖 Robot
          </span>
        </div>
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400 mr-2"></div>
          <p className="text-gray-300">Thinking...</p>
        </div>
      </div>
    </div>
  );
};