import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-24 py-2 bg-transparent backdrop-blur-sm">
      <div className="flex gap-8">
        <a href="/" className="text-white hover:opacity-80 transition-opacity">Home</a>
        <a href="/blog" className="text-white hover:opacity-80 transition-opacity">Blogs</a>
        <a href="/about" className="text-white hover:opacity-80 transition-opacity">About</a>
      </div>
      <a href="/Contact" className="bg-white text-black px-2 py-1.5 rounded hover:bg-opacity-80 transition-opacity shadow-lg hover:shadow-blue-500/60">
        Contact →
      </a>
    </nav>
  );
};

export default Navbar;





