// components/Header.js
import Link from 'next/link';
import React from 'react';
import { FaIntercom } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4  text-gray-800">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" /> */}
        <h1 className="text-4xl text-purple-400 font-bold"><FaIntercom /></h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" className="hover:text-gray-800">Emotions</Link>
        <Link href="#" className="hover:text-black">Manifesto</Link>
        <Link href="#" className="hover:text-gray-300">Self-awareness test</Link>
        <Link href="#" className="hover:text-gray-300">Work with us</Link>
      </div>
      <div>
        <button   className="bg-black rounded-2xl text-sm text-white  py-2 px-4 rounded"> Download App</button>
      </div>
    </header>
  );
};


