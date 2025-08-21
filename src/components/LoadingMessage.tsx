import React from 'react';

export const LoadingMessage = () => {
  return (
    <div className="mr-8 mb-4">
      <div className="bg-gray-100 border-l-4 border-green-500 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">
            🤖 Robot
          </span>
        </div>
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
          <p className="text-gray-600">Thinking...</p>
        </div>
      </div>
    </div>
  );
};