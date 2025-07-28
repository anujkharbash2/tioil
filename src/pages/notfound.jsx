import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5ecf2] text-black text-center p-4">
      <h1 className="text-5xl font-bold text-[#7c3e65] mb-4">404</h1>
      <p className="text-xl mb-6 text-black">Oops! Page not found.</p>
      <Link to="/" className="text-[#7c3e65] underline">Go back to Home</Link>
    </div>
  );
}
