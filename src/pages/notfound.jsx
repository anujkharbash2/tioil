import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center p-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-400 underline">Go back to Home</Link>
    </div>
  );
}
