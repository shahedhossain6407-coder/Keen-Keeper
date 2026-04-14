import React from 'react';
import { Link } from 'react-router';
const ErrorMessage = () => {
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 px-6">
            {/* Icon */}
            <div className="mb-8">
                <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
                </svg>
            </div>

            {/* Error Details */}
            <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-500 mb-8 max-w-sm text-center">
                We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <Link 
                    to="/" 
                    className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
                >
                    Return Home
                </Link>
                <button 
                    onClick={() => window.history.back()} 
                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                    Go Back
                </button>
            </div>
        </div>
          
        );
      };

export default ErrorMessage;