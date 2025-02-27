import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-950 p-3 flex flex-col justify-center items-center text-white">
      <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-4 p-4">
          <a href="https://linkedin.com/in/areebairfan" className="hover:text-purple-300">Linkedin</a>
          <a href="https://github.com/Areeba-irfan-Github-account" className="hover:text-purple-300">Github</a>
          
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
