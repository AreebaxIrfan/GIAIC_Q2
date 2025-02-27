import React from 'react';

const Home: React.FC = () => {
  return (
    <div className=" flex flex-col items-center  justify-center pt-0" >
      <header className="text-center mt-0 mb-6" >
        <h1 className="text-7xl font-bold m-0">Medical Card</h1>
        <p className="text-2xl text-green-500 m-0">Track your health the smart way!</p>
      </header>
      {/* <img src="/dashboard.png" alt="Dashboard Mockup" className="mb-8 w-full" style={{ maxHeight: '60vh' }} /> */}
      <form className="w-full max-w-md mb-2">
        <div className="flex items-center justify-center">
          <input 
            type="email" 
            placeholder="you@example.com" 
            className="flex-grow px-4 py-3 rounded-l border border-gray-300 focus:outline-none focus:border-green-500"
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-green-500 text-white rounded-r hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;