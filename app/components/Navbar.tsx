import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-blue-800 via-purple-800 to-black text-white flex justify-between items-center px-8 font-cairo">
      <div className="text-2xl font-bold">Logo</div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
        <b>Connect Your Wallet</b>
      </button>
    </nav>
  );
};

export default Navbar;
