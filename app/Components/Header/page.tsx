// components/Header.js
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4  text-gray-800">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> */}
        <h1 className="text-2xl font-bold">Your Website</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" className="hover:text-gray-300">Item 1</Link>
        <Link href="#" className="hover:text-gray-300">Item 2</Link>
        <Link href="#" className="hover:text-gray-300">Item 3</Link>
        <Link href="#" className="hover:text-gray-300">Item 4</Link>
      </div>
      <div>
        <Link href="#"  className="bg-black rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Download App</Link>
      </div>
    </header>
  );
};


